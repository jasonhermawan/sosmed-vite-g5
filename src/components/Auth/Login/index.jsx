import { Box, Button, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../helper";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/action/accountAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State untuk pesan error
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    axios
      .get(API_URL + `/account?email=${email}&password=${password}`)
      .then((response) => {
        if (response.data.length === 1) {
          dispatch(loginAction(response.data[0]))
          
          navigate("/timeline");
        } else {
          setError("Email atau password salah"); // Set pesan error
        }
      })
      .catch((error) => {
        setError("Gagal melakukan login"); // Set pesan error
      });
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Menampilkan pesan error jika email atau pass tidak sesuai*/}
      </VStack>
    </Box>
  );
};

export default Login;
