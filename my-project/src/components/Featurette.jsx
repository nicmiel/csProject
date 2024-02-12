import React from "react";
import "./Featurette.css";

export const Featurette = () => {
    return (
        <div className="featurette">
            <div className="featurette-1">
                <div className="featurette-1-left">
                    <h1>First featurette heading. It'll blow your mind.</h1>
                    <p>Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="featurette-1-right">
                    <img src="https://picsum.photos/seed/img2/300/300" alt="Image 1"/>
                </div>
            </div>
            
        </div>
        
    )
}

export default Featurette