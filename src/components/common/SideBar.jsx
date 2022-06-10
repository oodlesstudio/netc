import React, { useEffect } from "react";
import { Link, useLocation, matchPath, useNavigate } from "react-router-dom";
// Components

// path match

const SideBar = (props) => {
  let path = useLocation().pathname;
  let navigate = useNavigate();

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

  // route Re-Direct
  useEffect(() => {
    if (path === "/") {
      navigate("/concessionaire-management/registration");
    }
  });

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const activeBtnClass = (arr) => {
    if (arr === path) {
      return "accordion-button";
    }
    if (arr === concManagementPath) {
      return "accordion-button";
    }
    if (arr === reportPath) {
      return "accordion-button";
    }
    if (arr === passManagementPath) {
      return "accordion-button";
    } else {
      return "accordion-button collapsed";
    }
  };
  const activeAriaExpand = (arr = []) => {
    if (arr === path) {
      return "true";
    }
    if (arr === concManagementPath) {
      return "true";
    }
    if (arr === reportPath) {
      return "true";
    }
    if (arr === passManagementPath) {
      return "true";
    } else {
      return "false";
    }
  };
  const activeAccordionBodyClass = (arr) => {
    if (arr === path) {
      return "accordion-collapse collapse show";
    }
    if (arr === concManagementPath) {
      return "accordion-collapse collapse show";
    }
    if (arr === reportPath) {
      return "accordion-collapse collapse show";
    }
    if (arr === passManagementPath) {
      return "accordion-collapse collapse show";
    } else {
      return "accordion-collapse collapse ";
    }
  };

  return (
    <div className="sideBar">
      <div className="accordion" id="accordionExample">
        {/*Home*/}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <button className="accordion-button collapsed" type="button">
              <span className="sidebarIconSize icon-Home"></span>
              <span className="fontSize14 ms-2">Home</span>
            </button>
          </h2>
        </div>

        {/* Reconciliation */}
        <div className="accordion-item">
          <h2
            className="accordion-header hideArrowIcon"
            id="headingReconciliation"
          >
            <Link
              to="/cms-configuration"
              className={activeLink("/reconciliation")}
            >
              <button className="accordion-button collapsed" type="button">
                <span className="sidebarIconSize icon-Reconciliation"></span>
                <span className="fontSize14 ms-2">Reconciliation</span>
              </button>
            </Link>
          </h2>
        </div>

        {/* Dashboard */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDashboard">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDashboard"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseDashboard"
            >
              <span className="sidebarIconSize icon-Dashboard"></span>
              <span className="fontSize14 ms-2">Dashboard</span>
            </button>
          </h2>
          <div
            id="collapseDashboard"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingDashboard"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Maximus Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      MTD Txn Summary VC Wise
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      MTD Txn Summary RC Wise
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      {" "}
                      MTD Txn Summary Count Wise
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      {" "}
                      Pass Transaction Summary
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      {" "}
                      Transaction Summary Status Wise
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Downloads */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDownloads">
            <button
              className={activeBtnClass("/downloads")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDownloads"
              aria-expanded={activeAriaExpand("/downloads")}
              aria-controls="collapseDownloads"
            >
              <span className="sidebarIconSize icon-Downloads"></span>
              <span className="fontSize14 ms-2">Downloads</span>
            </button>
          </h2>
          <div
            id="collapseDownloads"
            className={activeAccordionBodyClass("/financial-report")}
            aria-labelledby="headingDownloads"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Escalation Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Admin Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAdmin">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAdmin"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseAdmin"
            >
              <span className="sidebarIconSize icon-admin-management"></span>
              <span className="fontSize14 ms-2">Admin Management</span>
            </button>
          </h2>
          <div
            id="collapseAdmin"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAdmin"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Create Roles</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Create User</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Manage Users</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Manage Permissions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Manage Pages</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">User Requests</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingReports">
            <button
              className={activeBtnClass("/report")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseReports"
              aria-expanded={activeAriaExpand("/report")}
              aria-controls="collapseReports"
            >
              <span className="sidebarIconSize icon-Reports"></span>
              <span className="fontSize14 ms-2">Reports</span>
            </button>
          </h2>
          <div
            id="collapseReports"
            className={activeAccordionBodyClass("/report")}
            aria-labelledby="headingReports"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Veh Class Mapping Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
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
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Pass Transaction Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Lane Status Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Query Exc Transactions NPCI
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Query Exc Transactions Plaza
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Day Wise Revenue Dashboard
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Transaction Log File</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Reprocess Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Query Exception Plaza Wise Status
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Query Exception Details
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Transaction Monitoring</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Txn-Query Exception Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Decline Transaction Report
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Transaction Report*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTransaction">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTransaction"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseTransaction"
            >
              <span className="sidebarIconSize icon-transaction"></span>
              <span className="fontSize14 ms-2">Transaction Report</span>
            </button>
          </h2>
          <div
            id="collapseTransaction"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingTransaction"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Pending Transactions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Transaction History</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Decline Transaction Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Duplicate Transactions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Transaction Summary Details
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      TAGID-TID Mis-match Report
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Concessionaire Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingConcessionaire">
            <button
              className={activeBtnClass("/concessionaire-management")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseConcessionaire"
              aria-expanded={activeAriaExpand("/concessionaire-management")}
              aria-controls="collapseConcessionaire"
            >
              <span className="sidebarIconSize icon-Concessionaire"></span>
              <span className="fontSize14 ms-2">Concessionaire Management</span>
            </button>
          </h2>
          <div
            id="collapseConcessionaire"
            className={activeAccordionBodyClass("/concessionaire-management")}
            aria-labelledby="headingConcessionaire"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link
                    to="/concessionaire-management/registration"
                    className={activeLink(
                      "/concessionaire-management/registration"
                    )}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Registration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Verification</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Active Concessionaire</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Deactive Concessionaire
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Edit Concessionaire</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Concessionaire Status</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Txn-Query Exception Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Decline Transaction Report
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Client Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingClientManagement">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseClientManagement"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseClientManagement"
            >
              <span className="sidebarIconSize icon-client-management"></span>
              <span className="fontSize14 ms-2">Client Management</span>
            </button>
          </h2>
          <div
            id="collapseClientManagement"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingClientManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Registration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Verification</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Active Clients</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Declined Clients</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Deactivated Clients</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Terminated Clients</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Edit Client Details</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Client Status</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Plaza Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPlazaManagement">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePlazaManagement"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapsePlazaManagement"
            >
              <span className="sidebarIconSize icon-Plaza-Management"></span>
              <span className="fontSize14 ms-2">Plaza Management</span>
            </button>
          </h2>
          <div
            id="collapsePlazaManagement"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingPlazaManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Plaza Register</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Plaza Verification</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Active Plaza</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Deactivate Plaza</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Edit Plaza</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Plaza Status</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Pass Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPassManagement">
            <button
              className={activeBtnClass("/pass-management")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePassManagement"
              aria-expanded={activeAriaExpand("/pass-management")}
              aria-controls="collapsePassManagement"
            >
              <span className="sidebarIconSize icon-Pass-Management"></span>
              <span className="fontSize14 ms-2">Pass Management</span>
            </button>
          </h2>
          <div
            id="collapsePassManagement"
            className={activeAccordionBodyClass("/pass-management")}
            aria-labelledby="headingPassManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
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
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Register Local Vehicle</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Register Local Vehicle Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Issued Pass Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Tag Management</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">BlackTag Approval</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">BlackListing Tag</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/loan/loan-repayment"
                    className={activeLink("/loan/loan-repayment")}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Check Tag Status</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Tag Black List Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Vehicle Class Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingVehicleManagement">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseVehicleManagement"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseVehicleManagement"
            >
              <span className="sidebarIconSize icon-Vehicle-Class-Management"></span>
              <span className="fontSize14 ms-2">Vehicle Class Management</span>
            </button>
          </h2>
          <div
            id="collapseVehicleManagement"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingVehicleManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">CCH Vehicle Class</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      CCH Vehicle Class Tracker
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Concessionaire Vehicle Class
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Concessionaire Vehicle Class Tracker
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Concessionaire Vehicle Mapping
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Concessionaire Veh. Mapping Tracker
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Toll Fare Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTollManagement">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTollManagement"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseTollManagement"
            >
              <span className="sidebarIconSize icon-Toll-Fare-Management"></span>
              <span className="fontSize14 ms-2">Toll Fare Management</span>
            </button>
          </h2>
          <div
            id="collapseTollManagement"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingTollManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Pass Scheme Request</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Pass Scheme Request</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      {" "}
                      Distance Base Fare Request
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Fare Approval</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
            d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.44169 3.31909 9.61722 3.37353 9.75336 3.48669C9.8895 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBar;
