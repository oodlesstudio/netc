import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images

const options = [
  { value: "1", label: "options" },
  { value: "2", label: "options" },
  { value: "3", label: "options" },
  { value: "4", label: "options" },
];

const IssuePassWindow = () => {
  // const [showFilters, setShowFilters] = useState(false);

  const [issueRecord, setIssueRecord] = useState(false);

  // Select Error

  const [selectedOption, setSelectedOption] = useState(null);

  const [priceMode, setPriceMode] = useState(false);
  const changePriceMode = () => setPriceMode(true);

  const [entryPlaza, setEntryPlaza] = useState(false);
  const changeEntryPlaza = () => setEntryPlaza(true);

  const [exitPlaza, setExitPlaza] = useState(false);
  const changeExitPlaza = () => setExitPlaza(true);

  const [journey, setJourney] = useState(false);
  const changeJourney = () => setJourney(true);

  const [passScheme, setPassScheme] = useState(false);
  const changePassScheme = () => setPassScheme(true);

  const [duration, setDuration] = useState(false);
  const changeDuration = () => setDuration(true);

  // Modals
  const [referenceNo, setReferenceNo] = useState(false);

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className="configLeft identificationContainer ticketCenterSection">
        <div>
          {/* Breadcrumb */}
          <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
            <h5 className="fontWeight-600 fileConfigHead colorBlack">
              Issue Pass
            </h5>

            <div className="d-flex align-items-center">
              <Link to="/">
                <p className="fontSize12 colorPrimaryDefault">Home</p>
              </Link>
              <Link to="/">
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
              </Link>
              <p className="fontSize12  colorPrimaryDefault">Pass Management</p>
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
              <p className="fontSize12">Issue Pass</p>
            </div>
          </div>

          {/* Search Criteria 2 */}
          <div
            className="searchCriteriaBox searchCriteriaBox2"
            id="CriteriaFilters"
          >
            <div className="remitter-Search">
              <div
                className="d-flex align-items-center"
                id="criteriaFiltersHeading"
              >
                {/* Search Field And Buttons */}
                <div className="remitter-SearchField full-width">
                  <div className="form-group has-search hasRemitter-Search full-width">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MH456797654"
                    />
                  </div>
                  <div className="form-group has-search hasRemitter-Search full-width">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Tag Number"
                    />
                  </div>
                  <div className="d-flex align-items-center w-100 searchFieldsBtns">
                    <button
                      type="button"
                      className="btnPrimary ms-2 full-width "
                    >
                      Search
                    </button>
                    <button
                      type="button"
                      className="btnPrimaryOutline  ms-2 full-width"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              {/* Result Found */}
              <div className="mt-3">
                <div class="hrGreyLine"></div>
                <div className="tableBorderBox mt-3 px-0">
                  {/* Table */}
                  <div className="table-responsive tableContentBox">
                    <table className="table transfer-money table-striped table-hover table-borderless align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Tag ID</th>
                          <th scope="col">Vehicle Reg Number</th>
                          <th scope="col">Vehicle Class</th>
                          <th scope="col">Tag Status</th>
                          <th scope="col">Tag Issue Date</th>
                          <th scope="col">Issuer Bank</th>
                          <th scope="col">Vehicle Type</th>
                          <th scope="col">Blacklisted</th>
                          <th scope="col">Exempted</th>
                          <th scope="col">Low Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="1"
                              name="checkfirst"
                              onChange={() => setIssueRecord(!issueRecord)}
                              // checked={checked["nr1"]}
                            />
                          </td>
                          <td>456789267897498767</td>
                          <td>HR567897</td>
                          <td>VC15</td>
                          <td>Active</td>
                          <td>18-02-2022</td>
                          <td>Axis</td>
                          <td>Commercial</td>
                          <td>No</td>
                          <td>No</td>
                          <td>No</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Result Not Found */}
              {/* <div className="mt-3 notFoundLink">
                <span className="remitterText">Remitter details not found</span>
                <span>
                  <Link to="/dmt/remitter-registration">
                    Click here to Register this mobile number
                  </Link>
                </span>
              </div> */}
            </div>
          </div>

          {/* Record Details */}
          <div className={issueRecord ? "d-block" : "d-none"}>
            {/* Issue Pass Details */}
            <div className="tableBorderBox mb-12 ">
              <h3 className="concBoxTittle">Pass Scheme</h3>
              <div className="configSelectBoxTop configSelectBoxTop2 concRegistrationgrid mb-0 row  row-cols-auto">
                {/* Price Mode  */}
                <div className="clientNameSelect col">
                  <label htmlFor="pricemode">Price Mode</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setPriceMode();
                      changePriceMode();
                      setSelectedOption();
                    }}
                    options={options}
                    id="pricemode"
                    classNamePrefix="reactSelectBox"
                    placeholder="Select"
                  />
                  {priceMode && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>
                {/* Entry Plaza   */}
                <div className="clientNameSelect col">
                  <label htmlFor="entryPlaza">Entry Plaza</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setEntryPlaza();
                      changeEntryPlaza();
                      setSelectedOption();
                    }}
                    options={options}
                    id="entryPlaza"
                    classNamePrefix="reactSelectBox"
                    placeholder="Select"
                  />
                  {entryPlaza && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>
                {/* Exit Plaza   */}
                <div className="clientNameSelect col">
                  <label htmlFor="exitPlaza">Exit Plaza</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setExitPlaza();
                      changeExitPlaza();
                      setSelectedOption();
                    }}
                    options={options}
                    id="exitPlaza"
                    classNamePrefix="reactSelectBox"
                    placeholder="Select"
                  />
                  {exitPlaza && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                {/* Journey Type   */}
                <div className="clientNameSelect col">
                  <label htmlFor="journeyType">Journey Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setJourney();
                      changeJourney();
                      setSelectedOption();
                    }}
                    options={options}
                    id="journeyType"
                    classNamePrefix="reactSelectBox"
                    placeholder="Select"
                  />
                  {journey && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                {/* Pass Scheme Type   */}
                <div className="clientNameSelect col">
                  <label htmlFor="passSchemeType">Pass Scheme Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setPassScheme();
                      changePassScheme();
                      setSelectedOption();
                    }}
                    options={options}
                    id="passSchemeType"
                    classNamePrefix="reactSelectBox"
                    placeholder="Select"
                  />
                  {passScheme && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                {/* Duration   */}
                <div className="clientNameSelect col">
                  <label htmlFor="duration">Duration</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setDuration();
                      changeDuration();
                      setSelectedOption();
                    }}
                    options={options}
                    id="duration"
                    classNamePrefix="reactSelectBox"
                    placeholder="Select"
                  />
                  {duration && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                {/* Start Date */}
                <div className="clientNameSelect col">
                  <label htmlFor="From Date">Start Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="unmatchedDate"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="ToDate">End Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="unmatchedDate"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="fareAmount">Fare Amount</label>
                  <input
                    type="text"
                    name="fareAmount"
                    id="fareAmount"
                    placeholder="Enter Account Name"
                    className="inputTextBox"
                  />
                </div>
              </div>
              <div className="text-center btnsBtm issueBtns">
                <button type="button" className="btnPrimaryOutline issueBtn">
                  Reset
                </button>
                <button type="button" className="btnPrimary issueBtn ms-2">
                  Proceed to Purchase
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* Save Filters */}
            {referenceNo && (
              <Modal
                show={referenceNo}
                onHide={() => setReferenceNo(!referenceNo)}
                centered
                className="defaultThemeModal saveFiltersModal unmatchedTableModal"
              >
                <Modal.Header closeButton>
                  <Modal.Title className="fontSize16-sm letterSpacing-2">
                    Transaction ID Details
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      EJ Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <em>No record(s) found...</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      SW Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SVCB0001</td>
                          <td>01/02/2022, 06:35:00 PM</td>
                          <td>459115XXXXXX5716</td>
                          <td>203218001138</td>
                          <td>6100.00</td>
                          <td>00</td>
                          <td>N</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      Network Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SVCB0001</td>
                          <td>01/02/2022, 06:35:00 PM</td>
                          <td>459115XXXXXX5716</td>
                          <td>203218001138</td>
                          <td>6100.00</td>
                          <td>00</td>
                          <td>N</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      GL Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <em>No record(s) found...</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Modal.Body>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuePassWindow;
