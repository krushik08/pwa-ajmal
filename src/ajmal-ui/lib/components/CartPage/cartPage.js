import React, { useCallback, useEffect, useState } from 'react';
import styles from './cartPage.module.css';
import Minus from '../../../../../public/images/IconMinus.svg';
import Plus from '../../../../../public/images/IconPlus.svg';
import Heart from '../../../../../public/images/IconHeart.svg';
import IconDelivery from '../../../../../public/images/IconDelivery.svg';
import CartPagination from '../../../../../public/images/CartPagination.png';
import { useMutation, useQuery } from '@apollo/client';
import {CART} from '../../queries/cart.jsx';
import useMobileView from '../Utils/MobileView';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import { useMiniCart } from '@magento/peregrine/lib/talons/MiniCart/useMiniCart';
import { useScrollLock, useToasts } from '@magento/peregrine';
import operations from '@magento/venia-ui/lib/components/MiniCart/miniCart.gql';
import CartItem from '../MiniCart/ProductList/CartItem';
import { REMOVE_ITEM_FROM_CART, UPDATE_ITEM_FROM_CART } from '../../mutations/cart.jsx';

const CartPage = props => {
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

    const [couponCode, setCouponCode] = useState('');
    const [btnColor, setBtnColor] = useState(false);
    const isMobile = useMobileView();
    useEffect(() => {
        if (couponCode !== '') {
            setBtnColor(true);
        } else {
            setBtnColor(false);
        }
    }, [couponCode]);
    let item = undefined;
    function checkCartData() {
        item = JSON.parse(localStorage.getItem('cart'));
        if (item) {
            setCart(item)
        }
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


    const [cart,setCart] = useState(undefined);
        useQuery(CART, {
            variables: {cart_id: cartId},
            onCompleted: (res) => {
                setCart(res.cart);
            },
            onError: (error) => {
                console.log("Minicart Error:",error);
            }
        });

        if(cart){
            console.log("Cart Data",cart);

            const cartItems1 = cart.items.map( item =>
                    <div key={item.id} className={styles.cartItemBoxWrapper}>
                        <div className={styles.cartItemBox}>
                            <div className={styles.cartItemInfo}>
                                <img
                                    src={item.product.image.url}
                                    alt="cartImg"
                                    className={styles.cartItemImage}
                                />

                                <div className={styles.cartInfoWrapper}>
                                    <div className={styles.cartProductTopWrapper} >
                                        <span className={styles.cartProductName}>
                                            {item.product.name}
                                        </span>
                                        {item.product.discount_percen && <span className={styles.cartDiscountPercentage}>
                                            {item.product.discount_percent}
                                        </span>}
                                    </div>

                                    <div className={styles.cartInfoDescription}>
                                        <span
                                            className={styles.cartInfoDescText}
                                        >
                                            Eau de perfume
                                        </span>
                                        <span
                                            className={styles.cartInfoDescText}
                                        >
                                            /
                                        </span>
                                        <span
                                            className={styles.cartInfoDescText}
                                        >
                                            75 ml
                                        </span>
                                        <span
                                            className={styles.cartInfoDescText}
                                        >
                                            /
                                        </span>
                                        <span
                                            className={styles.cartInfoDescText}
                                        >
                                            Women
                                        </span>
                                    </div>

                                    {!isMobile ? (
                                        <div
                                            className={
                                                styles.cartPriceInfoWrapper
                                            }
                                        >
                                            {/*<span
                                                className={
                                                    styles.cartItemActualPrice
                                                }
                                            >
                                                {item?.prices?.price?.value + " " + item?.prices?.price?.currency}
                                            </span>*/}
                                            <span
                                                className={styles.cartItemPrice}
                                            >
                                                {item?.prices?.row_total?.value + " " + item?.prices?.row_total?.currency}
                                            </span>

                                            <div className={styles.cartActionWrapper}>
                                                <div className={styles.cartActionBtnWrapper}>
                                                    <img src={Minus} alt="Minus"/>
                                                </div>
                                                <div className={styles.cartItemQty}>
                                                    {item.quantity}
                                                </div>
                                                <div className={ styles.cartActionBtnWrapper}>
                                                    <img src={Plus} alt="Plus" />
                                                </div>
                                            </div>

                                            <div
                                                className={
                                                    styles.cartProductFav
                                                }
                                            >
                                                <img src={Heart} alt="heart" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={styles.cartMobItems}>
                                            <span className={styles.cartMobQty}>
                                                Quantity: X20
                                            </span>
                                            <span
                                                className={styles.cartMobPrice}
                                            >
                                                24 AED
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className={styles.cartItemRight}>
                                    <svg
                                        width="15"
                                        height="17"
                                        viewBox="0 0 15 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.375 3.375H0.625M5.625 7.125V12.125M9.375 7.125V12.125M13.125 3.375V15.25C13.125 15.4158 13.0592 15.5747 12.9419 15.6919C12.8247 15.8092 12.6658 15.875 12.5 15.875H2.5C2.33424 15.875 2.17527 15.8092 2.05806 15.6919C1.94085 15.5747 1.875 15.4158 1.875 15.25V3.375M10.625 3.375V2.125C10.625 1.79348 10.4933 1.47554 10.2589 1.24112C10.0245 1.0067 9.70652 0.875 9.375 0.875H5.625C5.29348 0.875 4.97554 1.0067 4.74112 1.24112C4.5067 1.47554 4.375 1.79348 4.375 2.125V3.375"
                                            stroke="#C8C8C8"
                                            stroke-width="1.25"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

            )

            const cartItems = cart.items.map(
                item => (
                    <CartItem item={item} handleRemoveCartItem={handleRemoveCartItem} handleItemQuantityUpdate={handleItemQuantityUpdate} />
                )
            )

            return (
                <section className={`container mt-150`}>
                    <div className={styles.cartWrapper}>
                        <div className={styles.cartItemWrapper}>
                            <div className={styles.cartInfoTop}>
                                <span className={styles.cartInfoTitle}>
                                    Your shopping bag ({cart.items.length})
                                </span>
                                <span className={styles.cartClearTxt}>Clear all</span>
                            </div>
                            {cartItems}
                        </div>

                        <div className={styles.cartSummaryWrapper}>
                            <div>
                                <div className={styles.cartOrderSummaryWrapper}>
                                    <span className={styles.cartOrderSummaryTxt}>
                                        Order summary
                                    </span>
                                </div>

                                <div>
                                    <ul>
                                        { cart.prices.subtotal_excluding_tax && <div className={styles.cartSummaryListItem}>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemName
                                                }
                                            >
                                                Subtotal
                                            </li>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemDetails
                                                }
                                            >
                                                {cart.prices.subtotal_excluding_tax.value} {cart.prices.subtotal_excluding_tax.currency}
                                            </li>
                                        </div>}

                                        { cart.prices.subtotal_including_tax && <div className={styles.cartSummaryListItem}>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemName
                                                }
                                            >
                                                Including VAT
                                            </li>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemDetails
                                                }
                                            >
                                                {cart.prices.subtotal_including_tax.value} {cart.prices.subtotal_including_tax.currency}
                                            </li>
                                        </div>}

                                        { cart.prices.discounts &&  <div className={styles.cartSummaryListItem}>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemName
                                                }
                                            >
                                                DISCOUNT
                                            </li>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemDetails
                                                }
                                            >
                                                {cart.prices.discounts.value} {cart.prices.discounts.currency}
                                            </li>
                                        </div>}

                                        <div className={styles.cartSummaryListItem}>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemName
                                                }
                                            >
                                                Shipping cost
                                            </li>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemDetails
                                                }
                                            >
                                                Free
                                            </li>
                                        </div>

                                        { cart.prices.donation && <div className={styles.cartSummaryListItem}>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemName
                                                }
                                            >
                                                donation
                                            </li>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemDetails
                                                }
                                            >
                                                {cart.prices.donation.value} {cart.prices.donation.currency}
                                            </li>
                                        </div>}

                                        { cart.prices.gift_options && <div className={styles.cartSummaryListItem}>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemName
                                                }
                                            >
                                                Gift card
                                            </li>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemDetails
                                                }
                                            >
                                                {cart.prices.gift_options.printed_card.value} {cart.prices.gift_options.printed_card.currency}
                                            </li>
                                        </div> }

                                        { cart.prices.loyal_point && <div className={styles.cartSummaryListItem}>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemName
                                                }
                                            >
                                                loyalty points
                                            </li>
                                            <li
                                                className={
                                                    styles.cartSummaryListItemDetails
                                                }
                                            >
                                                {cart.prices.loyal_point.value} {cart.prices.loyal_point.currency}
                                            </li>
                                        </div>}
                                    </ul>
                                </div>

                                <div>
                                    <div
                                        className={
                                            !btnColor
                                                ? styles.cartCouponWrapper
                                                : styles.cartCouponActive
                                        }
                                    >
                                        <input
                                            type="text"
                                            className={styles.cartCouponInput}
                                            placeholder="Discount code"
                                            value={couponCode}
                                            onChange={e =>
                                                setCouponCode(e.target.value)
                                            }
                                        />

                                        {!btnColor ? (
                                            <div
                                                className={`${styles.cartCouponBtn} ${
                                                    styles.cartCouponBtnClear
                                                }`}
                                            >
                                                <button type="submit">Apply</button>
                                                <svg
                                                    width="18"
                                                    height="16"
                                                    viewBox="0 0 18 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.5 8H0.5M16.5 8L16.2643 7.85057C13.5091 6.1041 11.1533 3.7674 9.3575 1M16.5 8L16.2643 8.14943C13.5091 9.8959 11.1533 12.2326 9.3575 15"
                                                        stroke="white"
                                                        stroke-width="1.25"
                                                    />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div
                                                className={styles.cartCouponBtn}
                                                onClick={() => setCouponCode('')}
                                            >
                                                <button type="button">Clear</button>
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.16406 1.16675L12.8307 12.8334M1.16406 12.8334L12.8307 1.16675"
                                                        stroke="white"
                                                        stroke-width="1.25"
                                                        stroke-linecap="round"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.cartTotalTaxWrapper}>
                                    <span className={styles.cartTotalTxt}>
                                        Total including taxes
                                    </span>
                                    <span className={styles.cartTotalTxt}>
                                        {cart.prices.grand_total.value} {cart.prices.grand_total.currency}
                                    </span>
                                </div>

                                <hr className={styles.cartLineBreaks} />

                                <div className={styles.cartFunctionality}>
                                    <div
                                        className={styles.cartFunctionalityMainWrapper}
                                    >
                                        <div
                                            className={styles.cartFunctionalityWrapper}
                                        >
                                            <img src={IconDelivery} alt="" />
                                            <div
                                                className={
                                                    styles.cartFunctionalityDetails
                                                }
                                            >
                                                <span
                                                    className={
                                                        styles.cartFunctionalityTitle
                                                    }
                                                >
                                                    Free delivery
                                                </span>
                                                <span
                                                    className={
                                                        styles.cartFunctionalityDescription
                                                    }
                                                >
                                                    On credit/debit cards order
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <img src={CartPagination} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <hr className={styles.cartLineBreaks} />

                                <div className={styles.cartDescriptionWrapper}>
                                    <span className={styles.cartDescription}>
                                        By placing the order, you agree to accept our
                                        terms and conditions. Our checkout is{' '}
                                        <span style={{ fontWeight: 700 }}>
                                            safe and secure.
                                        </span>{' '}
                                        {''}
                                        Your personal and payment information is
                                        securely transmitted via 128-bit encryption. We
                                        do not store any payment card information on our
                                        systems.
                                    </span>
                                </div>

                                <div>
                                    <button className="btn btn-primary w-100">
                                        Checkout
                                    </button>
                                </div>

                                <div className={styles.cartFooterInfoWrapper}>
                                    <div className={styles.cartFooterNeedHelp}>
                                        <span className={styles.cartFooterTitle}>
                                            Need help?
                                        </span>

                                        <div className={styles.cartFooterVariation}>
                                            <a
                                                href="#"
                                                className={
                                                    styles.cartFooterVariationType
                                                }
                                            >
                                                Delivery Information
                                            </a>
                                            <a
                                                href="#"
                                                className={
                                                    styles.cartFooterVariationType
                                                }
                                            >
                                                Sales Tax Information
                                            </a>
                                            <a
                                                href="#"
                                                className={
                                                    styles.cartFooterVariationType
                                                }
                                            >
                                                Maximum Purchase Policy
                                            </a>
                                            <a
                                                href="#"
                                                className={
                                                    styles.cartFooterVariationType
                                                }
                                            >
                                                Payment Options
                                            </a>
                                            <a
                                                href="#"
                                                className={
                                                    styles.cartFooterVariationType
                                                }
                                            >
                                                Shipping Options
                                            </a>
                                        </div>
                                    </div>

                                    <div className={styles.cartFooterContactWrapper}>
                                        <span className={styles.cartFooterTitle}>
                                            Contact us{' '}
                                        </span>

                                        <div className={styles.cartContactUsWrapper}>
                                            <div className={styles.cartContactInfo}>
                                                <span
                                                    className={styles.cartContactTitle}
                                                >
                                                    Email:
                                                </span>
                                                <span
                                                    className={styles.cartContactDetail}
                                                >
                                                    User242352365@gmail.com
                                                </span>
                                            </div>

                                            <div className={styles.cartContactInfo}>
                                                <span
                                                    className={styles.cartContactTitle}
                                                >
                                                    Phone Number:
                                                </span>
                                                <span
                                                    className={styles.cartContactDetail}
                                                >
                                                    +37532947238563
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<div className={styles.cartRecommended}>
                        <div>
                            <span className={styles.cartRecommendedTxt}>
                                Recommended for You
                            </span>
                        </div>

                        <div>
                            <div className={styles.productWrapper}>
                                {ProductCardData.map(item => (
                                    <>
                                        <ProductCard productData={item} />
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>*/}
                </section>
            );
        }
    return null;
};

export default CartPage;
