import React, { useContext, useEffect, useState } from 'react'
import './PostCheckout.css'
import { ShopContext } from '../../Context/ShopContext'





const PostCheckout = () => {
    const {fetchNewCode, makeid, codeData} = useContext(ShopContext);
    const [code, setCode] = useState(null);

    const handleClick = () => {
      fetchNewCode().then((data) => {
        setCode(data);
      })
      .catch((error) => {
        console.error("ERROR", error);
      });
    };

  return (
    <div className='checkoutmessage'>
        <h1>Thank You For Choosing To Book With Us!</h1>
        <h1>Your Unique Check-in Code is:</h1>
        <button onClick={handleClick}>CLICK TO VIEW</button>
        <h1 id='codetext'>{code}</h1>
    </div>
  )
}

export default PostCheckout