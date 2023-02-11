import React, {useRef} from 'react';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './blogMobile.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const BlogMobile = props => {
    const { isMasked } = props;
    const sliderRef = React.useRef(null);
    const paginationNextRef = useRef(null);
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <section className="blogSection mobile-section py-55">
            <div className="blogSection_bg">
                <div className="container">
                    <div className="blogSection_top">
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="blogSection_top-left">
                                <div className="d-flex align-items-start justify-content-between flex-column">
                                    <div>
                                        <h3 className="sectionHeading my-30 mt-0">Read our latest blog posts</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="blogSection">
                                <Swiper useref={sliderRef}
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    pagination={{
                                        el: ".swiper-pagination-a",
                                        clickable: true,
                                        renderBullet: (index, className) => {
                                            console.log(index,className);
                                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                                        }
                                    }}
                                    breakpoints={{
                                        280: {
                                            slidesPerView: 1,
                                        },
                                        320: {
                                            slidesPerView: 1.5,
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
                                    speed={800}
                                >
                                    <SwiperSlide>
                                        <div className="blogBox" data-aos="fade-down" data-aos-mirror="true" data-aos-duration="1000">
                                            <img src="./public/images/blog-img1.jpg" alt="blog-img" className="img-fluid"/>
                                            <div className="blogBox_txt" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                                <span>August 11, 2022 / 5 min read</span>
                                                <h3>To Rinse or Not to Rinse? A Guide to  Our Moisture Surge Conditioner</h3>
                                                <p>In recent years, the data industry has been moving from data as an asset to data as a product thinking.  This is definitely...</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="blogBox" data-aos="fade-down" data-aos-duration="1000">
                                            <img src="./public/images/blog-img2.jpg" alt="blog-img" className="img-fluid"/>
                                            <div className="blogBox_txt" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                                <span>August 11, 2022 / 5 min read</span>
                                                <h3>To Rinse or Not to Rinse? A Guide to  Our Moisture Surge Conditioner</h3>
                                                <p>In recent years, the data industry has been moving from data as an asset to data as a product thinking.  This is definitely...</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="blogBox" data-aos="fade-down" data-aos-duration="1000">
                                            <img src="./public/images/blog-img3.jpg" alt="blog-img" className="img-fluid"/>
                                            <div className="blogBox_txt" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                                <span>August 11, 2022 / 5 min read</span>
                                                <h3>To Rinse or Not to Rinse? A Guide to  Our Moisture Surge Conditioner</h3>
                                                <p>In recent years, the data industry has been moving from data as an asset to data as a product thinking.  This is definitely...</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="blogBox" data-aos="fade-down" data-aos-duration="1000">
                                            <img src="./public/images/blog-img4.jpg" alt="blog-img" className="img-fluid"/>
                                            <div className="blogBox_txt" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                                <span>August 11, 2022 / 5 min read</span>
                                                <h3>To Rinse or Not to Rinse? A Guide to  Our Moisture Surge Conditioner</h3>
                                                <p>In recent years, the data industry has been moving from data as an asset to data as a product thinking.  This is definitely...</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <div className="swiper-pagination-a" ref={paginationNextRef} />
                                </Swiper>
                            </div>
                            <a href="#" className="discoverAllBtn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogMobile;

BlogMobile.propTypes = {};
