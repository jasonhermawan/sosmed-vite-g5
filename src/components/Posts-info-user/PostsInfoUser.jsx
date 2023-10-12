import { Flex, Box,  Text } from "@chakra-ui/react";
import { Avatar } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import {BiRepost } from 'react-icons/bi';
import {GoShare } from 'react-icons/go';



function PostsInfoUser(props) {
  return (
    <Flex w={"100%"} minHeight={"150px"} height={"auto"} backgroundColor={"rgba(239, 239, 240 , 0.1)"} borderRadius={"10px"} cursor={"pointer"} flexDirection={"column"} m={"10px 0px"}>
    
    <Box display={"flex"} flexDirection={"row"}>
    <Box w={"50px"} height={"30px"} display={"flex"} flexDirection={"column"} alignItems={"center"} m={"15px 0px 0px 10px"}>
     <Avatar size={"md"} borderRadius={"100%"} src='https://bit.ly/broken-link' />
    </Box>
      <Box w={"100px"} height={"30px"} display={"flex"} flexDirection={"column"} alignItems={"center"} m={"17px 3px"} >
      <Text  h={"20px"} fontWeight={"bolder"} color={"white"} fontSize={"lg"}> ProfileUser</Text>
      <Text h={"20px"}  color={"white"} fontSize={"sm"} >@Username</Text>
      </Box>
        </Box>
    
    {/* ISI KONTENT POSTINGAN */}

      <Box w={"100%"} minHeight={"50px"} h={"auto"}>
        <Text textAlign={"justify"} padding={"20px"}>
          {props.post}
        </Text>
      </Box>

    {/* BUTTON POST */}
      <Box w={"100%"} h={"30px"} mb={"2px"} mt={"10px"} display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"}>
       <Box _hover={{backgroundColor:"rgba(255,255,255, 0.1)"}} display={"flex"} w={"30px"} h={"100%"} borderRadius={"100%"} alignItems={"center"} justifyContent={"center"}><AiOutlineHeart fontSize={"20px"}/></Box>
       <Box _hover={{backgroundColor:"rgba(255,255,255, 0.1)"}} display={"flex"} w={"30px"} h={"100%"} borderRadius={"100%"} alignItems={"center"} justifyContent={"center"}><FaRegComment fontSize={"19x"}/></Box>
       <Box _hover={{backgroundColor:"rgba(255,255,255, 0.1)"}} display={"flex"} w={"30px"} h={"100%"} borderRadius={"100%"} alignItems={"center"} justifyContent={"center"}><BiRepost fontSize={"23px"}/></Box>
       <Box _hover={{backgroundColor:"rgba(255,255,255, 0.1)"}} display={"flex"} w={"30px"} h={"100%"} borderRadius={"100%"} alignItems={"center"} justifyContent={"center"}><GoShare fontSize={"19px"}/></Box>
      </Box>
    </Flex>
  );
}

export default PostsInfoUser;
