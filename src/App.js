import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ErrorPage, DashBoard, RegisterPage } from "./pages/index"
import Landing from "../src/pages/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
