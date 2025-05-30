import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Updated path-to-title mapping
  const pathTitleMap = {
    "/": "Dashboard",
    "/super-stocking": "Super Stocking",
    "/dealer": "Dealer",
    "/vander": "Vander",
    "/retailer": "Retailer",
    "/analytics": "Analytics",
    "/ffqs": "FFQs",
    "/billgenerator": "Bill Generator",
    "/transactionhistory": "Transaction History",
    "/loans": "Loans",
    "/gst": "GST Invoice",
    "/lut": "LUT Invoice",
    "/no-gst": "No-GST Invoice",
    "/services": "Services"
  };

  // Fallback title in case route is not found in the map
  const currentTitle = pathTitleMap[location.pathname] || "Dashboard";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="top-navbar">
      <div>
        <h1 className="navbar-name">{currentTitle}</h1>
      </div>
      <div className="user-section">
        <div>$</div>
        <div className="user-menu">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUser} />
          </button>

          {isMenuOpen && (
            <ul className="sub-menu">
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
