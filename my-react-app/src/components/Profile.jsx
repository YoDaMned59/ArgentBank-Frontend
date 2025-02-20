import "../styles/profile.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userProfile, updateUserProfile } from "../redux/userActions";

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const isAuth = useSelector((state) => state.login.isAuth);
  const profile = useSelector((state) => state.user.profile);

  console.log("Token dans Redux :", token);
  console.log("profile", profile);

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

  const handleSave = () => {
    if (userName !== profile?.userName) {
      dispatch(updateUserProfile({ ...profile, userName, token }));
      setIsEditing(false);
    }
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
          <div>
            <label>
              Username:
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>

            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>

      {/* Section accounts */}
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={handleViewTransactions}>
            View transactions
          </button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={handleViewTransactions}>
            View transactions
          </button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={handleViewTransactions}>
            View transactions
          </button>
        </div>
      </section>
    </main>
  );
};
