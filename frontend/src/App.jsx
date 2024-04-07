import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Signup } from './Pages/Signup/Signup';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from './Pages/HomePage/HomePage';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { VerifyPage } from './Pages/VerifyPage/VerifyPage';

const App = () => {
 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated}/>}></Route>
                <Route path="/verify" element={<VerifyPage/>}></Route>
                <Route path="/"  element={isAuthenticated ? < HomePage/> : <Navigate to="/signup" replace /> }>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
