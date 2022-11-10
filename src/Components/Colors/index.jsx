import React from "react";
import "./style.css"
import Color from "../Color";
import allColors from "../Data/color";
function Colors() {
    console.log(Object.keys(allColors))
    return (
        <>
        <div className="card-container">
            {
                Object.keys(allColors).map(color => 
                    <Color key = {color} name= {color} allColors = {allColors[color]} />
                    )
            }
        </div>
           
        </>
    )
}
export default Colors;