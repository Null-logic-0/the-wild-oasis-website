"use client";

import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);

  function counter() {
    setCount((e) => e + 1);
  }
  return (
    <div>
      <h4>There are {users.length} users</h4>
      <button onClick={counter}>{count}</button>;
    </div>
  );
}

export default Counter;
