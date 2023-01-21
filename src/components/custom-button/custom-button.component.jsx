import React from "react";

import { CustomButtonContainer } from "./custom-button";

function CustomButton({ children, ...restProps }) {
  return (
    <CustomButtonContainer {...restProps}>{children}</CustomButtonContainer>
  );
}

export default CustomButton;
