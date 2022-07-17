import React from "react";

import { MainLayout } from "../styles/layout/MainLayout";
import { Table, Thead, Tbody, Th, Td } from "../styles/components/Table";
import { SelectWrapper, Select } from "../styles/components/Select";
import { MainButton } from "../styles/components/Buttons";

export const Range = () => {
  return (
    <MainLayout>
      <div>
        <h2>Выберите период</h2>
      </div>
      <div>
        <h2>Настройте дни недели выбранного периода</h2>
        <Table>
          <Thead>
            <tr>
              <Th>День недели</Th>
              <Th>Режим работы</Th>
              <Th>Рабочее время</Th>
            </tr>
          </Thead>
          <Tbody>
            <tr>
              <Td>Понедельник</Td>
              <Td>
                <SelectWrapper>
                  <Select name="" id="">
                    <option value="">sad</option>
                    <option value="">sad</option>
                    <option value="">sad</option>
                    <option value="">sad</option>
                  </Select>
                </SelectWrapper>
              </Td>
              <Td>9:00 - 20:00</Td>
            </tr>
            <tr>
              <Td>Понедельник</Td>
              <Td>
                <SelectWrapper>
                  <Select name="" id="">
                    <option value="">sad</option>
                    <option value="">sad</option>
                    <option value="">sad</option>
                    <option value="">sad</option>
                  </Select>
                </SelectWrapper>
              </Td>
              <Td>9:00 - 20:00</Td>
            </tr>
            <tr>
              <Td>Понедельник</Td>
              <Td>
                <SelectWrapper>
                  <Select name="" id="">
                    <option value="">sad</option>
                    <option value="">sad</option>
                    <option value="">sad</option>
                    <option value="">sad</option>
                  </Select>
                </SelectWrapper>
              </Td>
              <Td>9:00 - 20:00</Td>
            </tr>
            <tr>
              <Td>Понедельник</Td>
              <Td>
                <SelectWrapper>
                  <Select name="" id="">
                    <option value="">sad</option>
                    <option value="">sad</option>
                    <option value="">sad</option>
                    <option value="">sad</option>
                  </Select>
                </SelectWrapper>
              </Td>
              <Td>9:00 - 20:00</Td>
            </tr>
            <tr>
              <Td>Понедельник</Td>
              <Td>
                <SelectWrapper>
                  <Select name="" id="">
                    <option value="">sad</option>
                    <option value="">sad</option>
                    <option value="">sad</option>
                    <option value="">sad</option>
                  </Select>
                </SelectWrapper>
              </Td>
              <Td>9:00 - 20:00</Td>
            </tr>
          </Tbody>
        </Table>
        <MainButton>Применить изменения на период</MainButton>
      </div>
    </MainLayout>
  );
};
