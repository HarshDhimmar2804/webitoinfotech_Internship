import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormPage } from "./components/FormPage";
import { DetailPage } from "./components/DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/details" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
