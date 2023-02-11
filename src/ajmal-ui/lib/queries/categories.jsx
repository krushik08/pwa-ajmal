import { gql } from '@apollo/client';

export const GET_CATEGORY = gql`
  query {
    category(id: 86) {
        display_sub_categories
        children_count
        id
        uid
        level
        name
        path
        url_path
        url_key
        image
        description
        children {
            id
            uid
            level
            name
            path
            display_sub_categories
            image
            children_count
            products (pageSize:4){
                total_count
                items {
                    id
                    uid
                    sku
                    url_key
                    name
                    color
                    name
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
                    size
                    special_price
                    image {
                      label
                      url
                    }
               }
            }
            children {
                display_sub_categories
                children_count
                id
                uid
                level
                name
                path
                url_path
                url_key
                image
                description
                products (pageSize:4){
                    total_count
                    items{
                        id
                        sku
                        name
                      image {
                      label
                      url
                    }
                    }
                }
            }
        }
    }
}`
/*
    {
        category_id: {eq: "27"},
        price: {from: "30", to: "39.99"},
        color: {eq: "49"}
    }
*/
export const GET_PRODUCT_LISTS = gql`
query getProducts($search: String!, $filter: ProductAttributeFilterInput!, $category_id: Int!, $pageSize: Int! = 25, $currentPage: Int! = 1,$sort: ProductAttributeSortInput! = {name: DESC}){
    products(
        search: $search,
        filter: $filter,
        pageSize: $pageSize,
        currentPage: $currentPage,
        sort: $sort
    ) {
        aggregations {
        attribute_code
        count
        label
        options {
            label
            value
            count
        }
        }
        items {
            id
            uid
            name
            sku
            url_key
            image {
                disabled
                label
                position
                url
            }
            special_price
            price_range {
                minimum_price {
                    regular_price {
                        value
                        currency
                    }
                }
            }
        }
        page_info {
        page_size
        }
    }
    category(id: $category_id) {
        display_sub_categories
        children_count
        id
        uid
        level
        name
        path
        url_path
        url_key
        image
        description
   }
}`;
