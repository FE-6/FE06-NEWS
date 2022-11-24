// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Login from './pages/Login';
import FormData from './pages/FormData';
import NewsDetail from './pages/NewsDetail';
import Register from './pages/Register';
import './index.css'

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props);
    // FormData(dispatch, props.history);
  }, []);

  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsdetail/:id" element={<NewsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formdata" element={<FormData />} />
      </Routes>
      </>
    </div>
  )
}

export default App