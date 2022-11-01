import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { CartContext } from "../../contexts/cart-context";

import Logo from "../../assets/shopify-logo.svg";
import ShoppingCart from "../../assets/shopping-cart.svg";

import "./navigation.scss";

const Navigation = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <Fragment>
      <header className="header">
        <div className="header-container container">
          <Link className="header-link" to="/">
            <Logo className="header-logo" alt="OnlineStore logo" />
          </Link>
          <nav className="nav">
            <Link className="nav-link" to="/cart">
              <div className="nav-cart-container">
                {cartCount > 0 && (
                  <div className="nav-cart-counter">{cartCount}</div>
                )}
                <ShoppingCart className="nav-cart" />
              </div>
            </Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
