import React, { useRef, useState } from 'react';
import styles from './productPage.module.css';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import AmberWood from '/public/images/amber-wood-noir.png';
import AmberWood2 from '/public/images/amber-wood-noir-2.png';
import AmberWood3 from '/public/images/amber-wood-noir-3.png';
import AjmalImg from '/public/images/ajmal-img.png';
import IconStar from '/public/images/IconStarSmall.svg';
import IconList from '/public/images/IconList.svg';
import IconAvail from '/public/images/IconAvail.svg';
import IconTruck from '/public/images/IconTruck.svg';
import IconMinus from '/public/images/IconMinusGold.svg';
import IconPlus from '/public/images/IconPlusGold.svg';
import SpotiiLogo from '/public/images/SpotiiLogo.svg';
import NextArrow from '/public/images/next-arrow.svg';
import IconShare from '/public/images/IconShare.svg';
import IconPause from '/public/images/IconPause.svg';
import IconClose from '/public/images/IconCloseWhite.svg';
import IconLike from '/public/images/IconLike.svg';
import ProductDemo from '/public/images/product-demo.png';
import HowToUse from './HowToUse';
import AboutProduct from './AboutProduct';
import Ingredients from './Ingredients';
import WhenToUse from './WhenToUse';
import Reviews from './Reviews';
import Faq from './Faq';
import Blog from './Blog';
import YouMayLike from './YouMayLike';
import GoesWellWith from './GoesWellWith';
import StyledModal from '../Common/StyledModal';
import NewReview from './NewReview';
import Benefits from './Benefits';
import useMobileView from '../Utils/MobileView';
import { useParams } from 'react-router';

const ProductPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const isMobile = useMobileView();
    const { url_key } = useParams();
    if(url_key === 'categories'){
        return null;
    }
    return (
        <>
            <div className={styles.productWrapper}>
                <div className={styles.productPicture}>
                    <div>
                        <div className="pyramid">
                            <div className="pyramid__section pyramid__section1">
                                <span>Gourmand</span>
                            </div>
                            <div className="pyramid__section pyramid__section2">
                                <span>Venila</span>
                            </div>
                            <div className="pyramid__section pyramid__section3">
                                <span>Rose</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.productActionIconWrapper}>
                        <img
                            src={IconLike}
                            className={styles.productActionIcon}
                            alt=""
                        />
                        <img
                            src={IconShare}
                            className={styles.productActionIcon}
                            alt=""
                        />
                    </div>
                    <>
                        <Swiper
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Thumbs]}
                            className={` ${styles.productViewSwiper1} ${
                                styles.productViewSwiper
                            }`}
                        >
                            <SwiperSlide>
                                <img src={AmberWood} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={AmberWood2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={AmberWood3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={AjmalImg} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={AmberWood} />
                            </SwiperSlide>
                        </Swiper>

                    </>
                </div>

                <div className={styles.prdouctInfo}>
                    <div className={styles.prdouctInfoTop}>
                        <div className={styles.productReviewWrapper}>
                            <img src={IconStar} alt="review" />
                            <img src={IconStar} alt="review" />
                            <img src={IconStar} alt="review" />
                            <img src={IconStar} alt="review" />
                            <img src={IconStar} alt="review" />
                        </div>

                        <div className={styles.productReview}>
                            <span className={styles.productReviewTotalCount}>
                                32 reviews
                            </span>
                            <span className={styles.productWriteReview}>
                                Write a review
                            </span>
                        </div>
                    </div>

                    <div className={styles.productNameWrapper}>
                        <span className={styles.productName}>
                            Amber Wood Noir
                        </span>
                    </div>

                    <div className={styles.productPriceWrapper}>
                        <span className={styles.prdoctDiscountPrice}>
                            12 AED
                        </span>
                        <span className={styles.prdoctActualPrice}>24 AED</span>
                    </div>

                    <hr className={styles.productDivider} />

                    <div>
                        <span className={styles.productDescription}>
                            A veritable masterpiece from the W Series of our
                            Signature Collection. The Amber Wood perfume, is
                            imbued with deep and intricate fruity-floral and
                            spicy notes that have been judiciously...
                        </span>

                        <div className={styles.productInfoWrapper}>
                            <div className={styles.productInfo}>
                                <img src={IconList} alt="" />
                                <span className={styles.productLasting}>
                                    Lasting hours: 5-8 hours
                                </span>
                            </div>
                            <div className={styles.productInfo}>
                                <img src={IconAvail} alt="" />
                                <span className={styles.prductIsAvail}>
                                    Is available in {''}
                                    <a
                                        href="#"
                                        className={styles.productCombos}
                                    >
                                        6 combos
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.productDivider} />

                    <div className={styles.productAvailWrapper}>
                        <span>Available in:</span>

                        <div className={styles.productAvailCategory}>
                            <span className={styles.productAvailType}>
                                50 ml
                            </span>
                            <span className={styles.productAvailType}>
                                100 ml
                            </span>
                        </div>
                    </div>

                    <hr className={styles.productDivider} />

                    <div className={styles.productFinalize}>
                        <div className={styles.productGetDelivery}>
                            <img src={IconTruck} alt="" />
                            <span className={styles.prdocutDeliverLabel}>
                                Get it dellivered today
                            </span>
                        </div>

                        <div className={styles.productActionBtn}>
                            <button className={styles.prodcutQtyBtn}>
                                <span>
                                    <img src={IconMinus} alt="" />
                                </span>
                                <span> 1 </span>
                                <span>
                                    <img src={IconPlus} alt="" />
                                </span>
                            </button>
                            <button
                                className={` btn btn-primary ${
                                    styles.productAddCartBtn
                                }`}
                            >
                                Add to cart
                            </button>
                            <button className="btn btn-primary btn-primary-outline">
                                Buy now
                            </button>
                        </div>

                        <div className={styles.productPaymentWrapper}>
                            <span className={styles.productPaymentLabel}>
                                Or 3 interest free payments of AED 54 with{' '}
                            </span>
                            <img
                                src={SpotiiLogo}
                                alt=""
                                className={styles.productPaymentPartner}
                            />
                        </div>
                    </div>
                </div>

                {!isMobile && <Benefits />}
            </div>

            {!isMobile ? (
                <>
                    <HowToUse />

                    <AboutProduct />

                    <Ingredients />

                    <WhenToUse />

                    {/*<GoesWellWith />*/}

                    <YouMayLike />

                    <Reviews />

                    <Faq />

                    <Blog />
                </>
            ) : (
                <>
                    <AboutProduct />

                    {isMobile && <Benefits />}

                    <HowToUse />

                    <Ingredients />

                    <WhenToUse />

                    <GoesWellWith />

                    <YouMayLike />

                    <Reviews />

                    <Faq />

                    <Blog />
                </>
            )}
        </>
    );

};

export default ProductPage;
