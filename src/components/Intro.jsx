import React from "react"
import { Avatar, HStack, IconButton, Image, Link, Text, VStack } from "@chakra-ui/react"
import { FaSchool } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiReaddotcv } from "react-icons/si"

const Intro = (props) => {
  return (
    <VStack 
        mt="10" 
        maxW={{base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw"}}
    >
        <Avatar size='2xl' name='Lam Tan Nghi' src='/images/avatar.jpg' />

        <Text mt={4} fontWeight='bold' fontSize='50px'>
            I'm a Web Developer
        </Text>

        <VStack mt={10} alignItems='self-start'>
            <HStack>
                <IconButton icon={<FaSchool />} />
                <Text>
                    Graduated from Greenwich University Vietnam, majoring in Information Technology in 2023. 
                </Text>
            </HStack>

            <HStack>
                <IconButton icon={<FaMailBulk />} />
                <Link href="mailto:nghi.tanlam@gmail.com" isExternal>
                    nghi.tanlam@gmail.com
                </Link>
            </HStack>

            <HStack>
                <IconButton icon={<FaPhoneAlt />} />
                <Text>
                    +84 0963303045
                </Text>
            </HStack>

            <HStack>
                <IconButton icon={<FaLinkedin />} />
                <Link href="https://www.linkedin.com/in/tannghi" isExternal>
                    https://www.linkedin.com/in/tannghi
                </Link>
            </HStack>
        
            <HStack>
                <IconButton icon={<FaGithub />} />
                <Link href="https://github.com/nghitanlam" isExternal>
                    https://github.com/nghitanlam
                </Link>
            </HStack>

            <HStack>
                <IconButton icon={<SiReaddotcv />} />
                <Link href="https://drive.google.com/file/d/1N7y1f5mGvznfXUNQvGOXbXEBxLTbo01v/view?usp=sharing" isExternal>
                    https://drive.google.com/file/d/1N7y1f5mGvznfXUNQvGOXbXEBxLTbo01v/view?usp=sharing
                </Link>
            </HStack>
        </VStack>
    </VStack>
  )
};

export default Intro;
