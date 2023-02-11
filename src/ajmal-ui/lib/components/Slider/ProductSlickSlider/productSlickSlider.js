import React from 'react';
import SlickSlider from "react-slick";
import globalCSS from './productSlider.module.css';

const ProductSlickSlider = props => {
    const { isMasked } = props;
    return (
        <div className="swiper-wrapper">
            <SlickSlider
                dots={true}
                spaceBetween={20}
                arrows={true}
                infinite={false}
                speed={300}
                slidesToShow={4}
                slidesToScroll={1}
                className="swiper-slide"
            >
                <div className="swiper-slide">
                    <div className="productCard">
                        <div className="productCard_sliderSpace">
                            <div className="productCard_inner productCard_inner--light">
                                <div className="productCard_top d-flex align-item-start justify-content-center">
                                    <a href="#" className="productBadge"><img src="./public/images/video-icon.svg"/></a>
                                    <div className="centerImg">
                                        <img src="./public/images/product-1.png"  className="img-fluid" alt="product-img"/>
                                        <span className="outofstock">OUT OF STOCK</span>
                                    </div>

                                    <a href="#" className="productLike"><em className="icon-favorite_outline"></em></a>
                                </div>
                                <div className="productCard_center text-center">

                                    <ul className="rating d-flex list-unstyled justify-content-center">
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <p>32</p>
                                    </ul>
                                    <span className="offer">50%</span>
                                    <ul className="category d-flex list-unstyled justify-content-center mb-0">
                                        <li>OIL PARFUM</li>
                                        <li>75ML</li>
                                        <li>WOMEN</li>
                                    </ul>
                                    <h3>Jannatul Fridaus</h3>
                                    <span className="price">12 AED <del>24 AED</del></span>
                                </div>
                                <div className="productCard_bottom">
                                    <div className="viewProduct">
                                        <ul className="list-unstyled d-flex justify-content-between mb-0">
                                            <li className="text-center">
                                                <img src="./public/images/rose-img.svg"  className="img-fluid" alt="rose-img"/>
                                                <span>Rose</span>
                                            </li>
                                            <li className="text-center">
                                                <img src="./public/images/vanilla-img.svg"  className="img-fluid" alt="vanilla-img"/>
                                                <span>Vanilla</span>
                                            </li>
                                            <li className="text-center">
                                                <img src="./public/images/oud-img.svg"  className="img-fluid" alt="oud-img"/>
                                                <span>Oud</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="addProduct">
                                        <ul className="d-flex list-unstyled">
                                            <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                                            <li><a href="#" className="btn btn-primary btn-primary-outline">Buy Now</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="productCard">
                        <div className="productCard_sliderSpace">
                            <div className="productCard_inner productCard_inner--extraDark">
                                <div className="productCard_top d-flex align-item-start justify-content-center">
                                    <a href="#" className="productBadge"><img src="./public/images/video-icon.svg"/></a>
                                    <div className="centerImg">
                                        <img src="./public/images/product-3.png"  className="img-fluid" alt="product-img"/>
                                        <span className="outofstock">OUT OF STOCK</span>
                                    </div>

                                    <a href="#" className="productLike"><em className="icon-favorite_outline"></em></a>
                                </div>
                                <div className="productCard_center text-center">

                                    <ul className="rating d-flex list-unstyled justify-content-center">
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <p>32</p>
                                    </ul>
                                    <span className="offer">50%</span>
                                    <ul className="category d-flex list-unstyled justify-content-center mb-0">
                                        <li>OIL PARFUM</li>
                                        <li>75ML</li>
                                        <li>WOMEN</li>
                                    </ul>
                                    <h3>Jannatul Fridaus</h3>
                                    <span className="price">12 AED <del>24 AED</del></span>
                                </div>
                                <div className="productCard_bottom">
                                    <div className="viewProduct">
                                        <ul className="list-unstyled d-flex justify-content-between mb-0">
                                            <li className="text-center">
                                                <img src="./public/images/rose-img.svg"  className="img-fluid" alt="rose-img"/>
                                                <span>Rose</span>
                                            </li>
                                            <li className="text-center">
                                                <img src="./public/images/vanilla-img.svg"  className="img-fluid" alt="vanilla-img"/>
                                                <span>Vanilla</span>
                                            </li>
                                            <li className="text-center">
                                                <img src="./public/images/oud-img.svg"  className="img-fluid" alt="oud-img"/>
                                                <span>Oud</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="addProduct">
                                        <ul className="d-flex list-unstyled">
                                            <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                                            <li><a href="#" className="btn btn-primary btn-primary-outline">Buy Now</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="productCard">
                        <div className="productCard_sliderSpace">
                            <div className="productCard_inner productCard_inner--mediumDark">
                                <div className="productCard_top d-flex align-item-start justify-content-center">
                                    <a href="#" className="productBadge"><img src="./public/images/video-icon.svg"/></a>
                                    <div className="centerImg">
                                        <img src="./public/images/product-4.png"  className="img-fluid" alt="product-img"/>
                                        <span className="outofstock">OUT OF STOCK</span>
                                    </div>

                                    <a href="#" className="productLike"><em className="icon-favorite_outline"></em></a>
                                </div>
                                <div className="productCard_center text-center">

                                    <ul className="rating d-flex list-unstyled justify-content-center">
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <p>32</p>
                                    </ul>
                                    <span className="offer">50%</span>
                                    <ul className="category d-flex list-unstyled justify-content-center mb-0">
                                        <li>OIL PARFUM</li>
                                        <li>75ML</li>
                                        <li>WOMEN</li>
                                    </ul>
                                    <h3>Jannatul Fridaus</h3>
                                    <span className="price">12 AED <del>24 AED</del></span>
                                </div>
                                <div className="productCard_bottom">
                                    <div className="viewProduct">
                                        <ul className="list-unstyled d-flex justify-content-between mb-0">
                                            <li className="text-center">
                                                <img src="./public/images/rose-img.svg"  className="img-fluid" alt="rose-img"/>
                                                <span>Rose</span>
                                            </li>
                                            <li className="text-center">
                                                <img src="./public/images/vanilla-img.svg"  className="img-fluid" alt="vanilla-img"/>
                                                <span>Vanilla</span>
                                            </li>
                                            <li className="text-center">
                                                <img src="./public/images/oud-img.svg"  className="img-fluid" alt="oud-img"/>
                                                <span>Oud</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="addProduct">
                                        <ul className="d-flex list-unstyled">
                                            <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                                            <li><a href="#" className="btn btn-primary btn-primary-outline">Buy Now</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="productCard">
                        <div className="productCard_sliderSpace">
                            <div className="productCard_inner productCard_inner--light">
                                <div className="productCard_top d-flex align-item-start justify-content-center">
                                    <a href="#" className="productBadge"><img src="./public/images/video-icon.svg"/></a>
                                    <div className="centerImg">
                                        <img src="./public/images/product-1.png"  className="img-fluid" alt="product-img"/>
                                        <span className="outofstock">OUT OF STOCK</span>
                                    </div>

                                    <a href="#" className="productLike"><em className="icon-favorite_outline"></em></a>
                                </div>
                                <div className="productCard_center text-center">

                                    <ul className="rating d-flex list-unstyled justify-content-center">
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <li><span className="icon-star"></span></li>
                                        <p>32</p>
                                    </ul>
                                    <span className="offer">50%</span>
                                    <ul className="category d-flex list-unstyled justify-content-center mb-0">
                                        <li>OIL PARFUM</li>
                                        <li>75ML</li>
                                        <li>WOMEN</li>
                                    </ul>
                                    <h3>Jannatul Fridaus</h3>
                                    <span className="price">12 AED <del>24 AED</del></span>
                                </div>
                                <div className="productCard_bottom">
                                    <div className="viewProduct">
                                        <ul className="list-unstyled d-flex justify-content-between mb-0">
                                            <li className="text-center">
                                                <img src="./public/images/rose-img.svg"  className="img-fluid" alt="rose-img"/>
                                                <span>Rose</span>
                                            </li>
                                            <li className="text-center">
                                                <img src="./public/images/vanilla-img.svg"  className="img-fluid" alt="vanilla-img"/>
                                                <span>Vanilla</span>
                                            </li>
                                            <li className="text-center">
                                                <img src="./public/images/oud-img.svg"  className="img-fluid" alt="oud-img"/>
                                                <span>Oud</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="addProduct">
                                        <ul className="d-flex list-unstyled">
                                            <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                                            <li><a href="#" className="btn btn-primary btn-primary-outline">Buy Now</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="swiper-slide">
                        <div className="productCard">
                            <div className="productCard_sliderSpace">
                                <div className="productCard_inner productCard_inner--dark">
                                    <div className="productCard_top d-flex align-item-start justify-content-center">
                                        <a href="#" className="productBadge"><img src="./public/images/video-icon.svg"/></a>
                                        <div className="centerImg">
                                            <img src="./public/images/product-2.png"  className="img-fluid" alt="product-img"/>
                                            <span className="outofstock">OUT OF STOCK</span>
                                        </div>

                                        <a href="#" className="productLike"><em className="icon-favorite_outline"></em></a>
                                    </div>
                                    <div className="productCard_center text-center">

                                        <ul className="rating d-flex list-unstyled justify-content-center">
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <li><span className="icon-star"></span></li>
                                            <p>32</p>
                                        </ul>
                                        <span className="offer">50%</span>
                                        <ul className="category d-flex list-unstyled justify-content-center mb-0">
                                            <li>OIL PARFUM</li>
                                            <li>75ML</li>
                                            <li>WOMEN</li>
                                        </ul>
                                        <h3>Jannatul Fridaus</h3>
                                        <span className="price">12 AED <del>24 AED</del></span>
                                    </div>
                                    <div className="productCard_bottom">
                                        <div className="viewProduct">
                                            <ul className="list-unstyled d-flex justify-content-between mb-0">
                                                <li className="text-center">
                                                    <img src="./public/images/rose-img.svg"  className="img-fluid" alt="rose-img"/>
                                                    <span>Rose</span>
                                                </li>
                                                <li className="text-center">
                                                    <img src="./public/images/vanilla-img.svg"  className="img-fluid" alt="vanilla-img"/>
                                                    <span>Vanilla</span>
                                                </li>
                                                <li className="text-center">
                                                    <img src="./public/images/oud-img.svg"  className="img-fluid" alt="oud-img"/>
                                                    <span>Oud</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="addProduct">
                                            <ul className="d-flex list-unstyled">
                                                <li><a href="#" className="btn btn-primary">Add to cart</a></li>
                                                <li><a href="#" className="btn btn-primary btn-primary-outline">Buy Now</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </SlickSlider>
        </div>
    );
};

ProductSlickSlider.globalCSS = globalCSS;

export default ProductSlickSlider;
