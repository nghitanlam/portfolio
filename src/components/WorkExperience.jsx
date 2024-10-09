import React from "react"
import { Box, Heading, List, ListIcon, ListItem, VStack } from "@chakra-ui/react";
import { FaDatabase } from "react-icons/fa"
import { FaServer } from "react-icons/fa"

const WorkExperience = (props) => {
  return (
    <VStack w='50vw' alignItems='start' mt={10}>
        <Heading size='lg'>Work Experience</Heading>

        <Box mb={4} w='100%' py={2} px={5} borderWidth='3px' borderRadius='lg' overflow='hidden'>
            <Heading as='h4' size='md'>Freelancer</Heading>

            <List mt={4} spacing={3}>
                <ListItem>
                    <ListIcon as={FaServer} color='green.500' />
                    Java Spring, NodeJS to develop backend server.
                </ListItem>
                <ListItem>
                    <ListIcon as={FaServer} color='green.500' />
                    ReactJS, AngularJS, Bootstrap, TailwindCss, Redux, Chakra UI to develop frontend.
                </ListItem>
                <ListItem>
                    <ListIcon as={FaDatabase} color='green.500' />
                    PostgreSQL, MongoDB, MySQL.
                </ListItem>
            </List>
        </Box>

        <Box w='100%' py={2} px={5} borderWidth='3px' borderRadius='lg' overflow='hidden'>
            <Heading as='h4' size='md'>Intern at Hiptech Company (6 month)</Heading>

            <List mt={4} spacing={3}>
                <ListItem>
                    <ListIcon as={FaServer} color='green.500' />
                    Java Spring, Spring JPA, Spring Security,... to develop backend server.
                </ListItem>
                <ListItem>
                    <ListIcon as={FaServer} color='green.500' />
                    ReactJS, Bootstrap, TailwindCss, Redux,... to develop frontend.
                </ListItem>
                <ListItem>
                    <ListIcon as={FaDatabase} color='green.500' />
                    PostgreSQL
                </ListItem>
            </List>
        </Box>

    </VStack>
  )
};

export default WorkExperience;
