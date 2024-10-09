import { Box, Heading, List, ListIcon, ListItem, VStack, Text, Link } from "@chakra-ui/react";
import { FaDatabase } from "react-icons/fa"
import { FaServer } from "react-icons/fa"

const FeaturedProject = (props) => {
  return (
    <VStack w='50vw' alignItems='start' mt={10}>
        <Heading size='lg'>Featured Project</Heading>
        
        <Heading size='md' color='blue.300'>E-Learning</Heading>

        <Box mb={4} w='100%' py={2} px={5} borderWidth='3px' borderRadius='lg' overflow='hidden'>
            <Text>
                A website that allows users to study online together, 
                the website includes features such as: video calling, 
                real-time chat, posting questions and answering questions, 
                voting for correct answers. The website has full features for users such as: 
                login, register, change profile.
            </Text>
            
            <List mt={4} spacing={3}>
                <ListItem>
                    <ListIcon as={FaServer} color='green.500' />
                    Frontend: ReactJS, Bootstrap, Redux.
                </ListItem>
                <ListItem>
                    <ListIcon as={FaServer} color='green.500' />
                    Backend: NodeJS
                </ListItem>
                <ListItem>
                    <ListIcon as={FaDatabase} color='green.500' />
                    Database: MongoDB
                </ListItem>
            </List>
        </Box>

        <Heading size='md' color='blue.300'>TodoList</Heading>

        <Box mb={4} w='100%' py={2} px={5} borderWidth='3px' borderRadius='lg' overflow='hidden'>
            <Text>
            The website allows users to manage their to-dos, 
            including features such as: add new, delete, light mode, dark mode. 
            User data will be saved to localStorage.
            </Text>
            
            <List mt={4} spacing={3}>
                <ListItem>
                    <ListIcon as={FaServer} color='green.500' />
                    Frontend: ReactJS, Chakra UI.
                </ListItem>
                <ListItem>
                    <ListIcon as={FaServer} color='green.500' />
                    Link: 
                    <Link 
                        ml={1}
                        isExternal 
                        href="https://nghitanlam.github.io/todolist-chakra"
                    >
                         https://nghitanlam.github.io/todolist-chakra
                    </Link>
                </ListItem>
            </List>
        </Box>


    </VStack>
  )
};

export default FeaturedProject;
