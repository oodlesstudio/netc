import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import TollExceptionListWindow from "./TollExceptionListWindow";

const TollExceptionListMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });
  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <TollExceptionListWindow />
      </div>
    </div>
  );
};

export default TollExceptionListMain;
