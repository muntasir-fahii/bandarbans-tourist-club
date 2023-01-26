import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import About from "./components/About";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
