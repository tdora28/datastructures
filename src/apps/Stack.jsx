import { useState } from 'react';

function Stack() {
  const [stack, setStack] = useState([0, 1, 2]);

  const displayBoxes = (arr) => {
    let newArr = [...arr];
    return newArr.sort((box1, box2) => box2 - box1).map((box) => <Box key={box} id={box} />);
  };

  const stackHandler = (operation) => {
    let newArr = [...stack];
    if (operation === 'add') {
      if (newArr.length === 0) {
        newArr = [0];
      } else if (newArr.length === 11) {
        alert("You've reached the limit! Can't fit more on the stack.");
      } else {
        newArr.push(newArr.length);
      }
    } else if (operation === 'remove') {
      if (newArr.length === 0) {
        newArr = [];
      } else {
        newArr.pop();
      }
    }
    setStack(newArr);
  };

  function Box({ id }) {
    return <div className="stack-box">{id}</div>;
  }

  return (
    <main className="stack-main">
      <h1 className="stack-title">Simple Stack DS App</h1>
      <div className="stack-operations">
        <button className="stack-button" onClick={() => stackHandler('add')}>
          Add
        </button>
        <button className="stack-button" onClick={() => stackHandler('remove')}>
          Remove
        </button>
      </div>
      <div className="stack">{displayBoxes(stack)}</div>
      <div className="stack-table">
        <div className="stack-table-top"></div>
        <div className="stack-table-leg left"></div>
        <div className="stack-table-leg right"></div>
      </div>
    </main>
  );
}

export default Stack;
