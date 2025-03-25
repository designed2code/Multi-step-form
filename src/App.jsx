import { useState } from "react";
import { AddOn } from "./AddOn";
import "./App.css";
import { MainContent } from "./MainContent";
import { SelectYourPlan } from "./SelectYourPlan";
import { SideBar } from "./SideBar";
import { Button } from "./components/ui/button";
import { FooterBtn } from "./common/FooterBtn";
import { Summary } from "./Summary";
import { ThankYou } from "./ThankYou";

function App() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <SideBar step={step} />
          {step === 1 && (
            <MainContent
              footerBtn={
                <FooterBtn
                  step={step}
                  handleNextClick={() => setStep((prev) => prev + 1)}
                />
              }
            />
          )}
          {step === 2 && (
            <SelectYourPlan
              footerBtn={
                <FooterBtn
                  step={step}
                  handleNextClick={() => setStep((prev) => prev + 1)}
                  handlePreviousClick={() => setStep((prev) => prev - 1)}
                />
              }
            />
          )}
          {step === 3 && (
            <AddOn
              footerBtn={
                <FooterBtn
                  step={step}
                  handleNextClick={() => setStep((prev) => prev + 1)}
                  handlePreviousClick={() => setStep((prev) => prev - 1)}
                />
              }
            />
          )}
          {step === 4 && (
            <Summary
              footerBtn={
                <FooterBtn
                  step={step}
                  handleNextClick={() => setStep((prev) => prev + 1)}
                  handlePreviousClick={() => setStep((prev) => prev - 1)}
                />
              }
            />
          )}
          {step === 5 && <ThankYou />}
        </div>
      </div>
    </>
  );
}

export default App;
