import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import "../../../Reuseable/Constant/conststylesheet.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    "/services": "Services",
  };

  const currentTitle = pathTitleMap[location.pathname] || "Dashboard";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const Headerstylesheet = {
    topNavbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgb(41, 41, 101)",
      color: "white",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      padding: "10px 16px",
      height: "60px",
    },

    userSection: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      marginRight: "1rem",
      gap: "1rem",
    },

    userMenu: {
      padding: "0.5rem",
      position: "relative",
    },

    userMenuButton: {
      backgroundColor: "#9f9fee",
      border: "1px solid #5555ad",
      padding: "10px 12px",
      borderRadius: "50%",
      cursor: "pointer",
      color: "white",
      fontSize: "16px",
      transition: "background-color 0.3s ease",
    },

    subMenu: {
      position: "absolute",
      top: "120%",
      right: 0,
      backgroundColor: "white",
      listStyle: "none",
      padding: "10px 0",
      borderRadius: "6px",
      border: "1px solid #ddd",
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
      zIndex: 10,
      minWidth: "150px",
    },

    subMenuItem: {
      padding: "10px 20px",
      cursor: "pointer",
      color: "#333",
    },

    navbarName: {
      marginLeft: "1rem",
      fontSize: "24px",
      fontWeight: 600,
    },
  };


  return (
    <div style={Headerstylesheet.topNavbar}>
      <div>
        <h1 style={Headerstylesheet.navbarName}>{currentTitle}</h1>
      </div>
      <div style={Headerstylesheet.userSection}>
        <div>$</div>
        <div style={Headerstylesheet.userMenu}>
          <button className="user-menu-button" style={Headerstylesheet.userMenuButton} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUser} />
          </button>

          {isMenuOpen && (
            <ul style={Headerstylesheet.subMenu}>
              <li className="sub-menu-item" style={{ ...Headerstylesheet.subMenuItem, }}>Profile</li>
              <li className="sub-menu-item" style={Headerstylesheet.subMenuItem}>Settings</li>
              <li className="sub-menu-item" style={Headerstylesheet.subMenuItem}>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
