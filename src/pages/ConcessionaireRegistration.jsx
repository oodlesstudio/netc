import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/concessionaireRegistration/concessionaireRegistration.css";
// Components
import Header from "../components/common/Header";
import BulkVoucherMain from "../components/concessionaireRegistration/ConcessionaireRegistrationMain";
import Footer from "../components/common/Footer";

const ConcessionaireRegistration = () => {
  return (
    <div>
      <Header />
      <BulkVoucherMain />
      <Footer />
    </div>
  );
};

export default ConcessionaireRegistration;
