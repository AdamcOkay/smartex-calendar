import { ModeInterface } from "../types";
import { isDataExists } from "./isDataExists";
import { newClearMode } from "./newClearMode";

// Проходимся по массиву из промежутка дат
//  и возвращаем полноценный объект со всеми нужными параметрами
export const renderDateModes = (
  dates: Date[],
  daysArray: ModeInterface[]
): ModeInterface[] => {
  const dateModes: ModeInterface[] = dates.map((date) => {
    // Проверяем существует ли дата в массиве из дат с режимами работы
    // Получаем индекс если существует
    const isDateExists = isDataExists(
      date.getTime(),
      daysArray,
      "date",
      "Date"
    );
    let dayObject: ModeInterface;

    // Если даты нет в массиве, возвращаем "Чистую" дату
    if (isDateExists === false) {
      const clearMode = newClearMode();

      dayObject = {
        date: date.getTime(),
        weekDay: date.getDay() === 0 ? 7 : date.getDay(),
        ...clearMode,
      };
    } else {
      // Если дата есть в массиве, то возвращаем текущую дату
      dayObject = {
        ...daysArray[isDateExists],
      };
    }

    return dayObject;
  });

  return dateModes;
};
