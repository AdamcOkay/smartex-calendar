import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ModeInterface, DayInterface } from "./types";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Container } from "./styles/layout/Container";
import "react-datepicker/dist/react-datepicker.css";

import { Nav } from "./components/Nav/Nav";
import { Modes, Day, Range } from "./pages";

function App() {
  const [modes, setModes] = useState<ModeInterface[]>([]);
  const [days, setDays] = useState<DayInterface[]>([]);

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
          <Route path="/day" element={<Day />} />
          <Route path="/range" element={<Range />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
