import { NavLink } from "react-router-dom";

import "./mainNav.style.scss";

const MainNav = () => {
  return (
    <header className="main-nav flex jc-sb ai-c">
      <div className="main-nav__log">
        <h1 className="fs-bigger fc-light">EasyEvent</h1>
      </div>
      <nav className="main-nav__items">
        <ul className="flex ai-c">
          <li>
            <NavLink to="/events" className="fs-med fc-light">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookings" className="fs-med fc-light">
              Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth" className="fs-med fc-light">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
