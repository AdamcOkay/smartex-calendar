import React, { useState } from "react";

import { MainLayout } from "../../styles/layout/MainLayout";
import { MainSidebar } from "../../styles/layout/MainSidebar";

import { Toggle } from "../../components/Toggle";
import {
  ButtonsWrapper,
  MainButton,
  CancelButton,
} from "../../styles/components/Buttons";

import { ModesList, ErrText, ModeButton, AddMode } from "./StyledModes";
import { InputWrapper, InputLabel, Input } from "../../styles/components/Input";

import { ModeInterface } from "../../types";
interface ModesProps {
  modes: ModeInterface[];
}

export const Modes: React.FC<ModesProps> = ({ modes }) => {
  const [activeMode, setActiveMode] = useState<ModeInterface | null>(null);

  return (
    <MainLayout>
      <MainSidebar>
        <ModesList>
          {modes.length > 0 ? (
            modes.map((mode: ModeInterface) => (
              <ModeButton
                key={mode.modeName}
                onClick={() => setActiveMode(mode)}
              >
                {mode.modeName}
              </ModeButton>
            ))
          ) : (
            <ErrText>
              Нет существующих режимов работы. Пожалуйста добавьте новый режим
            </ErrText>
          )}

          <AddMode onClick={() => setActiveMode(null)}>
            + Добавить режим
          </AddMode>
        </ModesList>
      </MainSidebar>

      <div>
        <InputWrapper>
          <InputLabel>Название</InputLabel>
          <Input />
        </InputWrapper>
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
      </div>
    </MainLayout>
  );
};
