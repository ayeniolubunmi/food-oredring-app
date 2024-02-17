import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Footer />}/>
      </Routes>
      <Routes>
        <Route path='/Menu' element={<Menu />}/>
      </Routes>
      <Routes>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Routes>
        <Route path='/contact-us' element={<Contact />}/>
      </Routes>
    </Router>
  );
}
export default App;
