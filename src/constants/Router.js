import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components

import ConcessionaireRegistration from "../pages/ConcessionaireRegistration";
import TransactionReport from "../pages/TransactionReport";
import IssuePass from "../pages/IssuePass";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConcessionaireRegistration />} />
        <Route path="/concessionaire-management/registration" element={<ConcessionaireRegistration />} />
        <Route path="/report/transaction-report" element={<TransactionReport />} />
        <Route path="/pass-management/issue-pass" element={<IssuePass />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
