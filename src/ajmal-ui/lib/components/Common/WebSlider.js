import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Style.module.css';
import { Keyboard, Pagination, Navigation, Mousewheel } from 'swiper';
import ProductCard from './ProductCard';

export function WebSlider({ ProductCardData }) {
    return (
        <>
            <Swiper
                className={styles.swiper}
                slidesPerView={4}
                spaceBetween={10}
                keyboard={{
                    enabled: true
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                loop={false}
                loopFillGroupWithBlank={true}
                modules={[Pagination, Mousewheel, Keyboard, Navigation]}
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
