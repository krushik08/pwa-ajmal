import React, {useState, useEffect} from 'react';
import { Price, useScrollLock } from '@magento/peregrine';
import globalCSS from './productCard.module.css';
import { random } from 'lodash';
import jQuery from 'jquery';
import { any } from 'prop-types';
import { CREATE_CART, ADD_PRODUCTS_TO_CART } from '../../mutations/cart.jsx';
import { useMutation } from '@apollo/client';


const ProductPrice = props => {
    const { isMasked,price_range } = props;

    return price_range ?
    (<span className="price">
        {
            price_range && price_range?.maximum_price[0]?.final_price[0]?.value >= price_range?.maximum_price[0]?.regular_price[0]?.value?
            (
                price_range?.maximum_price[0]?.final_price[0]?.value+ " " + price_range?.maximum_price[0]?.final_price[0].currency
            )
            :
            ( price_range?.maximum_price[0]?.final_price[0]?.value+ " " + price_range?.maximum_price[0]?.final_price[0].currency )
            (<del>{price_range?.minimum_price[0]?.regular_price[0]?.value} {price_range?.minimum_price[0]?.regular_price[0].currency}</del>)

        }
    </span>)
    : null;

}

export default ProductPrice;

ProductPrice.propTypes = {
    isMasked: any,
    price_range: any
};
