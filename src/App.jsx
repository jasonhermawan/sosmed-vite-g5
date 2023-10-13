import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from "./component/Auth/Register";
import Login from "./component/Auth/Login";
import Home from "./component/Auth/HomePageLogin";

function App() {
  return (
    <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
    </ChakraProvider>
  );
}

export default App;
