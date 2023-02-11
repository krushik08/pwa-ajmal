import React from 'react';
import styles from './productPage.module.css';
import NextArrow from '../../../../../public/images/next-arrow.svg';
import { WebSlider } from '../Common/WebSlider';
import ProductCardData from '../_mockdata_/Product';
import useMobileView from '../Utils/MobileView';
import { MobileSlider } from '../Common/MobileSlider';

const YouMayLike = () => {
    const isMobile = useMobileView();

    return (
        <>
            <div className={styles.productCommonWrapperMain}>
                <div className={styles.productReviewTopWrapper}>
                    <div>
                        <span className={styles.productCommonTitle}>
                            You may also like
                        </span>
                    </div>

                    {!isMobile && (
                        <a href="#" className={styles.viewAll}>
                            Discover all
                            <img
                                src={NextArrow}
                                className="img-fluid"
                                alt="arrow"
                            />
                        </a>
                    )}
                </div>

                <div className={styles.productYouLikeWrapper}>
                    {!isMobile ? (
                        <WebSlider ProductCardData={ProductCardData} />
                    ) : (
                        <MobileSlider ProductCardData={ProductCardData} />
                    )}
                </div>

                {isMobile && (
                    <div className={styles.prodcutMayLikeDiscoverMob}>
                        <a
                            className="discoverAllBtn"
                            href="#"
                            onClick={() => setIsOpen(true)}
                        >
                            Discover all
                        </a>
                    </div>
                )}
            </div>
        </>
    );
};

export default YouMayLike;
