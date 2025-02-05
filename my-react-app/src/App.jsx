import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { NavBar } from './layout/NavBar'
import { Footer } from './layout/Footer'
import { User } from './pages/User'

function App() {

  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/user' element={<User />}/>
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
