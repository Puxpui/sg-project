import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mynavbar from './components/navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/Home';
import Shop from './pages/Shop'
import SignIn from './pages/signin';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <div>
        <Mynavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
