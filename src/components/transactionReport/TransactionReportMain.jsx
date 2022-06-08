import React from "react";
import { useSelector } from "react-redux";
// CSS
import "./transactionReport.css";
// Components
import SidebarMain from "../common/SidebarMain";
import TransactionReportWindow from "./TransactionReportWindow";

const TransactionReportMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <TransactionReportWindow />
      </div>
    </div>
  );
};

export default TransactionReportMain;
