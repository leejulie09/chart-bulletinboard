import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graph from "./Page/Graph";
import Poster from "./Page/Poster";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Graph />} />
        <Route path="/poster" element={<Poster />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
