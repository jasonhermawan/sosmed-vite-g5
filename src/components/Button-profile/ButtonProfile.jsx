import { Button } from "@chakra-ui/react";

function ButtonProfile (props) {
    return <Button size={"l"} w={"50px"} h={"50px"} colorScheme='teal' variant='outline' borderRadius={"100%"} border={"1px solid white"} mr={"10px"}>
        {props.main}
    </Button>
}

export default ButtonProfile;