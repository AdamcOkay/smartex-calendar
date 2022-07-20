import React, { useEffect, useState } from "react";

import { newClearMode } from "../../helpers/newClearMode";
import { updateData } from "../../helpers/updateData";
import { setToLocalStorage } from "../../helpers/setToLocalStorage";

import { ModeInterface, ModeProps, FormInterface } from "../../types";

import { MainLayout } from "../../styles/layout/MainLayout";
import { MainSidebar } from "../../styles/layout/MainSidebar";
import { Form } from "../../components/Form";

import { ModesList, ErrText, ModeButton, AddMode } from "./StyledModes";

export const Modes: React.FC<ModeProps> = ({ modes, setModes }) => {
  const [activeMode, setActiveMode] = useState<ModeInterface | null>(null);
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const [formData, setFormData] = useState<FormInterface[]>([]);

  const handleAddClick = () => {
    // Создаем чистый режим работы и делаем его активным
    const newMode = newClearMode();
    setActiveMode(newMode);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modes || !activeMode) return;

    // Обновляем данные
    // Добавляем режим, если его нет в массиве. Обновляем существующий, если режим есть в массиве
    const updatedModes = updateData(activeMode, modes);

    // Сохраняем новый/обновленный режим
    setModes(updatedModes);
    setToLocalStorage("modes", JSON.stringify(updatedModes));
  };

  // Обновляем активный режим
  useEffect(() => {
    setActiveMode(modes[0] || null);
  }, [modes]);

  useEffect(() => {
    if (!activeMode) return;

    // Обновляем данные формы
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
            modes.map((mode: ModeInterface, index: number) => (
              <ModeButton
                key={mode.id}
                onClick={() => {
                  setActiveModeIndex(index);
                  setActiveMode({ ...mode });
                }}
              >
                {mode.modeName}
              </ModeButton>
            ))}

          <AddMode
            onClick={() => {
              setActiveModeIndex(modes.length);
              handleAddClick();
            }}
          >
            + Добавить режим
          </AddMode>
        </ModesList>
      </MainSidebar>

      {activeMode !== null ? (
        <Form
          formData={formData}
          stateToListen={activeModeIndex}
          onChangeParams={{
            state: { ...activeMode },
            setState: setActiveMode,
          }}
          onCancel={() => {
            setActiveMode(
              modes[activeModeIndex] || modes[activeModeIndex - 1] || null
            );
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
