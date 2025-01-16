import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "./CommonButton";
import CommonInput from "./CommonInput";
import { Card, CardContent, Typography, Alert } from "@mui/material";

const FormPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Phone number must be 10 digits");
      return;
    }

    setError("");
    navigate("/details", { state: { formData } }); 
  };

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Contact Form
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <CommonInput
            label="Name"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          <CommonInput
            label="Email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <CommonInput
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
          />
          <CommonButton text="Submit" onClick={handleSubmit} />
        </form>
      </CardContent>
    </Card>
  );
};

export default FormPage;
