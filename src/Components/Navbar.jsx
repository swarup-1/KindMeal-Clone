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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  ModalCloseButton,
  Input,
  useDisclosure,
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter
 } from '@chakra-ui/react'
 import {Link} from "react-router-dom"
import { FaLink, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import React from "react";
const Navbar = () => {
  let tabStyle = { bg:'#229760',color:"white", fontWeight:"600", fontSize:"18px"}
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [pop,setPop] = React.useState("")
  React.useEffect(()=>{
    if(pop!=""){
      onOpen()
    }
  },[pop])
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
            <Input placeholder="Email" p="2%" variant='unstyled' m="10px" border="1px solid gray" align="center"/>
            <Input placeholder="Password" p="2%" variant='unstyled' m="10px" border="1px solid gray" align="center"/>
            <Center><Button m="10px" w="170px" colorScheme='green' onClick={onClose}>Login</Button></Center>
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
              <Card direction="row" variant='outline' cursor="pointer" m="10px 0px">
                <Center><Image src='https://www.kindmeal.my/images/join_normal.png' w="300px" pl="10px"/></Center>
                <Stack>
                  <CardBody>
                    <Heading size='md'>Food Lover</Heading>
                    <Text py='2' fontSize="sm">Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</Text>
                  </CardBody>
                </Stack>
              </Card>
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
              <Link onClick={()=>setPop("login")}>Member Login</Link><Link>Forgot password?</Link>
            </Flex>
        </ModalContent>
       </Modal>
        }
    <Center>
      <VStack w="100%">
      <HStack w={{ base:"100%", md:"85%" }} h={{ base: "100px", md:"100px" }} justify="space-around">
        <Image padding="0px 50px" h="100%" objectFit='cover' src={MyMeal} alt='Logo'  />
        <HStack w="20%" fontSize="30px" justify="space-around" >
          <Link href="https://www.kindmeal.my/widget.htm">  <FaLink/></Link><Link href="https://www.facebook.com/KindMeal.my">  <FaFacebookSquare/></Link><Link href="https://twitter.com/KindMeal">  <FaTwitterSquare/></Link>
        </HStack>
        <HStack w="30%" justify="space-around">
          <Text pr="5px" onClick={()=>setPop("login")}>Login</Text>
          <Button w="90px" h="22px" borderRadius="5px" fontWeight="500" fontSize="13px" bg='rgb(53,97,159)' variant='solid'>FaceBook</Button>
          <Button w="60px" h="22px" borderRadius="5px" fontWeight="500" fontSize="13px" bg="gray" variant='solid' onClick={onOpen}>Email</Button>
          <Text onClick={()=>setPop("signup")}>Sign Up</Text>
        </HStack>
      </HStack>
        <Box w="100%">
          <Tabs align="center" variant='unstyled'>
            <TabList bg="#2BB673" gap={{base:"0.5", md:"5"}}>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/">          Home         </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/mealdeal">  Meal Deals   </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/kindMoment">Kind Moments </Link></Tab>
              <Tab _selected={tabStyle} style={tabStyle}><Link to="/recipes">  Recipes      </Link></Tab>
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