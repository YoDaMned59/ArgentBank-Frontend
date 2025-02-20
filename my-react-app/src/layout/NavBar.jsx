import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "../redux/loginSlice";
import { userLogout } from "../redux/userSlice";
import argentBankLogo from "../assets/argentBankLogo.webp";
import '../styles/navBar.css';

export const NavBar = () => {
  const firstName = useSelector((state) => state.user.firstName);
  const userName = useSelector((state) => state.user.userName);
  const displayName = userName || firstName || "Guest"; 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.login.isAuth);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <div>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            src={argentBankLogo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <div>
          {isAuth ? (
            <div className="user-firstname">
              <i className="fa fa-user-circle"></i>&nbsp;
              <span className="firstname" onClick={() => navigate("/user")}>
                {displayName}&nbsp;
              </span>
              <button
                onClick={handleLogout}
                className="main-nav-item logout-btn"
              >
                <i className="fa fa-sign-out"></i>&nbsp;Sign Out
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>&nbsp;Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};
