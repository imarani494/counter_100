import { useState, useEffect } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isAutoIncrement, setIsAutoIncrement] = useState(false);

  const increment = () => {
    if (count < 98) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const toggleAutoIncrement = () => {
    setIsAutoIncrement((prev) => !prev);
  };

  useEffect(() => {
    let interval;
    if (isAutoIncrement && count < 98) {
      interval = setInterval(() => {
        increment();
      }, 1100);
    }
    return () => clearInterval(interval);
  }, [isAutoIncrement, count]);

  return {
    count,
    isAutoIncrement,
    increment,
    decrement,
    reset,
    toggleAutoIncrement,
  };
};