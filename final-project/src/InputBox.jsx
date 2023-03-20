import React from "react";

// JSX is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like.
//React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code.
//input on change setAttribute 

const InputBox = ({label, userPrompt, setAttribute}) => {
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

export default InputBox;