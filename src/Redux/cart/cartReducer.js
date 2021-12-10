import { deleteProductFromCart, productsAddingInCart, removeProductFromcart } from "../../Utility/products";
import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART, REMOVE_PRODUCT_FROM_CART } from "./cartConstants";
const initialState = [];

const cartReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return productsAddingInCart(state, payload.products);
        case REMOVE_PRODUCT_FROM_CART:
            return removeProductFromcart(state, payload.productId);
        case DELETE_PRODUCT_FROM_CART:
           return deleteProductFromCart(state,payload.productId)

        default:
            return state;
    }
};

export default cartReducer;
