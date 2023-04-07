import "./NavComp.css";
import React from "react";
import { Link } from "react-router-dom";

function NavComp({cartItems, sidebarStatus, setSidebarStatus}) {
    
    const showSidebar = () => setSidebarStatus(!sidebarStatus);

    const cartCount = cartItems.filter((obj)=> obj.qty > 0).length;

    return (
        <div className="navbar">
            <div className="promo-bar">
                Free deliveries for all US orders over $50
            </div>
            <ul className="nav-list">
                <li className="nav-item brand">
                    <Link to="/"><i className="bi bi-hearts"></i> <span>Sweet Treats</span></Link>
                </li>
                <li className="nav-item">
                    <a href="#"><i className="bi bi-search" alt="search"></i></a>
                </li>
                <li className="nav-item">
                    <Link to="/ShopPage"><i className="bi bi-handbag-fill" alt="shop"></i></Link>
                </li>
                <li className="nav-item" onClick={showSidebar}>
                    {cartCount ? <div className="cart-counter">{cartCount}</div> : ""}
                    <Link to="#"><i className="bi bi-cart-check-fill" alt="cart"></i></Link>
                </li>
            </ul>
        </div>
    );
}

export default NavComp;