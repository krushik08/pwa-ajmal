import React, { useRef, useState, useEffect } from "react";
import globalCSS from './swipSlider.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Image from "@magento/venia-ui/lib/components/Image";
import ProductCard from "../ProductCard";
import { any } from 'prop-types';


const SwipSlider = props => {
    const {isMasked,items} = props;
    const sliderRef = useRef(null);
    const paginationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    if(!items){
        return <></>;
    }
    const slides = items.map(product => (<SwiperSlide key={product.id}><ProductCard item={product} /></SwiperSlide>));
        return (
            <>
                <Swiper useref={sliderRef}
                    modules={[Navigation, Pagination]}
                    slidesPerView={4}
                    spaceBetween={20}
                    pagination={{
                        el: ".swiper-pagination-a",
                        clickable: true,
                        type: 'bullets',
                        renderBullet: (index, className) => {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        }
                    }}
                    className="slide-out-animation"
                    watchSlidesVisibility={true}
                    breakpoints={{
                        280: {
                            slidesPerView: 1,
                        },
                        320: {
                            slidesPerView: 2,
                        },
                        375: {
                            slidesPerView: 2,
                        },
                        425: {
                            slidesPerView: 2,
                        },
                        540: {
                            slidesPerView: 2,
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
                        nextEl: navigationNextRef.current,
                    }}
                >
                    {slides}
                    <div className="swiper-pagination-a" ref={paginationNextRef} />
                </Swiper>

                <div className="swiper-button-next" ref={navigationNextRef}/>
                <div className="swiper-button-prev" ref={navigationPrevRef}/>
            </>
        );
};

export default SwipSlider;

SwipSlider.propTypes = {
    isMasked: any,
    item: any
};
