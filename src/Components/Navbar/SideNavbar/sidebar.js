import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import {
  faHouse,
  faWarehouse,
  faHandshake,
  faTruckLoading,
  faStore,
  faChartBar,
  faQuestionCircle,
  faFileInvoice,
  faHistory,
  faMoneyCheckAlt,
  faFileInvoiceDollar,
  faStamp,
  faBars,
  faTimes,
  faBan,
  faConciergeBell,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../Reuseable/Constant/conststylesheet.css";

// Sidebar Style Object
export const SidebarStyles = {
  layoutContainer: {
    display: "flex",
    
  },
 
  toggleBtnWrapper: {
    padding: 10,
  },
  toggleBtn: {
    fontSize: "24px",
    padding: "15px 20px",
    backgroundColor: "#9191fd",
    color: "rgb(32, 32, 147)",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "left 0.3s ease",
  },
  link: {
    textDecoration: "none",
    display: "block",
    width: "100%",
    color: "rgb(98, 98, 210)",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  // menuItem: {
  //   // padding: "10px 15px",
  //   borderRadius: "5px",
  //   margin: "4px 0",
  // }
};

const submenuItem = {
  button: {
    [`&.ps-active`]: {
      backgroundColor: "#9f9fee",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: "#9f9fee",
      color: "#fff",
    },
  },
  icon: {
    color: "rgb(98, 98, 210)",
    fontSize: "18px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#fff",
    },
  },
  subMenuContent: {
    backgroundColor: "rgb(41, 41, 101)",
    color: "#fff",
  },
};

const LeftSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div style={SidebarStyles.layoutContainer}>
      <Sidebar backgroundColor="rgb(41, 41, 101)" collapsed={collapsed} style={SidebarStyles.sidebar}>
        <div style={SidebarStyles.toggleBtnWrapper}>
          <button onClick={toggleSidebar} style={SidebarStyles.toggleBtn}>
            <FontAwesomeIcon icon={collapsed ? faBars : faTimes} />
          </button>
        </div>
        <Menu menuItemStyles={{ ...submenuItem }}>

          {/* Menu Items wrapped in Link */}
          <Link to="/" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faHouse} />} >Dashboard</MenuItem>
          </Link>

          <Link to="/super-stocking" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faWarehouse} />} >Superstocking</MenuItem>
          </Link>

          <Link to="/dealer" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faHandshake} />} >Dealer</MenuItem>
          </Link>

          <Link to="/vander" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faTruckLoading} />} >Vander</MenuItem>
          </Link>

          <Link to="/retailer" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faStore} />} >Retailer</MenuItem>
          </Link>

          <Link to="/analytics" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faChartBar} />} >Analytics</MenuItem>
          </Link>

          <Link to="/ffqs" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faQuestionCircle} />} >FFQS</MenuItem>
          </Link>

          <Link to="/billgenerator" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faFileInvoice} />} >Bill Generator</MenuItem>
          </Link>

          <Link to="/transactionhistory" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faHistory} />} >Transaction History</MenuItem>
          </Link>

          <Link to="/loans" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faMoneyCheckAlt} />} >Loans</MenuItem>
          </Link>

          <SubMenu  label="Invoice" title="Invoice" icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />}>
            <Link to="/gst" style={SidebarStyles.link}>
              <MenuItem icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />} >GST</MenuItem>
            </Link>

            <Link to="/lut" style={SidebarStyles.link}>
              <MenuItem icon={<FontAwesomeIcon icon={faStamp} />} >LUT</MenuItem>
            </Link>

            <Link to="/no-gst" style={SidebarStyles.link}>
              <MenuItem icon={<FontAwesomeIcon icon={faBan} />} >NO-GST</MenuItem>
            </Link>
          </SubMenu>

          <Link to="/services" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faConciergeBell} />} >Services</MenuItem>
          </Link>

          <Link to="/logout" style={SidebarStyles.link}>
            <MenuItem icon={<FontAwesomeIcon icon={faSignOutAlt} />} >Logout</MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default LeftSidebar;
