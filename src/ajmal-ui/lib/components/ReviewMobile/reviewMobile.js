import React from 'react';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './reviewMobile.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const ReviewMobile = props => {

    const sliderRef = React.useRef(null);
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <section className="reviewSection mobile-section py-55 pt-0">
            <div className="container">
                <div className="reviewSection_top">
                    <h3 className="sectionHeading">Reviews</h3>
                </div>
                <div className="reviewSection_inner position-relative">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="reviewSection_slider swiper sliderIcon">
                                <Swiper
                                    useref={sliderRef}
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    speed={500}
                                >
                                    <SwiperSlide
                                        className="reviewSection_sliderItem"
                                    >
                                            <div className="reviewBox">
                                                <div className="d-flex align-items-center">
                                                    <div className="reviewBox_txt">
                                                        <img src="./public/images/review-product.png" className="img-fluid" alt="product"/>
                                                        <div className="userInfo d-flex align-items-start justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div className="userInfo_img">
                                                                    <img src="./public/images/avatar-img.png" className="img-fluid" alt="user"/>
                                                                </div>
                                                                <div className="userInfo_txt">
                                                                    <h6>Sue Smit</h6>
                                                                    <p>London, United Kingdom</p>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <ul className=" d-flex list-unstyled justify-content-center">
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h3>Unlocks an old memory</h3>
                                                        <p>Nothing unlocks an old memory better than smell, be it the memory of lost love or of a fond friend. At Ajmal we help towards recreating those memories through our fragrances.</p>

                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        className="reviewSection_sliderItem"
                                    >
                                            <div className="reviewBox">
                                                <div className="d-flex align-items-center">
                                                    <div className="reviewBox_txt">
                                                        <img src="./public/images/product-3.png" className="img-fluid" alt="product"/>
                                                        <div className="userInfo d-flex align-items-start justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div className="userInfo_img">
                                                                    <img src="./public/images/avatar-img.png" className="img-fluid" alt="user"/>
                                                                </div>
                                                                <div className="userInfo_txt">
                                                                    <h6>Sue Smit</h6>
                                                                    <p>London, United Kingdom</p>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <ul className=" d-flex list-unstyled justify-content-center">
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h3>Unlocks an old memory</h3>
                                                        <p>Nothing unlocks an old memory better than smell, be it the memory of lost love or of a fond friend. At Ajmal we help towards recreating those memories through our fragrances.</p>

                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        className="reviewSection_sliderItem"
                                    >
                                            <div className="reviewBox">
                                                <div className="d-flex align-items-center">
                                                    <div className="reviewBox_txt">
                                                        <img src="./public/images/product-2.png" className="img-fluid" alt="product"/>
                                                        <div className="userInfo d-flex align-items-start justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div className="userInfo_img">
                                                                    <img src="./public/images/avatar-img.png" className="img-fluid" alt="user"/>
                                                                </div>
                                                                <div className="userInfo_txt">
                                                                    <h6>Sue Smit</h6>
                                                                    <p>London, United Kingdom</p>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <ul className=" d-flex list-unstyled justify-content-center">
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                    <li><span className="icon-star"></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h3>Unlocks an old memory</h3>
                                                        <p>Nothing unlocks an old memory better than smell, be it the memory of lost love or of a fond friend. At Ajmal we help towards recreating those memories through our fragrances.</p>

                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="swiperSliderIcon">
                        <div className="swiper-pagination-review"></div>
                    </div>
                </div>
                <a href="#" className="discoverAllBtn mobile-section mt-30">Discover all</a>
            </div>
        </section>
    );
};

export default ReviewMobile;

ReviewMobile.propTypes = {};
