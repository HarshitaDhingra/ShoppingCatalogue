
import HomeActionTypes from "../action-types/HomeActionTypes";
import { normalizeData } from "../../helpers";

const HomeActions = {
    fetchContent: () => (dispatch) => {
        fetch('https://run.mocky.io/v3/aea5d98a-654d-4423-bd99-6fbb90843730')
            .then(response => response.json())
            .then(content => dispatch(HomeActions.saveContent(normalizeData(content.data))))
            .catch((err) => {
                dispatch(HomeActions.setError(err));
            });
    },
    saveContent: payload =>  ({
        type: HomeActionTypes.SAVE_PRODUCTS,
        payload
    }),
    setError: payload =>  ({
        type: HomeActionTypes.SET_ERROR,
        payload
    }),
    addToCart: payload => ({
        type: HomeActionTypes.ADD_TO_CART,
        payload
    })
};

export default HomeActions;