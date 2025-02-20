import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFail } from "../redux/loginSlice";
import { LoginCall } from "../redux/userActions";
import "../styles/formLogin.css";

export const FormLogin = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      rememberMe,
    };

    try {
      const data = await LoginCall(formData);
      const token = data.body.token;
      console.log("Données retournées par l'API :", data);

      dispatch(loginSuccess({ body: { token } }));
      navigate("/user");
    } catch (err) {
      const errorMessage = err.message || "Login failed";
      dispatch(loginFail(errorMessage));
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <p className="error-message">login failed</p>}

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};
