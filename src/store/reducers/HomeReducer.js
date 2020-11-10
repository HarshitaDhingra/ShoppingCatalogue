
import HomeActionTypes from "../action-types/HomeActionTypes";
import {STATUS} from "../../enums";

const initialState = {
    currentState: STATUS.LOADING,
    products: {},
    productIdToCountMapping: {},
    productCountInCart: 0,
};

const HomeReducer = (state = initialState, action) => {
    switch (action.type){
        case HomeActionTypes.SAVE_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                currentState: STATUS.COMPLETED
            };
        case HomeActionTypes.SET_ERROR:
            return {
                ...state,
                currentState: STATUS.ERROR
            };
        case HomeActionTypes.ADD_TO_CART:
            return {
                ...state,
                productIdToCountMapping: {
                    ...state.productIdToCountMapping,
                    [action.payload]: state.productIdToCountMapping[action.payload]?  state.productIdToCountMapping[action.payload]+1: 1,
                },
                products: {
                    ...state.products,
                    [action.payload]: {
                        ...state.products[action.payload],
                        quantity: state.products[action.payload].quantity - 1,
                    }
                },
                productCountInCart: state.productCountInCart + 1,
            };
        default:
            return {
                ...state,
            };
    }
};

export default HomeReducer;