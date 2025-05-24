import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../Components/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useCart();
    const { pathname } = useLocation();


  return (
    <nav className="navbar navbar-expand-lg navbar-dark pizzahub-navbar">
      <div className="container-fluid">
        <Link to="/" className="pizzahub-navbar-logo">
           <span className="pizzahub-logo-icon">🍕</span>
           <span className="pizzahub-logo-text">Pizza</span>
           <span className="pizzahub-logo-accent">Hub</span>
         </Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          {/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul> */}
    <div className="offcanvas offcanvas-xl offcanvas-start" style={{backgroundColor:"rgb(33, 59, 94)",width:"60%"}} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              {/* <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5> */}
              <button type="button" className="btn-close btn-close-white fw-bold" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" data-bs-dismiss="offcanvas" aria-label="Close">
              <ul className="navbar-nav mx-auto gap-3" >
                <li className="nav-item"><Link to="/" className={`pizzahub-navbar-link nav-link ${pathname === '/' ? 'active' : ''}`}><b>Home</b></Link></li>
                <li className="nav-item"><Link to="/menu" className={`pizzahub-navbar-link nav-link ${pathname === '/menu' ? 'active' : ''}`}><b>Menu</b></Link></li>
                <li className="nav-item"><Link to="/Billing" className={`pizzahub-navbar-link nav-link ${pathname === '/Billing' ? 'active' : ''}`}><b>Billing</b></Link></li>
                <li className="nav-item"><Link to="/orders" className={`pizzahub-navbar-link nav-link ${pathname === '/orders' ? 'active' : ''}`}><b>Orders</b></Link></li>
                <li className="nav-item"><Link to="/Chef" className={`pizzahub-navbar-link nav-link ${pathname === '/Chef' ? 'active' : ''}`}><b>Chef</b></Link></li>
              </ul>
              <div className="">
                <Link to={'/cart'} className="btn btn-primary py-2 position-relative">
                  <i className="bi bi-cart4 text-light fs-5 lh-1"></i> <span className='fw-bold'>Cart</span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                      {cart.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="pizzahub-navbar-actions">
           <Link to="/cart" className="pizzahub-cart-icon">
             <i className="fas fa-shopping-cart"></i>
             <span className="pizzahub-cart-badge">Cart ({cartCount})</span>
           </Link>
         </div> */}
        {/* </div> */}
      </div>
    </nav>


    // <nav className="pizzahub-navbar">
    //   <div className="pizzahub-navbar-container">
    //     <Link to="/" className="pizzahub-navbar-logo">
    //       <span className="pizzahub-logo-icon">🍕</span>
    //       <span className="pizzahub-logo-text">Pizza</span>
    //       <span className="pizzahub-logo-accent">Hub</span>
    //     </Link>

    //     <ul className="pizzahub-navbar-menu">
    //       <li><Link to="/" className="pizzahub-navbar-link"><b>Home</b></Link></li>
    //       <li><Link to="/menu" className="pizzahub-navbar-link"><b>Menu</b></Link></li>
    //       <li><Link to="/Billing" className="pizzahub-navbar-link"><b>Billing</b></Link></li>
    //       <li><Link to="/orders" className="pizzahub-navbar-link"><b>Orders</b></Link></li>
    //       <li><Link to="/Chef" className="pizzahub-navbar-link"><b>Chef</b></Link></li>
    //     </ul>

    //     <div className="pizzahub-navbar-actions">
    //       <Link to="/cart" className="pizzahub-cart-icon">
    //         <i className="fas fa-shopping-cart"></i>
    //         <span className="pizzahub-cart-badge">Cart ({cartCount})</span>
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;