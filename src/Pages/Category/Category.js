import React,{useEffect} from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../../Redux/products/productsActions';
import { catagorizedProducts } from "../../Utility/products";

const Category = ({fetchProducts , categories}) => {
  console.log(categories)
  useEffect(() => {
  //CDM
  fetchProducts() 
  }, [fetchProducts])
  
  return (
    <div>
      <h1>Category Page</h1>
    </div>
  );
};

const actions = {
  fetchProducts,
}

const mapState = (state) =>({
  categories: catagorizedProducts(state.products),
})

export default connect(mapState,actions)(Category);
