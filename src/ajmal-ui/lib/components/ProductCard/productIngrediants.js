import React, {useState, useEffect} from 'react';
import { Price, useScrollLock } from '@magento/peregrine';
import globalCSS from './productCard.module.css';
import { random } from 'lodash';
import jQuery from 'jquery';
import { any } from 'prop-types';
import { CREATE_CART, ADD_PRODUCTS_TO_CART } from '../../mutations/cart.jsx';
import { useMutation } from '@apollo/client';


const ProductIngrediants = props => {
    const { isMasked,customAttributesAjmalData } = props;

    return customAttributesAjmalData ?
    (
        <ul className="category d-flex list-unstyled justify-content-center mb-0">
            {customAttributesAjmalData?.display_category && (<li>{customAttributesAjmalData.display_category}</li>) }
            {customAttributesAjmalData?.display_size && (<li>{customAttributesAjmalData.display_size}</li>) }
            {customAttributesAjmalData?.gender && (<li>{customAttributesAjmalData.gender}</li>) }
        </ul>
    )
    : null;

}

export default ProductIngrediants;

ProductIngrediants.propTypes = {
    isMasked: any,
    customAttributesAjmalData: any
};
