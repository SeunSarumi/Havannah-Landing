import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import CleaningMain from "./pages/CleaningServices/CleaningMain";
// import AboutUsMain from "./pages/AboutUs/AboutUsMain";
import HomepageV2 from "./pages/Version2/HomepageV2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<CleaningMain />} /> */}
        <Route index element={<HomepageV2 />} />
        {/* <Route path="version2" element={<HomepageV2 />} /> */}
        {/* <Route path="version1" element={<Homepage />} /> */}
        {/* commented out to make cleaning main page */}
        {/* <Route path="aboutus" element={<AboutUsMain />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
