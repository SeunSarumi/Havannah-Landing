import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CleaningLoader from "./components/CleaningLoader";

const HomepageV2 = lazy(() => import("./pages/Version2/HomepageV2"));
// const CleaningMain = lazy(() => import("./pages/CleaningServices/CleaningMain"));
// const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
// const AboutUsMain = lazy(() => import("./pages/AboutUs/AboutUsMain"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CleaningLoader />}>
        <Routes>
          {/* <Route index element={<CleaningMain />} /> */}
          <Route index element={<HomepageV2 />} />
          {/* <Route path="version2" element={<HomepageV2 />} /> */}
          {/* <Route path="version1" element={<Homepage />} /> */}
          {/* <Route path="aboutus" element={<AboutUsMain />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
