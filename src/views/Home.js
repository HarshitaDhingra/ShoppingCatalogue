import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classNames  from 'classnames';
import PropTypes from 'prop-types';
import {STATIC_STRINGS, STATUS} from "../enums";
import { CartPopup, ProductCard } from "../components";
import HomeActions from "../store/actions/HomeActions";
import CartIcon from '../images/shopping-cart-icon.png';
import '../styles/home.css';

const styles = {
  outerWrapper: 'home_outer-wrapper',
  header: 'home_header',
  innerWrapper: 'home_inner-wrapper',
  contentView: 'home_content-view',
  cardsWrapper: 'home_cards-wrapper',
  headerText: 'home_header-text',
  footer: 'home_footer',
  footerText: 'home_footer-text',
  cartCount: 'home_cart-count',
  cartIconWrapper: 'home_cart-icon-wrapper',
  cartIconImage: 'home_cart-icon-image',
  cartIcon: 'home_cart-icon',
  image: 'home_image',
};

const Home = ({ products, productCountInCart, currentState, fetchContent, productIdToCountMapping, addToCart }) => {

    useEffect(() => {
        fetchContent();
    }, []);

    const [isPopupOpen, setPopupStatus] = useState(false);

    const renderContent = () => {
        if(currentState === STATUS.COMPLETED) {
              return (
                  <div className={styles.cardsWrapper}>
                      {Object.keys(products).length?
                          Object.keys(products).map(productId => (
                          <ProductCard key={productId} productContent={products[productId]} productId={productId} addToCart={addToCart}/>
                         ))
                          : <div>{STATIC_STRINGS.NO_PRODUCT_TO_RENDER}</div>}

                  </div>
               );
        }
        else if(currentState === STATUS.ERROR) {
            return <div>{STATIC_STRINGS.ERROR_FETCHING_DATA}</div>
        }
        else return <div>{STATIC_STRINGS.LOADING}</div>;
    };

  return (
    <div className={styles.outerWrapper}>
      <header className={styles.header}>
        <div className={styles.headerText}>{STATIC_STRINGS.HEADER_CONTENT}</div>
          <div className={styles.cartIconWrapper}>
              <button onClick={() => setPopupStatus(true)} className={styles.cartIcon}>
                  <img className={styles.cartIconImage} src={CartIcon} />
              </button>
              <div className={classNames({[styles.cartCount]: productCountInCart})}>
                  {productCountInCart? productCountInCart: <div style={{ width: '25px' }}/>}
              </div>
          </div>
      </header>
      <section className={styles.innerWrapper}>
          <div className={styles.contentView}>{renderContent()}</div>
          <footer className={styles.footer}>
              <p
                  className={styles.footerText}
                  dangerouslySetInnerHTML={{
                      __html: STATIC_STRINGS.FOOTER_CONTENT
                  }}
              />
          </footer>
      </section>
        {
            isPopupOpen &&
             <CartPopup
                 products={products}
                 productIdToCountMapping={productIdToCountMapping}
                 closePopup={() => setPopupStatus(false)}
             />
        }
    </div>
  );
};

Home.propTypes = {
    products: PropTypes.object.isRequired,
    productCountInCart: PropTypes.number.isRequired,
    currentState: PropTypes.string.isRequired,
    fetchContent: PropTypes.func.isRequired,
    productIdToCountMapping: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    currentState: state.home.currentState,
    products: state.home.products,
    productIdToCountMapping: state.home.productIdToCountMapping,
    productCountInCart: state.home.productCountInCart,
});

const mapDispatchToProps = (dispatch) => ({
    fetchContent: (content) => dispatch(HomeActions.fetchContent(content)),
    addToCart: productId => dispatch(HomeActions.addToCart(productId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

