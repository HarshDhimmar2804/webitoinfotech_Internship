import { useState, useRef, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";
import "./FormPage.css";

const FormPage = () => {
  const { setFormData } = useContext(FormContext);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Focus on the name input field when the component mounts
    nameRef.current.focus();
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formState.name) newErrors.name = "Name is required.";
    if (!formState.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formState.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formState.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formState]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validate()) {
        setFormData(formState);
        navigate("/details");
      }
    },
    [formState, validate, navigate, setFormData]
  );

  const handleChange = useCallback(
    (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    },
    [formState]
  );

  return (
    <div className="form-container">
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            ref={nameRef}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
