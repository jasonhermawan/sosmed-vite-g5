import {Flex ,  Box , Button  , Text  } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import NavbarInfoUser from '../../components/Navbar-info-user/NavbarInfoUser';
import ButtonProfile from '../../components/Button-profile/ButtonProfile';
import { AiOutlineMail } from 'react-icons/ai';
import { BsThreeDots} from 'react-icons/bs';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import PostsInfoUser from '../../components/Posts-info-user/PostsInfoUser';
import './infoUser.css'

function InfoUser () {
  

    return <Flex className='container'  position={"relative"} m={"auto"} w={"598.4px"}  minH={"150vh"} height={"150vh"} overflowY={"scroll"}   backgroundColor={"black"} flexDirection={"column"} border={"1px solid gray"}>
        <NavbarInfoUser/>
        <Box mt={"60px"}>
            <img src="https://pbs.twimg.com/profile_banners/76766018/1655740377/1500x500" alt="" />
        </Box>
        <Box>
        <Avatar position={"absolute"} top={"188px"} ml={"15px"} size={"2xl"} border={"4px solid black"} src='https://bit.ly/broken-link' />
        </Box>

        {/* PROFILE  */}

        <Box w={"100%"} h={"250px"}>
          <Box width={"100%"} height={"50px"} display={"flex"} justifyContent={"flex-end"} mt={"10px"} >
            <Box w={"50%"} h={"100%"} backgroundColor={"black"} display={"flex"} justifyContent={"flex-end"} >
            <ButtonProfile main={<BsThreeDots color='white' fontSize={"25px"}/>}  />
            <ButtonProfile main={<AiOutlineMail color='white' fontSize={"30px"}/>}/>
            <Button  backgroundColor={"white"} color={"black"} borderRadius={"50px"} h={"100%"} w={"120px"} mr={"15px"}>
             Follow
            </Button>
            </Box>
          </Box>

          {/* NAME PROFILE */}

          <Box w={"100%"} h={"50px"}>
          <Text  fontWeight={"bolder"} ml={"20px"} color={"white"} fontSize={"lg"}> ProfileUser</Text>
          <Text   ml={"20px"} color={"gray"} fontSize={"sm"}>@Username</Text>
          </Box>
          {/* BIO PROFILE  */}
          <Box w={"90%"} ml={"20px"}>
            <Text color={"white"} textAlign={"justify"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos ab optio libero provident atque, odio id ipsum numquam corporis.</Text>
          </Box>
            {/* FOLLOWERS  */}
          <Box width={"50%"} display={"flex"} m={"25px 20px"}>
          <Text color={"gray"} mr={"20px"}>
            <span style={{fontWeight:"bolder" , color:"white"}}>2,942</span> Followers
          </Text>
          <Text color={"gray"}>
            <span style={{fontWeight:"bolder", color:"white"}}>976</span> Following
          </Text>
          </Box>
        </Box>

        {/* PAGES BAWAH  */}

        <Tabs w={"100%"} color={"white"} h={"200px"} >
  <TabList borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-evenly"}>
    <Tab w={"25%"} _hover={{backgroundColor:"rgba(239, 239, 240 , 0.1)" ,}} color={"white"}>Posts</Tab>
    <Tab  w={"25%"} _hover={{backgroundColor:"rgba(239, 239, 240 , 0.1)" ,}} color={"white"}>Replies</Tab>
    <Tab  w={"25%"} _hover={{backgroundColor:"rgba(239, 239, 240 , 0.1)" ,}} color={"white"}>Media</Tab>
    <Tab  w={"25%"} _hover={{backgroundColor:"rgba(239, 239, 240 , 0.1)" ,}} color={"white"}>Likes</Tab>
  </TabList>

  <TabPanels >
    <TabPanel>
    <PostsInfoUser />
    </TabPanel>
  </TabPanels>
</Tabs>
    </Flex>
}

export default InfoUser;