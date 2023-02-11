import React, { useState } from 'react';
import { bool, shape, string } from 'prop-types';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './homePage.module.css';
import Footer from '../Footer';
import Header from '../Header';
import FragrancesSection from '../FragrancesSection';
import ArrivalsSection from '../ArrivalsSection';
import BestSellers from '../BestSellers';
import LegacySection from '../LegacySection';
import GiftingSection from '../GiftingSection';
import PopularCategoriesSec from '../PopularCategoriesSec';
import StorySection from '../StorySection';
import ReviewSection from '../ReviewSection';
import PressMediaSec from '../PressMediaSec';
import BlogSection from '../BlogSection';
import InstagramSection from '../InstagramSection';
import BannerSwipSlider from '../BannerSwipSlider';
import CommonModals from '../CommonModals';
import BlogMobile from '../BlogMobile';
import ReviewMobile from '../ReviewMobile';
import PressMediaSecSwip from '../PressMediaSecSwip';
import InstagramSwipSection from '../InstagramSwipSection';
import { useQuery, gql } from "@apollo/client";

// `MagentoRoute` renders the CMS page, so this component renders nothing.
// This file would be obsolete if the CMS could deliver a stylesheet.
const HomePage = props => {
    const { isMasked } = props;
    const classes = "mainContent homePage";//useStyle(defaultClasses, props.classes);
    const rootClass = isMasked ? classes.root_masked : classes.root;


    const HomeData = gql`
    query GetHomeData {
        homeBannerSlider(action_name: "1") {
            slider{
                slider_id
                name
                status
                location
                store_ids
                customer_group_ids
                priority
                effect
                autoWidth
                autoHeight
                design
                loop
                lazyLoad
                autoplay
                autoplayTimeout
                nav
                dots
                is_responsive
                responsive_items
                from_date
                to_date
                created_at
                updated_at
            },
            banners {
                    banner_id
                name
                status
                type
                content
                banner_subtitle
                image
                url_banner
                title
                newtab
                product_skus
                updated_at
                created_at
                items {
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
        cmsBlocks (
            identifiers: ["fragrances","our-story","our-legacy","popular-categories"]
        ){
            items {
                identifier
                content
                title
            }
        }
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


    const { data, loading, error } = useQuery(HomeData);
    if(loading){
        return <>loading</>;
    }
    if(error){
        console.log("Home Data Error:",error);
        return null;
    }
    if(data){

        console.log("HomeData: ",data);
        const fragrances = data.cmsBlocks.items.filter(item => item.identifier === "fragrances");
        const ourStory = data.cmsBlocks.items.filter(item => item.identifier === "our-story");
        const ourLegacy = data.cmsBlocks.items.filter(item => item.identifier === "our-legacy");
        const popularCategories = data.cmsBlocks.items.filter(item => item.identifier === "popular-categories");
        return (
            <main className='mainContent homePage'>
                <BannerSwipSlider homeBannerSlider={data.homeBannerSlider} />
                <FragrancesSection fragrances={fragrances} />
                <ArrivalsSection  products={data.getSliderProducts}/>
                <BestSellers products={data.getSliderProducts} />
                <LegacySection ourLegacy={ourLegacy}/>
                <GiftingSection products={data.getSliderProducts} />
                <PopularCategoriesSec popularCategories={popularCategories} products={data.getSliderProducts}/>
                <StorySection ourStory={ourStory}/>
                <ReviewSection />
                <ReviewMobile />
                {/*<PressMediaSec />*/}
                <PressMediaSecSwip />
                <BlogSection />
                <BlogMobile />
                {/*<InstagramSection />*/}
                <InstagramSwipSection />
            </main>
        );
    }

    return null;
};

// Use the import to make webpack inject a stylesheet.
HomePage.globalCSS = globalCSS;

export default HomePage;

HomePage.propTypes = {
    classes: shape({
        page: string,
        page_masked: string,
        root: string,
        root_masked: string
    }),
    isMasked: bool
};


