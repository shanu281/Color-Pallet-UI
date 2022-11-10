import React from "react";
import "./style.css"
function Color(props) {
    return (
        <>
            <div className="flex">
                <div className="aside " >
                    <h1>
                        {`${props.name}`.toUpperCase()}
                    </h1>
                </div>
                <div className="color-card ">
                    {props.allColors.map((colorCode, i) =>
                        <div className="card-container1" key={colorCode}>
                            <div className="color " style={{ backgroundColor: `${colorCode}` }}></div>
                            <div className="color-details flex">
                                
                                <p>{i === 0? 50 : i*100}</p>
                                <p>{colorCode}</p>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Color;