import React from 'react';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './pressMediaSec.module.css';
import SlickSlider from "react-slick";

const PressMediaSec = props => {
    const { isMasked } = props;
    let sliderSettings = () => {
        return {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1.2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },
            ]
        }
    }
    useScrollLock(isMasked);

    return (
        <section className="pressMediaSec py-55 pt-0">
            <div className="container">
                <div className="pressMediaSec_top d-flex align-items-center justify-content-between my-30 mt-0">
                    <h3 className="sectionHeading mb-0">Press & media</h3>
                    <a href="#" className="readMoreBtn desktop-only">Discover all <img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                </div>
                <div className="pressMediaSec_slider sliderIcon">
                    <SlickSlider
                        dots={true}
                        infinite={false}
                        speed={300}
                        slidesToShow={4}
                        slidesToScroll={1}
                        responsive= {[
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                }
                            },
                            {
                                breakpoint: 450,
                                settings: {
                                    slidesToShow: 1.5,
                                    arrows: false,
                                }
                            },
                            {
                                breakpoint: 375,
                                settings: {
                                    slidesToShow: 1.5,
                                    arrows: false,
                                }
                            },
                        ]}
                    >
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
                    </SlickSlider>
                </div>
                <a href="#" className="discoverAllBtn mobile-section">Discover all</a>
            </div>
        </section>
    );
};

export default PressMediaSec;

PressMediaSec.propTypes = {};
