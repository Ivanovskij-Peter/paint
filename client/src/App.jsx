import React from "react";

import "./styles/app.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/:id" element={<Main />}></Route>
          <Route
            path="*"
            element={<Navigate to={`f${(+new Date()).toString(16)}`} replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
