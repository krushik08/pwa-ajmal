import React, {useState, useEffect} from 'react';
import { Price, useScrollLock } from '@magento/peregrine';
import globalCSS from './productCard.module.css';
import { random } from 'lodash';
import jQuery from 'jquery';
import { any } from 'prop-types';
import { CREATE_CART, ADD_PRODUCTS_TO_CART } from '../../mutations/cart.jsx';
import { useMutation } from '@apollo/client';


const ProductBottom = props => {
    const { isMasked,customAttributesAjmalData } = props;

    return customAttributesAjmalData ?
    (<ul className="list-unstyled d-flex justify-content-between mb-0">
        <li className="text-center">
            <img src={customAttributesAjmalData?.top_note_image || '/public/images/rose-img.svg'} className="img-fluid" alt="rose-img"/>
            <span>{customAttributesAjmalData?.top_note_name}</span>
        </li>
        <li className="text-center">
            <img src={customAttributesAjmalData?.heart_note_image || '/public/images/vanilla-img.svg'} className="img-fluid" alt="vanilla-img"/>
            <span>{customAttributesAjmalData?.heart_note_name}</span>
        </li>
        <li className="text-center">
            <img src={customAttributesAjmalData?.base_note_image || '/public/images/oud-img.svg'}  className="img-fluid" alt="oud-img"/>
            <span>{customAttributesAjmalData?.base_note_name}</span>
        </li>
    </ul>
    )
    : <ul className="list-unstyled d-flex justify-content-between mb-0">
        <li className="text-center">
            <img src='/public/images/rose-img.svg' className="img-fluid" alt="rose-img"/>
            <span>Rose</span>
        </li>
        <li className="text-center">
            <img src='/public/images/vanilla-img.svg' className="img-fluid" alt="vanilla-img"/>
            <span>Oud</span>
        </li>
        <li className="text-center">
            <img src='/public/images/oud-img.svg'  className="img-fluid" alt="oud-img"/>
            <span>Vanilla</span>
        </li>
    </ul>;

}

export default ProductBottom;

ProductBottom.propTypes = {
    isMasked: any,
    customAttributesAjmalData: any
};
