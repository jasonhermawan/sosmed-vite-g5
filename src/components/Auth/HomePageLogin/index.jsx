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
import logo from "../../../assets/LOGO_Z.png";
import { color } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      paddingRight={250}
      paddingTop={150}
      paddingLeft={300}
      display="flex"
      justifyContent="space-between"
      bgColor={"black"}
      alignItems={"center"}
    >
      <Box>
        <Image src={logo} alt="Logo" w="300px" h="300px" />
      </Box>
      <Box width="600px">
        <Text
          color={"white"}
          fontSize={64}
          fontWeight={700}
        >
          Hate X? Use Z now
        </Text>
        <Text
          color={"white"}
          fontSize={31}
          fontWeight={700}
          alignSelf="flex-end"
        >
          Join Today
        </Text>
        <Box
          display={"flex"}
          flexDirection={"column"}
          marginTop={5}
        >
          <Button
            bgColor={"white"}
            color={"black"}
            borderRadius={20}
            width={300}
            marginTop={5}
          >
            Sign up with Google
          </Button>
          <Button
            bgColor={"transparent"}
            border={"solid 2px white"}
            borderRadius={20}
            width={300}
            marginTop={5}
            color={"white"}
            _hover={{color:"white"}}
          >
            Sign up with Apple
          </Button>
          <hr style={{marginTop:"30px"}} />
          <Button
            bgColor={"#3182CE"}
            borderRadius={20}
            width={300}
            marginTop={5}
            colorScheme="teal"
            _hover={{bgColor:"#3182CE"}}
            onClick={() => navigate("/signup")}
          >
            Create Account
          </Button>
          <Text mt={"20px"} fontSize={15} color={"white"}>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </Text>
          <Text mt={"20px"} fontSize={15} color={"white"} fontWeight={"500"}>
            Already have an account?
          </Text>
          <Button
            mt={"20px"}
            bgColor={"transparet"}
            border={"solid 1px gray"}
            color={"#3182CE"}
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
