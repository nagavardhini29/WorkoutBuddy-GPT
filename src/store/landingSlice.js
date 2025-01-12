import { createSlice } from '@reduxjs/toolkit';

const landingSlice = createSlice({
  name: 'landing',
  initialState: {
    userLoggedIn: false, // Example state
  },
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.userLoggedIn = action.payload;
    },
  },
});

export const { setUserLoggedIn } = landingSlice.actions;
export default landingSlice.reducer;
