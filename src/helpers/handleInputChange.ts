import { ModeInterface } from "../types";

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  activeMode: ModeInterface,
  setActiveMode: ReturnType<typeof Function>
) => {
  const target = e.target;
  const name = target.name;
  const type = target.type;

  let value: string | boolean = "";

  if (!activeMode) return;

  // Обновляем данные в инпутах/чекбоксах
  if (type === "text") {
    value = target.value;
  }

  if (type === "checkbox") {
    value = !activeMode.isWorkingDay;
  }

  // Переписываем текущие данные на обновленные
  setActiveMode({ ...activeMode, [name]: value });
};
