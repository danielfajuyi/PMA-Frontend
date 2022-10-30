import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/home";

import Navbar from "./Components/Navbar/navbar";
import About from "./Pages/About/about";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
    </BrowserRouter>
  );
}

export default App;
