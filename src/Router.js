import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graph from "./Page/Graph";
import Post from "./Page/Post";
import Poster from "./Page/Poster";
import PostTest from "./Page/PostTest";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Graph />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/poster/post" element={<Post />} />
        <Route path="/poster/posttest" element={<PostTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
