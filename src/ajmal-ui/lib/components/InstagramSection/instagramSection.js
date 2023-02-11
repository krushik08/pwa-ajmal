import React from 'react';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './instagramSection.module.css';
import SlickSlider from "react-slick";

const InstagramSection = props => {
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
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1.5,
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

    return (
        <section className="instagramSection py-55">
            <div className="container">
                <div className="instagramSection_top d-flex align-items-center justify-content-between my-30 mt-0">
                    <h3 className="sectionHeading mb-0">Instagram</h3>
                    <a href="#" className="readMoreBtn desktop-only">@ajmalperfumes<img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                </div>
                <div className="instagramSection_slider sliderIcon">
                    <SlickSlider
                        dots={true}
                        infinite={false}
                        speed={300}
                        slidesToShow={4}
                        slidesToScroll={1}
                        spaceBetween={20}
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
                    </SlickSlider>
                </div>
                <a href="#" className="discoverAllBtn mobile-section">@ajmalperfumes</a>
            </div>
        </section>
    );
};

export default InstagramSection;

InstagramSection.propTypes = {};
