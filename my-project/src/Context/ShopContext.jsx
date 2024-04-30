import React, { createContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const getQuantity = () =>{
    let quantity = 1;
    return quantity;
}

const ShopContextProvider = (props)=> {

    const [all_products, setAll_Products] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [quantity, setQuantity] = useState(getQuantity());
    const [code, setCode] = useState({
        checkout_code:""
    })    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);


    useEffect(()=>{
        fetch("http://localhost:4000/allproducts")
        .then((response)=>response.json())
        .then((data)=>setAll_Products(data))
        if(localStorage.getItem("auth-token")){
            const fetchCart = fetch("http://localhost:4000/getcart",{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json",
                },
                body:"",
            }).then((response)=>response.json());

            const fetchCode = fetch("http://localhost:4000/getcode",{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json",
                },
                body:"",
            }).then((response)=>response.json());

            Promise.all([fetchCart, fetchCode]).then(([cartData, codeData]) =>{
                setCartItems(cartData);
                setCode(codeData);
            })
        }
    },[])

    const calculateDateDifference = () => {
        if (startDate && endDate) {
          const differenceInTime = endDate.getTime() - startDate.getTime();
          const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert milliseconds to days
          return differenceInDays;
        }
        return null;
      };
    
    const fetchNewCode = async () =>{
        const response = await fetch("http://localhost:4000/getcode",{
            method:"POST",
            headers:{
                Accept:"application/form-data",
                "auth-token":`${localStorage.getItem("auth-token")}`,
                "Content-Type":"application/json",
            },
            body:"",
        });
        const data = await response.json();
        return data;
        
    } 
    

    const addToCart = (itemId, quantity) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+quantity}))
        if(localStorage.getItem("auth-token")){
            fetch("http://localhost:4000/addtocart",{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1})) 
        if(localStorage.getItem("auth-token")){
            fetch("http://localhost:4000/removefromcart",{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const makeid = async () => {
        const code = Math.random().toString(36).substring(2,7);
        console.log(code);
        if(localStorage.getItem("auth-token")){
            fetch("http://localhost:4000/addcode",{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"code":code}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.book_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    

    const contextValue = {fetchNewCode, code, makeid, quantity, getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart, startDate,
    endDate,setStartDate, setEndDate, calculateDateDifference};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;