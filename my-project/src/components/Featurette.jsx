import React from "react";
import gymimage from './gym.webp';
import "./Featurette.css";

export const Featurette = () => {
    return (
        <div className="featurette">
            <div className="featurette-1">
                <div className="featurette-1-left">
                    <h1>Take a look at some of our facilites! Explore what our Gym Room has to offer.</h1>
                    <p>Want to keep up that physique as you enjoy your stay? Make use of our on site gym, fitted with the latest and greatest equipment!</p>
                </div>
                <div className="featurette-1-right">
                    <img src={gymimage} alt="Image 1"/>
                </div>
            </div>
            
        </div>
        
    )
}

export default Featurette