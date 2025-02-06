import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSuccess, userFail } from "../redux/userSlice";




export async function LoginCall(form) {
    form = JSON.stringify(form);
    return await fetch(`http://localhost:3001/api/v1/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: form,
    }).then((data) => {
      return data.json();
    });
  }


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

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const userProfile = (token) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Échec de la récupération du profil");
    }

    const data = await res.json();

    dispatch(userSuccess(data.body));
  } catch (error) {
    dispatch(userFail(error.message));
  }
};
