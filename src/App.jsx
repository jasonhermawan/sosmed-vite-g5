import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Home from "./components/Auth/HomePageLogin";
import Landpage from "./components/Auth/landpage";
import { useState } from 'react'
import './App.css'
import Timeline from './pages/Timeline'

function App() {
  return (
    <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
    </ChakraProvider>
  );

}

export default App;
