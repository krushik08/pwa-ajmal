import React, {useState, useEffect} from 'react';
import { Price, useScrollLock } from '@magento/peregrine';
import globalCSS from './productCard.module.css';
import { random } from 'lodash';
import jQuery from 'jquery';
import { any } from 'prop-types';
import { CREATE_CART, ADD_PRODUCTS_TO_CART } from '../../mutations/cart.jsx';
import { useMutation } from '@apollo/client';


const ProductCPrice = props => {
    const { isMasked,price_range } = props;

    return price_range ?
    (
        <span className="price">
            {
                price_range && price_range.maximum_price.final_price.value >= price_range.maximum_price.regular_price.value
                ?
                    price_range?.maximum_price?.final_price?.value+ " " + price_range?.maximum_price?.final_price.currency
                :
                (
                    <>
                        {price_range?.maximum_price?.final_price?.value + " " + price_range?.maximum_price?.final_price.currency}
                        <del>{price_range?.minimum_price?.regular_price?.value} {price_range?.minimum_price?.regular_price.currency}</del>
                    </>
                )
            }
        </span>
    )
    : null;

}

export default ProductCPrice;

ProductCPrice.propTypes = {
    isMasked: any,
    price_range: any
};
