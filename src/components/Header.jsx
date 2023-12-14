function Header({ pages, changeActivePage }) {
  return (
    <header>
      <nav>
        <ul>
          {pages.map((el) => {
            return (
              <li key={el.name}>
                <button className={el.active ? 'active' : ''} onClick={() => changeActivePage(el.name)}>
                  {el.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
