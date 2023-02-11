import React from 'react';
import styles from './Style.module.css';
import ProductLike from '/public/images/IconProductLike.svg';
import IconStar from '/public/images/IconStarSmall.svg';
import useMobileView from '../Utils/MobileView';
import jQuery from 'jquery';

const ProductCard = ({ productData }) => {
    let reviewStar = [];
    const isMobile = useMobileView();
    for (let index = 0; index < productData.rating_count; index++) {
        reviewStar.push([index]);
    }

    return (
        <div className='space-10'>
            <div className={styles.productCard}>
                <div className={styles.productCard_sliderSpace}>
                    <div
                        className={`${styles.productCard_inner} ${
                            styles[
                                `productCard_inner--${productData.background}`
                            ]
                        }`}
                    >
                        {!isMobile && <ProductActionBtn />}
                        <div
                            className={`${
                                styles.productCard_top
                            } d-flex align-item-start justify-content-center`}
                        >
                            <div className={styles.centerImg}>
                                <img
                                    src={productData.productImage}
                                    className="img-fluid"
                                    alt="product-img"
                                />{' '}
                            </div>
                        </div>
                        <div
                            className={`${
                                styles.productCard_center
                            } text-center`}
                        >
                            {!isMobile && (
                                <div
                                    className={`${
                                        styles.rating
                                    } d-flex justify-content-center`}
                                >
                                    {Array.from(
                                        { length: productData.star },
                                        (v, i) => (
                                            <img src={IconStar} alt="" />
                                        )
                                    )}

                                    <p>{productData.totalReview}</p>
                                </div>
                            )}

                            <span className={styles.offer}>
                                {productData.discount}
                            </span>

                            <ul
                                className={`${
                                    styles.category
                                } d-flex list-unstyled justify-content-center mb-0`}
                            >
                                <li>{productData.productType}</li>
                                <li>{productData.productWeight}</li>
                                <li>{productData.productForUse}</li>
                            </ul>
                            <h3>{productData.productName}</h3>
                            <span className="price">
                                {
                                    productData.price_range && productData.price_range.maximum_price.final_price.value >= productData.price_range.maximum_price.regular_price.value
                                    ?
                                        productData.price_range?.maximum_price?.final_price?.value+ " " + productData.price_range?.maximum_price?.final_price.currency
                                    :
                                    (
                                        <>
                                            {productData.price_range?.maximum_price?.final_price?.value + " " + productData.price_range?.maximum_price?.final_price.currency}
                                            <del>{productData.price_range?.minimum_price?.regular_price?.value} {productData.price_range?.minimum_price?.regular_price.currency}</del>
                                        </>
                                    )
                                }
                            </span>
                        </div>

                        {!isMobile ? (
                            <ProductCardBottom productData={productData} />
                        ) : (
                            <div className="my-5">
                                <ProductActionBtn />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

const ProductCardBottom = ({ productData }) => {
    var handleCart = () => {
        jQuery('body').toggleClass('openCartMenu');
        jQuery('body').css('overflow','hidden');
    }

    return (
        <div className={styles.productCard_bottom}>
            <div className={styles.viewProduct}>
            <ul className="list-unstyled d-flex justify-content-between mb-0">
                <li className="text-center">
                    <img src={productData?.top_note_image} className="img-fluid" alt="rose-img"/>
                    <span>{productData?.top_note_name}</span>
                </li>
                <li className="text-center">
                    <img src={productData?.heart_note_image} className="img-fluid" alt="vanilla-img"/>
                    <span>{productData?.heart_note_name}</span>
                </li>
                <li className="text-center">
                    <img src={productData?.base_note_image}  className="img-fluid" alt="oud-img"/>
                    <span>{productData?.base_note_name}</span>
                </li>
            </ul>
            </div>
            <div className={styles.addProduct}>
                <ul className={`d-flex list-unstyled ${styles.action_btn}`}>
                    <li className={styles.buyNowBtn}>
                        <a
                            href="#"
                            className="btn btn-primary btn-primary-outline"
                        >
                            Buy Now
                        </a>
                    </li>
                    <li className={styles.addToCartBtn}>
                        <a href="#" onClick={handleCart} className="btn btn-primary">
                            Add to card
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const ProductActionBtn = () => {
    const isMobile = useMobileView();

    return (
        <div
            className={
                (styles.productActionBtn,
                !isMobile
                    ? `${styles.productActionBtnDesk}`
                    : `${styles.productActionBtnMob}`)
            }
        >
            <a href="#" className={styles.productBadge}>
                <img src="/public/images/video-icon.svg" />
            </a>

            <a href="#" className={styles.productLike}>
                <img src={ProductLike} alt="" />
            </a>
        </div>
    );
};
