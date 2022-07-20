import { ModeInterface } from "../types";
import { isDataExists } from "./isDataExists";
import { newClearMode } from "./newClearMode";

export const renderDateModes = (
  dates: Date[],
  daysArray: ModeInterface[]
): ModeInterface[] => {
  const dateModes: ModeInterface[] = dates.map((date) => {
    const isDateExists = isDataExists(
      date.getTime(),
      daysArray,
      "date",
      "Date"
    );
    let dayObject: ModeInterface;

    if (isDateExists === false) {
      const clearMode = newClearMode();

      dayObject = {
        date: date.getTime(),
        weekDay: date.getDay() === 0 ? 7 : date.getDay(),
        ...clearMode,
      };
    } else {
      dayObject = {
        ...daysArray[isDateExists],
      };
    }

    return dayObject;
  });

  return dateModes;
};
