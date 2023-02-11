import React, {useRef} from 'react';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './reviewSection.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const ReviewSection = props => {

    const sliderRef = useRef(null);
    const paginationRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <section className="reviewSection desktop-only py-55 pt-0">
            <div className="container">
                <div className="reviewSection_top">
                    <h3 className="sectionHeading">Reviews</h3>
                </div>
                <div className="reviewSection_inner position-relative">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="reviewBox_img active" id="img1">
                                <img src="./public/images/review-product.png" className="img-fluid" alt="product"/>
                            </div>

                            <div className="reviewBox_img" id="img2">
                                <img src="./public/images/product-3.png" className="img-fluid" alt="product"/>
                            </div>

                            <div className="reviewBox_img" id="img3">
                                <img src="./public/images/product-2.png" className="img-fluid" alt="product"/>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="reviewSection_slider swiper swiperSliderIcon">
                                <Swiper
                                    useref={sliderRef}
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    speed={500}
                                    navigation={{
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current
                                    }}
                                    onSlideChange={ ({ activeIndex }) =>{
                                        document.querySelectorAll(".reviewBox_img").forEach((item,index) => {
                                            item.className = (activeIndex == index)? "reviewBox_img active":"reviewBox_img";
                                        })
                                    }}
                                    pagination={{
                                        el: paginationRef.current,
                                        clickable: true,
                                        type: 'bullets',
                                        renderBullet: (index, className) => {
                                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                                        }
                                    }}
                                >
                                    <SwiperSlide
                                        className="reviewSection_sliderItem"
                                        data-target="img1"
                                    >
                                            <div className="reviewBox">
                                                <div className="d-flex align-items-center">
                                                    <div className="reviewBox_txt">
                                                        <h3>Unlocks an old memory</h3>
                                                        <p>Nothing unlocks an old memory better than smell, be it the memory of lost love or of a fond friend. At Ajmal we help towards recreating those memories through our fragrances.</p>
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
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        className="reviewSection_sliderItem"
                                        data-target="img2"
                                    >
                                            <div className="reviewBox">
                                                <div className="d-flex align-items-center">
                                                    <div className="reviewBox_txt">
                                                        <h3>Unlocks an old memory</h3>
                                                        <p>Nothing unlocks an old memory better than smell, be it the memory of lost love or of a fond friend. At Ajmal we help towards recreating those memories through our fragrances.</p>
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
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        className="reviewSection_sliderItem"
                                        data-target="img3"
                                    >
                                            <div className="reviewBox">
                                                <div className="d-flex align-items-center">
                                                    <div className="reviewBox_txt">
                                                        <h3>Unlocks an old memory</h3>
                                                        <p>Nothing unlocks an old memory better than smell, be it the memory of lost love or of a fond friend. At Ajmal we help towards recreating those memories through our fragrances.</p>
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
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="swiperSliderIcon">
                        <div className="swiper-pagination-review" ref={paginationRef}></div>
                        <div className="swiper-button-next" ref={navigationNextRef}/>
                        <div className="swiper-button-prev" ref={navigationPrevRef}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;

ReviewSection.propTypes = {};
