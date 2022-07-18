import React, { useState, useEffect } from "react";

import { FormInterface, FormProps } from "../types";

import { InputWrapper, Input, InputLabel } from "../styles/components/Input";
import { Toggle } from "./Toggle";
import {
  ButtonsWrapper,
  CancelButton,
  MainButton,
} from "../styles/components/Buttons";

export const Form: React.FC<
  FormProps & React.FormHTMLAttributes<HTMLFormElement>
> = ({ formData, onInputChange, onChangeParams, onCancel, ...rest }) => {
  const [timeRequired, setTimeRequired] = useState(false);

  //   Меняем required для времени, в зависимости от состояния чекбокса
  const changeTimeRequired = (checked: boolean | undefined) => {
    if (typeof checked === "undefined") return;
    setTimeRequired(!checked);
  };

  useEffect(() => {
    setTimeRequired(false);
  }, []);

  return (
    <form {...rest}>
      {formData.map((input: FormInterface) => (
        <InputWrapper key={input.inputName}>
          <InputLabel>{input.inputLabel}</InputLabel>
          {input.inputType === "text" ? (
            <Input
              name={input.inputName}
              type="text"
              value={input.inputValue}
              onChange={(e) => {
                onInputChange(
                  e,
                  onChangeParams.activeMode,
                  onChangeParams.setActiveMode
                );
              }}
              required={
                input.inputName === "startTime" || input.inputName === "endTime"
                  ? timeRequired
                  : input.inputRequired
              }
            />
          ) : (
            <Toggle
              name={input.inputName}
              checked={input.inputChecked}
              onChange={(e) => {
                changeTimeRequired(input.inputChecked);
                onInputChange(
                  e,
                  onChangeParams.activeMode,
                  onChangeParams.setActiveMode
                );
              }}
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
