import React from "react";
const Controls = ( {onIncrement, onDecrement} ) => (
    <div className="counter__controls">
        <button type="button" onClick={onIncrement}>Increase 1</button>
        <button type="button" onClick={onDecrement}>Decrease 1</button>
    </div>
);

export default Controls;