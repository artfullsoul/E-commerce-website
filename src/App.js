import './App.css';
import React, {useEffect, useState} from 'react';
import {updatedCart} from "./actions/itemsAction.js"
import {connect} from "react-redux";
import Product from './component/Product';
import CartScreen from './component/CartScreen';

function App(props) {
  const [allProducts,setAllProducts] = useState(props.item.allProductsData?props.item.allProductsData:[])
  const [cartItems,setcartItems] = useState(props.item.cartItems?props.item.cartItems:[])
  const [showCart,setShowCart] = useState(false);

  useEffect(() => {
    console.log(props)
  },[])

  const addToCart = (type,id) =>{
    var tempArr = cartItems;
    var foundIndex = null;
    if(type === "incre")
    {
      // VERIFY IF ITEM IS ALREADY ADDED TO CART
      tempArr.find((item,index) => 
      {
        if(item.id === id)
          foundIndex = index;
      })
      //NOT FOUND -> ADD ITEM
      if(foundIndex === null)
      {
        tempArr.push({id:id,quantity:1});
        props.updatedCart(tempArr);
      }
      //FOUND -> UPDATE ITEM
      if(foundIndex !== null)
      {
        tempArr[foundIndex].quantity = tempArr[foundIndex].quantity + 1 ; 
        props.updatedCart(tempArr);
      }
    }
    else if(type === "decre")
    {
      // VERIFY IF ITEM IS ALREADY ADDED TO CART
      tempArr.find((item,index) => 
      {
        if(item.id === id)
          foundIndex = index;
      })
      //FOUND -> UPDATE ITEM
      if(foundIndex !== null)
      {
        tempArr[foundIndex].quantity = tempArr[foundIndex].quantity - 1 ; 
        if(tempArr[foundIndex].quantity === 0) // check for quantity to never go in negative
        {
          tempArr = tempArr.splice(foundIndex,1)
          console.log(tempArr)
        }
        props.updatedCart(tempArr);
      }
    }
  }
  const placeOrder = () => {
    setcartItems([]);
    props.updatedCart([]);
    setShowCart(false)
    alert("Order Placed Successfully;")
  }
  return (
      <div className='main-page'>
        {/* NAVBAR */}
        <div className='navbar'>
          <p className='store-name'>XYZ-Store</p>
          <div className='cart-button' style={{backgroundColor:showCart ? "red" : "#51aa1b"}} onClick={() => setShowCart(!showCart)}>
            <p className='cart-text' >Go to {showCart ? "home" : `Cart (${cartItems.length})`}</p>
          </div>
        </div>
        {/* MAINSECTION */}
        {!showCart?
          <Product allProducts={allProducts} cartItems={cartItems} addToCart={addToCart}/>
          :
          <CartScreen allProducts={allProducts} cartItems={cartItems} addToCart={addToCart} placeOrder={placeOrder}/>}
      </div>
  );
}
const mapStateToProps = (state) => {
  // console.log("State Contains:-"+ state)
  // console.log(`Map State to props:- ${state.item.homepageData.status}`)
  return({
      //Here State.post is 
      //Coming From -> "./reducers/index.js"
      //where "post" is defined under combineReducers
      item:state.item
  })
}
export default connect(mapStateToProps, {updatedCart})(App);