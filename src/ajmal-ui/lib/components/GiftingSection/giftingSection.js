import React, { useEffect } from 'react';
import globalCSS from './giftingSection.module.css';
import SwipSlider from '../SwipSlider';
import { useQuery, gql } from "@apollo/client";
import { any } from 'prop-types';

const giftingSlider = gql`
  query GetGiftingSlider {
    getSliderProducts(
        slider_name: "gifting-moment"
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
 * top_note_name
    top_note_image
    heart_note_image
    heart_note_name
    base_note_image
    base_note_name
 * @param {*} props
 * @returns
 */

const GiftingSection = props => {
    const { isMasked,products } = props;

    console.log("Gifting Section Generating Items:",products.items);
    return (
        <section className="giftingSection py-55">
            <div className="container">
                <div className="giftingSection_top d-md-flex align-items-end justify-content-between">
                    <div className="left">
                        <h3 className="sectionHeading">A gifting moment</h3>
                        <p className="mb-0">{products.description}</p>
                    </div>
                    <a href="#" className="readMoreBtn desktop-only">Discover all <img src="./public/images/next-arrow.svg" className="img-fluid" alt="arrow"/></a>
                </div>
                <div className="giftingSection_bottom  position-relative swiperSliderIcon">
                    <div className="swiper giftingSection_slider  overflow-hidden">
                        <SwipSlider items={products.items} />
                    </div>
                </div>
                <a href="#" className="discoverAllBtn mobile-section">Discover all</a>
            </div>
        </section>
    );
}

export default GiftingSection;

GiftingSection.propTypes = {
    products: any
};
