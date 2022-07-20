import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

import { ModeInterface } from "./types";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Container } from "./styles/layout/Container";
import "react-datepicker/dist/react-datepicker.css";

import { Nav } from "./components/Nav/Nav";

import { Modes, Day, Range } from "./pages";

function App() {
  const [modes, setModes] = useState<ModeInterface[]>([]);
  const [days, setDays] = useState<ModeInterface[]>([]);

  useEffect(() => {
    // Регистрируем русскую локализацию для календаря
    registerLocale("ru", ru);

    // Достаем данные из localstorage
    const storageModes = localStorage.getItem("modes") || JSON.stringify([]);
    const storageDays = localStorage.getItem("days") || JSON.stringify([]);

    setModes(JSON.parse(storageModes));
    setDays(JSON.parse(storageDays));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Управление графиком рабочего времени</h1>
        <Nav />

        <Routes>
          <Route
            path="/*"
            element={<Modes modes={modes} setModes={setModes} />}
          />
          <Route path="/day" element={<Day days={days} setDays={setDays} />} />
          <Route
            path="/range"
            element={<Range days={days} setDays={setDays} modes={modes} />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
