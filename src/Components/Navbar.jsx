import { 
  Tabs,
  TabList,
  Tab,
  VStack,
  Center,
  Image,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  Box,
  Text,
  Button,
  Flex,
  ModalCloseButton,
  useDisclosure,
  Card,
  CardBody,
  Stack,
  Heading,
} from '@chakra-ui/react'
import MyMeal from "../Images/MyMeal.png" 
 import {Link} from "react-router-dom"
 import { FaLink, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import React from "react";
import { useState } from "react";
const Navbar = () => {
  const userData= JSON.parse(localStorage.getItem("userData"))
  let tabStyle = { bg:'#229760',color:"white", fontWeight:"600"}
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [pop,setPop] = React.useState("")
  
  const obj={
    email:"",
    password:""
  }
  const [form,setForm]=useState(obj)
  const handleChange=(e)=>{
    setForm({...form,[e.target.type]:e.target.value})
  }
  console.log('form:', form)
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(userData.email==form.email){
      if(userData.password==form.password){
        if (window.confirm('Login Successful ! Go to Home-page')){
          window.location.href="/";
          };
      }else{
        if (window.confirm('Wrong Password')){
          window.location.href="/"
          };
      }
    }else{
      if (window.confirm('Wrong Email')){
        window.location.href="/"
        };
    }
    onClose()
  }
  return (
    <>

      {pop=="login" ? 
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent padding="50px">
          <ModalCloseButton />
          <Center >
            <Image objectFit="cover" w="50%" src={MyMeal}/>
          </Center>
            <Text fontSize="20px" align="center" p="10px">Member Login</Text>
            <form onSubmit={handleSubmit}>
            <Input  type="email" onChange={handleChange} placeholder="Email" p="2%" variant='unstyled' m="10px" border="1px solid gray" align="center"/>
            <Input  type="password" onChange={handleChange} placeholder="Password" p="2%" variant='unstyled' m="10px" border="1px solid gray" align="center"/>
            <Center><Button  m="10px" w="170px" colorScheme='green' type="submit">Login</Button></Center>
            </form>
            <hr/>
            <Center><Button m="10px" w="250px" colorScheme='blue' onClick={onClose}>FaceBook</Button></Center>
            <HStack >
              <Link>Forgot password?</Link><Link>Not a member? Sign up FREE!</Link>
            </HStack>
        </ModalContent>
      </Modal>
         : 
         <Modal isOpen={isOpen} onClose={onClose} size="xl">
         <ModalOverlay />
         <ModalContent padding="40px">
          <ModalCloseButton />
          <Center >
            <Image objectFit="cover" w="30%" src={MyMeal}/>
          </Center>
            <Text fontWeight="500" fontSize="15px" align="center" p="10px">Join KindMeal For FREE Now</Text>
            <Text fontWeight="500" fontSize="13px" align="center">Please select the type of membership to proceed</Text>
            <Link to="/signup" onClick={onClose}>
              <Card direction="row" variant='outline' cursor="pointer" m="10px 0px" >
                <Center><Image src='https://www.kindmeal.my/images/join_normal.png' w="300px" pl="10px"/></Center>
                <Stack>
                  <CardBody>
                    <Heading size='md'>Food Lover</Heading>
                    <Text py='2' fontSize="sm">Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</Text>
                  </CardBody>
                </Stack>
              </Card>
            </Link>
              <Card direction="row" variant='outline' cursor="pointer" m="10px 0px">
                <Center><Image src='https://www.kindmeal.my/images/join_shop.png' w="300px" pl="10px"/></Center>
                <Stack>
                  <CardBody>
                    <Heading size='md'>	Restaurant / Shop Owner</Heading>
                    <Text py='2' fontSize="sm">List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.</Text>
                  </CardBody>
                </Stack>
              </Card>
            <Flex justify="space-between">
              <Link onClick={()=>(setPop("login"),onOpen())}>Member Login</Link><Link>Forgot password?</Link>
            </Flex>
        </ModalContent>
       </Modal>
        }
    <Center>
      <VStack w="100%">
      <Flex w={{ base:"100%", md:"85%" }} h={{ base: "40px", sm:"60px", md:"100px" }} justify="space-around">
        <Image padding="0px 50px" h="100%" objectFit='cover' src={MyMeal} alt='Logo'  />
        <Flex w="20%" fontSize={{base:"0px",sm:"15px",md:"30px"}} justify="space-around" align="center" flexDirection={"row"} >
          <Link href="https://www.kindmeal.my/widget.htm">  <FaLink/></Link><Link href="https://www.facebook.com/KindMeal.my">  <FaFacebookSquare/></Link><Link href="https://twitter.com/KindMeal">  <FaTwitterSquare/></Link>
        </Flex>
        <HStack w="30%" justify="space-around">
          <Text p="5px" fontSize={{base:"10px",sm:"15px",md:"20px"}} cursor="pointer" onClick={()=>(setPop("login"),onOpen())}>Login</Text>
          <Button w="90px" h="22px" borderRadius="5px" fontWeight="500" fontSize="13px" display={{base:"none", md:"block"}} bg='rgb(53,97,159)' variant='solid'>FaceBook</Button>
          <Button w="60px" h="22px" borderRadius="5px" fontWeight="500" fontSize="13px" display={{base:"none", md:"block"}} bg="gray" variant='solid' onClick={onOpen}>Email</Button>
          <Text cursor="pointer" fontSize={{base:"10px",md:"20px"}} p="5px" onClick={()=>(setPop("signup"),onOpen())}>Sign Up</Text>
        </HStack>
      </Flex>
        <Box w="100%">
          <Tabs align="center" variant='unstyled' >
            <TabList bg="#2BB673" gap={{base:"0.5", md:"5"}} >
              <Tab _selected={tabStyle} style={tabStyle} p={{base:"0.5px", sm:"5px", md:"10px", lg:"10px 20px"}} fontSize={{base:"10px" ,md:"18px"}} ><Link to="/">          Home         </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle} p={{base:"0.5px", sm:"5px", md:"10px", lg:"10px 20px"}} fontSize={{base:"10px" ,md:"18px"}} ><Link to="/mealdeal">  Meal Deals   </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle} p={{base:"0.5px", sm:"5px", md:"10px", lg:"10px 20px"}} fontSize={{base:"10px" ,md:"18px"}} ><Link to="/kindMoment">Kind Moments </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle} p={{base:"0.5px", sm:"5px", md:"10px", lg:"10px 20px"}} fontSize={{base:"10px" ,md:"18px"}} ><Link to="/recipes">  Recipes      </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle} p={{base:"0.5px", sm:"5px", md:"10px", lg:"10px 20px"}} fontSize={{base:"10px" ,md:"18px"}} ><Link to="/directory"> Directory    </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle} p={{base:"0.5px", sm:"5px", md:"10px", lg:"10px 20px"}} fontSize={{base:"10px" ,md:"18px"}} ><Link to="/articles"> Articles     </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle} p={{base:"0.5px", sm:"5px", md:"10px", lg:"10px 20px"}} fontSize={{base:"10px" ,md:"18px"}} ><Link to="/mobileapp"> Mobile APP   </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle} p={{base:"0.5px", sm:"5px", md:"10px", lg:"10px 20px"}} fontSize={{base:"10px" ,md:"18px"}} ><Link to="/help">      Help         </Link></Tab>
            </TabList>
          </Tabs>
        </Box>
      </VStack>
    </Center>
    </>
  );
};

export default Navbar;