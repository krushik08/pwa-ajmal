import React from 'react';
import { MobileSlider } from '../Common/MobileSlider';
import ProductCard from '../ProductCard';
import useMobileView from '../Utils/MobileView';
import ProductCardData from '../_mockdata_/Product';
import styles from './productPage.module.css';

const GoesWellWith = () => {
    const isMobile = useMobileView();

    return (
        <>
            <div className={styles.productCommonWrapperMain}>
                {!isMobile && (
                    <span className={styles.productCommonTitle}>
                        Goes well with
                    </span>
                )}

                <div className={styles.productGoesWellWrapper}>
                    {isMobile && (
                        <div className={styles.productCommonTitleMob}>
                            <span className={styles.productCommonTitle}>
                                Goes well with
                            </span>
                        </div>
                    )}

                    <div className={styles.productGoesWellBox}>
                        {!isMobile ? (
                            ProductCardData.slice(0, 3).map(item => (
                                <ProductCard productData={item} />
                            ))
                        ) : (
                            <MobileSlider ProductCardData={ProductCardData} />
                        )}
                    </div>

                    <div className={styles.prodictAddAllBtn}>
                        <a className="discoverAllBtn" href="#">
                            Add all to cart
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GoesWellWith;
