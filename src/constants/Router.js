import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components

import ConcessionaireRegistration from "../pages/ConcessionaireRegistration";
import TransactionReport from "../pages/TransactionReport";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConcessionaireRegistration />} />
        <Route path="/concessionaire-management/registration" element={<ConcessionaireRegistration />} />
        <Route path="/report/transaction-report" element={<TransactionReport />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
