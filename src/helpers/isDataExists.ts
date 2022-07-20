// Если данные существуют в массиве, то возвращаем индекс елемента
export const isDataExists = (
  data: any,
  array: any[],
  checkKey: string,
  checkType?: string
): number | false => {
  const exists = array.some((item: any) => {
    return data === item[checkKey];
  });
  // Если существует, то показываем эту дату,
  if (exists) {
    const dataIndex = array.findIndex((item) =>
      checkType === "Date" ? data === item[checkKey] : data === item[checkKey]
    );

    return dataIndex;
  }

  return false;
};
