import React, { useRef, useState } from "react";
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './pressMediaSecSwip.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const PressMediaSecSwip = props => {
    const { isMasked } = props;

    const sliderRef = useRef(null);
    const paginationRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <section className="pressMediaSec py-55 pt-0">
            <div className="container">
                <div className="pressMediaSec_top d-flex align-items-center justify-content-between my-30 mt-0">
                    <h3 className="sectionHeading mb-0">Press & media</h3>
                    <a href="#" className="readMoreBtn desktop-only">Discover all <img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                </div>
                <div className="pressMediaSec_slider swiperSliderIcon">
                    <Swiper useref={sliderRef}
                        modules={[Navigation, Pagination]}
                        slidesPerView={4}
                        spaceBetween={0}
                        breakpoints={{
                            280: {
                                slidesPerView: 1.1,
                            },
                            320: {
                                slidesPerView: 1.2,
                            },
                            375: {
                                slidesPerView: 1.5,
                            },
                            425: {
                                slidesPerView: 1.5,
                            },
                            540: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            993: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1600: {
                                spaceBetween: 32,
                                slidesPerView: 4,
                            }
                        }}
                        watchSlidesVisibility={true}
                        speed={800}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        pagination={{
                            el: ".swiper-pagination-ap",
                            clickable: true,
                            type: 'bullets',
                            renderBullet: (index, className) => {
                                return '<span class="' + className + '">' + (index + 1) + '</span>';
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="pressMediaSec_sliderItem">
                                <div className="box position-relative">
                                    <div className="box_bg">
                                        <div className="box_logo">
                                            <img src="./public/images/media-logo1.png" className="img-fluid" alt="logo"/>
                                        </div>
                                        <div className="box_txt">
                                            <div className="top">
                                                <h5>Valentine’s Day</h5>
                                                <p>8 February 2022, Dubai, United Arab Emirates This year, Ajmal Perfumes invites you to celebrate and pamper the one you love with a thoughtful and considerate gift. An exquisite, luxurious fragrance is an especially intimate and personal gift – the ideal way to show them how important they are to you. Read on to learn about our top picks for luxury gifts for your beloved husband...</p>
                                            </div>
                                            <div className="bottom">
                                            <a href="#" className="readMoreBtn">Read more <img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pressMediaSec_sliderItem">
                                <div className="box position-relative">
                                    <div className="box_bg">
                                        <div className="box_logo">
                                            <img src="./public/images/media-logo2.png" className="img-fluid" alt="logo"/>
                                        </div>
                                        <div className="box_txt">
                                            <div className="top">
                                                <h5>Valentine’s Day</h5>
                                                <p>8 February 2022, Dubai, United Arab Emirates This year, Ajmal Perfumes invites you to celebrate and pamper the one you love with a thoughtful and considerate gift. An exquisite, luxurious fragrance is an especially intimate and personal gift – the ideal way to show them how important they are to you. Read on to learn about our top picks for luxury gifts for your beloved husband...</p>
                                            </div>
                                            <div className="bottom">
                                            <a href="#" className="readMoreBtn">Read more <img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pressMediaSec_sliderItem">
                                <div className="box position-relative">
                                    <div className="box_bg">
                                        <div className="box_logo">
                                            <img src="./public/images/media-logo3.png" className="img-fluid" alt="logo"/>
                                        </div>
                                        <div className="box_txt">
                                            <div className="top">
                                                <h5>Valentine’s Day</h5>
                                                <p>8 February 2022, Dubai, United Arab Emirates This year, Ajmal Perfumes invites you to celebrate and pamper the one you love with a thoughtful and considerate gift. An exquisite, luxurious fragrance is an especially intimate and personal gift – the ideal way to show them how important they are to you. Read on to learn about our top picks for luxury gifts for your beloved husband...</p>
                                            </div>
                                            <div className="bottom">
                                            <a href="#" className="readMoreBtn">Read more <img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pressMediaSec_sliderItem">
                                <div className="box position-relative">
                                    <div className="box_bg">
                                        <div className="box_logo">
                                            <img src="./public/images/media-logo1.png" className="img-fluid" alt="logo"/>
                                        </div>
                                        <div className="box_txt">
                                            <div className="top">
                                                <h5>Valentine’s Day</h5>
                                                <p>8 February 2022, Dubai, United Arab Emirates This year, Ajmal Perfumes invites you to celebrate and pamper the one you love with a thoughtful and considerate gift. An exquisite, luxurious fragrance is an especially intimate and personal gift – the ideal way to show them how important they are to you. Read on to learn about our top picks for luxury gifts for your beloved husband...</p>
                                            </div>
                                            <div className="bottom">
                                            <a href="#" className="readMoreBtn">Read more <img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pressMediaSec_sliderItem">
                                <div className="box position-relative">
                                    <div className="box_bg">
                                        <div className="box_logo">
                                            <img src="./public/images/media-logo2.png" className="img-fluid" alt="logo"/>
                                        </div>
                                        <div className="box_txt">
                                            <div className="top">
                                                <h5>Valentine’s Day</h5>
                                                <p>8 February 2022, Dubai, United Arab Emirates This year, Ajmal Perfumes invites you to celebrate and pamper the one you love with a thoughtful and considerate gift. An exquisite, luxurious fragrance is an especially intimate and personal gift – the ideal way to show them how important they are to you. Read on to learn about our top picks for luxury gifts for your beloved husband...</p>
                                            </div>
                                            <div className="bottom">
                                            <a href="#" className="readMoreBtn">Read more <img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pressMediaSec_sliderItem">
                                <div className="box position-relative">
                                    <div className="box_bg">
                                        <div className="box_logo">
                                            <img src="./public/images/media-logo3.png" className="img-fluid" alt="logo"/>
                                        </div>
                                        <div className="box_txt">
                                            <div className="top">
                                                <h5>Valentine’s Day</h5>
                                                <p>8 February 2022, Dubai, United Arab Emirates This year, Ajmal Perfumes invites you to celebrate and pamper the one you love with a thoughtful and considerate gift. An exquisite, luxurious fragrance is an especially intimate and personal gift – the ideal way to show them how important they are to you. Read on to learn about our top picks for luxury gifts for your beloved husband...</p>
                                            </div>
                                            <div className="bottom">
                                            <a href="#" className="readMoreBtn">Read more <img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="swiper-pagination-ap" ref={paginationRef} />
                    </Swiper>
                    <div className="swiper-button-next" ref={navigationNextRef}/>
                    <div className="swiper-button-prev" ref={navigationPrevRef}/>
                </div>
                <a href="#" className="discoverAllBtn mobile-section">Discover all</a>
            </div>
        </section>
    );
};

export default PressMediaSecSwip;

PressMediaSecSwip.propTypes = {};
