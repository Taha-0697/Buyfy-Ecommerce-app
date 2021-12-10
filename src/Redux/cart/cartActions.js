import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART, REMOVE_PRODUCT_FROM_CART } from "./cartConstants";

export const addProductstoCart = (products) => async (dispatch) => {
    try {
        console.log("\n%cProduct Added To Cart", "color:green;font-weight:bolder", products);
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: {
                products, // Array
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const removeProduct = (productId) => async (dispatch) => {
    try {
        console.log("\n%cProduct Removed From Cart", "color:green;font-weight:bolder", productId);
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: {
                productId,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteProduct = (productId) => async (dispatch) => {
    try {
        console.log("\n%cProduct Deleted From Cart", "color:green;font-weight:bolder", productId);
        dispatch({
            type: DELETE_PRODUCT_FROM_CART,
            payload: {
                productId,
            },
        });
    } catch (error) {
        console.log(error);
    }
};
