import React, { useState } from "react";
import Select from "react-select";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";
// import Error from "../../images/common/error.svg";
// import Success from "../../images/common/success.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];
const options2 = [
  { value: "1", label: "option" },
  { value: "2", label: "option" },
  { value: "3", label: "option" },
  { value: "4", label: "option" },
];

const TransactionReportWindow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Modals

  // Select Error
  const [concName, setConcName] = useState(false);
  const changeConcName = () => setConcName(true);

  const [plazaExist, setPlazaExist] = useState(false);
  const changePlazaExist = () => setPlazaExist(true);

  const [plazaEntry, setPlazaEntry] = useState(false);
  const changePlazaEntry = () => setPlazaEntry(true);

  const [status, setStatus] = useState(false);
  const changeStatus = () => setStatus(true);

  const [productType, setProductType] = useState(false);
  const changeProductType = () => setProductType(true);

  const [binScheme, setBinScheme] = useState(false);
  const changeBinScheme = () => setBinScheme(true);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to pdf
    </Tooltip>
  );

  const renderTooltipExcel = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to excel
    </Tooltip>
  );

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  // Table Active State Toggle
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = () => {
    setToggleState(!toggleState);
  };

  return (
    <div className="configLeft unmatchedContainer">
      {/* Breadcrumb Box */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Transaction Report
        </h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Home</p>
          </Link>
          <span>
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Report</p>
          </Link>
          <span>
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <Link to="/">
            <p className="fontSize12">Transaction Report</p>
          </Link>
        </div>
      </div>

      {/* Config Left Top */}

      <div className="configLeftTop configLeftTop2">
        <div className="accordion" id="unmatchedFilters">
          <div className="accordion-item">
            <div
              className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
              id="unmatchedFiltersHeading"
            >
              <h6 className="fontWeight-600 colorBlack">Search Criteria</h6>
              <button
                className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#unmatchedFiltersCollapse"
                aria-expanded="true"
                aria-controls="unmatchedFiltersCollapse"
              >
                <span className="icon-Hide"></span>
                <span className="ms-1 fontSize12-m colorPrimaryDefault">
                  Show / Hide
                </span>
              </button>
            </div>
            <div
              id="unmatchedFiltersCollapse"
              className="accordion-collapse collapse show"
              aria-labelledby="unmatchedFiltersHeading"
              data-bs-parent="#unmatchedFilters"
            >
              <div className="accordion-body">
                <div className="hrGreyLine"></div>
                <div className="configSelectBoxTop row">
                  <div className="clientNameSelect col-1">
                    <label htmlFor="From Date">
                      Start Date <span>*</span>
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
                    />
                  </div>
                  <div className="clientNameSelect col-1">
                    <label htmlFor="ToDate">
                      End Date <span>*</span>
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="unmatchedDate"
                    />
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="msgId">Msg ID</label>
                    <input
                      type="text"
                      name="msgId"
                      id="msgId"
                      className="inputTextBox"
                      placeholder="Enter Msg ID"
                    />
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="tagId">Tag ID</label>
                    <input
                      type="text"
                      name="tagId"
                      id="tagId"
                      className="inputTextBox"
                      placeholder="Enter Tag ID"
                    />
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="concName">Concessionaire Name</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setConcName();
                        changeConcName();
                      }}
                      options={options2}
                      id="concName"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {concName && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="exitPlaza">Exit Plaza</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setPlazaExist();
                        changePlazaExist();
                      }}
                      options={options2}
                      id="exitPlaza"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {plazaExist && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="entryPlaza">Entry Plaza</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setPlazaEntry();
                        changePlazaEntry();
                      }}
                      options={options2}
                      id="entryPlaza"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {plazaEntry && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="status">Status</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setStatus();
                        changeStatus();
                      }}
                      options={options2}
                      id="status"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {status && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="exitTxnId">Exit Txn ID</label>
                    <input
                      type="text"
                      name="exitTxnId"
                      id="exitTxnId"
                      className="inputTextBox"
                      placeholder="Enter Txn ID"
                    />
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="exirTxnId">Entry Txn ID</label>
                    <input
                      type="text"
                      name="entryTxnId"
                      id="entryTxnId"
                      className="inputTextBox"
                      placeholder="Enter Txn ID"
                    />
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="productMode">Price Mode</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setProductType();
                        changeProductType();
                      }}
                      options={options2}
                      id="productMode"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {productType && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="tripType">Trip Type</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setBinScheme();
                        changeBinScheme();
                      }}
                      options={options2}
                      id="tripType"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {binScheme && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-center btnsBtm">
                  <button type="button" className="btnPrimaryOutline">
                    Clear
                  </button>
                  <button type="button" className="btnPrimary ms-2">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="configLeftBottom ticketCentreTableHeader">
        <div className="tableBorderBox">
          <div className="d-flex justify-content-between align-items-center mt-3 mb-2 ticketCenterTableHeadTop">
            <div className="clientNameSelect configFormatEntities">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable={false}
                classNamePrefix="reactSelectBox"
                placeholder="10 Entries"
              />
            </div>
            <div className="d-flex">
              <div className="form-group has-search">
                <span className="icon-Search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Pdf} alt="Pdf" />
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipExcel}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Excel} alt="Excel" />
                </button>
              </OverlayTrigger>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox ticketCentreTableResponsive">
            <table className="table table-striped table-hover table-borderless align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">
                    Msg ID
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Exit Txn ID
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Exit Plaza ID
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Exit Plaza Name
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Exit Txn TS
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Exit Txn ReaderTS
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Entry Lane ID
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Exit Lane Dir
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Entry Plaza ID
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Entry Plaza ID
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Payment
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      712678678934
                      <div
                        className={
                          toggleState === true
                            ? "tableToggle tableToggle-active"
                            : "tableToggle"
                        }
                        onClick={() => {
                          toggleTab();
                        }}
                      >
                        <span className="icon-Icon-2"></span>
                      </div>
                    </div>
                  </td>
                  <td>4567896789655337383</td>

                  <td>5767895</td>
                  <td>Kundaali Plaza</td>
                  <td>18-02-2022, 10:40 AM</td>
                  <td>18-02-2022, 10:40 AM</td>
                  <td>lAN23</td>
                  <td>lAN23</td>
                  <td>23455</td>
                  <td>Toll Plaza</td>
                  <td>Fare Amount</td>
                </tr>
                {/* add opened Fields */}
                <tr>
                  <td
                    colSpan="11"
                    className={
                      toggleState === true ? "lightPinkNestedTable" : "d-none"
                    }
                  >
                    <table className="table table-striped table-hover table-borderless align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col" style={{ width: "10%" }}>
                            Msg ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "14%" }}>
                            Entry Plaza ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            Entry Txn TS
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "13%" }}>
                            Entry Txn Reader TS
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "7%" }}>
                            Entry LaneID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "14%" }}>
                            Entry Lane Dir
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "6%" }}>
                            Exit Plaza ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "9%" }}>
                            Exit Txn TS
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "9%" }}>
                            Exit Txn Reader TS
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "4.82%" }}></th>
                          <th scope="col" style={{ width: "6.95%" }}></th>
                          <th scope="col" style={{ width: "4.82%" }}></th>
                          <th scope="col" style={{ width: "5.49%" }}></th>
                          <th scope="col" style={{ width: "3.58%" }}></th>
                          <th scope="col" style={{ width: "2.96%" }}></th>
                          <th scope="col" style={{ width: "8.75%" }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>712678678934</td>
                          <td>3125678</td>
                          <td>18-02-2022, 10:40 AM</td>
                          <td>18-02-2022, 10:40 AM</td>
                          <td>LANE10</td>
                          <td>LANE</td>
                          <td>34567</td>
                          <td>21-Mar-2022, 17:44</td>
                          <td>21-Mar-2022, 17:44</td>
                          <td></td>
                          <td></td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                        </tr>
                        <tr>
                          <td>712678678934</td>
                          <td>3125678</td>
                          <td>18-02-2022, 10:40 AM</td>
                          <td>18-02-2022, 10:40 AM</td>
                          <td>LANE10</td>
                          <td>LANE</td>
                          <td>34567</td>
                          <td>21-Mar-2022, 17:44</td>
                          <td>21-Mar-2022, 17:44</td>
                          <td></td>
                          <td></td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                {/* Rpeated Fields */}
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      712678678934
                      <div className="tableToggle">
                        <span className="icon-Icon-2"></span>
                      </div>
                    </div>
                  </td>
                  <td>4567896789655337383</td>

                  <td>5767895</td>
                  <td>Kundaali Plaza</td>
                  <td>18-02-2022, 10:40 AM</td>
                  <td>18-02-2022, 10:40 AM</td>
                  <td>lAN23</td>
                  <td>lAN23</td>
                  <td>23455</td>
                  <td>Toll Plaza</td>
                  <td>Fare Amount</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      712678678934
                      <div className="tableToggle">
                        <span className="icon-Icon-2"></span>
                      </div>
                    </div>
                  </td>
                  <td>4567896789655337383</td>

                  <td>5767895</td>
                  <td>Kundaali Plaza</td>
                  <td>18-02-2022, 10:40 AM</td>
                  <td>18-02-2022, 10:40 AM</td>
                  <td>lAN23</td>
                  <td>lAN23</td>
                  <td>23455</td>
                  <td>Toll Plaza</td>
                  <td>Fare Amount</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      712678678934
                      <div className="tableToggle">
                        <span className="icon-Icon-2"></span>
                      </div>
                    </div>
                  </td>
                  <td>4567896789655337383</td>

                  <td>5767895</td>
                  <td>Kundaali Plaza</td>
                  <td>18-02-2022, 10:40 AM</td>
                  <td>18-02-2022, 10:40 AM</td>
                  <td>lAN23</td>
                  <td>lAN23</td>
                  <td>23455</td>
                  <td>Toll Plaza</td>
                  <td>Fare Amount</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      712678678934
                      <div className="tableToggle">
                        <span className="icon-Icon-2"></span>
                      </div>
                    </div>
                  </td>
                  <td>4567896789655337383</td>

                  <td>5767895</td>
                  <td>Kundaali Plaza</td>
                  <td>18-02-2022, 10:40 AM</td>
                  <td>18-02-2022, 10:40 AM</td>
                  <td>lAN23</td>
                  <td>lAN23</td>
                  <td>23455</td>
                  <td>Toll Plaza</td>
                  <td>Fare Amount</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="paginationBox d-flex align-items-center justify-content-between my-12">
            <div className="paginationLeft fontSize12">
              Showing 1 to 10 of 49 entries
            </div>

            <div className="paginationRight">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link
                      className="page-link previousPagination"
                      to="/"
                      aria-label="Previous"
                    >
                      <span
                        className="icon-Breadcrumb-Arrow"
                        style={{
                          fontSize: "16px",
                          transform: "rotate(180deg)",
                        }}
                      ></span>
                      <span>First</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      2
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link paginationBottom" to="/">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      5
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link nextPagination"
                      to="/"
                      aria-label="Next"
                    >
                      <span>Last</span>
                      <span
                        className="icon-Breadcrumb-Arrow"
                        style={{ fontSize: "16px" }}
                      ></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionReportWindow;
