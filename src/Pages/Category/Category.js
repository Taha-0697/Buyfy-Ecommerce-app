import React,{useEffect} from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../../Redux/products/productsActions';

const Category = ({fetchProducts}) => {
  useEffect(() => {
  //CDM
  fetchProducts() 
  }, [])
  
  return (
    <div>
      <h1>Category Page</h1>
    </div>
  );
};

const actions = {
  fetchProducts,
}

export default connect(null,actions)(Category);
