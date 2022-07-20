import React from "react";
import { IMask } from "react-imask";
import { MaskedInput } from "../styles/components/Input";

export const TimeInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ ...attributes }) => {
  const configBlocks = {
    timeMask: {
      overwrite: true,
      autofix: true,
      mask: "HH{:}mm",
      lazy: false,
      blocks: {
        HH: {
          mask: function (value: any) {
            if (isNaN(value)) {
              return false;
            }
            const int_value = parseInt(value);
            return value.length < 3 && 0 <= int_value && int_value <= 24;
          },
          maxLength: 2,
        },

        mm: {
          mask: IMask.MaskedRange,
          placeholderChar: "0",
          from: 0,
          to: 59,
          maxLength: 2,
        },
      },
    },
  };
  return <MaskedInput blocks={configBlocks} mask="timeMask" {...attributes} />;
};
