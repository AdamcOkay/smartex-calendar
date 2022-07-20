import React, { ChangeEvent, useState } from "react";

import DatePicker from "react-datepicker";

import subDays from "date-fns/subDays";
import ru from "date-fns/locale/ru";

import { RangeProps, ModeInterface } from "../types";
import { getDatesInRage } from "../helpers/getDatesInRage";
import { renderDateModes } from "../helpers/renderDateModes";
import { newClearMode } from "../helpers/newClearMode";
import { isDataExists } from "../helpers/isDataExists";
import { clearWeek } from "../helpers/clearWeek";
import { setToLocalStorage } from "../helpers/setToLocalStorage";

import { MainLayout } from "../styles/layout/MainLayout";
import { Table, Thead, Tbody, Th, Tr, Td } from "../styles/components/Table";
import { SelectWrapper, Select } from "../styles/components/Select";
import { MainButton } from "../styles/components/Buttons";

export const Range: React.FC<RangeProps> = ({ days, setDays, modes }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [rangeDates, setRangeDates] = useState<ModeInterface[]>([
    {
      date: new Date().getTime(),
      weekDay: new Date().getDay() === 0 ? 7 : new Date().getDay(),
      ...newClearMode(),
    },
  ]);

  // "Чистые" дни недели без привязанных режимов
  const [weekData, setWeekData] = useState(clearWeek());

  const onRangeChange = (dates: [Date, Date]) => {
    const [start, end] = dates;

    // Записываем промежуток
    setStartDate(start);
    setEndDate(end);

    // Обнуляем часы, чтобы можно было искать в массиве
    start.setHours(0, 0, 0, 0);

    if (end) {
      end.setHours(0, 0, 0, 0);
    }

    // Достаем все даты в промежутке
    const datesInRange = getDatesInRage(start, end || start);
    // Записываем полученные даты в массив
    const datesArray = renderDateModes(datesInRange, days);

    // Обновляем промежуток дат
    setRangeDates(datesArray);

    // Обнуляем недели
    setWeekData(clearWeek());
  };

  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>,
    dayIndex: number
  ) => {
    // Приписываем режим к выбранному дню недели
    const newWeekData = [...weekData];
    newWeekData[dayIndex].mode = JSON.parse(e.target.value);

    // Обновляем массив с днями недель
    setWeekData(newWeekData);

    // Обновляем даты в промежутке в зависимости от дня недели
    const updatedDates = rangeDates.map((date) => {
      if (date.weekDay === newWeekData[dayIndex].weekDay) {
        return { ...date, ...newWeekData[dayIndex].mode };
      } else {
        return { ...date };
      }
    });

    // Обновляем промежуток дат
    setRangeDates(updatedDates);
  };

  const handleSaveClick = () => {
    // Проверяем ко всем доступным датам присвоен режим илинет
    const isValid = rangeDates.every((date) => date.modeName !== "");

    if (isValid) {
      // Сохраняем данные
      setDays([...days, ...rangeDates]);
      setToLocalStorage("days", JSON.stringify([...days, ...rangeDates]));
    } else {
      alert("Заполните все доступные дни недели");
      return;
    }
  };

  return (
    <MainLayout>
      <div>
        <h2>Выберите период</h2>
        <DatePicker
          showMonthDropdown
          showYearDropdown
          locale={ru}
          dropdownMode="select"
          onChange={onRangeChange}
          minDate={subDays(new Date(), 6)}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>
      <div>
        <h2>Настройте дни недели выбранного периода</h2>
        <Table>
          <Thead>
            <tr>
              <Th>День недели</Th>
              <Th>Режим работы</Th>
              <Th>Рабочее время</Th>
            </tr>
          </Thead>
          <Tbody>
            {weekData.map((day, index) => {
              // Проверяем есть ли текущий день в промежутке
              const isDayExistInWeek =
                isDataExists(day.weekDay, rangeDates, "weekDay") || 0;

              // Проверяем можно ли менять селект
              // (если день недели есть в промежутке, то можно менять)
              const isActive =
                day.weekDay === rangeDates[isDayExistInWeek || 0].weekDay
                  ? true
                  : false;

              return (
                <Tr key={day.dayName} isActive={isActive}>
                  <Td>{day.dayName}</Td>
                  <Td>
                    <SelectWrapper>
                      <Select
                        value={JSON.stringify(day.mode)}
                        name="modesSelect"
                        onChange={(e) => {
                          handleSelectChange(e, index);
                        }}
                      >
                        <option value={JSON.stringify(newClearMode())}>
                          Выберите режим
                        </option>
                        {modes.map((mode) => (
                          <option key={mode.id} value={JSON.stringify(mode)}>
                            {mode.modeName}
                          </option>
                        ))}
                      </Select>
                    </SelectWrapper>
                  </Td>
                  <Td>
                    {day.mode.startTime}-{day.mode.endTime}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <MainButton onClick={handleSaveClick}>
          Применить изменения на период
        </MainButton>
      </div>
    </MainLayout>
  );
};
