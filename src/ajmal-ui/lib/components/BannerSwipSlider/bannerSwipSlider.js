import React, { useRef } from 'react';
import globalCSS from './bannerSwipSlider.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import jQuery from 'jquery';
import { useQuery, gql } from "@apollo/client";
import { any } from 'prop-types';

const homeSlider = gql`
query {
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
    }`

SwiperCore.use([Navigation,Autoplay]);
// `MagentoRoute` renders the CMS page, so this component renders nothing.
// This file would be obsolete if the CMS could deliver a stylesheet.
const BannerSwipSlider = props => {
        const { isMasked,homeBannerSlider } = props;
        let sliderRef = React.useRef(null);
        const paginationRef = useRef(null);
        const nextRef = useRef(null);
        console.log("Home Baner Slider Data",homeBannerSlider);
        //const { data, loading, error } = useQuery(homeSlider);


            const bannerSlider = homeBannerSlider.banners.map((banner, key) => {
                let active = "";
                if(key === 0){
                    active = " active";
                }
                return (
                    <div key={banner.id} className={"bannerSection_cnt"+active} id={'cnt-'+(key+1)}>
                        <div className='bg-animation overlay-color-1'></div>
                        <div className="row m-0">
                            <div className="col-md-7 bannerSection_left">
                                <h1>{banner.title}</h1>
                                <p>{banner.banner_subtitle}</p>
                                <a className="discoverAllBtn" href={banner.url_banner}>Discover all</a>
                            </div>
                        </div>
                    </div>
                )
            });

            const productsSlides = homeBannerSlider.banners.map(banner => banner.items).map(items => {
                return items.map( product => {
                    return (
                        <SwiperSlide key={product.id}>
                            <div key={product.id} className="swiper-slide bannerSlider_item bannerSlider_item--1" data-target="cnt1">
                                <div className="">
                                    <div className="">
                                        <div className="bannerSection_right">
                                            <div className="bannerSection_productBox">
                                                <img src={product.image} className="img-fluid mx-auto" alt=""/>
                                                <div className="bannerSection_productBox_cnt">
                                                    <p>{product.customAttributesAjmalData[0]?.display_category} / {product.customAttributesAjmalData[0]?.display_size} / {product.customAttributesAjmalData[0]?.gender}</p>
                                                    <h2>{product.name}</h2>
                                                    <div className="bannerSection_productBox_price">{product?.price_range[0]?.maximum_price[0]?.final_price[0]?.value} {product?.price_range[0]?.maximum_price[0]?.final_price[0]?.currency}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                });
            })
            console.log("Home Banner Slider 2",productsSlides);

            return (
                <section className="bannerSection">
                    {bannerSlider}
                    <div className="bannerSlider_wrapper">
                        <div className="swiper bannerSlider">
                            <Swiper ref={sliderRef}
                                modules={[Navigation, Pagination]}
                                slidesPerView={2}
                                spaceBetween={0}
                                loop={true}

                                watchSlidesVisibility={true}
                                pagination={{
                                    el: '.swiper-pagination1',
                                    clickable: 'true',
                                    type: 'bullets',
                                    renderBullet: function (index, className) {
                                        return '<span class="' + className + '">'  + '<i></i>' + '<b></b>'  + '</span>';
                                    },
                                }}
                                speed={3000}
                                navigation={{
                                    nextEl: nextRef.current ? nextRef.current : undefined,
                                }}
                                onInit={(swiper) => {
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.update();
                                    swiper.update();
                                }}
                                onSlideChangeTransitionStart={({activeIndex}) =>{

                                    document.querySelector(".bannerSection").className = "bannerSection animate";
                                    jQuery("#bannerSwiperNext").addClass("active");
                                    const nextClass = (activeIndex%3 == 3)?1:activeIndex%3 + 1;
                                    jQuery("#bannerSwiperNext").addClass("overlay-color-"+nextClass);
                                    jQuery("#cnt-1 .bg-animation").addClass("overlay-color-"+nextClass);
                                    jQuery("#cnt-1").addClass("active");
                                }}
                                onSlideChangeTransitionEnd={() =>{
                                    document.querySelector(".bannerSection").className = "bannerSection";
                                    jQuery("#bannerSwiperNext").removeClass("active");
                                    jQuery("#cnt-1 .bg-animation").attr("class","bg-animation");
                                    jQuery("#cnt-1").removeClass("active");
                                }}
                                onAutoplay={({activeIndex,previousIndex}) =>{
                                    /*document.querySelectorAll(".bannerSection_cnt").forEach((item,index) => {
                                        item.className = (activeIndex%3 == index)? "bannerSection_cnt active":"bannerSection_cnt";
                                        if(previousIndex%3 == index){
                                            item.className = "bannerSection_cnt prev";
                                        }
                                        if((activeIndex%3 == index) && jQuery(item).attr("video") == 1){
                                            jQuery(".bannerSlider .swiper-wrapper").css({opacity: 0});
                                        }else{
                                            jQuery(".bannerSlider .swiper-wrapper").css({opacity: 1});
                                        }
                                    })*/

                                    jQuery("#bannerSwiperNext").removeClass("overlay-color-0");
                                    jQuery("#bannerSwiperNext").removeClass("overlay-color-1");
                                    jQuery("#bannerSwiperNext").removeClass("overlay-color-2");
                                    const nextClass = (activeIndex%3 == 2)?0:activeIndex%3 + 1;//(activeIndex%3 == 2)?0:(activeIndex%3)+1;
                                    jQuery("#bannerSwiperNext").addClass("overlay-color-"+nextClass);
                                }}
                                onSlideChange={ ({activeIndex,previousIndex}) =>{
                                    /*document.querySelectorAll(".bannerSection_cnt").forEach((item,index) => {
                                        item.className = (activeIndex%3 == index)? "bannerSection_cnt active":"bannerSection_cnt";
                                        if(previousIndex%3 == index){
                                            item.className = "bannerSection_cnt prev";
                                        }

                                        if((activeIndex%3 == index) && jQuery(item).attr("video") == 1){
                                            jQuery(".bannerSlider .swiper-wrapper").css({opacity: 0});
                                        }else{
                                            jQuery(".bannerSlider .swiper-wrapper").css({opacity: 1});
                                        }
                                    });*/


                                    jQuery("#bannerSwiperNext").removeClass("overlay-color-0");
                                    jQuery("#bannerSwiperNext").removeClass("overlay-color-1");
                                    jQuery("#bannerSwiperNext").removeClass("overlay-color-2");
                                    const nextClass = (activeIndex%3 == 2)?0:activeIndex%3 + 1;//(activeIndex%3 == 3)?0:activeIndex;
                                    jQuery("#bannerSwiperNext").addClass("overlay-color-"+nextClass);
                                }}
                            >

                                {productsSlides}
                                <button type='button' ref={nextRef} id="bannerSwiperNext" className='banner-swiper-next pull-left overlay-color-1'></button>
                            </Swiper>
                        </div>
                    </div>
                    <div className="swiperSliderIcon">
                        <div className="swiper-pagination1" ref={paginationRef} ></div>
                    </div>
                </section>
            )


    //return null;
   // }
};

// Use the import to make webpack inject a stylesheet.
BannerSwipSlider.globalCSS = globalCSS;

export default BannerSwipSlider;
BannerSwipSlider.propTypes = {
    isMasked: any,
    homeBannerSlider: any
};

