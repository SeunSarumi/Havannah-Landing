import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import CleaningMain from "./pages/CleaningServices/CleaningMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="cleaningservices" element={<CleaningMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
