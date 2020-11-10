import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { getTotal } from '../helpers';
import {STATIC_STRINGS} from "../enums";
import '../styles/cart-popup.css';

const styles = {
    heading: 'popup_heading',
    popup: 'popup_wrapper',
    popupBox: 'popup_box',
    productName: 'popup_product-name',
    productDetails: 'popup_product-details',
    productFooter: 'popup_product-footer',
    cartEmptyMessage: 'popup_cart-empty-message',
    grandTotal: 'popup_grand-total'
};

const CartPopup = ({ productIdToCountMapping, products, closePopup }) => {
    useEffect(() => {
        document.addEventListener('keydown', event => {
            if (event.keyCode === 27) {
                closePopup();
            }
        });
        return document.removeEventListener('keydown', event => {
            if (event.keyCode === 27) {
                closePopup();
            }
    });
    });

    return (
    <button onClick={closePopup} className={styles.popup}>
        <div
            onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
        }}
            className={styles.popupBox}>
            <div className={styles.heading}>{STATIC_STRINGS.ITEMS_IN_CART}</div>
            {Object.keys(productIdToCountMapping).length ? (
                <div style={{ padding: '2rem', overflow: 'auto'}}>
                    {
                        Object.keys(productIdToCountMapping).map((productId) => (
                            <div key={productId} className={styles.productDetails}>
                                <div className={styles.productName}>{products[productId].name}</div>
                                <div className={styles.productFooter}>
                                    <div>Quan: {productIdToCountMapping[productId]}</div>
                                    <div>{Number(products[productId].price)}/- each</div>
                                </div>
                            </div>
                        ))
                    }
                    <div>
                        <div className={styles.grandTotal}>{STATIC_STRINGS.GRAND_TOTAL} Rs.{getTotal(products, productIdToCountMapping)}</div>
                    </div>
                </div>
                )
                : (<div className={styles.cartEmptyMessage}>{STATIC_STRINGS.CART_EMPTY_MSG}</div>)
            }
        </div>
    </button>
    )
};

CartPopup.propTypes = {
    productIdToCountMapping: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
    closePopup: PropTypes.func.isRequired,
};

export default CartPopup;
