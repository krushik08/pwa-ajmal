import React from 'react';
import styles from './productPage.module.css';
import ProductImg from '../../../../../public/images/amber-wood-noir.png';
import RoseImg from '../../../../../public/images/rose-img.svg';
import OudImg from '../../../../../public/images/oud-img.svg';
import VanillaImg from '../../../../../public/images/vanilla-img.svg';

const Ingredients = () => {
    return (
        <>
            <div className={styles.productCommonWrapperMain}>
                <span className={styles.productCommonTitle}>Ingredients</span>

                <div className={styles.productIngredientsWrapper}>
                    <div className={styles.productIngredientsMainImage} />

                    <div className={styles.productIngredientWrapper1}>
                        <img
                            className={styles.productIngredients1}
                            src={RoseImg}
                            alt=""
                        />

                        <div className={styles.productAccord1}>
                            <span className={styles.productAccordNumber}>
                                First accord
                            </span>
                            <span className={styles.productAccordType}>
                                Amber
                            </span>
                        </div>
                    </div>

                    <div className={styles.productIngredientWrapper2}>
                        <img
                            className={styles.productIngredients2}
                            src={OudImg}
                            alt=""
                        />

                        <div className={styles.productAccord2}>
                            <span className={styles.productAccordNumber}>
                                Second accord
                            </span>
                            <span className={styles.productAccordType}>
                                Amber
                            </span>
                        </div>
                    </div>

                    <div className={styles.productIngredientWrapper3}>
                        <img
                            className={styles.productIngredients3}
                            src={VanillaImg}
                            alt=""
                        />

                        <div className={styles.productAccord3}>
                            <span className={styles.productAccordNumber}>
                                Third accord
                            </span>
                            <span className={styles.productAccordType}>
                                Amber
                            </span>
                        </div>
                    </div>

                    <div className={styles.productIngredientWrapper4}>
                        <img
                            className={styles.productIngredients4}
                            src={RoseImg}
                            alt=""
                        />

                        <div className={styles.productAccord4}>
                            <span className={styles.productAccordNumber}>
                                Fourth accord
                            </span>
                            <span className={styles.productAccordType}>
                                Amber
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.productIngredientsImg}>
                    <img src={ProductImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Ingredients;
