import React, {useEffect, useState} from 'react';

const CartScreen = ({allProducts,cartItems,addToCart,placeOrder}) => {
  const [total,setTotal] = useState(0);
  useEffect(() => {
    var tempDiscountPriceTotal = 0;
    var tempMrpTotal = 0;
    cartItems.map((product,index) => {
      var itemIndex=null;
      allProducts.find((item,index) => {
        if(item.itemId === product.id)
        itemIndex = index;
      })
      tempDiscountPriceTotal = tempDiscountPriceTotal + allProducts[itemIndex].discountedPrice * product.quantity;
      tempMrpTotal = tempMrpTotal + allProducts[itemIndex].mrp * product.quantity;
    })
    setTotal({discountedPriceTotal:tempDiscountPriceTotal , mrpTotal:tempMrpTotal})
  },[cartItems,addToCart,placeOrder])
    return(
      <div className='mid-sec'>
      {/* LABEL */}
      <div className='label-cont'>
        <p className='label'>My Cart ({cartItems.length})</p>
        <p className='total-amt'>₹{total.discountedPriceTotal}</p>
      </div>
      <div className='cart-item-cont'>
        <div className='cart-item-cont-main'>
          {cartItems.map((product,index) => {
            var itemIndex=null;
            allProducts.find((item,index) => {
              if(item.itemId === product.id)
              itemIndex = index;
            })
            if(itemIndex!==null)
            {
              return(
                <div className='cart-item' key={index}>
                  {/* <div className='cart-off-cont'>
                    <p>{allProducts[itemIndex].off}</p>
                  </div> */}
                  <div className='cart-image-cont'>
                    <img src={allProducts[itemIndex].imageUrl} className='cart-item-image'/>
                  </div>
                  <div className='cart-item-data-cont'>
                    <p className='cart-item-desc'>{allProducts[itemIndex].name}</p>
                    <p className='cart-item-quant'>{allProducts[itemIndex].quantity} {allProducts[itemIndex].quantityUnit}</p>
                    <div className='cart-price-butt'>
                      <div className='cart-price'>
                        <p className='cart-item-dis-price'>₹{allProducts[itemIndex].discountedPrice * product.quantity}</p>
                        <p className='cart-item-mrp'>₹{allProducts[itemIndex].mrp * product.quantity}</p>
                      </div>

                      <div className='cart-index-butt-cont'>
                        <p className='cart-incre' onClick={() => addToCart("decre",allProducts[itemIndex].itemId)}>-</p>
                        <p className='cart-quant'>{product.quantity}</p>
                        <p className='cart-incre' onClick={() => addToCart("incre",allProducts[itemIndex].itemId)}>+</p>
                      </div>

                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div className='payment-cont'>
          <p className='payment-head'>PaymentDetails</p>
          <div className='payment-mrp'>
            <p className='payment-mrp-head'>Mrp Total</p>
            <p className='payment-mrp-price'>{total.mrpTotal}</p>
          </div>
          <div className='payment-mrp'>
            <p className='payment-mrp-head'>Discount</p>
            <p className='payment-mrp-price'>-{total.mrpTotal-total.discountedPriceTotal}</p>
          </div>
          <div className='payment-mrp'>
            <p className='payment-net-head'>Net Amount</p>
            <p className='payment-net-amt'>{total.discountedPriceTotal}</p>
          </div>
          <div className='place-order-butt' style={{backgroundColor:total.discountedPriceTotal>0?"#51aa1b":"#999"}} onClick={() => {placeOrder()}}>
            <p className='place-order-text'>Place Order</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CartScreen;