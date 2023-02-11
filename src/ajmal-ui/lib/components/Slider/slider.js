import React from 'react';
import globalCSS from './slider.module.css';
import SlickSlider from "react-slick";

let sliderSettings = () => {
   return {
        dots: true,
        infinite: false,
        speed: 0,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:"<button type='button' className='slick-next pull-left'><img className='img-fluid' src='images/next-arrow-rounded.svg'></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    }
}

const Slider = props =>
    (
        <div className='bannerSlider'>
            <SlickSlider {...sliderSettings}>
            <div className="bannerSection_cnt" id="cnt1">
                <div className="row m-0">
                    <div className="col-md-7 bannerSection_left">
                        <h1>Ajmal <span>Perfumes</span> <br/>
                        Fragrances that  <span>Delight</span> </h1>
                        <p>Nothing unlocks an old memory better than smell, be it the memory of lost <br/>love or of a fond friend. At Ajmal we help towards recreating those memories <br/> through our fragrances.</p>
                        <a className="discoverAllBtn" href="#">Discover all</a>
                    </div>
                </div>
            </div>
            <div className="bannerSection_cnt" id="cnt2">
                <div className="row m-0">
                    <div className="col-md-7 bannerSection_left">
                        <h1>Ajmal <span>Perfumes</span> <br/>
                        Fragrances that  <span>Delight</span> </h1>

                        <p>Nothing unlocks an old memory better than smell, be it the memory of lost <br/>love or of a fond friend. At Ajmal we help towards recreating those memories <br/> through our fragrances.</p>
                        <a className="discoverAllBtn" href="#">Discover all</a>
                    </div>
                </div>
            </div>
            <div className="bannerSection_cnt" id="cnt3">
                <div className="row m-0">
                    <div className="col-md-7 bannerSection_left">
                        <h1>Ajmal <span>Perfumes</span> <br/>
                        Fragrances that  <span>Delight</span> </h1>

                        <p>Nothing unlocks an old memory better than smell, be it the memory of lost <br/>love or of a fond friend. At Ajmal we help towards recreating those memories <br/> through our fragrances.</p>
                        <a className="discoverAllBtn" href="#">Discover all</a>
                    </div>
                </div>
            </div>
            </SlickSlider>
            <div className="bannerSlider_wrapper">
                <div className="swiper bannerSlider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide bannerSlider_item bannerSlider_item--1" data-target="cnt1">
                            <div className="">
                                <div className="">
                                    <div className="bannerSection_right">
                                        <div className="bannerSection_productBox">
                                            <img src="./public/images/amber-wood-noir.png" className="img-fluid mx-auto" alt=""/>
                                            <div className="bannerSection_productBox_cnt">
                                                <p>Eau de parfume / 75 ML / WOMEN</p>
                                                <h2>Amber Wood Noir</h2>
                                                <div className="bannerSection_productBox_price">24 AED</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide bannerSlider_item bannerSlider_item--2" data-target="cnt2">
                            <div className="">
                                <div className="">
                                    <div className="bannerSection_right">
                                        <div className="bannerSection_productBox">
                                            <img src="./public/images/amber-wood-noir-2.png" className="img-fluid mx-auto" alt=""/>
                                            <div className="bannerSection_productBox_cnt">
                                                <p>Eau de parfume / 75 ML / WOMEN</p>
                                                <h2>Amber Wood Noir</h2>
                                                <div className="bannerSection_productBox_price">24 AED</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide bannerSlider_item bannerSlider_item--3" data-target="cnt3">
                            <div className="">
                                <div className="">
                                    <div className="bannerSection_right">
                                        <div className="bannerSection_productBox">
                                            <img src="./public/images/amber-wood-noir-3.png" className="img-fluid mx-auto" alt=""/>
                                            <div className="bannerSection_productBox_cnt">
                                                <p>Eau de parfume / 75 ML / WOMEN</p>
                                                <h2>Amber Wood Noir</h2>
                                                <div className="bannerSection_productBox_price">24 AED</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type='button' className='banner-swiper-next pull-left'><img className='img-fluid' src='./public/images/next-arrow-rounded.svg' /></button>
            <div className="swiper-pagination1"></div>
        </div>
    );

Slider.globalCSS = globalCSS;

export default Slider;
