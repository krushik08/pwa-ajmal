import React from 'react';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './bestSellers.module.css';
import Image from '@magento/venia-ui/lib/components/Image';
import { useQuery, gql } from "@apollo/client";
import ProductCard from '../ProductCard';
import { any } from 'prop-types';

const bestseller = gql`
  query GetBestSeller {
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
  }`;

  /**
   *
   * @param {*} props
   * @returns
   */

const BestSellers = props => {
    const { isMasked,products } = props;
    const bestSeller = products.items;
    console.log("Best Seller",bestSeller);
    if(bestSeller[0]){
        return (
            <section className="bestSellers py-55 pt-0">
                <div className="container">
                    <div className="bestSellers_top d-flex align-items-center justify-content-between">
                        <h3 className="sectionHeading mb-0">Best sellers</h3>
                        <a href="#" className="readMoreBtn desktop-only">Discover all <img src="./public/images/next-arrow.svg" className='img-fluid' alt="arrow"/></a>
                    </div>
                    <div className="bestSellers_bg text-center">
                            <div className="bg-video-wrap">
                            <video src="./public/Glitters.mp4" loop muted autoPlay='1'>
                            </video>
                            <ProductCard item={bestSeller[0]} />
                        </div>
                    </div>
                    <a href="#" className="discoverAllBtn mobile-section">Discover all</a>
                </div>
            </section>
        );
    }
};

export default BestSellers;

BestSellers.propTypes = {
    products: any
};
