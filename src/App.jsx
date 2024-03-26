import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import CleaningMain from "./pages/CleaningServices/CleaningMain";
import AboutUsMain from "./pages/AboutUs/AboutUsMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="cleaningservices" element={<CleaningMain />} />
        <Route path="aboutus" element={<AboutUsMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
