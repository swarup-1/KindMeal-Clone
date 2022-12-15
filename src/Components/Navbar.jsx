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
  Text,
  Button
 } from '@chakra-ui/react'
 import {Link} from "react-router-dom"
import { FaLink, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import React from "react";
const Navbar = () => {
  let tabStyle = { bg:'#229760',color:"white", fontWeight:"600", fontSize:"18px"}
  return (
    <>
    <Center>
      <VStack w="100%">
      <HStack w={{ base:"100%", md:"85%" }} h={{ base: "100px", md:"100px" }} justify="space-around">
        <Image padding="0px 50px" h="100%" objectFit='cover' src={MyMeal} alt='Logo'  />
        <HStack w="20%" fontSize="30px" justify="space-around" >
          <Link href="https://www.kindmeal.my/widget.htm">  <FaLink/></Link><Link href="https://www.facebook.com/KindMeal.my">  <FaFacebookSquare/></Link><Link href="https://twitter.com/KindMeal">  <FaTwitterSquare/></Link>
        </HStack>
        <HStack w="30%" justify="space-around">
          <Text pr="5px"><Link to='/login' >Login</Link></Text>
          <Button w="90px" h="22px" borderRadius="5px" fontWeight="500" fontSize="13px" bg='rgb(53,97,159)' variant='solid'>FaceBook</Button>
          <Button w="60px" h="22px" borderRadius="5px" fontWeight="500" fontSize="13px" bg="gray" variant='solid'>Email</Button>
          <Text><Link to='/signup'>Sign Up</Link></Text>
        </HStack>
      </HStack>
        <Box w="100%">
          <Tabs align="center" variant='unstyled'>
            <TabList bg="#2BB673" gap={{base:"0.5", md:"5"}}>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/">          Home         </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/mealdeal">  Meal Deals   </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/kindMoment">Kind Moments </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/recipies">  Recipes      </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/directory"> Directory    </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/articles"> Articles     </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/mobileapp"> Mobile APP   </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/help">      Help         </Link></Tab>
            </TabList>
          </Tabs>
        </Box>
      </VStack>
    </Center>
    </>
  );
};

export default Navbar;
