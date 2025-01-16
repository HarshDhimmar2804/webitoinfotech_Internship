import { TextField } from '@mui/material';

const CommonInput = ({ label, value, onChange, name }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange} 
      name={name} 
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default CommonInput;
