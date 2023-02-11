import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Style.module.css';
import { Keyboard, Pagination, Navigation, Mousewheel } from 'swiper';
import ProductCard from './ProductCard';

export function MobileSlider({ ProductCardData }) {
    return (
        <>
            <Swiper
                className={styles.swiper}
                slidesPerView={2}
                spaceBetween={10}
                keyboard={{
                    enabled: true
                }}
                pagination={{
                    clickable: true
                }}
                loop={false}
                loopFillGroupWithBlank={true}
                modules={[Pagination, Mousewheel, Keyboard]}
            >
                {ProductCardData.map(item => (
                    <SwiperSlide className={styles.swiperSlide}>
                        <ProductCard productData={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
