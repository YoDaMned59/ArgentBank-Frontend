import { NavLink } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.webp";

export const NavBar = () => {
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
              <span className="firstname">{firstName}&nbsp;</span>
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
}