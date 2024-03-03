import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import { Routes, Route } from "react-router-dom";
import Javascript from "./footerPages/Javascript";
import Html from "./footerPages/Html";
import Css from "./footerPages/Css";
import Cheatsheet from "./footerPages/Cheatsheet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/cheatsheet" element={<Cheatsheet />} />
      </Routes>
    </div>
  );
}

export default App;
