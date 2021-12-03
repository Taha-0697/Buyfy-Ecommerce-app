import { SET_PRODUCTS } from "./productsConstants";

const initialState = [];
const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PRODUCTS:
            return [...payload.products]
        default:
            return state;
    }
};

export default productsReducer;