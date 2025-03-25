import React from "react";

export const Step = ({ step }) => {
  const data = [
    { id: 1, name: "Step 1", desc: "Your Info" },
    { id: 2, name: "Step 2", desc: "Select Plan" },
    { id: 3, name: "Step 3", desc: "Add-On" },
    { id: 4, name: "Step 4", desc: "Summary" },
  ];
  return (
    <>
      <div className="step__container" key={data.id}>
        {data.map((data, index) => (
          <div className="step__content__container">
            <div
              className={
                data.id === step
                  ? "step__number__container"
                  : "step__number__container_inactive"
              }
            >
              <p
                className={
                  data.id === step ? "step__number" : "step__number_inactive"
                }
              >
                {data.id}
              </p>
            </div>
            <div>
              <h3 className="step">{data.name}</h3>
              <h2 className="step__info">{data.desc}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
