import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider } from "./components/FormContext";
import FormPage from "./components/FormPage";
import DetailsPage from "./components/DetailPage";

const App = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;
