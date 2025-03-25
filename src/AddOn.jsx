import React from "react";
import { Heading } from "./common/Heading";
import { FooterBtn } from "./common/FooterBtn";

export const AddOn = ({ footerBtn }) => {
  return (
    <>
      <div>
        <div className="mainContentContainer">
          <Heading
            headingText={"Pick add-ons"}
            subHeadingText={"Add-ons help enhance your gaming experience."}
          />
          <div className="addonContainer">
            <div className="checboxWithDescContainer">
              <input
                checked
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <div>
                <h1 className="addOnHeading">Online Service</h1>
                <p className="addOnDesc">Access to multiplayer games</p>
              </div>
            </div>
            <p className="addOnPrice">+$1/mo</p>
          </div>
          <div className="addonContainer">
            <div className="checboxWithDescContainer">
              <input
                checked
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <div>
                <h1 className="addOnHeading">Larger storage</h1>
                <p className="addOnDesc">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="addOnPrice">+$1/mo</p>
          </div>
          <div className="addonContainerInactive">
            <div className="checboxWithDescContainer">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <div>
                <h1 className="addOnHeading">Customizable profile</h1>
                <p className="addOnDesc">Custom theme on your profile</p>
              </div>
            </div>
            <p className="addOnPrice">+$1/mo</p>
          </div>
        </div>
        <div style={{ marginTop: "81px" }}>{footerBtn}</div>
      </div>
    </>
  );
};
