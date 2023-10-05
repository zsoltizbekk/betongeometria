import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartingPage from "./body/StartingPage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartingPage />} />
            
          </Routes>
        </BrowserRouter>
      );
}

export default RouteSwitch;