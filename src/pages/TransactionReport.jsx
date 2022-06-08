import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/transactionReport/transactionReport.css";
// Components
import Header from "../components/common/Header";
import TransactionReportMain from "../components/transactionReport/TransactionReportMain";
import Footer from "../components/common/Footer";

const TransactionReport = () => {
  return (
    <div>
      <Header />
      <TransactionReportMain />
      <Footer />
    </div>
  );
};

export default TransactionReport;
