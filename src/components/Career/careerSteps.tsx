import React from "react";
import { Steps } from "antd";
import { ISelectedCareerData } from "./types";
import "./index.css";

const { Step } = Steps;

const CareerSteps = ({ selectedCareerData }: {selectedCareerData:  ISelectedCareerData[] } ) => {
  return (
    <Steps
      className="stepsContainer"
      progressDot
      // current={0}
      direction="vertical"
    >
      {selectedCareerData.map((each) => (
        <Step
          description={each.description}
          key={each.name}
          status="finish"
          subTitle={each.duration}
          title={each.name}
        />
      ))}
    </Steps>
  );
};
export default CareerSteps;
