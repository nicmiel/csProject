import React from 'react'
import './Rooms.css'
import all_products from './Assets/all_products'
import Item from './Item/Item'

const Rooms = () => {
  return (
    <div className='rooms'>
        <h1>OUR ROOM SELECTION</h1>
        <hr />
        <div className="room-items">
            {all_products.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} book_price={item.book_price} />
            })}
        </div>
    </div>
  )
}

export default Rooms