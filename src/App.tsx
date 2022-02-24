import * as React from "react";
import "./assets/css/global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Images from "./pages/Images";
import Contries from "./pages/Contries";
import Home from "./pages/Home";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/tasks" element={<Tasks />}></Route>
      <Route path="/images" element={<Images />}></Route>
      <Route path="/contry" element={<Contries />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </Router>
);
