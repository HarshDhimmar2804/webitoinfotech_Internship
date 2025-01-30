"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  editUser,
  deleteUser,
  setErrors,
  clearErrors,
} from "../redux/usersSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CRUDOperations = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const errors = useSelector((state) => state.users.errors);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateInput = () => {
    const validationErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const urlRegex = /^(ftp|http|https):\/\/[^ ""']+$/;

    if (!userData.name) validationErrors.name = "Name is required.";
    if (!userData.email) validationErrors.email = "Email is required.";
    else if (!emailRegex.test(userData.email))
      validationErrors.email = "Invalid email format.";
    if (!userData.phone) validationErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(userData.phone))
      validationErrors.phone = "Invalid phone number format (10 digits).";
    if (!userData.website) validationErrors.website = "Website is required.";
    else if (!urlRegex.test(userData.website))
      validationErrors.website = "Invalid website URL format.";

    dispatch(setErrors(validationErrors));
    return Object.keys(validationErrors).length === 0;
  };

  const handleAddUser = () => {
    if (validateInput()) {
      dispatch(addUser(userData));
      toast.success("User added successfully!");
      setUserData({ name: "", email: "", phone: "", website: "" });
      dispatch(clearErrors());
    } else {
      toast.error("Please correct the errors before submitting.");
    }
  };

  const handleEditUser = (index) => {
    const userToEdit = users[index];
    setUserData(userToEdit);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    if (validateInput()) {
      dispatch(editUser({ index: editIndex, updatedUser: userData }));
      toast.success("User updated successfully!");
      setEditMode(false);
      setUserData({ name: "", email: "", phone: "", website: "" });
      dispatch(clearErrors());
    } else {
      toast.error("Please correct the errors before saving.");
    }
  };

  const handleDeleteUser = (index) => {
    dispatch(deleteUser(index));
    toast.success("User deleted successfully!");
  };

  return (
    <div className="p-6">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mb-6">
        CRUD Operations with Redux & Local Storage
      </h1>

      <div className="mb-6">
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          placeholder="Phone (10 digits)"
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <input
          type="text"
          name="website"
          value={userData.website}
          onChange={handleChange}
          placeholder="Website URL"
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        {errors.website && (
          <p className="text-red-500 text-sm">{errors.website}</p>
        )}

        <button
          onClick={editMode ? handleSaveEdit : handleAddUser}
          className="bg-slate-900 hover:bg-slate-700 text-white p-2 rounded"
        >
          {editMode ? "Save Changes" : "Add User"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4"
          >
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Phone: {user.phone}</p>
            <p className="text-gray-600">Website: {user.website}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEditUser(index)}
                className="bg-yellow-500 text-white p-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteUser(index)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRUDOperations;
