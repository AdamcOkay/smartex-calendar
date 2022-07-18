import { ModeInterface } from "../types";
import { v4 as uuidv4 } from "uuid";

// Создаем чистый режим и делаем его активным
export const newMode = (setActiveMode: ReturnType<typeof Function>) => {
  const clearMode: ModeInterface = {
    id: uuidv4(),
    modeName: "",
    isWorkingDay: false,
    startTime: "",
    endTime: "",
    notification: "",
  };

  setActiveMode(clearMode);
};
