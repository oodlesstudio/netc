import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import IssuePassWindow from "./IssuePassWindow";

const IssuePassMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });
  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <IssuePassWindow />
      </div>
    </div>
  );
};

export default IssuePassMain;
