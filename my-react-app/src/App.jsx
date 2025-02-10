import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormLogin } from './components/FormLogin';
import { Error404 } from './pages/Error';
import { Home } from './pages/Home';
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
        <Route path="/login" element={<FormLogin />} />
        <Route path="/*" element={<Error404 />} />
       </Routes>
      <Footer />
    </Router>
  );
}

export default App;
