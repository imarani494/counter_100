import React, { useEffect, useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Switch from "react-switch";
import {
  state$,
  increment,
  decrement,
  reset,
  toggleAutoIncrement
} from "../intent/CounterIntent";
import "./ViewCount.css";

const ViewCount = () => {
  const [state, setState] = useState(state$.value);

  useEffect(() => {
    const subscription = state$.subscribe(setState);
    return () => subscription.unsubscribe();
  }, []);

  const handleChange = (nextChecked) => {
    toggleAutoIncrement();
    if (nextChecked) {
      console.log("Switch is ON");
    } else {
      console.log("Switch is OFF");
    }
  };

  return (
    <div className="counter-container">
      <h1 className="heading">Counter App</h1>
      <h1 className="number">{state.count}</h1>
      <div className="buttons">
        <button className="add-button" onClick={increment}>
          <FaPlus />
        </button>
        
        <button className="dec-button" onClick={decrement}>
          <FaMinus />
        </button>
        <br />
        <br />
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
        <div className="switch-container">
          
            <Switch
              checked={state.isAutoIncrementEnabled}
              onChange={handleChange}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={24}
              width={48}
            />
            <label>
            <p className="label">Auto-Increment</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ViewCount;
