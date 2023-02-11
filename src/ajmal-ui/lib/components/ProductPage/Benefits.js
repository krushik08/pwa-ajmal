import React from 'react';
import styles from './productPage.module.css';
import NextArrow from '../../../../../public/images/next-arrow.svg';
import ProductDemo from '../../../../../public/images/product-demo.png';
import IconPause from '../../../../../public/images/IconPause.svg';
import IconClose from '../../../../../public/images/IconCloseWhite.svg';
import useMobileView from '../Utils/MobileView';

const Benefits = () => {
    const isMobile = useMobileView();

    return (
        <>
            {isMobile && (
                <div className={styles.productCommonTitleWrapper}>
                    <span className={styles.productCommonTitle}>Benefits </span>
                </div>
            )}

            <div className={styles.productAdditional}>
                <div className={styles.productDeliveryTimeWrapper}>
                    <span className={styles.productDeliveryLabel}>
                        Enter Pincode to <br /> check delivery time
                    </span>

                    <div className={styles.productEmailCheckWrapper}>
                        <form>
                            <div className="form-input-wrapper">
                                <input className="form-control" type="email" />
                                <label>Email</label>
                                <button className="btn">
                                    <img
                                        src="./public/images/arrow-right-gray.svg"
                                        className="img-fluid"
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={styles.productRewardBg}>
                    <span className={styles.productRewardLabel}>
                        Ajmal members will earn 16 points on the purchase of
                        this product
                    </span>

                    <a href="#" className={styles.productLearnMore}>
                        Learn more{' '}
                        <img
                            src={NextArrow}
                            className="img-fluid"
                            alt="arrow"
                        />
                    </a>
                </div>

                {!isMobile && (
                    <div className={styles.productDemoWrapper}>
                        <img
                            src={ProductDemo}
                            alt=""
                            className={styles.productDemo}
                        />

                        <div className={styles.productDemoActionWrapper}>
                            <img
                                src={IconPause}
                                alt=""
                                className={styles.prodcutDemoPause}
                            />

                            <div className={styles.productDemoCloseWrapper}>
                                <img
                                    src={IconClose}
                                    alt=""
                                    className={styles.prodcutDemoClose}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Benefits;
