import React, { useEffect } from "react";
import { Home } from "./pages/Home";
import Nav from "./components/Nav";

//Styes
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
