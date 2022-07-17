import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs, Tab } from "./Styles";

export const Nav = () => {
  const { pathname } = useLocation();
  const tabsData = [
    {
      tabName: "Режим работы",
      tabPath: "/",
    },
    {
      tabName: "Календарь",
      tabPath: "/day",
    },
    {
      tabName: "Редактирование периода",
      tabPath: "/range",
    },
  ];

  return (
    <nav>
      <Tabs>
        {tabsData.map((tab) => {
          const { tabName, tabPath } = tab;
          const isTabActive = pathname === tabPath ? true : false;

          return (
            <Tab key={tabPath} isTabActive={isTabActive}>
              <Link to={tabPath}>{tabName}</Link>
            </Tab>
          );
        })}
      </Tabs>
    </nav>
  );
};
