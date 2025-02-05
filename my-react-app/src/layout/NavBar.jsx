import { NavLink } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.webp";
import '../styles/navBar.css';
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(logout())}>Déconnexion</button>
  );
};

export const NavBar = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/sign-in" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};
