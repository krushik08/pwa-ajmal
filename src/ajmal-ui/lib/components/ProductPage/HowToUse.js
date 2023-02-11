import React from 'react';
import styles from './productPage.module.css';
import HowToUseImg from '../../../../../public/images/HowToUse.svg';

const HowToUse = () => {
    return (
        <>
            <div className={styles.productCommonWrapperMain}>
                <span className={styles.productCommonTitle}>
                    How to use Amber Wood
                </span>

                <div className={styles.productHowToUseBox}>
                    <img src={HowToUseImg} alt="" />

                    <div className={styles.productHowToUseDescription}>
                        <span className={styles.productHowToUseDescLabel}>
                            A veritable masterpiece from the W Series of our
                            Signature Collection. The Amber Wood perfume, is
                            imbued with deep and
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowToUse;
