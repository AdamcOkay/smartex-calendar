import React from "react";

import {
  CheckInput,
  CheckSwitch,
  CheckToggle,
} from "../styles/components/CheckSwitch";

export const Toggle: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...attributes
}) => {
  return (
    <CheckSwitch>
      <CheckInput type="checkbox" {...attributes} />
      <CheckToggle></CheckToggle>
    </CheckSwitch>
  );
};
