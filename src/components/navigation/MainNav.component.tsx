import { useContext } from "react";
import { NavLink } from "react-router-dom";

import userContext from "../../context/user/userContext";

import "./mainNav.style.scss";

const MainNav = () => {
  const { user, logoutUser } = useContext(userContext);

  const handleLogout = () => {
    logoutUser();
  };

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
          {user?.token ? (
            <>
              <li>
                <NavLink to="/bookings" className="fs-med fc-light">
                  Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/auth"
                  className="fs-med fc-light"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/auth" className="fs-med fc-light">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
