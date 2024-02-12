import React from 'react'
import './Popular.css'
import data_product from './Assets/product_data'
import Item from './Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR TO BOOK</h1>
        <hr />
        <div className="popular-items">
            {data_product.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} book_price={item.book_price} />
            })}
        </div>
    </div>
  )
}

export default Popular