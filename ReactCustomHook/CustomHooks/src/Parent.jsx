import React, { useState, memo } from 'react';

//React.memo() is a higher-order component that helps you prevent unnecessary re-renders of a component if its props haven’t changed.
//React.memo is a Higher-Order Component that memoizes a functional component. It means:
//React will skip re-rendering this component if its props haven’t changed.

const Child = memo(
    ({ message }) => {
  console.log('Child rendered');
  return <h3>{message}</h3>;
}
)

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase: {count}</button>
      <Child message="I never change!" />
    </div>
  );
};

export default Parent;