import React, { useState } from 'react';

export default function Product({ details }) {
    const [counter, setCounter] = useState(0);

    function handleIncrementClick() {
        setCounter(counter + 1);
    }
    function handleDecrementClick() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className="product">
            <img src={details.image} alt="" width="50" />
            <div className="product-info">
                <h2>{details.name}</h2>
                <p>{details.description}</p>
            </div>
            <div className="product-buttons">
                <button onClick={handleDecrementClick}
                    disabled={counter === 0}>-</button>
                <h3>{counter}</h3>
                <button onClick={handleIncrementClick}>
                    +
                </button>
            </div>
        </div>
    );
}