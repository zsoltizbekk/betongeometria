import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Epitesz from "./body/Epitesz";
import Beton from "./body/Beton";
import StartingPage from "./body/StartingPage";
import Aszf from "./Aszf";
import Gdpr from "./Gdpr";
import JogiNyilatkozat from "./Joginyilatkozat";
import Butor from "./body/Butor";
import Falburkolat from "./body/Falburkolat";
import Kulterielemek from "./body/Kulterielemek";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/betongeometria/" element={<StartingPage />} />
            <Route path="/betongeometria/epitesz" element={<Epitesz />} />
            <Route path="/betongeometria/beton" element={<Beton />} />
            <Route path="/betongeometria/aszf" element={<Aszf />} />
            <Route path="/betongeometria/gdpr" element={<Gdpr />} />
            <Route path="/betongeometria/joginyilatkozat" element={<JogiNyilatkozat />} />
            <Route path="/betongeometria/butor" element={<Butor />} />
            <Route path="/betongeometria/falburkolat" element={<Falburkolat />} />
            <Route path="/betongeometria/kulterielemek" element={<Kulterielemek />} />

          </Routes>
        </BrowserRouter>
      );
}

export default RouteSwitch;