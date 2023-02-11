import React, { useState } from 'react';
import styles from './productPage.module.css';
import WinterIcon from '../Utils/WinterIcon';
import SpringIcon from '../Utils/SpringIcon';
import SummerIcon from '../Utils/SummerIcon';
import FallIcon from '../Utils/FallIcon';
import DayIcon from '../Utils/DayIcon';
import NightIcon from '../Utils/NightIcon';
import useMobileView from '../Utils/MobileView';

import { Keyboard, Pagination, Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const WhenToUse = () => {
    const [isHoverWinter, setIsHoverWinter] = useState(false);
    const [isHoverSpring, setIsHoverSpring] = useState(false);
    const [isHoverSummer, setIsHoverSummer] = useState(false);
    const [isHoverFall, setIsHoverFall] = useState(false);
    const [isHoverDay, setIsHoverDay] = useState(false);
    const [isHoverNight, setIsHoverNight] = useState(false);
    const isMobile = useMobileView();

    return (
        <>
            <div className={styles.productCommonWrapperMain}>
                <span className={styles.productCommonTitle}>When to use</span>
                {!isMobile ? (
                    <div className={styles.productBoxWrapper}>
                        {/* Winter */}
                        <div
                            className={styles.productUseBox}
                            onMouseEnter={() => setIsHoverWinter(true)}
                            onMouseLeave={() => setIsHoverWinter(false)}
                        >
                            <WinterIcon
                                color={!isHoverWinter ? '#BC8B57' : '#ffffff'}
                            />

                            <div className={styles.productContentBox}>
                                <span className={styles.productContentLabel}>
                                    Winter
                                </span>

                                <span className={styles.productContentDesc}>
                                    100% natural pure rose water toner, steam
                                    distilled from the Roses of Kannauj
                                </span>
                            </div>

                            <div
                                className={` ${styles.progressElement} ${
                                    styles.progressElementWinter
                                }`}
                            >
                                <div className={styles.progressContainer}>
                                    <progress max="100" value="81" />
                                </div>
                            </div>
                        </div>

                        {/* Spring */}
                        <div
                            className={styles.productUseBox}
                            onMouseEnter={() => setIsHoverSpring(true)}
                            onMouseLeave={() => setIsHoverSpring(false)}
                        >
                            <SpringIcon
                                color={!isHoverSpring ? '#BC8B57' : '#ffffff'}
                            />

                            <div className={styles.productContentBox}>
                                <span className={styles.productContentLabel}>
                                    Spring
                                </span>

                                <span className={styles.productContentDesc}>
                                    100% natural pure rose water toner, steam
                                    distilled from the Roses of Kannauj
                                </span>
                            </div>

                            <div
                                className={` ${styles.progressElement} ${
                                    styles.progressElementSpring
                                }`}
                            >
                                <div className={styles.progressContainer}>
                                    <progress max="100" value="33" />
                                </div>
                            </div>
                        </div>

                        {/* Summer */}
                        <div
                            className={styles.productUseBox}
                            onMouseEnter={() => setIsHoverSummer(true)}
                            onMouseLeave={() => setIsHoverSummer(false)}
                        >
                            <SummerIcon
                                color={!isHoverSummer ? '#BC8B57' : '#ffffff'}
                            />

                            <div className={styles.productContentBox}>
                                <span className={styles.productContentLabel}>
                                    Summer
                                </span>

                                <span className={styles.productContentDesc}>
                                    100% natural pure rose water toner, steam
                                    distilled from the Roses of Kannauj
                                </span>
                            </div>

                            <div
                                className={` ${styles.progressElement} ${
                                    styles.progressElementSummer
                                }`}
                            >
                                <div className={styles.progressContainerYellow}>
                                    <progress max="100" value="61" />
                                </div>
                            </div>
                        </div>

                        {/* Fall */}
                        <div
                            className={styles.productUseBox}
                            onMouseEnter={() => setIsHoverFall(true)}
                            onMouseLeave={() => setIsHoverFall(false)}
                        >
                            <FallIcon
                                color={!isHoverFall ? '#BC8B57' : '#ffffff'}
                            />

                            <div className={styles.productContentBox}>
                                <span className={styles.productContentLabel}>
                                    Fall
                                </span>

                                <span className={styles.productContentDesc}>
                                    100% natural pure rose water toner, steam
                                    distilled from the Roses of Kannauj
                                </span>
                            </div>

                            <div
                                className={` ${styles.progressElement} ${
                                    styles.progressElementFall
                                }`}
                            >
                                <div className={styles.progressContainer}>
                                    <progress max="100" value="34" />
                                </div>
                            </div>
                        </div>

                        {/* Day */}
                        <div
                            className={styles.productUseBox}
                            onMouseEnter={() => setIsHoverDay(true)}
                            onMouseLeave={() => setIsHoverDay(false)}
                        >
                            <DayIcon
                                color={!isHoverDay ? '#BC8B57' : '#ffffff'}
                            />

                            <div className={styles.productContentBox}>
                                <span className={styles.productContentLabel}>
                                    Day
                                </span>

                                <span className={styles.productContentDesc}>
                                    100% natural pure rose water toner, steam
                                    distilled from the Roses of Kannauj
                                </span>
                            </div>

                            <div
                                className={` ${styles.progressElement} ${
                                    styles.progressElementDay
                                }`}
                            >
                                <div className={styles.progressContainerYellow}>
                                    <progress max="100" value="61" />
                                </div>
                            </div>
                        </div>

                        {/* Night */}
                        <div
                            className={styles.productUseBox}
                            onMouseEnter={() => setIsHoverNight(true)}
                            onMouseLeave={() => setIsHoverNight(false)}
                        >
                            <NightIcon
                                color={!isHoverNight ? '#BC8B57' : '#ffffff'}
                            />

                            <div className={styles.productContentBox}>
                                <span className={styles.productContentLabel}>
                                    Night
                                </span>

                                <span className={styles.productContentDesc}>
                                    100% natural pure rose water toner, steam
                                    distilled from the Roses of Kannauj
                                </span>
                            </div>

                            <div
                                className={` ${styles.progressElement} ${
                                    styles.progressElementNight
                                }`}
                            >
                                <div className={styles.progressContainer}>
                                    <progress max="100" value="34" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Swiper
                        className={styles.swiper}
                        slidesPerView={'auto'}
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
                        <SwiperSlide>
                            {/* Winter */}
                            <div
                                className={styles.productUseBox}
                                onMouseEnter={() => setIsHoverWinter(true)}
                                onMouseLeave={() => setIsHoverWinter(false)}
                            >
                                <WinterIcon
                                    color={
                                        !isHoverWinter ? '#BC8B57' : '#ffffff'
                                    }
                                />

                                <div className={styles.productContentBox}>
                                    <span
                                        className={styles.productContentLabel}
                                    >
                                        Winter
                                    </span>

                                    <span className={styles.productContentDesc}>
                                        100% natural pure rose water toner,
                                        steam distilled from the Roses of
                                        Kannauj
                                    </span>
                                </div>

                                <div
                                    className={` ${styles.progressElement} ${
                                        styles.progressElementWinter
                                    }`}
                                >
                                    <div className={styles.progressContainer}>
                                        <progress max="100" value="81" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Spring */}
                            <div
                                className={styles.productUseBox}
                                onMouseEnter={() => setIsHoverSpring(true)}
                                onMouseLeave={() => setIsHoverSpring(false)}
                            >
                                <SpringIcon
                                    color={
                                        !isHoverSpring ? '#BC8B57' : '#ffffff'
                                    }
                                />

                                <div className={styles.productContentBox}>
                                    <span
                                        className={styles.productContentLabel}
                                    >
                                        Spring
                                    </span>

                                    <span className={styles.productContentDesc}>
                                        100% natural pure rose water toner,
                                        steam distilled from the Roses of
                                        Kannauj
                                    </span>
                                </div>

                                <div
                                    className={` ${styles.progressElement} ${
                                        styles.progressElementSpring
                                    }`}
                                >
                                    <div className={styles.progressContainer}>
                                        <progress max="100" value="33" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Summer */}
                            <div
                                className={styles.productUseBox}
                                onMouseEnter={() => setIsHoverSummer(true)}
                                onMouseLeave={() => setIsHoverSummer(false)}
                            >
                                <SummerIcon
                                    color={
                                        !isHoverSummer ? '#BC8B57' : '#ffffff'
                                    }
                                />

                                <div className={styles.productContentBox}>
                                    <span
                                        className={styles.productContentLabel}
                                    >
                                        Summer
                                    </span>

                                    <span className={styles.productContentDesc}>
                                        100% natural pure rose water toner,
                                        steam distilled from the Roses of
                                        Kannauj
                                    </span>
                                </div>

                                <div
                                    className={` ${styles.progressElement} ${
                                        styles.progressElementSummer
                                    }`}
                                >
                                    <div
                                        className={
                                            styles.progressContainerYellow
                                        }
                                    >
                                        <progress max="100" value="61" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className={styles.productUseBox}
                                onMouseEnter={() => setIsHoverFall(true)}
                                onMouseLeave={() => setIsHoverFall(false)}
                            >
                                <FallIcon
                                    color={!isHoverFall ? '#BC8B57' : '#ffffff'}
                                />

                                <div className={styles.productContentBox}>
                                    <span
                                        className={styles.productContentLabel}
                                    >
                                        Fall
                                    </span>

                                    <span className={styles.productContentDesc}>
                                        100% natural pure rose water toner,
                                        steam distilled from the Roses of
                                        Kannauj
                                    </span>
                                </div>

                                <div
                                    className={` ${styles.progressElement} ${
                                        styles.progressElementFall
                                    }`}
                                >
                                    <div className={styles.progressContainer}>
                                        <progress max="100" value="34" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className={styles.productUseBox}
                                onMouseEnter={() => setIsHoverDay(true)}
                                onMouseLeave={() => setIsHoverDay(false)}
                            >
                                <DayIcon
                                    color={!isHoverDay ? '#BC8B57' : '#ffffff'}
                                />

                                <div className={styles.productContentBox}>
                                    <span
                                        className={styles.productContentLabel}
                                    >
                                        Day
                                    </span>

                                    <span className={styles.productContentDesc}>
                                        100% natural pure rose water toner,
                                        steam distilled from the Roses of
                                        Kannauj
                                    </span>
                                </div>

                                <div
                                    className={` ${styles.progressElement} ${
                                        styles.progressElementDay
                                    }`}
                                >
                                    <div
                                        className={
                                            styles.progressContainerYellow
                                        }
                                    >
                                        <progress max="100" value="61" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Night */}
                            <div
                                className={styles.productUseBox}
                                onMouseEnter={() => setIsHoverNight(true)}
                                onMouseLeave={() => setIsHoverNight(false)}
                            >
                                <NightIcon
                                    color={
                                        !isHoverNight ? '#BC8B57' : '#ffffff'
                                    }
                                />

                                <div className={styles.productContentBox}>
                                    <span
                                        className={styles.productContentLabel}
                                    >
                                        Night
                                    </span>

                                    <span className={styles.productContentDesc}>
                                        100% natural pure rose water toner,
                                        steam distilled from the Roses of
                                        Kannauj
                                    </span>
                                </div>

                                <div
                                    className={` ${styles.progressElement} ${
                                        styles.progressElementNight
                                    }`}
                                >
                                    <div className={styles.progressContainer}>
                                        <progress max="100" value="34" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                )}
            </div>
        </>
    );
};

export default WhenToUse;
