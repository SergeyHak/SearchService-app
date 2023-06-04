import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userLogin: '',
};

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    setUserLogin(state, action) {
      state.userLogin = action.payload.userLogin;      
    },   
  },
});

export const { setUserLogin } = userLoginSlice.actions;

export default userLoginSlice.reducer;
