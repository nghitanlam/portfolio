import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react"
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import WorkExperience from "./components/WorkExperience";
import FeaturedProject from "./components/FeaturedProject";

const App = (props) => {
  return (
    <VStack pb={100} maxW={{base: '50vw'}} m='auto' >
      <Navbar />
      <Intro />
      <WorkExperience />
      <FeaturedProject />
    </VStack>
  )
};

export default App;
