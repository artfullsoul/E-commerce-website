import React, {useEffect, useState} from 'react';

const Product = ({allProducts,cartItems,addToCart}) => {
    return(
        <div className='mid-sec'>
          {/* LABEL */}
          <div className='label-cont'>
            <p className='label'>All Products.</p>
          </div>
          <div className='item-cont'>
            {allProducts.map((product,index) => {
              var cartIndex=null;
              cartItems.find((item,index) => {
                if(item.id === product.itemId)
                  cartIndex = index;
              })
              return(
                <div className='item' key={index}>
                  <div className='off-cont'>
                    <p>{product.off}</p>
                  </div>
                  <div className='item-data-cont'>
                    <img src={product.imageUrl} className='item-image'/>
                    <p className='item-desc'>{product.name}</p>
                    <p className='item-quant'>{product.quantity} {product.quantityUnit}</p>
                    <div className='price-butt'>
                      <div className='price'>
                        <p className='item-dis-price'>₹{product.discountedPrice}</p>
                        <p className='item-mrp'>₹{product.mrp}</p>
                      </div>
                      {cartIndex === null ? 
                        <div className='add-to-cart-butt' onClick={() => addToCart("incre",product.itemId)}>
                          <p className='add-to-cart-butt-text'>Add To Cart</p>
                        </div>
                        :
                        <div className='cart-index-butt-cont'>
                          <p className='cart-incre' onClick={() => addToCart("decre",product.itemId)}>-</p>
                          <p className='cart-quant'>{cartItems[cartIndex].quantity}</p>
                          <p className='cart-incre' onClick={() => addToCart("incre",product.itemId)}>+</p>
                        </div>
                      }
                      
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    )
}

export default Product;