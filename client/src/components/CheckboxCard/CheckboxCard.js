import React from "react";
import "./CheckboxCard.css"

const CheckboxCard = ({ eventName, eventMode, dateString, changeFunc, handleArray }) => {
    return (
        <div className="checkbox">
	        <label className="checkbox-wrapper">
            <input 
                type="checkbox" 
                className="checkbox-input" 
                onChange={
                        (e) => {
                            console.log("dd")
                            changeFunc(e.target.checked); 
                            handleArray(e.target.checked, eventName)
                        }
                    }
                />
			<span className="checkbox-tile">
                <span className="name-logo" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span className="checkbox-icon" style={{ display: "flex", gap: "10px" }}>
				    	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Square%2C_Inc._-_Square_logo.svg/1200px-Square%2C_Inc._-_Square_logo.svg.png"></img>
				        <span style={{ margin: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                            <span className="checkbox-label" style={{ textAlign: "left" }}>{eventName}</span>
                            <span style={{ color: "black" }}>{eventMode} Event</span>
                        </span>
                    </span>
                    <span className="checkbox-icon">
                        <p>{dateString}</p>
				    </span>
                </span>                
			</span>
            </label>
        </div>
    )
};

export default CheckboxCard;