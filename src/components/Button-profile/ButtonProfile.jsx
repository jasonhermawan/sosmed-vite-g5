import { Button } from "@chakra-ui/react";

function ButtonProfile (props) {
    return <Button _hover={{backgroundColor:"rgba(239, 239, 240 , 0.2)"}} size={"l"} w={"50px"} h={"50px"} colorScheme='teal' variant='outline' borderRadius={"100%"} border={"1px solid white"} mr={"10px"}>
        {props.main}
    </Button>
}

export default ButtonProfile;