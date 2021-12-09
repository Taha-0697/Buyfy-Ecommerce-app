import React, { useEffect } from "react";
import CategoryList from "../../Components/CategoryList/CategoryList";
import { connect } from "react-redux";
import { clearProducts } from "../../Redux/products/productsActions";

const Category = ({ clearProducts }) => {
    useEffect(() => {
        return () => {
            //component will unmount
            clearProducts();
        };
    }, []);

    return (
        <div>
            <CategoryList />
        </div>
    );
};

const actions = {
    clearProducts,
};

export default connect(null, actions)(Category);
