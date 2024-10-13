
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GetStarted from './pages/GetStarted';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Remove the nested Route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/get-started" element={<GetStarted />} /> 
      </Routes>
    </Router>
  );
}

export default App;
