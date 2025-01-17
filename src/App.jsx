import { useState } from "react";
import intersectCircle from "./assets/intersection.png";
import "./App.css";

function App() {
  const initialData = [
    ["", "", `Input Column`, "Action Column", "Enrich Company", ""],
    [
      "1",
      "Play",
      "Oct 12, 2024 at 14:08 PM",
      "Bitscale Evaluation - Account",
      "Bitscale Evaluation - Account",
      "",
    ],
    [
      "2",
      "play",
      "Oct 12, 2024 at 14:08 PM",
      "celt data size exceeds limit",
      "BMW Evaluation - Relevancy",
      "",
    ],
    [
      "3",
      "play",
      "Oct 12, 2024 14:08 PM",
      "link",
      "Google Evaluation - Lilevancy",
      "",
    ],
    [
      "4",
      "play",
      "Oct 12, 2024 at 14:08 PM",
      "Loading data, Please wait",
      "Apple Evaluation - Olivancy",
      "",
    ],
    [
      "5",
      "play",
      "Oct 12, 2024 at 14:08 PM",
      "Loading data, Please wait",
      "Figma Evaluation - Evancy",
      "",
    ],
  ];

  const [tableData, setTableData] = useState(initialData);

  const handleChange = (row, col, value) => {
    const updatedData = [...tableData];
    updatedData[row][col] = value;
    setTableData(updatedData);
  };

  const handleAddRow = () => {
    setTableData([...tableData, Array(6).fill("")]);
  };

  const handleAddColumn = () => {
    setTableData(tableData.map((row) => [...row, ""]));
  };

  // const columnStyle = { width: "20px" };
  // const firstColumnStyle = { width: "30px" };

  return (
    <>
      <div className="main">
        <header>
          <div className="name">
            <i class="fa-solid fa-arrow-left"></i>
            <p>Name of the file</p>
          </div>
          <div className="user">
            <span>
              <i class="fa-solid fa-toggle-on"></i>
              <p>Auto Save</p>
            </span>
            <i class="fa-regular fa-circle-user" id="user-icon"></i>
          </div>
        </header>
        <div className="body">
          <div className="left-side">
            <div className="left-icons">
              <div className="part-1">
                <i class="ri-layout-3-line"></i>
                {/* <i class="fa-regular fa-puzzle-piece"></i> */}
                <i class="ri-puzzle-2-line"></i>
                <img src={intersectCircle} alt="" />
              </div>
              <div className="part-2">
                <i class="ri-bank-card-line"></i>
                <i class="fa-solid fa-coins"></i>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="nav">
              <div className="nav-center">
                <div className="search-bar">
                  <i class="ri-search-line"></i>
                  <input type="text" placeholder="Search" />
                </div>
                <div className="customize">
                  <span>
                    <i class="ri-layout-horizontal-fill"></i>
                    <p>1/1 Row</p>
                  </span>
                  <span>
                    <i class="ri-layout-vertical-fill"></i>
                    <p>3/3 Column</p>
                  </span>
                  <span>
                    <i class="ri-filter-line"></i>
                    <p>0 Filter</p>
                  </span>
                  <span>
                    <i class="ri-arrow-up-down-line"></i>
                    <p>Sort</p>
                  </span>
                </div>
                <div className="actions">
                  <i class="ri-sparkling-line" id="sparkling"></i>
                  <button>Enrich</button>
                  <i class="ri-share-line"></i>
                  <i class="ri-download-2-line"></i>
                  <i class="ri-delete-bin-6-line" id="delete"></i>
                </div>
              </div>
            </div>
            <div className="inner-body">
              <table border="1">
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="text"
                            value={cell}
                            onChange={(e) =>
                              handleChange(rowIndex, colIndex, e.target.value)
                            }
                          />
                        </td>
                      ))}
                      {rowIndex === 5 && (
                        <td>
                          <button onClick={handleAddRow}> + Add Row</button>
                        </td>
                      )}
                    </tr>
                  ))}
                  <tr>
                    {Array.from(
                      { length: tableData[0].length },
                      (_, colIndex) => (
                        <td key={colIndex} /*style={colIndex === 0 ? firstColumnStyle : columnStyle} */ >
                          {colIndex === 5 ? (
                            <button onClick={handleAddColumn}>
                              + Add column
                            </button>
                          ) : null}
                        </td>
                      )
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
