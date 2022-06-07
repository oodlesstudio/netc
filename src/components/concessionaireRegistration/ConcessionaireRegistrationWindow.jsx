import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import "./concessionaireRegistration.css";

// Images
import Error from "../../images/common/error.svg";
import Success from "../../images/common/success.svg";

const options = [
  { value: "10 Entries", label: "Option" },
  { value: "25 Entries", label: "Option" },
  { value: "50 Entries", label: "Option" },
  { value: "100 Entries", label: "Option" },
];

const ConcessionaireRegistrationWindow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [accType, setAccType] = useState(false);
  const changeAccType = () => setAccType(true);

  const [countryName, setCountryName] = useState(false);
  const changeCountryName = () => setCountryName(true);

  const [cityName, setCityName] = useState(false);
  const changeCityName = () => setCityName(true);

  // CSS

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Concessionaire Management
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
          <p className="fontSize12">Concessionaire Management</p>
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
          <p className="fontSize12">Registration</p>
        </div>
      </div>

      {/* General Information */}
      <div className="tableBorderBox mb-12 ">
        <h3 className="concBoxTittle">General Information</h3>
        <div className="configSelectBoxTop configSelectBoxTop2 concRegistrationgrid mb-0 row  row-cols-auto">
          {/* Client name  */}
          <div className="clientNameSelect col">
            <label htmlFor="clientName">
              Client Name<span>*</span>
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={() => {
                setClientName();
                changeClientName();
                setSelectedOption();
              }}
              options={options}
              id="clientName"
              classNamePrefix="reactSelectBox"
              placeholder="Select"
            />
            {clientName && (
              <p className="text-danger font-size9">Enter a correct input</p>
            )}
          </div>
          {/* Concessionaire Name * */}
          <div className="clientNameSelect col">
            <label htmlFor="name">
              Concessionaire Name <span>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Concessionaire Name"
              className="inputTextBox"
            />
          </div>
        </div>
      </div>

      {/* Account Details */}
      <div className="tableBorderBox mb-12 ">
        <h3 className="concBoxTittle">Account Details</h3>
        <div className="configSelectBoxTop configSelectBoxTop2 concRegistrationgrid mb-0 row  row-cols-auto">
          {/* Account Number */}
          <div className="clientNameSelect col">
            <label htmlFor="accNo">
              Account Number <span>*</span>
            </label>
            <input
              type="text"
              name="accNo"
              id="accNo"
              placeholder="Enter Account Number"
              className="inputTextBox"
            />
          </div>
          {/* Account Name */}
          <div className="clientNameSelect col">
            <label htmlFor="accName">
              Account Name <span>*</span>
            </label>
            <input
              type="text"
              name="accName"
              id="accName"
              placeholder="Enter Account Name"
              className="inputTextBox"
            />
          </div>
          {/* Account Type */}
          <div className="clientNameSelect col">
            <label htmlFor="accountType">
              Account Type<span>*</span>
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={() => {
                setAccType();
                changeAccType();
                setSelectedOption();
              }}
              options={options}
              id="accountType"
              classNamePrefix="reactSelectBox"
              placeholder="Select"
            />
            {accType && (
              <p className="text-danger font-size9">Enter a correct input</p>
            )}
          </div>
          {/* Bank Name */}
          <div className="clientNameSelect col">
            <label htmlFor="bankName">
              Bank Name <span>*</span>
            </label>
            <input
              type="text"
              name="bankName"
              id="bankName"
              placeholder="Enter Bank Name"
              className="inputTextBox"
            />
          </div>
          {/* IFSC Code */}
          <div className="clientNameSelect col">
            <label htmlFor="ifscCode">
              Bank Name <span>*</span>
            </label>
            <input
              type="text"
              name="ifscCode"
              id="ifscCode"
              placeholder="Enter IFSC Code"
              className="inputTextBox"
            />
          </div>
          {/* Branch Name */}
          <div className="clientNameSelect col">
            <label htmlFor="branchName">
              Branch Name <span>*</span>
            </label>
            <input
              type="text"
              name="branchName"
              id="branchName"
              placeholder="Enter Branch Name"
              className="inputTextBox"
            />
          </div>
          {/* Branch Address */}
          <div className="clientNameSelect col">
            <label htmlFor="branchAddress">
              Branch Address <span>*</span>
            </label>
            <input
              type="text"
              name="branchAddress"
              id="branchAddress"
              placeholder="Enter Branch Address"
              className="inputTextBox"
            />
          </div>
        </div>
      </div>

      {/* Communication Details */}
      <div className="tableBorderBox mb-12 ">
        <h3 className="concBoxTittle">Communication Details</h3>
        <div className="configSelectBoxTop configSelectBoxTop2 concRegistrationgrid mb-0 row  row-cols-auto">
          {/* Registered Address */}
          <div className="clientNameSelect col">
            <label htmlFor="regAdd">
              Registered Address<span>*</span>
            </label>
            <input
              type="text"
              name="regAdd"
              id="regAdd"
              placeholder="Enter Registered Address"
              className="inputTextBox"
            />
          </div>
          {/* Pin Code */}
          <div className="clientNameSelect col">
            <label htmlFor="pinCode">
              Pin Code <span>*</span>
            </label>
            <input
              type="text"
              name="pinCode"
              id="pinCode"
              placeholder="Enter Pin Code"
              className="inputTextBox"
            />
          </div>
          {/* Country */}
          <div className="clientNameSelect col">
            <label htmlFor="countryName">
              Country<span> *</span>
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={() => {
                setCountryName();
                changeCountryName();
                setSelectedOption();
              }}
              options={options}
              id="countryName"
              classNamePrefix="reactSelectBox"
              placeholder="Select"
            />
            {countryName && (
              <p className="text-danger font-size9">Enter a correct input</p>
            )}
          </div>
          {/* State */}
          <div className="clientNameSelect col">
            <label htmlFor="stateName">
              State <span>*</span>
            </label>
            <input
              type="text"
              name="stateName"
              id="stateName"
              placeholder="Enter State"
              className="inputTextBox"
            />
          </div>

          {/* City */}
          <div className="clientNameSelect col">
            <label htmlFor="cityName">
              City<span> *</span>
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={() => {
                setCityName();
                changeCityName();
                setSelectedOption();
              }}
              options={options}
              id="cityName"
              classNamePrefix="reactSelectBox"
              placeholder="Select"
            />
            {cityName && (
              <p className="text-danger font-size9">Enter a correct input</p>
            )}
          </div>
          {/* District  Name */}
          <div className="clientNameSelect col">
            <label htmlFor="districtName">
              District Name <span>*</span>
            </label>
            <input
              type="text"
              name="districtName"
              id="districtName"
              placeholder="Enter District Name"
              className="inputTextBox"
            />
          </div>
          {/* Email Address */}
          <div className="clientNameSelect col">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              className="inputTextBox"
            />
          </div>
          {/* Mobile Number */}
          <div className="clientNameSelect col">
            <label htmlFor="mobileNumber">
              Mobile Number <span>*</span>
            </label>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              placeholder="Enter Mobile Number"
              className="inputTextBox"
            />
          </div>
          {/* Landline Number */}
          <div className="clientNameSelect col">
            <label htmlFor="landlineNumber">
              Landline Number <span>*</span>
            </label>
            <input
              type="text"
              name="landlineNumber"
              id="landlineNumber"
              placeholder="Enter Landline Number"
              className="inputTextBox"
            />
          </div>
          {/* Alternate Number */}
          <div className="clientNameSelect col">
            <label htmlFor="altNumber">
              Alternate Number <span>*</span>
            </label>
            <input
              type="text"
              name="altNumber"
              id="altNumber"
              placeholder="Enter Alternate Number"
              className="inputTextBox"
            />
          </div>
        </div>
      </div>

      <div className="concBtns">
        <button
          type="button"
          className="btnPrimaryOutline"
          onClick={() => setResetFilters(!resetFilters)}
        >
          Reset
        </button>
        <button
          type="button"
          className="btnPrimary concSubmitBtn"
          onClick={() => setSaveFilters(!saveFilters)}
        >
          Submit
        </button>
      </div>
      {/* form Success Modal */}
      {saveFilters && (
        <Modal
          show={saveFilters}
          onHide={() => setSaveFilters(!saveFilters)}
          centered
          className="defaultThemeModal mobile-defaultThemeModal saveFiltersModal centeredModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Concessionaire Management
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={Success} alt="Success" />
            <p className="letterSpacing-2 colorBlack">
              Details Saved Successfully!
            </p>
          </Modal.Body>
        </Modal>
      )}

      {/* Form Cancel */}
      {resetFilters && (
        <Modal
          show={resetFilters}
          onHide={() => setResetFilters(!resetFilters)}
          centered
          className="defaultThemeModal mobile-defaultThemeModal saveFiltersModal errorFiltersModal centeredModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Concessionaire Management
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={Error} alt="Success" />
            <p className="letterSpacing-2 colorBlack">
              Changes you have done will be lost, Are <br /> you sure to cancel?
            </p>
            <div className="mt-3 pt-1">
              <button
                type="button"
                className="btnPrimaryOutline"
                onClick={() => setResetFilters(!resetFilters)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btnPrimary ms-2"
                onClick={() => setResetFilters(!resetFilters)}
              >
                Yes
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ConcessionaireRegistrationWindow;
