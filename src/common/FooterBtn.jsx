import React from "react";

export const FooterBtn = ({ step, handleNextClick, handlePreviousClick }) => {
  const isLastStep = step === 4;
  return (
    <div
      className="btnContainer"
      style={{ justifyContent: step === 1 && "flex-end" }}
    >
      {step === 1 ? (
        <></>
      ) : (
        <button className="btnLink" onClick={handlePreviousClick}>
          Go Back
        </button>
      )}
      <button
        className="btnContained"
        style={{ background: isLastStep && "#483EFF" }}
        onClick={handleNextClick}
      >
        {isLastStep ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};
