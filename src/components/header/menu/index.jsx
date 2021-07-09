import { Link } from "react-router-dom";

import "./index.scss";

const Menu = () => {
  return (
    <nav className="menu">
      <Link className="menu_item" to="/">
        CARDS
      </Link>
      <Link className="menu_item" to="/">
        SERVICE
      </Link>
      <Link className="menu_item" to="/">
        BANKING
      </Link>
      <Link className="menu_item" to="/">
        FAQ
      </Link>
      <Link className="menu_item" to="/">
        CONTACT
      </Link>
    </nav>
  );
};

export default Menu;
