/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
