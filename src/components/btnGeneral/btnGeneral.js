import React from "react";
import './btnGeneral.css'

const BtnComponent = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="btn">
            {text}
        </button>
    );
};

export default BtnComponent