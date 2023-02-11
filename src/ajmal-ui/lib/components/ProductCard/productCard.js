import React, {useState, useEffect} from 'react';
import { Price, useScrollLock } from '@magento/peregrine';
import globalCSS from './productCard.module.css';
import { random } from 'lodash';
import jQuery from 'jquery';
import { any, bool } from 'prop-types';
import { CREATE_CART, ADD_PRODUCTS_TO_CART } from '../../mutations/cart.jsx';
import { useMutation } from '@apollo/client';
import ProductPrice from './productPrice';
import ProductBottom from './productBottom';
import ProductIngrediants from './productIngrediants';
import ProductCPrice from './productCPrice';
import { useCartContext } from '@magento/peregrine/lib/context/cart';


const ProductCard = props => {
    const { isMasked,item,type } = props;
    console.log("Product Data:",item);
    const [ createCart,{data,error} ]= useMutation(CREATE_CART);
    const [ addProductsToCart ]= useMutation(ADD_PRODUCTS_TO_CART,{
        onError: (e) => {
            console.log("Error:",e);
        },
        onCompleted: (res) => {
            console.log("Success:",res);
        }
    });

    const lightClasses = [
        "productCard_inner--light",
        "productCard_inner--dark",
        "productCard_inner--extraDark",
        "productCard_inner--mediumDark"
    ];
    const index = random(3);
    const [{ cartId }] = useCartContext();

    const handleCart = (evt) => {
        evt.preventDefault();
        const sku = evt.target.attributes.data.value;
        if(cartId){
            addProductsToCart({
                variables: {
                    cartId: cartId,
                    sku: sku,
                    quantity: 1
                },
                onCompleted: (res) => {
                    localStorage.setItem('cart',JSON.stringify(res.addProductsToCart.cart));
                    jQuery('#cartBag').text(res.addProductsToCart.cart?.items?.length);
                }
            });
        }

        jQuery('body').toggleClass('openCartMenu');
        jQuery('body').css('overflow','hidden');
    };

    const handleProductClick = (url_key) => {
        console.log(url_key);
        window.location.href='/product'
    }

    let rating = "";
    if(item?.rating_count){
        for(let i = 0; i < item?.rating_count; i++ ){
            rating += '<li><span className="icon-star"></span></li>';
        }
        rating += '<p>'+item?.rating_count+'</p>';
    }

    /**
     *  out-of-stock
     */
    return (
        <a href={'/'+item?.url_key}>
            <div className={item?.stock_status === "Out Of Stock"?"productCard out-of-stock":"productCard"}>
                <div className="productCard_sliderSpace">
                    <div className={"productCard_inner " + lightClasses[index]}>
                        <div className="productCard_top d-flex align-item-start justify-content-center">
                            <a href="#" className="productBadge"><img src="/public/images/video-icon.svg"/></a>
                            <div className="centerImg">
                                { typeof item?.image === 'string' && (<img src={item.image}  className="img-fluid" alt="product-img"/>) }
                                { typeof item?.image === 'object' && (<img src={item.image.url}  className="img-fluid" alt="product-img"/>) }
                                { item?.stock_status === "Out Of Stock"?(<span className="outofstock">OUT OF STOCK</span>):'' }
                            </div>
                            <a href="#" className="productLike"><em className="icon-favorite_outline"></em></a>
                        </div>
                        <div className="productCard_center text-center">
                            {
                                item?.rating_count && (
                                    <ul className="rating d-flex list-unstyled justify-content-center" dangerouslySetInnerHTML={{ __html: rating}}>
                                    </ul>
                                )
                            }

                            { item?.discount_percent && (<span className="offer">{item.discount_percent}</span>) }
                            { item?.discount_per && (<span className="offer">{item.discount_per}</span>) }
                            { item?.customAttributesAjmalData && <ProductIngrediants customAttributesAjmalData={item.customAttributesAjmalData[0]}/>}
                            <h3>{item?.name}</h3>
                            { type ? <ProductCPrice price_range={item?.price_range} /> :(<ProductPrice price_range={item?.price_range[0]} />)}
                        </div>
                        <div className="productCard_bottom">
                            <div className="viewProduct">
                                { item?.customAttributesAjmalData && <ProductBottom customAttributesAjmalData={item?.customAttributesAjmalData[0]} /> }
                                { !item?.customAttributesAjmalData && <ProductBottom customAttributesAjmalData={null} /> }
                            </div>
                            <div className="addProduct">
                                <ul className="d-flex list-unstyled">
                                    <li><a href="javascript:;" className="btn btn-primary btn-primary-outline">Buy Now</a></li>
                                    <li><a href="javascript:;" onClick={handleCart} data={item?.sku} className="btn btn-primary">Add to Cart</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    isMasked: any,
    item: any,
    type: bool
};
