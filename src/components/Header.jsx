function Header({ navItems, theme, toggleTheme }) {
  return (
    <header id="header" className="header d-flex justify-content-between">
      <div className="header__navigation">
        <nav id="menu" className="menu">
          <ul className="menu__list d-flex justify-content-start">
            {navItems.map((item) => (
              <li className="menu__item" key={item.id}>
                <a className="menu__link btn" href={`#${item.id}`}>
                  <span className="menu__caption">{item.label}</span>
                  <i className={`ph-bold ${item.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header__controls d-flex justify-content-end">
        <button
          id="color-switcher"
          className="color-switcher header__switcher btn"
          type="button"
          role="switch"
          aria-label="light/dark mode"
          aria-checked={theme === "dark"}
          onClick={toggleTheme}
        />
        <a
          id="notify-trigger"
          className="header__trigger btn"
          href="mailto:example@example.com?subject=Message%20from%20your%20site"
        >
          <span className="trigger__caption">Let's Talk</span>
          <i className="ph-bold ph-chat-dots"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
