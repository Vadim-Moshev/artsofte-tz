import Logo from "./logo";
import Menu from "./menu";
import CreateAccountLink from "./createAccountLink";

import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header__menu-and-create-account">
        <Menu className="menu" />
        <CreateAccountLink />
      </div>
    </header>
  );
};

export default Header;
