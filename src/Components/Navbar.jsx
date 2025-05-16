import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="pizzahub-navbar">
      <div className="pizzahub-navbar-container">
        <Link to="/" className="pizzahub-navbar-logo">
          <span className="pizzahub-logo-icon">🍕</span>
          <span className="pizzahub-logo-text">Pizza</span>
          <span className="pizzahub-logo-accent">Hub</span>
        </Link>

        <ul className="pizzahub-navbar-menu">
          <li><Link to="/" className="pizzahub-navbar-link"><b>Home</b></Link></li>
          <li><Link to="/menu" className="pizzahub-navbar-link"><b>Menu</b></Link></li>
          <li><Link to="/Billing" className="pizzahub-navbar-link"><b>Billing</b></Link></li>
          <li><Link to="/orders" className="pizzahub-navbar-link"><b>Orders</b></Link></li>
          <li><Link to="/Chef" className="pizzahub-navbar-link"><b>Chef</b></Link></li>
        </ul>

        <div className="pizzahub-navbar-actions">
          <Link to="/cart" className="pizzahub-cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="pizzahub-cart-badge">Cart ({cartCount})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;