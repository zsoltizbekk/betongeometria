import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Epitesz from "./body/Epitesz";
import Beton from "./body/Beton";
//import StartingPage from "./body/StartingPage";
import StartingPage2 from "./body/StartingPage2";
import Impresszum from "./Impresszum";
import Gdpr from "./Gdpr";
import JogiNyilatkozat from "./Joginyilatkozat";
import Butor from "./body/Butor";
import Falburkolat from "./body/Falburkolat";
import Kulterielemek from "./body/Kulterielemek";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartingPage2 />} />
            <Route path="/epitesz" element={<Epitesz />} />
            <Route path="/beton" element={<Beton />} />
            <Route path="/impresszum" element={<Impresszum />} />
            <Route path="/gdpr" element={<Gdpr />} />
            <Route path="/joginyilatkozat" element={<JogiNyilatkozat />} />
            <Route path="/butor" element={<Butor />} />
            <Route path="/falburkolat" element={<Falburkolat />} />
            <Route path="/kulterielemek" element={<Kulterielemek />} />

          </Routes>
        </BrowserRouter>
      );
}

export default RouteSwitch;