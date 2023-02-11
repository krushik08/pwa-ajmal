import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { shape, string } from 'prop-types';
import {CART} from '../../queries/cart.jsx';
import { gql, useMutation, useQuery, useSubscription } from '@apollo/client';
import jQuery, { data } from 'jquery';
import { REMOVE_ITEM_FROM_CART, UPDATE_ITEM_FROM_CART } from '../../mutations/cart.jsx';
import CartItem from './ProductList/CartItem.js';
import { useMiniCart } from '@magento/peregrine/lib/talons/MiniCart/useMiniCart.js';
import { useScrollLock, useToasts } from '@magento/peregrine';
import operations from '@magento/venia-ui/lib/components/MiniCart/miniCart.gql';
import { useCartContext } from '@magento/peregrine/lib/context/cart.js';

const MiniCart = props => {
    const { isOpen, setIsOpen } = props;
    useScrollLock(isOpen);
    const [{ cartId }] = useCartContext();
    const talonProps = useMiniCart({
        isOpen,
        setIsOpen,
        operations
    });
    const {
        errorMessage,
        productList,
    } = talonProps;
    const [, { addToast }] = useToasts();

    useEffect(() => {
        if (errorMessage) {
            addToast({
                type: 'error',
                icon: errorIcon,
                message: errorMessage,
                dismissable: true,
                timeout: 7000
            });
        }
    }, [addToast, errorMessage]);

    if(!localStorage.getItem('cart')){
        localStorage.setItem('cart',JSON.stringify([]));
    }

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
    let item = JSON.parse(localStorage.getItem('cart'));
    function checkCartData() {
        item = JSON.parse(localStorage.getItem('cart'))
        if (item) {
            setCart(item)
        }
    }

    const handleRemoveCart = () => {
        jQuery('body').removeClass('openCartMenu');
        jQuery('body').css('overflow','auto');
    }

    useEffect(() => {
        checkCartData();
        window.addEventListener('storage', checkCartData());
    },[productList]);

    const [removeItemFromCart,{error}] = useMutation(REMOVE_ITEM_FROM_CART);
    const handleRemoveCartItem = useCallback(
        async id => {
            removeItemFromCart({
                variables: {
                    cartId: cart.id,
                    cartItemId: id
                },
                onCompleted: (res) => {
                    localStorage.setItem('cart',JSON.stringify(res.removeItemFromCart.cart));
                    setCart(res.removeItemFromCart.cart);
                },
                onError: (error) => {
                    console.log("Error:",error);
                }
            });
        }
    )

    const [updateCartItems] = useMutation(UPDATE_ITEM_FROM_CART);
    const handleItemQuantityUpdate = useCallback(
        async updatedItem => {
            console.log("updatedItem",updatedItem);
            updateCartItems({
                variables: {
                    cartId: cart.id,
                    cartItems: [updatedItem]
                },
                onCompleted: (res) => {
                    localStorage.setItem('cart',JSON.stringify(res.updateCartItems.cart));
                    setCart(res.updateCartItems.cart);
                },
                onError: (error) => {
                    console.log("Error:",error);
                }
            });
        }
    )

    const productsHtml = cart?.items?.map(
        item => (
            <CartItem item={item} handleRemoveCartItem={handleRemoveCartItem} handleItemQuantityUpdate={handleItemQuantityUpdate} />
        )
    )

    return (
        <div className="cartMenu">
            <div className="cartMenu_header">
                <a href="javascript:;" className="cartMenu_close" onClick={handleRemoveCart}><img src="/public/images/close.svg" alt="close" /></a>
                <h2 className="cartMenu_title">Your shopping bag ({cart && cart?.items?.length || 0})</h2>

                <div className="freeDelivery d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div className="freeDelivery_icon"><img src="/public/images/free-delivery.svg" alt="free delivery" /></div>
                        <div className="freeDelivery_cnt">
                            <h3>Free delivery</h3>
                            <p className="mb-0">On credit/debit cards order</p>
                        </div>
                    </div>
                    <div className="freeDelivery_action"><a href="#"><img src="/public/images/vertical-menu.svg" alt="menu"/></a></div>
                </div>
            </div>
            <div className="cartMenu_body">
                <ul className="list-unstyled" id='cardBagProducts'>
                    {productsHtml}
                </ul>
            </div>
            <div className="cartMenu_footer">
                <div className="cartMenu_footer_top d-flex align-items-start justify-content-between">
                    <div className="cartMenu_footer_top_left">
                        <label>Total</label>
                        <p className="mb-0">*Including taxes. Excluding delivery costs</p>
                    </div>
                    <div className="cartMenu_footer_right">
                        {cart && cart?.prices?.grand_total?.value+" "} {cart && cart?.prices?.grand_total?.currency}
                    </div>
                </div>
                <div className="cartMenu_footer_bottom">
                    <a className="btn btn-primary d-block mb-2" href="/cart">Checkout</a>
                    <a className="btn btn-primary-outline d-block" href="#">Continue shopping</a>
                </div>
            </div>
        </div>
        )
};

MiniCart.propTypes = {
    classNameNamees: shape({
        closed: string,
        logo: string,
        open: string,
        primaryActions: string,
        secondaryActions: string,
        toolbar: string,
        switchers: string,
        switchersContainer: string
    })
};

export default MiniCart;
