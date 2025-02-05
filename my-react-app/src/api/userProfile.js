import { userSuccess, userFail } from "../redux/userSlice";

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
