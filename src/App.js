import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import About from "./components/About";
import NotFound from "./components/NotFound";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
