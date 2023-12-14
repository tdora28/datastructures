import { useState } from 'react';

import Header from './components/Header.jsx';

function App() {
  const [pages, setPages] = useState([
    {
      name: 'Palindrome',
      active: true,
    },
    {
      name: 'Bubble Sort',
      active: false,
    },
    {
      name: 'Stack',
      active: false,
    },
  ]);

  const changeActivePage = (name) => {
    const updateArr = [...pages];
    updateArr.forEach((el) => {
      if (el.name === name) {
        el.active = true;
      } else {
        el.active = false;
      }
      return el;
    });
    setPages([...updateArr]);
  };

  return (
    <>
      <Header pages={pages} changeActivePage={changeActivePage} />
      <section></section>
    </>
  );
}

export default App;
