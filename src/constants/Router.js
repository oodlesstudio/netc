import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components

import ConcessionaireRegistration from "../pages/ConcessionaireRegistration";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConcessionaireRegistration />} />
        <Route path="/concessionaire-management/registration" element={<ConcessionaireRegistration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
