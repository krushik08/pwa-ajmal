import { gql, useMutation } from '@apollo/client';

export const CREATE_CART = gql`
    mutation createCart {
        cartId: createEmptyCart
    }`;

export const ADD_PRODUCTS_TO_CART = gql`
    mutation addProductsToCart(
        $cartId: String!,
        $sku: String!,
        $quantity: Float!
    ){
        addProductsToCart(
            cartId: $cartId,
            cartItems: [ {sku: $sku, quantity: $quantity}]
        ) {
            cart {
                id
                items {
                    uid
                    product {
                        uid
                        name
                        sku
                        image {
                            url
                        }
                        categories {
                            uid
                            name
                        }
                        size
                        special_price
                        price {
                            regularPrice {
                                amount {
                                    currency
                                    value
                                }
                            }
                        }
                    }
                    quantity
                }
                prices {
                    grand_total {
                    value
                    currency
                    }
                }
            }
            user_errors {
                code
                message
            }
        }
}`;


export const REMOVE_ITEM_FROM_CART = gql`
    mutation removeItemFromCart(
        $cartId: String!,
        $cartItemId: ID!
    ){
        removeItemFromCart(
            input: {
                cart_id: $cartId,
                cart_item_uid: $cartItemId
            }
        ) {
            cart {
                id
                items {
                    uid
                    product {
                        uid
                        name
                        sku
                        image {
                            url
                        }
                        categories {
                            uid
                            name
                        }
                        size
                        special_price
                        price {
                            regularPrice {
                                amount {
                                    currency
                                    value
                                }
                            }
                        }
                    }
                    quantity
                }
                prices {
                    grand_total {
                    value
                    currency
                    }
                }
            }
        }
    }`


export const UPDATE_ITEM_FROM_CART = gql`
    mutation updateCartItems(
        $cartId: String!,
        $cartItems: [CartItemUpdateInput]!
    ){
        updateCartItems(
            input: {
                cart_id: $cartId,
                cart_items: $cartItems
            }
        ) {
            cart {
                id
                items {
                    uid
                    product {
                        uid
                        name
                        sku
                        image {
                            url
                        }
                        categories {
                            uid
                            name
                        }
                        size
                        special_price
                        price {
                            regularPrice {
                                amount {
                                    currency
                                    value
                                }
                            }
                        }
                    }
                    quantity
                }
                prices {
                    grand_total {
                    value
                    currency
                    }
                }
            }
        }
    }`
