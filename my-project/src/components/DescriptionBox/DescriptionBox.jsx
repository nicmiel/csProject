import React from 'react'
import './DescriptionBox.css'
import amenitiesimage from './amenities.png';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <img className="amenities-image" src={amenitiesimage} />
            <p>Our room come with an assortment of amenitites. In our opinion, each one is essential for a perfect stay at a hotel.
              We offer a desk area, which you can use for basic needs. A TV for needed entertainment. Air conditioning to keep the room
              at your preferred temperature. A safe to keep all of your valuable belongings. An ensuite bathroom.
            </p>
        </div>
    </div>
  )
}


export default DescriptionBox