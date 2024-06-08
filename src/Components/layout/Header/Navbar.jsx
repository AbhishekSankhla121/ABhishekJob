import { Link } from "react-router-dom";
import "./Navbar.css";
import NavInfo from "./NavInfo";
import React from 'react';
export default function Navbar() {
  return (
    <>
      <header className="site-header">
        <div className="nav-top">
          <span>Shop India's "BEST VEGAN PROTEIN"</span>
        </div>

        <nav>
          <div className="nav-bottom">
            <Link to={"/"} className="nav-item nav-logo"></Link>
            {NavInfo.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  key={index}
                  to={item.to}
                  className="nav-item nav-link"
                >
                  {item.name}
                </Link>
              </React.Fragment>
            ))}

            <div className="other">
              <Link to={"/"} className="nav-item protein-cal-menu-link">Protien Calculator</Link>
            </div>
            <div className="controls">
                <div className="fancy-product-search nav-item">
                    <input type="text" id="inputProductSearch" placeholder="Search products"/>
                </div>
                <Link to={"/"} className="nav-item">
                <img src="https://originnutrition.in/wp-content/themes/origin/images/assets/icon-person-brown.svg?v=2" alt="Profile" />
                </Link>

                <Link to={"/"} className="nav-item">
                <img src="https://originnutrition.in/wp-content/themes/origin/images/assets/icon-cart-brown.svg?v=2" alt="Cart" />
                </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
