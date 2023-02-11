import React from 'react';
import styles from './productPage.module.css';
import HeartIcon from '../../../../../public/images/IconHeartColor.svg';

const AboutProduct = () => {
    return (
        <>
            <div className={styles.productCommonWrapperMain}>
                <span className={styles.productCommonTitle}>About</span>

                <div className={styles.productAboutWrapper}>
                    <div className={styles.productAboutBg1}>
                        <div className={styles.productAboutContentWrapper}>
                            <span className={styles.productAboutContent}>
                                A veritable masterpiece from the W Series of our
                                Signature Collection. The Amber Wood perfume, is
                                imbued with deep and intricate fruity-floral and
                                spicy notes that have been judiciously entwined
                                with cedar, amber wood and patchouli; to give
                                you a sense of inimitable power.
                            </span>
                        </div>
                    </div>

                    <div className={styles.productAboutBg2}>
                        <div className={styles.productAboutContentWrapper}>
                            <img
                                src={HeartIcon}
                                alt=""
                                className={styles.productAboutIconWrapper}
                            />

                            <span className={styles.productAboutContent}>
                                Nothing unlocks an old memory better than smell,
                                be it the memory of lost love or of a fond
                                friend. At Ajmal we help towards recreating
                                those memories through our fragrances.
                            </span>

                            <div className={styles.productAboutReview}>
                                <span className={styles.productAboutClientName}>
                                    Sue Smit
                                </span>
                                <span
                                    className={styles.prdoctAboutLocationName}
                                >
                                    London, United Kingdom
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutProduct;
