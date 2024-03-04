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
import Bootstrap from "./footerPages/Bootstrap";
import Reactjs from "./footerPages/Reactjs";
import FontAwesome from "./footerPages/FontAwesome";
import Sass from "./footerPages/Sass";
import PcAssembly from "./footerPages/PcAssembly";
import PcTroubleShoot from "./footerPages/PcTroubleShoot";
import TermsOfService from "./footerPages/TermsOfService";

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
        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/reactjs" element={<Reactjs />} />
        <Route path="/fontAwesome" element={<FontAwesome />} />
        <Route path="/sass" element={<Sass />} />
        <Route path="/pCassembly" element={<PcAssembly />} />
        <Route path="/pcTroubleShoot" element={<PcTroubleShoot />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
      </Routes>
    </div>
  );
}

export default App;
