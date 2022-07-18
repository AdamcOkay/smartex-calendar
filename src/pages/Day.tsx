import React, { useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

import { MainLayout } from "../styles/layout/MainLayout";
import { InputWrapper, InputLabel, Input } from "../styles/components/Input";
import {
  ButtonsWrapper,
  MainButton,
  CancelButton,
} from "../styles/components/Buttons";

import { Toggle } from "../components/Toggle";

export const Day = () => {
  useEffect(() => {
    registerLocale("ru", ru);
  }, []);

  return (
    <MainLayout>
      <div>
        <DatePicker
          locale={ru}
          onChange={(e) => {
            console.log(e);
          }}
          inline
        />
      </div>
      <form>
        <InputWrapper>
          <InputLabel>Рабочий день</InputLabel>
          <Toggle />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Время начала</InputLabel>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Время завершения</InputLabel>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Текст уведомления</InputLabel>
          <Input />
        </InputWrapper>
        <ButtonsWrapper>
          <CancelButton>Отменить</CancelButton>
          <MainButton>Сохранить</MainButton>
        </ButtonsWrapper>
      </form>
    </MainLayout>
  );
};
