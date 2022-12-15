import MyMeal from "../Images/MyMeal.png" 
import { 
  Tabs,
  TabList,
  Tab,
  Center,
  VStack,
  Image,
  HStack,
  Box,
  Text
 } from '@chakra-ui/react'
 import {Link} from "react-router-dom"
import { FaLink, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import React from "react";
const Navbar = () => {
  let tabStyle = { bg:'rgb(252,180,25)', border:"1px solid red"}
  return (
    <>
    <Center>
      <VStack w="100%" bg="#F0F0F0">
      <HStack w={{ base:"100%", md:"80%" }} h={{ base: "100px", md:"150px" }} justify="space-around">
        <Image padding="0px 50px" h="100%" objectFit='cover' src={MyMeal} alt='Logo'  />
        <HStack w="30%" justify="space-around">
          <Text fontWeight="700" fontSize={{base:'13px', md:"20px"}} color="rgb(252,100,25)"><Link to='/'      >Home</Link><br/></Text>
          <Text fontWeight="700" fontSize={{base:'10px', md:"17px"}} color="rgb(252,100,25)"><Link to='/login' >Email</Link></Text>
          <Text fontWeight="700" fontSize={{base:'10px', md:"17px"}} color="rgb(252,100,25)"><Link to='/login' >Login</Link></Text>
          <Text fontWeight="700" fontSize={{base:'10px', md:"17px"}} color="rgb(252,100,25)"><Link to='/signup'>Sign Up</Link></Text>
        </HStack>
          <HStack w="20%" fontSize="30px" justify="space-around" >
            <Link href="https://www.kindmeal.my/widget.htm">  <FaLink/></Link><Link href="https://www.facebook.com/KindMeal.my">  <FaFacebookSquare/></Link><Link href="https://twitter.com/KindMeal">  <FaTwitterSquare/></Link>
          </HStack>
      </HStack>
        <Box w="100%">
          <Tabs align="center" variant='unstyled'>
            <TabList bg="rgb(252,128,25)" gap={{base:"0.5", md:"5"}}>
              <Tab _selected={tabStyle}><Link to="/">          Home         </Link></Tab>
              <Tab _selected={tabStyle}><Link to="/mealdeal">  Meal Deals   </Link></Tab>
              <Tab _selected={tabStyle}><Link to="/kindMoment">Kind Moments </Link></Tab>
              <Tab _selected={tabStyle}><Link to="/recipies">  Recipes      </Link></Tab>
              <Tab _selected={tabStyle}><Link to="/directory"> Directory    </Link></Tab>
              <Tab _selected={tabStyle}><Link to="/articles"> Articles     </Link></Tab>
              <Tab _selected={tabStyle}><Link to="/mobileapp"> Mobile APP   </Link></Tab>
              <Tab _selected={tabStyle}><Link to="/help">      Help         </Link></Tab>
            </TabList>
          </Tabs>
        </Box>
      </VStack>
    </Center>
    </>
  );
};

export default Navbar;
