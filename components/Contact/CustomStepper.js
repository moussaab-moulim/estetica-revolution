import React from "react";
import { Stepper } from "react-form-stepper";
const CustomStepper = ({ activeStep }) => {
    return (
        <Stepper
            steps={[{ label: "1" }, { label: "2" }, { label: "3" }]}
            activeStep={activeStep}
        />
    );
};

export default CustomStepper;
