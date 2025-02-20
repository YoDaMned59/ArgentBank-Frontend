import "../styles/profile.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userProfile, updateUserProfile } from "../redux/userActions";
import { AccountItem } from "./AccountItem";
import { accountsData } from "../Data/accountsData";

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const isAuth = useSelector((state) => state.login.isAuth);
  const profile = useSelector((state) => state.user.profile);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    } else if (token) {
      dispatch(userProfile(token));
    }
  }, [dispatch, isAuth, token, navigate]);

  useEffect(() => {
    if (profile && profile.userName) {
      setUserName(profile.userName || "");
    }
  }, [profile]);

  const handleSave = (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire
    if (userName !== profile?.userName) {
      dispatch(updateUserProfile({ ...profile, userName, token }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUserName(profile?.userName || ""); // Réinitialiser au nom d'utilisateur d'origine
  };

  const handleViewTransactions = () => {
    navigate("/error404");
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          {isEditing
            ? "Edit user info"
            : profile && profile.userName
            ? `Welcome back\n${profile.userName} !`
            : "Loading..."}
        </h1>

        {isEditing ? (
          <form className="profile-form" onSubmit={handleSave}>
            <div className="form-box">
              <label htmlFor="userName">
                User name:
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-input"
                />
              </label>
            </div>

            <div className="form-box">
              <label htmlFor="firstName">
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={profile?.firstName || ""}
                  readOnly
                  className="form-input"
                />
              </label>
            </div>

            <div className="form-box">
              <label htmlFor="lastName">
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={profile?.lastName || ""}
                  readOnly
                  className="form-input"
                />
              </label>
            </div>

            <button type="submit" className="save-btn">Save</button>
            <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
          </form>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        )}
      </div>

      {/* Accounts section */}
      <div>
        <h2 className="sr-only">Accounts</h2>
        {accountsData.map((account) => (
          <AccountItem
            key={account.id}
            title={account.title}
            amount={account.amount}
            description={account.description}
            onViewTransactions={handleViewTransactions}
          />
        ))}
      </div>
    </main>
  );
};
