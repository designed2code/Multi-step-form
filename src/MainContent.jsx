import React from "react";
import { FooterBtn } from "./common/FooterBtn";
import { Heading } from "./common/Heading";
export const MainContent = ({ footerBtn }) => {
  return (
    <>
      <div>
        <div className="mainContentContainer">
          <Heading
            headingText={"Personal Info"}
            subHeadingText={
              "Please provide your name, email address, and phone number."
            }
          />
          <form>
            <label className="inputLabel">Name</label>
            <input
              type="text"
              className="inputField"
              placeholder="e.g. Stephen King"
            />

            <label className="inputLabel">Email Address</label>
            <input
              type="text"
              className="inputField"
              placeholder="e.g. stephenking@lorem.com"
            />

            <label className="inputLabel">Phone Number</label>
            <input
              type="text"
              className="inputField"
              placeholder="e.g. +1 234 567 890"
            />
          </form>
        </div>
        <div style={{ marginTop: "92px" }}>{footerBtn}</div>
      </div>
    </>
  );
};
