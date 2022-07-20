import { newClearMode } from "./newClearMode";

export const clearWeek = () => {
  return [
    { weekDay: 1, dayName: "Понедельник", mode: newClearMode() },
    { weekDay: 2, dayName: "Вторник", mode: newClearMode() },
    {
      weekDay: 3,
      dayName: "Среда",
      mode: newClearMode(),
    },
    {
      weekDay: 4,
      dayName: "Четверг",
      mode: newClearMode(),
    },
    {
      weekDay: 5,
      dayName: "Пятница",
      mode: newClearMode(),
    },
    {
      weekDay: 6,
      dayName: "Суббота",
      mode: newClearMode(),
    },
    { weekDay: 7, dayName: "Воскресенье", mode: newClearMode() },
  ];
};
