import { ModeInterface } from "../types";

export const updateData = (data: ModeInterface, array: ModeInterface[]) => {
  // Клонируем массив режимов/дней
  const updatedData = [...array];

  // Проверяем существует ли текущий режим/день в общем списке
  const isDataExists = updatedData.some((item) => data.id === item.id);

  // Обновляем, если существует. Если нет, то добавляем в конец списка
  if (isDataExists) {
    const dataIndex = updatedData.findIndex((item) => data.id === item.id);
    updatedData[dataIndex] = data;
  } else {
    updatedData.push(data);
  }

  return updatedData;
};
