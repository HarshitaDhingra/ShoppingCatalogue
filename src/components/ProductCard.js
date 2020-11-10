
import React from 'react';
import {STATIC_STRINGS} from "../enums";
import PropTypes from "prop-types";
import '../styles/product-card.css';


const styles = {
    wrapper: 'card_wrapper',
    image: 'card_image',
    content: 'card_content',
    description: 'card_description',
    footer: 'card_footer',
    addToCartWrapper: 'card_add-to-cart-wrapper',
    quantityLeft: 'card_quantity-left',
    addToCart: 'card_add_to_cart',
    name: 'card_name',
    price: 'card_price'
};

const ProductCard = ({ productContent, addToCart, productId }) => {
    const ifProductPresent = productContent.quantity > 0;
    return (
        <section className={styles.wrapper}>
            <img src={productContent.image} className={styles.image} />
            <div className={styles.content}>
                <div className={styles.name}>{productContent.name}</div>
                <div className={styles.description}>{productContent.description}</div>
            </div>
            <div className={styles.footer}>
                <div className={styles.price}>Rs.{Number(productContent.price)}</div>
                <div className={styles.addToCartWrapper}>
                    {ifProductPresent && (<div className={styles.quantityLeft}>{productContent.quantity} {STATIC_STRINGS.HURRY}</div>)}
                    <button disabled={!ifProductPresent} onClick={() => addToCart(productId)} className={styles.addToCart}>{STATIC_STRINGS.ADD_TO_CART}</button>
                </div>
            </div>
        </section>
    );
};

ProductCard.propTypes = {
    productContent: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    productId: PropTypes.string.isRequired,
};


export default ProductCard;
