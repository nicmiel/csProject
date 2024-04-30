import React, { useContext, useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart, increaseQuantity, decreaseQuantity, quantity, startDate, endDate, setStartDate, setEndDate, calculateDateDifference} = useContext(ShopContext);
    
    const handleAddToCart = () => {
        const differenceInDays = calculateDateDifference();
        if (differenceInDays !== null) {
            addToCart(product.id, differenceInDays);
        } else {
            // Handle case when start or end date is not selected
            console.log("Please select both start and end dates.");
        }
    };
   
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image2} alt=''/>
                <img src={product.image3} alt=''/>
                <img src={product.image4} alt=''/>
                <img src={product.image5} alt=''/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className="productdisplay-right-prices">
                <h3>Price Per Day:</h3>
                <div className="productdisplay-right-price">£{product.book_price}</div>
            </div>
            <div className="productdisplay-right-description">Our rooms guarantee a quality stay for any guest. Have a look below at the description to see what amenities our rooms offer.</div>
            <div className="quantity-description">
                <h3>Pick Duration of Stay:</h3>
            </div>
            <div className="date-pickers">
                    <DatePicker
                        selectsStart
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        startDate={startDate}
                    />
                    <DatePicker
                        selectsEnd
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        endDate={endDate}
                        startDate={startDate}
                        minDate={startDate}
                    />
                </div>
            <h3>Duration of Stay: {calculateDateDifference()} days</h3>
            <button className='cart-button' onClick={handleAddToCart}>ADD TO CART</button>
        </div>
    </div>
  );
}

export default ProductDisplay