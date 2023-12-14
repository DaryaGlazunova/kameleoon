import React from "react";
import Dashboard from "./pages/dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import ItemInfo from "./pages/item-info";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route
            path="/results/:id"
            element={
              <ItemInfo title="Results" subtitle="Order basket redesing" />
            }
          ></Route>
          <Route
            path="/finalize/:id"
            element={<ItemInfo title="Finalize" subtitle="Spring promotion" />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
