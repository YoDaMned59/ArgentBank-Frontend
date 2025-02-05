import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ userName, token }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Erreur lors de la mise à jour du profil"
        );
      }

      return data.body; // Ce retour sera envoyé au `fulfilled` dans `extraReducers`
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
