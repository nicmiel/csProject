import React from "react";
import cinemaroomimage from './cinemaroom.webp';
import "./Featurette2.css";

export const Featurette2 = () => {
    return (
        <div className="featurette">
            <div className="featurette-1">
                <div className="featurette-1-left">
                    <img src={cinemaroomimage} alt="Image 1"/>
                </div>
                <div className="featurette-1-right">
                    <h1>Take a look at some of our facilities! Explore what our Cinema Room has to offer.</h1>
                    <p>Want to watch some of the latest movies and relax? Check out our on site cinema room.</p>
                </div>
            </div>
        </div>
        
    )
}

export default Featurette2