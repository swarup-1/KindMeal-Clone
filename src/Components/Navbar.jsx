import MyMeal from "../Images/MyMeal.png" 
import { 
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  VStack,
  Image,
  HStack
 } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Home from "../Pages/Home"
import React from "react";
const Navbar = () => {

  return (
    <>
    <Center>
      <VStack w="100%" border="1px solid green">
      <HStack border="1px solid red" w={{ base:"100%", md:"80%" }} h={{ base: "100px", md:"150px" }} justify="space-around">
        <Image padding="0px 50px" h="100%" objectFit='cover' src={MyMeal} alt='Logo'  />
        <Box w="30%" align="center"></Box>
        <Box w="30%" align="center">Bye</Box>
      </HStack>
      <Box w="100%">
        <Tabs isFitted align="center" variant='unstyled'>
          <TabList bg="rgb(252,128,25)" >
            <Tab _selected={{ bg: 'rgb(252,180,25)' }}>Home</Tab>
            <Tab _selected={{ bg: 'rgb(252,180,25)' }}>Meal Deals</Tab>
            <Tab _selected={{ bg: 'rgb(252,180,25)' }}>Kind Moments</Tab>
            <Tab _selected={{ bg: 'rgb(252,180,25)' }}>Recipes</Tab>
            <Tab _selected={{ bg: 'rgb(252,180,25)' }}>Directory</Tab>
            <Tab _selected={{ bg: 'rgb(252,180,25)' }}>Articles</Tab>
            <Tab _selected={{ bg: 'rgb(252,180,25)' }}>Mobile APP</Tab>
            <Tab _selected={{ bg: 'rgb(252,180,25)' }}>Help</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Home/>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      </VStack>
    </Center>
    </>
  );
};

export default Navbar;
