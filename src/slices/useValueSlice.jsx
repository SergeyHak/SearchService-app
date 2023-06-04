import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userValue: '',
};

const userValueSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserValue(state, action) {
      state.userValue = action.payload.userValue;      
    },   
  },
});

export const { setUserValue } = userValueSlice.actions;

export default userValueSlice.reducer;
