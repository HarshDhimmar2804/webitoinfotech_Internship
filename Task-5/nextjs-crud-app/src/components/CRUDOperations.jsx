"use client";
import { useState, useEffect } from "react";

const CRUDOperations = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  // Load data from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers) ?? []); // Optional chaining ensures no error if JSON.parse returns null
    }
  }, []);

  // Save users to localStorage whenever users state changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Validate user input
  const validateInput = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/; // Ensures phone number is 10 digits
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

    if (!userData?.name) {
      errors.name = "Name is required.";
    }

    if (!userData?.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(userData?.email)) {
      errors.email = "Invalid email format.";
    }

    if (!userData?.phone) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(userData?.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }

    if (!userData?.website) {
      errors.website = "Website URL is required.";
    } else if (!urlRegex.test(userData?.website)) {
      errors.website = "Invalid website URL format.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Add a new user
  const handleAddUser = () => {
    if (validateInput()) {
      setUsers([...users, userData]);
      setUserData({ name: "", email: "", phone: "", website: "" });
      setErrors({});
    }
  };

  // Edit user
  const handleEditUser = (index) => {
    const userToEdit = users?.[index];
    if (userToEdit) {
      setUserData(userToEdit);
      setEditMode(true);
      setEditIndex(index);
    }
  };

  // Save edited user
  const handleSaveEdit = () => {
    if (validateInput()) {
      const updatedUsers = users?.map((user, index) =>
        index === editIndex ? userData : user
      );
      setUsers(updatedUsers ?? []);
      setEditMode(false);
      setUserData({ name: "", email: "", phone: "", website: "" });
      setErrors({});
    }
  };

  // Delete a user
  const handleDeleteUser = (index) => {
    const updatedUsers = users?.filter((_, i) => i !== index);
    setUsers(updatedUsers ?? []);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">CRUD Operations</h1>

      {/* Input Form for Creating/Editing Users */}
      <div className="mb-6">
        <input
          type="text"
          name="name"
          value={userData?.name ?? ""}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        {errors?.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          name="email"
          value={userData?.email ?? ""}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        {errors?.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}

        <input
          type="text"
          name="phone"
          value={userData?.phone ?? ""}
          onChange={handleChange}
          placeholder="Phone"
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        {errors?.phone && (
          <p className="text-red-500 text-sm">{errors.phone}</p>
        )}

        <input
          type="text"
          name="website"
          value={userData?.website ?? ""}
          onChange={handleChange}
          placeholder="Website"
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        {errors?.website && (
          <p className="text-red-500 text-sm">{errors.website}</p>
        )}

        <button
          onClick={editMode ? handleSaveEdit : handleAddUser}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {editMode ? "Save Changes" : "Add User"}
        </button>
      </div>

      {/* User List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users?.map((user, index) => (
          <div
            key={index}
            className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {user?.name}
            </h2>
            <p className="text-gray-600">Email: {user?.email}</p>
            <p className="text-gray-600">Phone: {user?.phone}</p>
            <p className="text-gray-600">Website: {user?.website}</p>
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
