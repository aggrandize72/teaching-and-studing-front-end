import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: {},
    isLogged: false,
  },
  reducers: {
    studentSignIn: (state, action) => {
      state.student = action.payload;
      state.isLogged = true;
    },
    studentSignOut: (state) => {
      state.student = {};
      state.isLogged = false;
    },
    studentUpdate: (state, action) => {
      state.student = { ...state.student, ...action.payload };
      state.isLogged = false;
    },
  },
});

export const { studentSignIn, studentSignOut, studentUpdate } =
  studentSlice.actions;
export default studentSlice.reducer;
