import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart, increaseQuantity, decreaseQuantity, quantity} = useContext(ShopContext);
    
   

  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src="" alt=''/>
                <img src="" alt=''/>
                <img src="" alt=''/>
                <img src="" alt=''/>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price">£{product.book_price}</div>
            </div>
            <div className="productdisplay-right-description">Something about the room type that i will add later because i dont know what to add here.</div>
            <div className="quantity-description">
                <h3>Quantity:</h3>
                <p className="quantity">
                    <button className='minus' onClick={decreaseQuantity}>-</button>
                    <button className='number'>{quantity}</button>
                    <button className='plus' onClick={increaseQuantity}>+</button>
                    
                </p>
            </div>
            <button className='cart-button' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            
            
        </div>
    </div>
  )
}

export default ProductDisplay