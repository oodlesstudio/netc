import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

// const activeLink = (arr) => {};

const SidebarSmall = (props) => {
  const path = useLocation().pathname;

  // Concessionaire Management Path
  let concManagementPath = matchPath("/concessionaire-management/*", path);
  if (concManagementPath) {
    concManagementPath = concManagementPath.pathnameBase;
  }

  // report Path
  let reportPath = matchPath("/report/*", path);
  if (reportPath) {
    reportPath = reportPath.pathnameBase;
  }

  // pass management Path
  let passManagementPath = matchPath("/pass-management/*", path);
  if (passManagementPath) {
    passManagementPath = passManagementPath.pathnameBase;
  }

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    }
    if (arr === concManagementPath) {
      return "activeTab";
    }
    if (arr === reportPath) {
      return "activeTab";
    }
    if (arr === passManagementPath) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const dashboardCardPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Maximus Home</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Toll Exception List</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MTD Txn Summary VC Wise</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MTD Txn Summary RC Wise</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight"> MTD Txn Summary Count Wise</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight"> Pass Transaction Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                {" "}
                Transaction Summary Status Wise
              </span>
            </Link>
          </li>
          {/* <li className={activeLink("/card-operation/active-card")}>
            <Link to="/card-operation/active-card">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Active Cards</span>
            </Link>
          </li> */}
        </ul>
      </Popover.Body>
    </Popover>
  );
  const downloadsPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Escalation Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const adminCardPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Create Roles</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Create User</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Manage Users</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Manage Permissions</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Manage Pages</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">User Requests</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const reportsPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Veh Class Mapping Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Fair Detail Report</span>
            </Link>
          </li>
          <li>
            <Link
              to="/report/transaction-report"
              className={activeLink("/report/transaction-report")}
            >
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Pass Transaction Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Lane Status Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Query Exc Transactions NPCI</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Query Exc Transactions Plaza</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Day Wise Revenue Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Log File</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Reprocess Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Query Exception Plaza Wise Status
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Query Exception Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Monitoring</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Txn-Query Exception Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Decline Transaction Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const transactionReportPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Pending Transactions</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction History</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Decline Transaction Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Duplicate Transactions</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Summary Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">TAGID-TID Mis-match Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const concessionaireManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li className={activeLink("/concessionaire-management/registration")}>
            <Link to="/concessionaire-management/registration">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Registration</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Verification</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Active Concessionaire</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Deactive Concessionaire</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Edit Concessionaire</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Concessionaire Status</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Txn-Query Exception Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Decline Transaction Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const clientManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Registration</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Verification</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Active Clients</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Declined Clients</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Deactivated Clients</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Terminated Clients</span>
            </Link>
          </li>
          <li className={activeLink("/loan/loan-repayment")}>
            <Link to="/loan/loan-repayment">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Edit Client Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Client Status</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const plazaManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Plaza Register</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Plaza Verification</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Active Plaza</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Deactivate Plaza</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Edit Plaza</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Plaza Status</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const cardManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link
              to="/pass-management/issue-pass"
              className={activeLink("/pass-management/issue-pass")}
            >
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Issue Pass</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Register Local Vehicle</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Register Local Vehicle Report
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Issued Pass Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Tag Management</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">BlackTag Approval</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">BlackListing Tag</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Check Tag Status</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Tag Black List Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const vehicleClassPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">CCH Vehicle Class</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">CCH Vehicle Class Tracker</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Concessionaire Vehicle Class</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Concessionaire Vehicle Class Tracker
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Concessionaire Vehicle Mapping
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Concessionaire Veh. Mapping Tracker
              </span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const tollFarePopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Pass Scheme Request</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Pass Scheme Request</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight"> Distance Base Fare Request</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Fare Approval</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="sidebarSmall">
      {/* Home  */}
      <div className="sidebarSmallImg">
        <Link to="/">
          <span className="sidebarIconSize icon-Home">
            {/* Dashboard  Small Icon */}
          </span>
        </Link>
      </div>

      {/* Reconciliation  */}
      <div className="sidebarSmallImg">
        <Link to="/">
          <span className="sidebarIconSize icon-Reconciliation">
            {/* icon-Configuration  Small Icon */}
          </span>
        </Link>
      </div>

      {/* DashBoard Card */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={dashboardCardPopover}
          rootClose
        >
          <div className={activeLink("/card-operation")}>
            <span className="sidebarIconSize icon-Dashboard">
              {/* icon-Dashboard Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* downloadsPopover */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={downloadsPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Downloads">
            {/* icon-savings Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* admin */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={adminCardPopover}
          rootClose
        >
          <span className=" sidebarIconSize icon-admin-management">
            {/*  icon-admin-management Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Report */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={reportsPopover}
          rootClose
        >
          <div className={activeLink("/report")}>
            <span className="sidebarIconSize icon-Reports">
              {/* icon-master Small Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* Transaction Report */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={transactionReportPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-transaction">
            {/* icon-Reports Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Concessionaire Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={concessionaireManagementPopover}
          rootClose
        >
          <div className={activeLink("/concessionaire-management")}>
            <span className="sidebarIconSize icon-Concessionaire">
              {/* icon-customer-application Small Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* Client Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={clientManagementPopover}
          rootClose
        >
          <div className={activeLink("/loan")}>
            <span className="sidebarIconSize icon-client-management">
              {/* icon-loan Small Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* Plaza Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={plazaManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Plaza-Management">
            {/* icon-account Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* pass card Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={cardManagementPopover}
          rootClose
        >
          <div className={activeLink("/pass-management")}>
            <span className="sidebarIconSize icon-Pass-Management">
              {/* icon-card-management Small Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* Vehicle Class Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={vehicleClassPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Vehicle-Class-Management">
            {/* icon-Settlement Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Toll Fare Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={tollFarePopover}
          rootClose
        >
          <span className="sidebarIconSize icon-transaction">
            {/* icon-transaction Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      <button
        type="button"
        className="sidebarButton d-flex justify-content-center align-items-center"
        onClick={props.buttonCollapse}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.78 3.33331C6.8796 3.33297 6.978 3.35496 7.06799 3.39764C7.15797 3.44033 7.23725 3.50263 7.3 3.57998L10.52 7.57998C10.6181 7.69927 10.6717 7.8489 10.6717 8.00331C10.6717 8.15773 10.6181 8.30736 10.52 8.42665L7.18667 12.4266C7.07351 12.5628 6.9109 12.6484 6.73462 12.6647C6.55833 12.6809 6.38281 12.6265 6.24667 12.5133C6.11052 12.4002 6.02491 12.2375 6.00865 12.0613C5.9924 11.885 6.04684 11.7095 6.16 11.5733L9.14 7.99998L6.26 4.42665C6.17848 4.32879 6.12669 4.20963 6.11077 4.08326C6.09485 3.9569 6.11546 3.82861 6.17017 3.7136C6.22487 3.59858 6.31138 3.50164 6.41945 3.43424C6.52753 3.36685 6.65264 3.33182 6.78 3.33331Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarSmall;
