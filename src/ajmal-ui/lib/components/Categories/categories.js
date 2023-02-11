import React, { useEffect } from 'react';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './categories.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = props => {
    const { isMasked } = props;

    useEffect(() => {
        AOS.init();
    }, [])

    useScrollLock(isMasked);

    return (
        <section className="blogSection desktop-only py-55">
            <div className="blogSection_bg">
                <div className="container">
                    <div className="blogSection_top">
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="blogSection_top-left">
                                <div className="d-flex align-items-start justify-content-between flex-column">
                                    <div>
                                        <h3 className="sectionHeading my-30 mt-0">Read our latest blog posts</h3>
                                        <a href="#" className="discoverAllBtn">Read More</a>
                                    </div>
                                    <div className="blogBox blogBox-one" data-aos="fade-down" data-aos-mirror="true" data-aos-duration="1000">
                                        <img src="./public/images/blog-img1.jpg" alt="blog-img" className="img-fluid"/>
                                        <div className="blogBox_txt" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                            <span>August 11, 2022 / 5 min read</span>
                                            <h3>To Rinse or Not to Rinse? A Guide to  Our Moisture Surge Conditioner</h3>
                                            <p>In recent years, the data industry has been moving from data as an asset to data as a product thinking.  This is definitely...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blogSection_top-right">
                                <div className="blogBox blogBox-two" data-aos="fade-down" data-aos-duration="1000">
                                    <img src="./public/images/blog-img2.jpg" alt="blog-img" className="img-fluid"/>
                                    <div className="blogBox_txt" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                        <span>August 11, 2022 / 5 min read</span>
                                        <h3>To Rinse or Not to Rinse? A Guide to  Our Moisture Surge Conditioner</h3>
                                        <p>In recent years, the data industry has been moving from data as an asset to data as a product thinking.  This is definitely...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blogSection_bottom">
                        <div className="d-flex align-items-top justify-content-between">
                            <div className="blogBox blogBox-three" data-aos="fade-down" data-aos-duration="1000">
                                <img src="./public/images/blog-img3.jpg" alt="blog-img" className="img-fluid"/>
                                <div className="blogBox_txt" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                    <span>August 11, 2022 / 5 min read</span>
                                    <h3>To Rinse or Not to Rinse? A Guide to  Our Moisture Surge Conditioner</h3>
                                    <p>In recent years, the data industry has been moving from data as an asset to data as a product thinking.  This is definitely...</p>
                                </div>
                            </div>
                            <div className="blogBox blogBox-four" data-aos="fade-down" data-aos-duration="1000">
                                <img src="./public/images/blog-img4.jpg" alt="blog-img" className="img-fluid"/>
                                <div className="blogBox_txt" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                    <span>August 11, 2022 / 5 min read</span>
                                    <h3>To Rinse or Not to Rinse? A Guide to  Our Moisture Surge Conditioner</h3>
                                    <p>In recent years, the data industry has been moving from data as an asset to data as a product thinking.  This is definitely...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;

Categories.propTypes = {};
