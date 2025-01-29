import React from "react";
import { TfiReload } from "react-icons/tfi";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Switch from "react-switch";
import "./Count.css";
import { useCounter } from "./useCounter";

const Counter = () => {
  const {
    count,
    isAutoIncrement,
    increment,
    decrement,
    reset,
    toggleAutoIncrement,
  } = useCounter();

  return (
    <div className="counter-container">
      <h1 className="heading">Counter App</h1>
      <h1 className="number">{count}</h1>
      <div className="buttons-container">
        <button className="dec-button" onClick={decrement}>
          <FaMinus />
        </button>
       
        <button className="add-button" onClick={increment}>
          <FaPlus />
        </button>
      </div>
      <button className="reset-button" onClick={reset}>
      Reset
    </button>
      <div className="auto-increment-container">
        <Switch
          checked={isAutoIncrement}
          onChange={toggleAutoIncrement}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
           boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 4px rgba(0, 0, 0, 0.2)"
          height={24}
          width={48}
        />
        <label>
          <span className="auto-increment-label">Auto-Increment</span>
        </label>
      </div>
    </div>
  );
};

export default Counter;