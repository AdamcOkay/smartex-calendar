import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";

import { newClearMode } from "../helpers/newClearMode";
import { updateData } from "../helpers/updateData";
import { isDataExists } from "../helpers/isDataExists";
import { setToLocalStorage } from "../helpers/setToLocalStorage";

import { DayProps, ModeInterface, FormInterface } from "../types";

import { MainLayout } from "../styles/layout/MainLayout";
import { Form } from "../components/Form";

export const Day: React.FC<DayProps> = ({ days, setDays }) => {
  const [activeDay, setActiveDay] = useState<Date>(new Date());
  const [activeDayData, setActiveDayData] = useState<ModeInterface | null>(
    null
  );
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [formData, setFormData] = useState<FormInterface[]>([]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!days || !activeDayData) return;

    const updatedDays = updateData(activeDayData, days);

    setActiveDayIndex(updatedDays.length - 1);
    setDays([...updatedDays]);
    setToLocalStorage("days", JSON.stringify([...updatedDays]));
  };

  useEffect(() => {
    setActiveDayData(
      days[activeDayIndex] || {
        ...newClearMode(),

        date: activeDay.getTime(),
        weekDay: activeDay.getDay() === 0 ? 7 : activeDay.getDay(),
        modeName: activeDay.toString(),
      }
    );
  }, [days]);

  useEffect(() => {
    // Обнуляем часы даты
    activeDay.setHours(0, 0, 0, 0);

    // Проверяем существует ли дата в имеющемся массиве дат
    const isDateExists = isDataExists(
      activeDay.getTime(),
      days,
      "date",
      "Date"
    );

    // Если существует, то показываем эту дату,
    if (isDateExists !== false) {
      setActiveDayData({ ...days[isDateExists] });
      return;
    }

    // Если даты нет, то добавляем её

    const newDay: ModeInterface = {
      ...newClearMode(),

      date: activeDay.getTime(),
      weekDay: activeDay.getDay() === 0 ? 7 : activeDay.getDay(),
      modeName: activeDay.toString(),
    };

    setActiveDayData({ ...newDay });
  }, [activeDay]);

  useEffect(() => {
    if (!activeDayData) return;

    setFormData([
      {
        inputLabel: "Рабочий день",
        inputName: "isWorkingDay",
        inputType: "checkbox",
        inputRequired: false,
        inputChecked: activeDayData.isWorkingDay,
      },
      {
        inputLabel: "Время начала",
        inputName: "startTime",
        inputType: "text",
        inputRequired: false,
        inputValue: activeDayData.startTime,
      },
      {
        inputLabel: "Время завершения",
        inputName: "endTime",
        inputType: "text",
        inputRequired: false,
        inputValue: activeDayData.endTime,
      },
      {
        inputLabel: "Текст уведомления",
        inputName: "notification",
        inputType: "text",
        inputRequired: true,
        inputValue: activeDayData.notification,
      },
    ]);
  }, [activeDayData]);

  return (
    <MainLayout>
      <div>
        <DatePicker
          inline
          locale={ru}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          onChange={(e: Date) => {
            setActiveDay(e);
          }}
          onMonthChange={(e) => {
            setActiveDay(e);
          }}
          onYearChange={(e) => {
            setActiveDay(e);
          }}
        />
      </div>

      {activeDayData && (
        <Form
          formData={formData}
          onChangeParams={{
            state: { ...activeDayData },
            setState: setActiveDayData,
          }}
          onCancel={() => {
            setActiveDayData(days[days.length - 1] || null);
          }}
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
          stateToListen={activeDay}
        />
      )}
    </MainLayout>
  );
};
