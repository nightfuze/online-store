import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Logo
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
          <Link className="nav-link" to="/order">
            Order
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
