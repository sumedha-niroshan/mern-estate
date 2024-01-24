import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateInStart: (state)=>{
      state.loading = true;
    },
    updateInSuccess:(state , action) =>{
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateInFailure:(state , action)=>{
      state.loading = action.payload;
      state.loading = false;
    }
  },
});

export const { signInStart, signInFailure, signInSuccess, updateInStart, updateInSuccess  , updateInFailure } = userSlice.actions;

export default userSlice.reducer;
