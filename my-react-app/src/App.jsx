import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormLogin } from './components/FormLogin';
import { Profile } from './components/Profile';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { NavBar } from './layout/NavBar';
import { Footer } from './layout/Footer';
import { User } from './pages/User';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
