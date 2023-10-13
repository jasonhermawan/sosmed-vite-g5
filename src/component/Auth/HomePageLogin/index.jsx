import { Box, Button, Input, VStack, Text, Image, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { API_URL } from "../../../helper";
import logo from "../../../assets/LOGO_Z_BLACK.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="flex-start" height="100vh" padding="1rem">
      <HStack>
        <Image src={logo} alt="Logo" w="300px" h="300px" />
      <Text fontFamily="TwitterChipExtendedHeavy" fontSize={50} fontWeight="bold" alignSelf="flex-end">
        Hate X? Use Z now
      </Text>
        <Box width="400px" padding="20px" borderWidth="1px" borderRadius="md" boxShadow="lg">
          <Button colorScheme="teal" onClick={() => navigate("/signup")}>
            Create Account
          </Button>
          <Button colorScheme="teal" onClick={() => navigate("/signin")}>
            Sign In
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default Home;
