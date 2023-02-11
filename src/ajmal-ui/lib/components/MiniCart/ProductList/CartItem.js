import React, { useCallback } from 'react';
import { any, func } from 'prop-types';
import { useItem } from '@magento/peregrine/lib/talons/MiniCart/useItem';
import CartQuantity from './CartQuantity';


const CartItem = props => {
    const { isMasked,item,handleRemoveCartItem,handleItemQuantityUpdate } = props;
    const uid=item.uid;

    const removeItem = useCallback(() => {
        handleRemoveCartItem(uid);
    }, [handleRemoveCartItem, uid]);
    console.log("CartItem",item);

    return item ?
    (
        <li key={item.id} className="cartBox d-flex align-items-center">
            <a href="javascript:;" className="cartBox_delete" onClick={removeItem}><img src="/public/images/delete.svg" alt="delete" className="img-fluid" /></a>
            <div className="cartBox_img">
                <img src={item?.product?.image?.url} alt="product" className="img-fluid" />
            </div>
            <div className="cartBox_cnt">
                <h4>{item?.product?.name}</h4>
                <p>{item?.product?.categories && item?.product?.categories[0]?.name} / {item?.product?.size}ML / {item?.product?.gender}</p>
                <div className="cartBox_price">
                    {item?.product?.special_price && <span className="finalPrice">
                        {item?.product?.special_price + " " + item?.product?.price?.regularPrice?.amount?.currency}
                    </span>}

                    {item?.prices?.price && <span className="finalPrice">
                        {item?.prices?.row_total?.value + " " + item?.prices?.row_total?.currency}
                    </span>}


                    {item?.product?.price && <span className="offPrice">
                        {item?.product?.price?.regularPrice?.amount?.value + " " + item?.product?.price?.regularPrice?.amount?.currency}
                    </span>}
                </div>
                <CartQuantity item={item} handleItemQuantityUpdate={handleItemQuantityUpdate} />
            </div>
        </li>
    )
    : null ;

}

export default CartItem;

CartItem.propTypes = {
    isMasked: any,
    item: any,
    handleRemoveCartItem: func
};
