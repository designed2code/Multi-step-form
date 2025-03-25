import React from "react";

export const Heading = ({ headingText, subHeadingText }) => {
  return (
    <>
      <h1 className="mainContentContainer__heading">{headingText}</h1>
      <p className="mainContentContainer__subheading">{subHeadingText}</p>
    </>
  );
};
