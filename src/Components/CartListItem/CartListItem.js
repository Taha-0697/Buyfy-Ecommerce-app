import React from "react";

const CartListItem = ({ title = "Title", quantity = 0, cost = 200, coverPhoto, id }) => {
    return (
        <div>
            <h2>
                {title} - {cost}
            </h2>
            <button>-</button>
            {quantity}
            <button>+</button>
        </div>
    );
};

export default CartListItem;
