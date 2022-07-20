import { ModeInterface } from "../types";

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  state: ModeInterface,
  setState: ReturnType<typeof Function>
) => {
  const target = e.target;
  const name = target.name;
  const type = target.type;

  let value: string | boolean = "";

  if (!state) return;

  // Обновляем данные в инпутах/чекбоксах
  if (type === "text") {
    value = target.value;
  }

  if (type === "checkbox") {
    value = !state.isWorkingDay;
  }

  // Переписываем текущие данные на обновленные
  setState({ ...state, [name]: value });
};
