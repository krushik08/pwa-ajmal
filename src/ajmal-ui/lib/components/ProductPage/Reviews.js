import React, { useState } from 'react';
import styles from './productPage.module.css';
import NextArrow from '../../../../../public/images/next-arrow.svg';
import IconStarGold from '../../../../../public/images/IconStarGold.svg';
import IconStarLightGold from '../../../../../public/images/IconStarLightGold.svg';
import UserProfile from '../../../../../public/images/User.png';
import useMobileView from '../Utils/MobileView';
import NewReview from './NewReview';

const Reviews = () => {
    const isMobile = useMobileView();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.productCommonWrapperMain}>
                <div className={styles.productReviewTopWrapper}>
                    <div>
                        <span className={styles.productCommonTitle}>
                            Reviews
                        </span>
                        <span className={styles.productReviewCount}>(28)</span>
                    </div>

                    <a href="#" className={styles.viewAll}>
                        View all{' '}
                        <img
                            src={NextArrow}
                            className="img-fluid"
                            alt="arrow"
                        />
                    </a>
                </div>

                <div className={styles.productReviewWrapperMain}>
                    <div className={styles.productReviewOverView}>
                        <span className={styles.productReviewAll}>4.0</span>
                        <div className={styles.productReviewStar}>
                            <img src={IconStarGold} alt="" />
                            <img src={IconStarGold} alt="" />
                            <img src={IconStarGold} alt="" />
                            <img src={IconStarGold} alt="" />
                            <img src={IconStarLightGold} alt="" />
                        </div>
                        {!isMobile && (
                            <>
                                <span>|</span>
                                <button
                                    className="btn btn-primary btn-primary-outline"
                                    onClick={() => setIsOpen(true)}
                                >
                                    Write a review
                                </button>
                            </>
                        )}{' '}
                    </div>

                    <div className={styles.productReviewsWrapper}>
                        <div className={styles.productReviewBox}>
                            <img
                                src={UserProfile}
                                alt=""
                                className={styles.productReviewUserPic}
                            />

                            <div>
                                <div className={styles.productReviewUserTop}>
                                    <div
                                        className={
                                            styles.productReviewUserCount
                                        }
                                    >
                                        <span
                                            className={
                                                styles.productReviewTotal
                                            }
                                        >
                                            5
                                        </span>
                                        <img
                                            src={IconStarGold}
                                            alt=""
                                            className={
                                                styles.productReviewUserStar
                                            }
                                        />
                                    </div>

                                    <div>
                                        <span
                                            className={
                                                styles.productReviewUserName
                                            }
                                        >
                                            Diana Morsi
                                        </span>
                                    </div>

                                    <div>
                                        <span
                                            className={styles.productReviewDate}
                                        >
                                            Today
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.productReviewHeadline}>
                                    <span>Best face mist! 🔥</span>
                                </div>

                                <div className={styles.productReviewContent}>
                                    <span>
                                        I love the smell of this as my lovely
                                        wife has used it for years. When she
                                        goes away I spray a little onto a t
                                        shirt of hers and put it under my
                                        pillow. :) Soft I know but what can you
                                        do, I love her!
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.productReviewBox}>
                            <img
                                src={UserProfile}
                                alt=""
                                className={styles.productReviewUserPic}
                            />

                            <div>
                                <div className={styles.productReviewUserTop}>
                                    <div
                                        className={
                                            styles.productReviewUserCount
                                        }
                                    >
                                        <span
                                            className={
                                                styles.productReviewTotal
                                            }
                                        >
                                            5
                                        </span>
                                        <img
                                            src={IconStarGold}
                                            alt=""
                                            className={
                                                styles.productReviewUserStar
                                            }
                                        />
                                    </div>

                                    <div>
                                        <span
                                            className={
                                                styles.productReviewUserName
                                            }
                                        >
                                            Diana Morsi
                                        </span>
                                    </div>

                                    <div>
                                        <span
                                            className={styles.productReviewDate}
                                        >
                                            Today
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.productReviewHeadline}>
                                    <span>Best face mist! 🔥</span>
                                </div>

                                <div className={styles.productReviewContent}>
                                    <span>
                                        I love the smell of this as my lovely
                                        wife has used it for years. When she
                                        goes away I spray a little onto a t
                                        shirt of hers and put it under my
                                        pillow. :) Soft I know but what can you
                                        do, I love her!
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.productReviewBox}>
                            <img
                                src={UserProfile}
                                alt=""
                                className={styles.productReviewUserPic}
                            />

                            <div>
                                <div className={styles.productReviewUserTop}>
                                    <div
                                        className={
                                            styles.productReviewUserCount
                                        }
                                    >
                                        <span
                                            className={
                                                styles.productReviewTotal
                                            }
                                        >
                                            5
                                        </span>
                                        <img
                                            src={IconStarGold}
                                            alt=""
                                            className={
                                                styles.productReviewUserStar
                                            }
                                        />
                                    </div>

                                    <div>
                                        <span
                                            className={
                                                styles.productReviewUserName
                                            }
                                        >
                                            Diana Morsi
                                        </span>
                                    </div>

                                    <div>
                                        <span
                                            className={styles.productReviewDate}
                                        >
                                            Today
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.productReviewHeadline}>
                                    <span>Best face mist! 🔥</span>
                                </div>

                                <div className={styles.productReviewContent}>
                                    <span>
                                        I love the smell of this as my lovely
                                        wife has used it for years. When she
                                        goes away I spray a little onto a t
                                        shirt of hers and put it under my
                                        pillow. :) Soft I know but what can you
                                        do, I love her!
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.productReviewBox}>
                            <img
                                src={UserProfile}
                                alt=""
                                className={styles.productReviewUserPic}
                            />

                            <div>
                                <div className={styles.productReviewUserTop}>
                                    <div
                                        className={
                                            styles.productReviewUserCount
                                        }
                                    >
                                        <span
                                            className={
                                                styles.productReviewTotal
                                            }
                                        >
                                            5
                                        </span>
                                        <img
                                            src={IconStarGold}
                                            alt=""
                                            className={
                                                styles.productReviewUserStar
                                            }
                                        />
                                    </div>

                                    <div>
                                        <span
                                            className={
                                                styles.productReviewUserName
                                            }
                                        >
                                            Diana Morsi
                                        </span>
                                    </div>

                                    <div>
                                        <span
                                            className={styles.productReviewDate}
                                        >
                                            Today
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.productReviewHeadline}>
                                    <span>Best face mist! 🔥</span>
                                </div>

                                <div className={styles.productReviewContent}>
                                    <span>
                                        I love the smell of this as my lovely
                                        wife has used it for years. When she
                                        goes away I spray a little onto a t
                                        shirt of hers and put it under my
                                        pillow. :) Soft I know but what can you
                                        do, I love her!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isMobile && (
                    <div className={styles.productDiscoverBtn}>
                        <a
                            className="discoverAllBtn"
                            href="#"
                            onClick={() => setIsOpen(true)}
                        >
                            Write a review
                        </a>
                    </div>
                )}
            </div>

            {isOpen && <NewReview setIsOpen={setIsOpen} isOpen={isOpen} />}
        </>
    );
};

export default Reviews;
