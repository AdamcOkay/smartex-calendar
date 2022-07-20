import { ModeInterface } from "../types";
import { v4 as uuidv4 } from "uuid";

export const newClearMode = (): ModeInterface => {
  const clearMode: ModeInterface = {
    id: uuidv4(),
    modeName: "",
    isWorkingDay: false,
    startTime: "",
    endTime: "",
    notification: "",
  };

  return clearMode;
};
