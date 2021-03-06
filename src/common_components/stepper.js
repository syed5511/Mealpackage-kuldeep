import React, { useEffect, useState } from "react";
import { arrayOf, shape, string, number, func } from "prop-types";

import { Container, Step, Count, Title, Line } from "./stepper.css";

const Stepper = ({ steps, currentStep, setCurrentStep, isMobile, theme }) => {
  const [completedStep, setCompletedStep] = useState(currentStep);

  useEffect(() => {
    if (currentStep > completedStep) {
      setCompletedStep(currentStep);
    }
  }, [currentStep]);

  const onStepClick = (currentIndex) => {
    if (currentIndex <= completedStep) {
      console.log("hi");
      setCurrentStep(currentIndex);
    }
  };

  return (
    <Container>
      {steps.map((item, i) => {
        const stepClassName = i <= completedStep ? "stepCompleted" : "";
        const className = i <= currentStep ? "completed" : "";
        const currentClass = i === currentStep ? "current" : "";
        const mobileClass = isMobile ? "mobile" : "";
        const selectableClass = `${stepClassName} ${className} ${mobileClass} ${currentClass} ${theme}`;

        return (
          <Step key={item.key}>
            <Count className={selectableClass} onClick={() => onStepClick(i)}>
              {i + 1}
            </Count>
            {(!isMobile || (isMobile && i === currentStep)) && (
              <Title className={selectableClass} onClick={() => onStepClick(i)}>
                {item.title}
              </Title>
            )}
            {i !== steps.length - 1 && <Line className={selectableClass} />}
          </Step>
        );
      })}
    </Container>
  );
};

Stepper.propTypes = {
  steps: arrayOf(
    shape({
      key: string,
      title: string,
    })
  ),
  theme: string,
  currentStep: number,
  setCurrentStep: func,
};

Stepper.defaultProps = {
  steps: [],
  currentStep: 0,
  theme: "",
  setCurrentStep: () => 0,
};

export default Stepper;
