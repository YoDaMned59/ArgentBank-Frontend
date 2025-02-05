import { createSlice } from "@reduxjs/toolkit";
import { updateUserProfile } from "../api/updateUserProfile";

const initialState = {
  profile: null,
  email: null,
  firstName: null,
  lastName: null,
  userName: null,
  id: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.profile = null;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.id = null;
      state.userName = null;
      state.error = null;
    },
    userSuccess: (state, action) => {
      state.profile = action.payload;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.id = action.payload.id;
      state.error = null;
    },
    userFail: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.userName = action.payload.userName;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        console.error("Erreur de mise à jour :", action.payload);
        state.error = action.payload;
      })
  },
});

export const { userLogout, userSuccess, userFail } = userSlice.actions;
export default userSlice.reducer;
