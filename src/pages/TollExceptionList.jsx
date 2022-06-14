import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/tollExceptionList/tollExceptionList.css";
// Components
import Header from "../components/common/Header";
import TollExceptionListMain from "../components/tollExceptionList/TollExceptionListMain";
import Footer from "../components/common/Footer";

const TollExceptionList = () => {
  return (
    <div>
      <Header />
      <TollExceptionListMain />
      <Footer />
    </div>
  );
};

export default TollExceptionList;
