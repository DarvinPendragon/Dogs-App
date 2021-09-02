import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext.js';
import User from './Components/User.js/User';
import RotaProtegida from './Components/Ajuda/RotaProtegida';
import Photo from '../src/Photo/Photo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <RotaProtegida path="conta/*" element={<User />} />
            <Route path="/foto/:id" element={<Photo />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
