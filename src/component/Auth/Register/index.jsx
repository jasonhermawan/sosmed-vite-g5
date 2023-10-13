import { Box, Button, Input, VStack, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../helper";
import logo from "../../../assets/LOGO_Z_BLACK.png";

const Register = () => {
  const [inEmail, setInEmail] = useState("");
  const [inPassword, setInPassword] = useState("");
  const [inUsername, setInUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (inUsername && inEmail && inPassword && confirmPassword) {
      if (inPassword.length >= 8) { // Memeriksa apakah kata sandi minimal 8 karakter
        if (inPassword === confirmPassword) {
          // cek apakah email atau username sudah terpakai
          axios.get(`${API_URL}/account?email=${inEmail}&username=${inUsername}`)
            .then((response) => {
              if (response.data.length === 0) {
                // jika Email dan username belum terpakai, simpan ke database
                axios
                  .post(API_URL + `/account`, {
                    username: inUsername,
                    email: inEmail,
                    password: inPassword,
                  })
                  .then((response) => {
                    console.log("berhasil signup", response.data);
                    // Arahkan pengguna ke halaman sign-in setelah berhasil mendaftar
                    navigate("/signin");
                  })
                  .catch((error) => {
                    console.log("gagal signup", error);
                  });
              } else {
                setError("Username atau email sudah terpakai");
              }
            })
            .catch((error) => {
              console.log("Error checking username and email", error);
            });
        } else {
          setError("Kata sandi dan konfirmasi kata sandi tidak cocok");
        }
      } else {
        setError("Kata sandi harus minimal 8 karakter");
      }
    } else {
      setError("Masukkan data dengan benar");
    }
  };
  
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Image src={logo} alt="Logo" w="300px" h="300px" marginRight="15rem" />
      <Box width="400px" padding="20px" borderWidth="1px" borderRadius="md" boxShadow="lg">
      <Text fontFamily="TwitterChipExtendedHeavy" fontSize={50} fontWeight="bold">Hate X? Use Z now</Text>
        <VStack spacing={3}>
        <Input
          type="username"
          placeholder="Input username"
          value={inUsername}
          onChange={(e) => setInUsername(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Input Email"
          value={inEmail}
          onChange={(e) => setInEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Input Password"
          value={inPassword}
          onChange={(e) => setInPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleRegister}>
          Sign Up
        </Button>
        {error && (
          <Text color="red" marginTop="2" fontSize="sm">
            {error}
          </Text>
        )}
      </VStack>
    </Box>
    </Box>
  );
};

export default Register;
