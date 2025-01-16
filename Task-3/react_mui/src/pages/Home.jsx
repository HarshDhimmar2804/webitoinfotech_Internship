import { useContext } from "react";
import { Typography, Button } from "@mui/material";
import CommonCard from "../components/CommonCard";
import { AppContext } from "../App";

const Home = () => {
  const { counter, increment } = useContext(AppContext);

  return (
    <div>
      <Typography variant="h4">Welcome to the Home Page</Typography>
      <CommonCard title="Counter" content={`Current count: ${counter}`} />
      <Button variant="contained" color="primary" onClick={increment}>
        Increment Counter
      </Button>
    </div>
  );
};

export default Home;
