import React from "react";
import { Steps } from "antd";
import "./index.css";

const { Step } = Steps;

const CareerSteps = ({ selectedCareerData }) => {
  return (
    <Steps
      className="stepsContainer"
      progressDot
      // current={0}
      direction="vertical"
    >
      {selectedCareerData.map((each) => (
        <Step
          title={each.name}
          key={each.name}
          subTitle={each.duration}
          status="finish"
          description={each.description}
        />
      ))}
    </Steps>
  );
};
export default CareerSteps;
