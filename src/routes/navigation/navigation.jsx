import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { CartContext } from "../../contexts/cart-context";

import "./navigation.scss";

const Navigation = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Logo
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/cart">
            <div className="nav-cart-container">
              {cartCount > 0 && (
                <div className="nav-cart-counter">{cartCount}</div>
              )}
              <ShoppingCart className="nav-cart" />
            </div>
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
