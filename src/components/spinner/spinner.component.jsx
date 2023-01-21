import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";
const Spinner = () => {
  return (
    <div>
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    </div>
  );
};

export default Spinner;
