import { Heading, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa"

const Navbar = (props) => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack mt={3} alignSelf='flex-end'>
            <IconButton 
                icon={ colorMode === 'light' ? <FaSun /> : <FaMoon />} 
                isRound={true} 
                size="lg" 
                alignSelf="flex-end" 
                onClick={toggleColorMode} 
            />
        </HStack>
    )
};

export default Navbar;
