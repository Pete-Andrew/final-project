import React from "react";

export const InputBox = ({label, userPrompt, setAttribute}) => {
    return (
        <div className="label-input-pair">
        <label className ="label">{label}</label>
        <input className="main-input" 
        onChange={(e) => setAttribute(e.target.value)} 
        ></input>
        <div className="main-input">{userPrompt}</div>

      </div>
    );

};