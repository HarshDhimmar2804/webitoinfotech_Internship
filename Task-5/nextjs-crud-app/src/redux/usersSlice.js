import { createSlice } from "@reduxjs/toolkit";

// Load users from local storage if available
const loadUsersFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  }
  return [];
};

const initialState = {
  users: loadUsersFromLocalStorage(),
  errors: {
    name: "",
    email: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUser: (state, action) => {
      const { index, updatedUser } = action.payload;
      state.users[index] = updatedUser;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((_, index) => index !== action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = initialState.errors;
    },
  },
});

export const { addUser, editUser, deleteUser, setErrors, clearErrors } =
  usersSlice.actions;
export default usersSlice.reducer;
