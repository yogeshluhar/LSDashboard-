import React, { useState, useEffect } from "react";
import axios from "axios";
import { DashboardStyleSheet } from "./stylesheet1";

export const SuperStockingTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  const fetchData = async (page) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const fullData = res.data;

      const start = (page - 1) * itemsPerPage;
      const paginated = fullData.slice(start, start + itemsPerPage);

      setData(paginated);
      setTotalPages(Math.ceil(fullData.length / itemsPerPage));
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handlePageClick = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    fetchData(page);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, []);

  return (
    <div style={DashboardStyleSheet.dashboardMainTable}>
      {/* Summary Section */}
      <div style={DashboardStyleSheet.summary}>
        <p style={DashboardStyleSheet.summaryName}>Summary</p>
        <div style={DashboardStyleSheet.show}>
          <label htmlFor="show-selector" style={DashboardStyleSheet.showLabel}>
            Show
          </label>
          <select name="show" style={DashboardStyleSheet.showSelector}>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <button style={DashboardStyleSheet.dispatch}>Dispatch</button>
        </div>

        {/* Pagination */}
        <div style={DashboardStyleSheet.pagination}>
          <div
            className="pagination-button"
            style={{
              ...DashboardStyleSheet.arrow,
              ...(currentPage === 1 ? DashboardStyleSheet.disabled : {}),
            }}
            onClick={() => currentPage > 1 && handlePageClick(1)}
          >
            First
          </div>

          <div
            className="pagination-button"
            style={{
              ...DashboardStyleSheet.arrow,
              ...(currentPage === 1 ? DashboardStyleSheet.disabled : {}),
            }}
            onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
          >
            Previous
          </div>

          <div
            className="pagination-button"
            style={{
              ...DashboardStyleSheet.page,
              ...DashboardStyleSheet.pageActive,
            }}
          >
            {currentPage}
          </div>

          <div
            className="pagination-button"
            style={{
              ...DashboardStyleSheet.arrow,
              ...(currentPage === 1 ? DashboardStyleSheet.disabled : {}),
            }}
            onClick={() =>
              currentPage < totalPages && handlePageClick(currentPage + 1)
            }
          >
            Next
          </div>

          <div
            className="pagination-button"
            style={{
              ...DashboardStyleSheet.arrow,
              ...(currentPage === 1 ? DashboardStyleSheet.disabled : {}),
            }}
            onClick={() =>
              currentPage < totalPages && handlePageClick(totalPages)
            }
          >
            Last
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div style={DashboardStyleSheet.tableContent}>
        <table style={DashboardStyleSheet.mainTable}>
          <thead>
            <tr>
              <th
                style={{
                  ...DashboardStyleSheet.checkboxId,
                  ...DashboardStyleSheet.th,
                }}
              >
                <input type="checkbox" name="ID" id="id-checker" />
                <label htmlFor="id-checker">ID</label>
              </th>
              <th style={DashboardStyleSheet.th}>Name</th>
              <th style={DashboardStyleSheet.th}>Country</th>
              <th style={DashboardStyleSheet.th}>Phone</th>
              <th style={DashboardStyleSheet.th}>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} style={DashboardStyleSheet.trHover}>
                <td
                  style={{
                    ...DashboardStyleSheet.checkboxId,
                    ...DashboardStyleSheet.td,
                  }}
                >
                  <input type="checkbox" />
                  {row.id}
                </td>
                <td style={DashboardStyleSheet.td}>{row.name}</td>
                <td style={DashboardStyleSheet.td}>{row.country}</td>
                <td style={DashboardStyleSheet.td}>{row.phone}</td>
                <td style={DashboardStyleSheet.td}>{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const SuperStockingSearch = () => {
  return (
    <>
      <div style={DashboardStyleSheet.dashboardContainer}>
        {/* Upper Filter */}
        <div style={DashboardStyleSheet.dashboardHeader}>
          <div style={DashboardStyleSheet.dashboardTitle}>
            <h4 style={{ margin: "10px" }}>Order</h4>
          </div>
          <div style={DashboardStyleSheet.dashboardButton}>
            <button style={DashboardStyleSheet.createButton}>
              create order
            </button>
          </div>
        </div>

        {/* Middle Filter */}
        <div style={DashboardStyleSheet.dashboardFilters}>
          {/* <div style={"dashboard-scs-container"> */}
          <div style={DashboardStyleSheet.dashboardSearch}>
            <h4>What are you looking for?</h4>
            <input
              type="search"
              placeholder="Search"
              style={DashboardStyleSheet.input}
            />
          </div>

          <div style={DashboardStyleSheet.dashboardCategory}>
            <h4>Category</h4>
            <select defaultValue="" style={DashboardStyleSheet.select}>
              <option value="" disabled hidden>
                Select
              </option>
              <option>Created Date</option>
              <option>Remaining</option>
              <option>GST</option>
              <option>PAN</option>
              <option>Location</option>
              <option>Owner Name</option>
              <option>Units</option>
              <option>Aadhar</option>
              <option>Updated At</option>
              <option>Phone Number</option>
            </select>
          </div>

          <div style={DashboardStyleSheet.dashboardStatus}>
            <h4>Status</h4>
            <select style={DashboardStyleSheet.select}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          {/* </div> */}
          <div style={DashboardStyleSheet.dashboardSubmit}>
            <button type="submit" style={DashboardStyleSheet.searchBtn}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
