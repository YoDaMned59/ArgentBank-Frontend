// authSlice.js (Redux Slice)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Suppose that you have an API call to update the username
export const updateUsername = createAsyncThunk(
  'auth/updateUsername',
  async (newUsername, { getState, rejectWithValue }) => {
    const { token } = getState().auth; // On prend le token d'authentification depuis le store

    try {
      const response = await fetch('http://localhost:3001/api/v1/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Utilisation du token pour l'authentification
        },
        body: JSON.stringify({ username: newUsername }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update username');
      }

      return await response.json(); // Retourne la réponse avec le nouvel utilisateur
    } catch (error) {
      return rejectWithValue(error.message); // En cas d'erreur
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUsername.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // Met à jour l'utilisateur avec la nouvelle réponse API
      })
      .addCase(updateUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Gère l'erreur
      });
  },
});

export default authSlice.reducer;
