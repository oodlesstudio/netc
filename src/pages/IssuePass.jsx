import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/issuePass/issuePass.css";
// Components
import Header from "../components/common/Header";
import IssuePassMain from "../components/issuePass/IssuePassMain";
import Footer from "../components/common/Footer";

const IssuePass = () => {
  return (
    <div>
      <Header />
      <IssuePassMain />
      <Footer />
    </div>
  );
};

export default IssuePass;
