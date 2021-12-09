import { CLEAR_PRODUCT, SET_PRODUCTS } from "./productsConstants";

const initialState = [];
const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PRODUCTS:
            return [...payload.products]
        case CLEAR_PRODUCT:
            return []
        default:
            return state;
    }
};

export default productsReducer;