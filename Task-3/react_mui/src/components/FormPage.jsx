import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  TextField,
  FormHelperText,
  Button,
  Alert,
} from "@mui/material";

const FormPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear field-specific errors as the user types
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!validatePhone(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);  
      setFormError("Please correct the highlighted errors.");
      return;
    }
    setFormError("");
    navigate("/details", { state: { formData } });
  };

  return (
    <Card sx={{ marginTop: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Contact Form
        </Typography>
        {formError && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {formError}
          </Alert>
        )}
        <form onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <FormControl fullWidth margin="normal" error={Boolean(errors.name)}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormHelperText>{errors.name}</FormHelperText>
          </FormControl>

          {/* Email Field */}
          <FormControl fullWidth margin="normal" error={Boolean(errors.email)}>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormHelperText>{errors.email}</FormHelperText>
          </FormControl>

          {/* Phone Field */}
          <FormControl fullWidth margin="normal" error={Boolean(errors.phone)}>
            <TextField
              label="Phone Number"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <FormHelperText>{errors.phone}</FormHelperText>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormPage;
