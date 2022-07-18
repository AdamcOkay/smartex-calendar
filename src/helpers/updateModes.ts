import { ModeInterface } from "../types";

export const updateModes = (
  activeMode: ModeInterface,
  modes: ModeInterface[]
): ModeInterface[] => {
  // Клонируем массив режимов
  const updatedModes: ModeInterface[] = [...modes];

  // Проверяем существует ли текущий режим в общем списке
  const isModeExists = updatedModes.some((mode) => activeMode.id === mode.id);

  // Обновляем, если существует. Если нет, то добавляем в конец списка
  if (isModeExists) {
    const activeModeIndex = updatedModes.findIndex(
      (mode) => activeMode.id === mode.id
    );

    updatedModes[activeModeIndex] = activeMode;
  } else {
    updatedModes.push(activeMode);
  }

  return updatedModes;
};
