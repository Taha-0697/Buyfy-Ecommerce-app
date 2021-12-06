import React,{useEffect} from "react";
import { connect } from 'react-redux';
import CategoryList from "../../Components/CategoryList/CategoryList";
import { fetchProducts } from '../../Redux/products/productsActions';
import { catagorizedProducts } from "../../Utility/products";

const Category = () => {
  // console.log("Category",categories)
  // useEffect(() => {
  // //CDM
  // fetchProducts() 
  // }, [fetchProducts])
  
  return (
    <div>
      <CategoryList/>
    </div>
  );
};

var actions = {
  fetchProducts,
}

var mapState = (state) =>({
  categories: catagorizedProducts(state.product),
})

export default connect(mapState,actions)(Category);
