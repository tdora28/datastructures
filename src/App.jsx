import { useState } from 'react';

import Header from './components/Header.jsx';
import Palindrome from './apps/Palindrome.jsx';
import BubbleSort from './apps/BubbleSort.jsx';
import Stack from './apps/Stack.jsx';

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

  const showActivePage = () => {
    let activePage = pages.find((el) => el.active).name;
    switch (activePage) {
      case 'Palindrome':
        return <Palindrome />;
        break;
      case 'Bubble Sort':
        return <BubbleSort />;
        break;
      case 'Stack':
        return <Stack />;
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header pages={pages} changeActivePage={changeActivePage} />
      <>{showActivePage()}</>
    </>
  );
}

export default App;
