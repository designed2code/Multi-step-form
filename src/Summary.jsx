import React from "react";
import { Heading } from "./common/Heading";

export const Summary = ({ footerBtn }) => {
  return (
    <>
      <div>
        <div className="mainContentContainer">
          <Heading
            headingText={"Finishing up"}
            subHeadingText={
              "Double-check everything looks OK before confirming."
            }
          />
          <div className="summaryContainer">
            <div className="flexSpaceBetween">
              <div>
                <h1 className="arcadeMonthly">Arcade(Monthly)</h1>
                <p className="txtWithUnderline">Change</p>
              </div>
              <div>
                <p className="arcadeMonthly">$9/mo</p>
              </div>
            </div>
            <hr className="horizontalLine" />
            <div className="flexSpaceBetween">
              <h1 className="greyTxt">Online Service</h1>
              <p className="price">+$1/mo</p>
            </div>
            <div className="flexSpaceBetween" style={{ marginTop: "1rem" }}>
              <h1 className="greyTxt">Larger Storage</h1>
              <p className="price">+$1/mo</p>
            </div>
          </div>
          <div className="totalPriceContainer">
            <h1 className="totalTxt">Total (per month)</h1>
            <p className="totalValue">+$12/mo</p>
          </div>
        </div>
        <div style={{ marginTop: "128px" }}>{footerBtn}</div>
      </div>
    </>
  );
};
