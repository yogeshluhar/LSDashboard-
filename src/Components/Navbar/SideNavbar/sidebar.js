import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

import {
  faChevronDown,
  faChevronUp,
  faSignOutAlt,
  faHouse,
  faInfoCircle,
  faFileInvoiceDollar,
  faFileAlt,
  faFileSignature,
  faFile,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftSidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar collapsed={collapsed}>
        <Menu iconShape="circle">
          <MenuItem icon={<FontAwesomeIcon icon={faHouse} />}>
            Dashboard
            <Link to="/" />
          </MenuItem>

          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            Superstocking
            <Link to="/super-stocking" />
          </MenuItem>

          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            Dealer
            <Link to="/dealer" />
          </MenuItem>

          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            Vander
            <Link to="/vander" />
          </MenuItem>

          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            Retailer
            <Link to="/retailer" />
          </MenuItem>

          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            Analytics
            <Link to="/analytics" />
          </MenuItem>

          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            FFQS
            <Link to="/ffqs" />
          </MenuItem>

          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            Bill Generator
            <Link to="/billgenerator" />
          </MenuItem>

          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            Transaction History
            <Link to="/transactionhistory" />
          </MenuItem>

          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            Loans
            <Link to="/loans" />
          </MenuItem>

          <SubMenu
            title="Invoice"
            icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />}
          >
            <MenuItem icon={<FontAwesomeIcon icon={faFileAlt} />}>
              GST
              <Link to="/gst" />
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faFileSignature} />}>
              LUT
              <Link to="/lut" />
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faFile} />}>
              NO-GST
              <Link to="/no-gst" />
            </MenuItem>
          </SubMenu>

          <MenuItem icon={<FontAwesomeIcon icon={faCogs} />}>
            Services
            <Link to="/services" />
          </MenuItem>

          <MenuItem icon={<FontAwesomeIcon icon={faSignOutAlt} />}>
            Logout
            <Link to="/logout" />
          </MenuItem>
        </Menu>
      </Sidebar>

      <div style={{ padding: 10 }}>
        <button onClick={toggleSidebar}>
          {collapsed ? "☰ Open" : "✖ Close"}
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
