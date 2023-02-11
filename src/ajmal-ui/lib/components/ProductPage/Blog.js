import React from 'react';
import styles from './productPage.module.css';
import NextArrow from '../../../../../public/images/next-arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import useMobileView from '../Utils/MobileView';

const Blog = () => {
    const isMobile = useMobileView();

    return (
        <>
            <div className={styles.productCommonWrapperMain}>
                <div className={styles.productReviewTopWrapper}>
                    <div>
                        <span className={styles.productCommonTitle}>
                            Ajmal blog
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

                <div className={styles.productBlogBoxWrapper}>
                    <Swiper
                        pagination={{
                            clickable: true
                        }}
                        modules={[Pagination]}
                        className={styles.productSwiper}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                    >
                        <SwiperSlide className={styles.productSwiperSlide}>
                            <div className={styles.productBlogBox}>
                                <img
                                    src="./public/images/blog-img1.jpg"
                                    alt="blog-img"
                                    className="img-fluid"
                                />
                                <div
                                    className={styles.productBlogBoxTxt}
                                    data-aos="fade-up"
                                >
                                    <span>August 11, 2022 / 5 min read</span>
                                    <h3>
                                        To Rinse or Not to Rinse? A Guide to Our
                                        Moisture Surge Conditioner
                                    </h3>
                                    <p>
                                        In recent years, the data industry has
                                        been moving from data as an asset to
                                        data as a product thinking. This is
                                        definitely...
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.productSwiperSlide}>
                            <div className={styles.productBlogBox}>
                                <img
                                    src="./public/images/blog-img4.jpg"
                                    alt="blog-img"
                                    className="img-fluid"
                                />
                                <div
                                    className={styles.productBlogBoxTxt}
                                    data-aos="fade-up"
                                >
                                    <span>August 11, 2022 / 5 min read</span>
                                    <h3>
                                        To Rinse or Not to Rinse? A Guide to Our
                                        Moisture Surge Conditioner
                                    </h3>
                                    <p>
                                        In recent years, the data industry has
                                        been moving from data as an asset to
                                        data as a product thinking. This is
                                        definitely...
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.productSwiperSlide}>
                            <div className={styles.productBlogBox}>
                                <img
                                    src="./public/images/blog-img3.jpg"
                                    alt="blog-img"
                                    className="img-fluid"
                                />
                                <div
                                    className={styles.productBlogBoxTxt}
                                    data-aos="fade-up"
                                >
                                    <span>August 11, 2022 / 5 min read</span>
                                    <h3>
                                        To Rinse or Not to Rinse? A Guide to Our
                                        Moisture Surge Conditioner
                                    </h3>
                                    <p>
                                        In recent years, the data industry has
                                        been moving from data as an asset to
                                        data as a product thinking. This is
                                        definitely...
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.productSwiperSlide}>
                            <div className={styles.productBlogBox}>
                                <img
                                    src="./public/images/blog-img4.jpg"
                                    alt="blog-img"
                                    className="img-fluid"
                                />
                                <div
                                    className={styles.productBlogBoxTxt}
                                    data-aos="fade-up"
                                >
                                    <span>August 11, 2022 / 5 min read</span>
                                    <h3>
                                        To Rinse or Not to Rinse? A Guide to Our
                                        Moisture Surge Conditioner
                                    </h3>
                                    <p>
                                        In recent years, the data industry has
                                        been moving from data as an asset to
                                        data as a product thinking. This is
                                        definitely...
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.productSwiperSlide}>
                            <div className={styles.productBlogBox}>
                                <img
                                    src="./public/images/blog-img1.jpg"
                                    alt="blog-img"
                                    className="img-fluid"
                                />
                                <div
                                    className={styles.productBlogBoxTxt}
                                    data-aos="fade-up"
                                >
                                    <span>August 11, 2022 / 5 min read</span>
                                    <h3>
                                        To Rinse or Not to Rinse? A Guide to Our
                                        Moisture Surge Conditioner
                                    </h3>
                                    <p>
                                        In recent years, the data industry has
                                        been moving from data as an asset to
                                        data as a product thinking. This is
                                        definitely...
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.productSwiperSlide}>
                            <div className={styles.productBlogBox}>
                                <img
                                    src="./public/images/blog-img4.jpg"
                                    alt="blog-img"
                                    className="img-fluid"
                                />
                                <div
                                    className={styles.productBlogBoxTxt}
                                    data-aos="fade-up"
                                >
                                    <span>August 11, 2022 / 5 min read</span>
                                    <h3>
                                        To Rinse or Not to Rinse? A Guide to Our
                                        Moisture Surge Conditioner
                                    </h3>
                                    <p>
                                        In recent years, the data industry has
                                        been moving from data as an asset to
                                        data as a product thinking. This is
                                        definitely...
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className={styles.productReadMoreMob}>
                    {isMobile && (
                        <a className="discoverAllBtn" href="#">
                            Read more{' '}
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};

export default Blog;
