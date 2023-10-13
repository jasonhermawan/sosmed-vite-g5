import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Image,
  HStack,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { API_URL } from "../../../helper";
import logo from "../../../assets/LOGO_Z_BLACK.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      marginRight={250}
      marginTop={150}
      marginLeft={300}
      display="flex"
      justifyContent="space-between"
    >
      <Box>
        <Image src={logo} alt="Logo" w="300px" h="300px" />
      </Box>
      <Box width="600px">
        <Text
          fontFamily="TwitterChipExtendedHeavy"
          fontSize={64}
          fontWeight={700}
        >
          Hate X? Use Z now
        </Text>
        <Text
          fontFamily="TwitterChirpExtendedHeavy"
          fontSize={31}
          fontWeight={700}
          alignSelf="flex-end"
        >
          Join Today
        </Text>
        <Box
          display={"flex"}
          flexDirection={"column"}
          // gap={1}
          // borderRadius={"20px"}
          marginTop={5}
        >
          <Button
            bgColor={"black"}
            borderRadius={20}
            width={300}
            marginTop={5}
            colorScheme="teal"
          >
            Sign up with Google
          </Button>
          <Button
            bgColor={"black"}
            borderRadius={20}
            width={300}
            marginTop={5}
            colorScheme="teal"
          >
            Sign up with Apple
          </Button>
          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter bg="white">
              or
            </AbsoluteCenter>
          </Box>
          <Button
            bgColor={"blue"}
            borderRadius={20}
            width={300}
            marginTop={5}
            colorScheme="teal"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </Button>
          <Text fontSize={15}>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </Text>
          <Text marginTop={5} fontSize={20}>
            Already have an account?
          </Text>
          <Button
            bgColor={"black"}
            borderRadius={20}
            width={300}
            colorScheme="black"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
