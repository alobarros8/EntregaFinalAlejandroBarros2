import React, { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement} className="btn btn-dark p-2 mx-2">
        -
      </button>
      <span>{count}</span>
      <button onClick={increment} className="btn btn-dark p-2 mx-2">
        +
      </button>
    </div>
  );
}

export default ItemCount;
