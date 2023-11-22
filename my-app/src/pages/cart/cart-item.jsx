import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const {cartItems,addToCart, removeFromCart,updateItemFromCart} = useContext(ShopContext);
    const { id, productName, price, productImage } = props.data;
  return (
    <div className='cartItem'>
        <img src={productImage} alt={productName} />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={()=>removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateItemFromCart(Number(e.target.value),id) }/>
                <button onClick={()=>addToCart(id)}> + </button>
            </div>
            
        </div>
        </div>
  )
}
