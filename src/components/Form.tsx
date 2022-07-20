import React, { useState, useEffect } from "react";
import { FormInterface, FormProps } from "../types";
import { handleInputChange } from "../helpers/handleInputChange";

import { InputWrapper, Input, InputLabel } from "../styles/components/Input";
import { TimeInput } from "./TimeInput";
import { Toggle } from "./Toggle";
import {
  ButtonsWrapper,
  CancelButton,
  MainButton,
} from "../styles/components/Buttons";

export const Form: React.FC<
  FormProps & React.FormHTMLAttributes<HTMLFormElement>
> = ({ formData, stateToListen, onChangeParams, onCancel, ...rest }) => {
  const [timeRequired, setTimeRequired] = useState(false);

  // Меняем required для времени, в зависимости от состояния чекбокса
  const changeTimeRequired = (checked: boolean | undefined) => {
    if (typeof checked === "undefined") return;
    setTimeRequired(!checked);
  };

  // Слушаем переданный state, чтобы сбрасывать required
  useEffect(() => {
    setTimeRequired(false);
  }, [stateToListen]);

  return (
    <form {...rest}>
      {formData.map((input: FormInterface) => (
        <InputWrapper key={input.inputName}>
          <InputLabel>{input.inputLabel}</InputLabel>
          {input.inputType === "text" &&
          (input.inputName === "startTime" || input.inputName === "endTime") ? (
            <TimeInput
              name={input.inputName}
              type={input.inputType}
              value={input.inputValue}
              onChange={(e) => {
                handleInputChange(
                  e,
                  onChangeParams.state,
                  onChangeParams.setState
                );
              }}
              required={timeRequired}
            />
          ) : input.inputType === "checkbox" ? (
            <Toggle
              name={input.inputName}
              checked={input.inputChecked}
              onChange={(e) => {
                changeTimeRequired(input.inputChecked);
                handleInputChange(
                  e,
                  onChangeParams.state,
                  onChangeParams.setState
                );
              }}
            />
          ) : (
            <Input
              name={input.inputName}
              type={input.inputType}
              value={input.inputValue}
              onChange={(e) => {
                handleInputChange(
                  e,
                  onChangeParams.state,
                  onChangeParams.setState
                );
              }}
              required={input.inputRequired}
            />
          )}
        </InputWrapper>
      ))}
      <ButtonsWrapper>
        <CancelButton
          type="button"
          onClick={() => {
            onCancel();
          }}
        >
          Отменить
        </CancelButton>
        <MainButton type="submit">Сохранить</MainButton>
      </ButtonsWrapper>
    </form>
  );
};
