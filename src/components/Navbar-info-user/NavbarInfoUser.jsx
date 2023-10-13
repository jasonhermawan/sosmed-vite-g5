import {Flex , Box  , Button , Text} from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi';

function NavbarInfoUser () {
    return <Flex display={"flex"}  w={"597.1px"} h={"60px"} position={"fixed"} top={"0px"} backgroundColor={"rgba(0,0,0,0.7)"} alignItems={"center"} zIndex={"99"} >
        <Box width={"50%"} display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Button  w={"60px"} h={"60px"} ml={"3px"} color={"white"} backgroundColor={"transparent"} borderRadius={"100%"} _hover={{backgroundColor:"rgba(239, 239, 240 , 0.2)" }}>
            <BiArrowBack size={"l"} />
            </Button>
            <Text fontWeight={"bolder"} ml={"2px"} color={"white"} fontSize={"lg"}>
            ProfileUser
           </Text>
        </Box>
    </Flex>
}

export default NavbarInfoUser;