import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutCart } from "./components";
import { Main } from "./containers";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<AboutCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
