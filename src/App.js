import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
