import React, { useState } from 'react';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './popularCategoriesSec.module.css';
import ProductSlickSlider from '../Slider/ProductSlickSlider';
import SwipSlider from '../SwipSlider';
import { useQuery, gql } from "@apollo/client";
import { any } from 'prop-types';

const newArrivels = gql`
    query GetNewArrivals {
        getSliderProducts(
            slider_name: "new-arrivals"
        ){
            slider_id
            title
            slider_name
            display_title
            status
            description
            type
            infinite
            speed
            autoplay
            autoplay_speed
            rtl
            display_price
            display_cart
            display_wishlist
            display_compare
            products_number
            items{
                id
                sku
                name
                qty
                type_id
                stock_status
                discount_percent
                attribute_set_id
                has_options
                required_options
                created_at
                updated_at
                row_id
                created_in
                updated_in
                status
                visibility
                tax_class_id
                short_description
                meta_keyword
                meta_title
                meta_description
                image
                small_image
                swatch_image
                thumbnail
                page_layout
                options_container
                url_key
                msrp_display_actual_price_type
                gift_message_available
                gift_wrapping_available
                is_returnable
                weight
                is_salable
                rating_count
                customAttributesAjmalData {
                    top_note_name
                    top_note_image
                    heart_note_name
                    heart_note_image
                    base_note_name
                    base_note_image
                    display_category
                    display_size
                    gender
                    product_lasting_hours
                    ingredient
                    product_color
                }
                rating {
                    vote_id
                    value
                    percent
                }
                price_range {
                    minimum_price {
                        regular_price {
                            value
                            currency
                        }
                        final_price {
                            value
                            currency
                        }
                    }
                    maximum_price {
                        regular_price {
                            value
                            currency
                        }
                        final_price {
                            value
                            currency
                        }
                    }
                }
                price_tiers {
                  quantity
                  final_price {
                    value
                    currency
                  }
                }
            }
        }
    }
 `;

 /**
  *
  * @param {*} props
  * @returns
  */

const PopularCategoriesSec = props => {
    const { isMasked,products } = props;

    const swiper =  products.items;
    console.log("popularCategoriesSec",swiper);

    return (
        <section className="popularCategoriesSec">
            <div className="popularCategoriesSec_bg">
                <div className="container">
                    <div className="popularCategoriesSec_top py-55 pb-0">
                        <div className="popularCategoriesSec_top_header my-30 mt-0">
                            <h3 className="sectionHeading mb-0">Popular categories</h3>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="popularImg position-relative overflow-hidden">
                                    <div className="popularImg_img popularImg_img--img1"></div>
                                    <div className="popularImg_txt">
                                        <h3>Shop women's</h3>
                                        <div className="popularImg_links">
                                            <ul className="list-unstyled d-flex align-item-center mb-0">
                                                <li><a href="#">Shop all Women</a></li>
                                                <li><a href="#">Best sellers</a></li>
                                                <li><a href="#">New Arrivals</a></li>
                                                <li><a href="#">Gift sets</a></li>
                                                <li><a href="#">Clearance</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3 mt-sm-0">
                                <div className="popularImg position-relative overflow-hidden">
                                    <div className="popularImg_img popularImg_img--img2"></div>
                                    <img src="./public/images/shop-men.jpg" className="img-fluid" alt="shop-img"/>
                                    <div className="popularImg_txt">
                                        <h3>Shop men's</h3>
                                        <div className="popularImg_links">
                                            <ul className="list-unstyled d-flex align-item-center mb-0">
                                                <li><a href="#">Shop all Women</a></li>
                                                <li><a href="#">Best sellers</a></li>
                                                <li><a href="#">New Arrivals</a></li>
                                                <li><a href="#">Gift sets</a></li>
                                                <li><a href="#">Clearance</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popularCategoriesSec_bottom py-55">
                        <div className="popularCategoriesSec_bottom_top d-flex align-items-center justify-content-between">
                            <h3 className="sectionHeading mb-0">New arrivals</h3>
                            <a href="#" className="readMoreBtn desktop-only">Discover all <img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                        </div>
                        <div className="position-relative swiperSliderIcon">
                            <div className="swiper popularCategory_Slider  overflow-hidden">
                                <SwipSlider items={swiper}/>
                            </div>
                        </div>
                        <a href="#" className="discoverAllBtn mobile-section">Discover all</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularCategoriesSec;

PopularCategoriesSec.propTypes = {
    products: any
};
