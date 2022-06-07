import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import ConcessionaireRegistrationWindow from "./ConcessionaireRegistrationWindow";

const ConcessionaireRegistrationMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <ConcessionaireRegistrationWindow />
      </div>
    </div>
  );
};

export default ConcessionaireRegistrationMain;
