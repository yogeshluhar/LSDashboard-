import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Navbar/Header/header";
import Superstocking from "./Components/Super Stocking/superstocking";
import Dealer from "./Components/Dealer/dealer";
import Retailer from "./Components/Retailer/retailer";
import Services from "./Components/Services/services";
import FFQS from "./Components/FFQ/ffqs";
import BillGenerator from "./Components/BillGenerator/billgenerator";
import Loans from "./Components/Loans/loans";
import Analytics from "./Components/AnaLytics/analytics";
import TransactionHistory from "./Components/Transaction History/transactionhistory";
import Dashboard from "./Components/Dashboard/dashboard";
import Vander from "./Components/Vander/vander";
import "./App.css"
import LeftSidebar from "./Components/Navbar/SideNavbar/sidebar";
function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <LeftSidebar />{/*  Left Side Navbar Always visible */}
          <div className="content-container">
            <Header /> {/*  Header Always visible */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/super-stocking" element={<Superstocking />} />
              <Route path="/dealer" element={<Dealer />} />
              <Route path="/vander" element={<Vander />} />

              <Route path="/retailer" element={<Retailer />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/ffqs" element={<FFQS />} />
              <Route path="/billgenerator" element={<BillGenerator />} />
              <Route
                path="/transactionhistory"
                element={<TransactionHistory />}
              />
              <Route path="/loans" element={<Loans />} />
              {/* INVOICE BILL */}
              <Route path="/gst" element={<Superstocking />} />
              <Route path="/lut" element={<Superstocking />} />
              <Route path="/no-gst" element={<Services />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
