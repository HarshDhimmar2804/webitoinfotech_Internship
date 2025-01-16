import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import FormPage from "./components/FormPage";
import DetailsPage from "./components/DetailsPage";

export const AppContext = React.createContext();

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("App Mounted");
  }, []);

  const increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const value = useMemo(() => ({ counter, increment }), [counter, increment]);

  return (
    <AppContext.Provider value={value}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">React App</Typography>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/about" color="inherit">
              About
            </Button>
            <Button component={Link} to="/form" color="inherit">
              Form
            </Button>
          </Toolbar>
        </AppBar>

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/details" element={<DetailsPage />} />
          </Routes>
        </Container>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
