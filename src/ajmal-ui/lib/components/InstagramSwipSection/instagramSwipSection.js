import React, { useRef, useState,useEffect } from "react";
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './instagramSwipSection.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useQuery, gql } from "@apollo/client";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

const instaPosts = gql`
query GetInstagramPosts {
  getInstagramPosts(page: 1, sortField: 1, limit: 10) {
    caption
    comments_count
    ig_id
    like_count
    media_type
    media_url
    permalink
    post_id
    product_data {
      product_name
      product_url
    }
    shortcode
    store_id
    timestamp
  }
}
`;

const InstagramSwipSection = props => {
    const { isMasked } = props;
    const sliderRef = React.useRef(null);
    const paginationRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const { data, loading, error } = useQuery(instaPosts);


        if (loading) {
            return <div>loading</div>;
        }

        if (error) {
            return <div>{error}</div>;
        }

        if(data){
            return (
                <section className="instagramSection py-55">
                    <div className="container">
                        <div className="instagramSection_top d-flex align-items-center justify-content-between my-30 mt-0">
                            <h3 className="sectionHeading mb-0">Instagram</h3>
                            <a href="#" className="readMoreBtn desktop-only">@ajmalperfumes<img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                        </div>
                        <div className="instagramSection_slider sliderIcon">
                            <Swiper useref={sliderRef}
                                modules={[Navigation, Pagination]}
                                slidesPerView={4}
                                spaceBetween={0}
                                observeParents={true}
                                observer={true}
                                pagination={{
                                    el: paginationRef.current,
                                    clickable: true
                                    /*renderBullet: (index, className) => {
                                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                                    }*/
                                }}
                                watchSlidesVisibility={true}
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
                                speed={800}
                                navigation={{
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current
                                }}
                            >
                                <SwiperSlide>
                                    <div className="instagramSection_sliderItem">
                                        <div className="instabox">
                                            <img src="./public/images/insta-img1.jpg" className="img-fluid" alt="insta-img"/>
                                            <div className="overlay"></div>                          <div className="instabox_txt">
                                                <p>Planning a wedding gift, don’t miss out Patchouli wood by Ajmal Perfumes...</p>
                                                <div className="instabox_info">
                                                    <ul className="mb-0 d-flex align-items-center list-unstyled">
                                                        <li><a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/msg-icon.svg"/>
                                                                <span> 273 </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/like-icon.svg"/>
                                                                <span>  5k </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="instagramSection_sliderItem">
                                        <div className="instabox">
                                            <img src="./public/images/insta-img2.jpg" className="img-fluid" alt="insta-img"/>
                                            <div className="overlay"></div>                          <div className="instabox_txt">
                                                <p>Planning a wedding gift, don’t miss out Patchouli wood by Ajmal Perfumes...</p>
                                                <div className="instabox_info">
                                                    <ul className="mb-0 d-flex align-items-center list-unstyled">
                                                        <li><a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/msg-icon.svg"/>
                                                                <span> 273 </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/like-icon.svg"/>
                                                                <span>  5k </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="instagramSection_sliderItem">
                                        <div className="instabox">
                                            <img src="./public/images/insta-img3.jpg" className="img-fluid" alt="insta-img"/>
                                            <div className="overlay"></div>                          <div className="instabox_txt">
                                                <p>Planning a wedding gift, don’t miss out Patchouli wood by Ajmal Perfumes...</p>
                                                <div className="instabox_info">
                                                    <ul className="mb-0 d-flex align-items-center list-unstyled">
                                                        <li><a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/msg-icon.svg"/>
                                                                <span> 273 </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/like-icon.svg"/>
                                                                <span>  5k </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="instagramSection_sliderItem">
                                        <div className="instabox">
                                            <img src="./public/images/insta-img4.png" className="img-fluid" alt="insta-img"/>
                                            <div className="overlay"></div>                          <div className="instabox_txt">
                                                <p>Planning a wedding gift, don’t miss out Patchouli wood by Ajmal Perfumes...</p>
                                                <div className="instabox_info">
                                                    <ul className="mb-0 d-flex align-items-center list-unstyled">
                                                        <li><a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/msg-icon.svg"/>
                                                                <span> 273 </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/like-icon.svg"/>
                                                                <span>  5k </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="instagramSection_sliderItem">
                                        <div className="instabox">
                                            <img src="./public/images/insta-img1.jpg" className="img-fluid" alt="insta-img"/>
                                            <div className="overlay"></div>                          <div className="instabox_txt">
                                                <p>Planning a wedding gift, don’t miss out Patchouli wood by Ajmal Perfumes...</p>
                                                <div className="instabox_info">
                                                    <ul className="mb-0 d-flex align-items-center list-unstyled">
                                                        <li><a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/msg-icon.svg"/>
                                                                <span> 273 </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/like-icon.svg"/>
                                                                <span>  5k </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="instagramSection_sliderItem">
                                        <div className="instabox">
                                            <img src="./public/images/insta-img2.jpg" className="img-fluid" alt="insta-img"/>
                                            <div className="overlay"></div>                          <div className="instabox_txt">
                                                <p>Planning a wedding gift, don’t miss out Patchouli wood by Ajmal Perfumes...</p>
                                                <div className="instabox_info">
                                                    <ul className="mb-0 d-flex align-items-center list-unstyled">
                                                        <li><a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/msg-icon.svg"/>
                                                                <span> 273 </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/like-icon.svg"/>
                                                                <span>  5k </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="instagramSection_sliderItem">
                                        <div className="instabox">
                                            <img src="./public/images/insta-img3.jpg" className="img-fluid" alt="insta-img"/>
                                            <div className="overlay"></div>                          <div className="instabox_txt">
                                                <p>Planning a wedding gift, don’t miss out Patchouli wood by Ajmal Perfumes...</p>
                                                <div className="instabox_info">
                                                    <ul className="mb-0 d-flex align-items-center list-unstyled">
                                                        <li><a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/msg-icon.svg"/>
                                                                <span> 273 </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/like-icon.svg"/>
                                                                <span>  5k </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="instagramSection_sliderItem">
                                        <div className="instabox">
                                            <img src="./public/images/insta-img4.png" className="img-fluid" alt="insta-img"/>
                                            <div className="overlay"></div>                          <div className="instabox_txt">
                                                <p>Planning a wedding gift, don’t miss out Patchouli wood by Ajmal Perfumes...</p>
                                                <div className="instabox_info">
                                                    <ul className="mb-0 d-flex align-items-center list-unstyled">
                                                        <li><a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/msg-icon.svg"/>
                                                                <span> 273 </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center">
                                                                <img src="./public/images/like-icon.svg"/>
                                                                <span>  5k </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-pagination-ap" ref={paginationRef} />
                            <div className="swiper-button-next" ref={navigationNextRef}/>
                            <div className="swiper-button-prev" ref={navigationPrevRef}/>
                        </div>
                        <a href="#" className="discoverAllBtn mobile-section">@ajmalperfumes</a>
                    </div>
                </section>
            );
        }

    console.log("Instagram Section",data);

};

export default InstagramSwipSection;

InstagramSwipSection.propTypes = {};
