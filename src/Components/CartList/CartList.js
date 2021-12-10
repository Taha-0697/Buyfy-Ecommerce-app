import React from 'react'
import CartListItem from '../CartListItem/CartListItem';
import { connect } from 'react-redux';

const CartList = ({cartItems}) => {
    console.log(`%cCart:`,"color:green;font-weight:bolder",cartItems);
    return (
        <div>
            <CartListItem/>
          
           {cartItems.map((items)=> <CartListItem items={items}/>)}
        </div>
    )
}


const mapState = (state) =>({
    cartItems: state.cart,
})

export default connect(mapState)(CartList);
