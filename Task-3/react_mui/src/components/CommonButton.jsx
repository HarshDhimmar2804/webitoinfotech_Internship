import { Button } from "@mui/material";

const CommonButton = ({ text, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default CommonButton;
