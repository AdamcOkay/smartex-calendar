import React, { useEffect, useState } from "react";

import { handleInputChange } from "../../helpers/handleInputChange";
import { newMode } from "../../helpers/newMode";
import { updateModes } from "../../helpers/updateModes";

import { ModeInterface, ModeProps, FormInterface } from "../../types";

import { MainLayout } from "../../styles/layout/MainLayout";
import { MainSidebar } from "../../styles/layout/MainSidebar";
import { Form } from "../../components/Form";

import { ModesList, ErrText, ModeButton, AddMode } from "./StyledModes";

export const Modes: React.FC<ModeProps> = ({ modes, setModes }) => {
  const [activeMode, setActiveMode] = useState<ModeInterface | null>(null);
  const [formData, setFormData] = useState<FormInterface[]>([]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modes || !activeMode) return;

    const updatedModes = updateModes(activeMode, modes);

    setModes([...updatedModes]);
  };

  useEffect(() => {
    setActiveMode(modes[0] || null);
  }, []);

  useEffect(() => {
    if (!activeMode) return;

    setFormData([
      {
        inputLabel: "Название",
        inputName: "modeName",
        inputType: "text",
        inputRequired: true,
        inputValue: activeMode.modeName,
      },
      {
        inputLabel: "Рабочий день",
        inputName: "isWorkingDay",
        inputType: "checkbox",
        inputRequired: false,
        inputChecked: activeMode.isWorkingDay,
      },
      {
        inputLabel: "Время начала",
        inputName: "startTime",
        inputType: "text",
        inputRequired: false,
        inputValue: activeMode.startTime,
      },
      {
        inputLabel: "Время завершения",
        inputName: "endTime",
        inputType: "text",
        inputRequired: false,
        inputValue: activeMode.endTime,
      },
      {
        inputLabel: "Текст уведомления",
        inputName: "notification",
        inputType: "text",
        inputRequired: true,
        inputValue: activeMode.notification,
      },
    ]);
  }, [activeMode]);

  return (
    <MainLayout>
      <MainSidebar>
        <ModesList>
          {modes.length > 0 &&
            modes.map((mode: ModeInterface) => (
              <ModeButton
                key={mode.id}
                onClick={() => setActiveMode({ ...mode })}
              >
                {mode.modeName}
              </ModeButton>
            ))}

          <AddMode
            onClick={() => {
              newMode(setActiveMode);
            }}
          >
            + Добавить режим
          </AddMode>
        </ModesList>
      </MainSidebar>

      {activeMode !== null ? (
        <Form
          formData={formData}
          onChangeParams={{
            activeMode: { ...activeMode },
            setActiveMode: setActiveMode,
          }}
          onInputChange={handleInputChange}
          onCancel={() => {
            setActiveMode({ ...activeMode } || null);
          }}
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        />
      ) : (
        <ErrText>
          Нет существующих режимов работы. Пожалуйста добавьте новый режим
        </ErrText>
      )}
    </MainLayout>
  );
};
