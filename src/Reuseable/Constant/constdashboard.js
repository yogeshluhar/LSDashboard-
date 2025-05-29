import React, { useState, useEffect } from "react";
import axios from "axios";

export const DashBoardTable = () => {
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
    <div className="dashboard-main-table">
      {/* Summary Section */}
      <div className="summary">
        <p className="summary-name">Summary</p>
        <div className="show">
          <label htmlFor="show-selector" className="show-label">
            Show
          </label>
          <select name="show" id="show-selector">
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <button className="dispatch">Dispatch</button>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <div
            className={`arrow ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => currentPage > 1 && handlePageClick(1)}
          >
            First
          </div>

          <div
            className={`arrow ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
          >
            Previous
          </div>

          <div className="page page-active">{currentPage}</div>

          <div
            className={`arrow ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={() =>
              currentPage < totalPages && handlePageClick(currentPage + 1)
            }
          >
            Next
          </div>

          <div
            className={`arrow ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={() =>
              currentPage < totalPages && handlePageClick(totalPages)
            }
          >
            Last
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-content">
        <table className="main-table">
          <thead>
            <tr>
              <th className="checkbox-id">
                <input type="checkbox" name="ID" id="id-checker" />
                <label htmlFor="id-checker">ID</label>
              </th>
              <th>Name</th>
              <th>Country</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="checkbox-id">
                  <input type="checkbox" />
                  {row.id}
                </td>
                <td>{row.name}</td>
                <td>{row.country}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const DashboardSearch = () => {
  return (
    <>
      <div className="dashboard-container">
        {/* Upper Filter */}
        <div className="dashboard-header">
          <div className="dashboard-title">
            <h4>Order</h4>
          </div>
          <div className="dashboard-button">
            <button className="create-button">create order</button>
          </div>
        </div>

        {/* Middle Filter */}
        <div className="dashboard-filters">
          {/* <div className="dashboard-scs-container"> */}
          <div className="dashboard-search">
            <h4>What are you looking for?</h4>
            <input type="search" placeholder="Search" />
          </div>

          <div className="dashboard-category">
            <h4>Category</h4>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="dashboard-status">
            <h4>Status</h4>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          {/* </div> */}
          <div className="dashboard-submit">
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// export const DashBoardTable = () => {
//   return (
//     <div className="dashboard-main-table">
//       {/* Summary Section */}
//       <div className="summary">
//         <p className="summary-name">Summary</p>

//         <div className="show">
//           <label htmlFor="show-selector" className="show-label">
//             Show
//           </label>
//           <select name="show" id="show-selector">
//             <option value="option1">option1</option>
//             <option value="option2">option2</option>
//             <option value="option3">option3</option>
//           </select>

//           <button className="dispatch">Dispatch</button>
//         </div>

//         {/* Pagination */}
//         <div className="pagination">
//           <div className="arrow">&lt;</div>
//           <div className="page">1</div>
//           <div className="page">2</div>
//           <div className="page pagination-active">3</div>
//           <div className="dots">...</div>
//           <div className="page">10</div>
//           <div className="arrow">&gt;</div>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="table-content">
//         <table className="main-table">
//           <thead>
//             <tr>
//               <th>
//                 <input type="checkbox" name="ID" id="id-checker" />
//                 <label htmlFor="id-checker">ID</label>
//               </th>
//               <th>Name</th>
//               <th>Country</th>
//               <th>Phone</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>{/* Table rows go here */}</tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
