import React from "react";
import { Step } from "./Step";

export const SideBar = ({ step }) => {
  return (
    <>
      <div className="sidebarContainer background-svg">
        <Step step={step} />
      </div>
    </>
  );
};
