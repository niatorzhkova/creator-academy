import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Mainpage";
import Policy from "./pages/Policy";
import Agreement from "./pages/Agreement";
import Offer from "./pages/Offer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="policy" element={<Policy />} />
        <Route path="agreement" element={<Agreement />} />
        <Route path="offer" element={<Offer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
