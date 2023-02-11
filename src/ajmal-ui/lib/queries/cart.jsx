import { gql } from '@apollo/client';

export const CART = gql`
  query GetCart($cart_id: String!){
    cart(cart_id: $cart_id) {
      id
      email
      billing_address {
        city
        country {
          code
          label
        }
        firstname
        lastname
        postcode
        region {
          code
          label
        }
        street
        telephone
      }
      shipping_addresses {
        firstname
        lastname
        street
        city
        region {
          code
          label
        }
        country {
          code
          label
        }
        telephone
        available_shipping_methods {
          amount {
            currency
            value
          }
          available
          carrier_code
          carrier_title
          error_message
          method_code
          method_title
          price_excl_tax {
            value
            currency
          }
          price_incl_tax {
            value
            currency
          }
        }
        selected_shipping_method {
          amount {
            value
            currency
          }
          carrier_code
          carrier_title
          method_code
          method_title
        }
      }
      items {
        uid
        product {
          uid
          name
          image {
            label
            url
            position
          }
          sku
        }
        prices {
          discounts {
            amount {
              currency
              value
            }
            label
          }
          fixed_product_taxes {
            amount {
              currency
              value
            }
            label
          }
          price {
            currency
            value
          }
          price_including_tax {
            currency
            value
          }
          row_total {
            currency
            value
          }
          row_total_including_tax {
            currency
            value
          }
          total_item_discount {
            currency
            value
          }
        }
        quantity
        errors {
          code
          message
        }
      }
      available_payment_methods {
        code
        title
      }
      selected_payment_method {
        code
        title
      }
      applied_coupons {
        code
      }
      prices {
            applied_taxes {
                label
                amount {
                    currency
                    value
                }
            }
            discounts {
                amount {
                    currency
                    value
                }
                label
            }
            gift_options {
                gift_wrapping_for_items {
                    currency
                    value
                }
                gift_wrapping_for_order {
                    currency
                    value
                }
                printed_card {
                    currency
                    value
                }
            }
            grand_total {
                value
                currency
            }
            subtotal_excluding_tax {
                value
                currency
            }
            subtotal_including_tax {
                value
                currency
            }
            subtotal_with_discount_excluding_tax {
                value
                currency
            }

        }
    }
  }`;
