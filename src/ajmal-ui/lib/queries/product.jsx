import { gql } from '@apollo/client';

export const Product = gql`
    {
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
}`
