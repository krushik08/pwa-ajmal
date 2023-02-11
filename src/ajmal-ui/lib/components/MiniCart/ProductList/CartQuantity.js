import React, { useCallback } from 'react';
import { any, func } from 'prop-types';
import { useItem } from '@magento/peregrine/lib/talons/MiniCart/useItem';
import styles from '../../CartPage/cartPage.module.css';
import Minus from '../../../../../../public/images/IconMinus.svg';
import Plus from '../../../../../../public/images/IconPlus.svg';

const CartQuantity = props => {
    const { item,handleItemQuantityUpdate } = props;
    const uid=item.uid;

    const handleItemQuantityDec = useCallback(() => {
        const updatedItem = {
            cart_item_uid: uid,
            quantity: item.quantity-1
        }
        console.log(item);
        handleItemQuantityUpdate(updatedItem);
    }, [handleItemQuantityUpdate,uid]);

    const handleItemQuantityInc = useCallback(() => {
        const updatedItem = {
            cart_item_uid: uid,
            quantity: item.quantity+1
        }
        console.log(item);
        handleItemQuantityUpdate(updatedItem);
    }, [handleItemQuantityUpdate,uid]);

    return item ?
    (
        <p className="mb-0">
            <div className={styles.cartActionWrapper}>
            Qty:
                <div className={styles.cartActionBtnWrapper} onClick={handleItemQuantityDec}>
                    <img src={Minus} alt="Minus"/>
                </div>
                <div className={styles.cartItemQty}>
                    {item.quantity}
                </div>
                <div className={ styles.cartActionBtnWrapper} onClick={handleItemQuantityInc}>
                    <img src={Plus} alt="Plus" />
                </div>
            </div>
        </p>
    )
    : null ;

}

export default CartQuantity;

CartQuantity.propTypes = {
    item: any,
    handleItemQuantityUpdate: func
};
