
import MyMeal from "../Images/MyMeal.png" 
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Image,
  } from '@chakra-ui/react';

  export default function Footer() {
    return (
      <Box>
        <Container  maxW='5xl' py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              <Text fontWeight={'700'} fontSize={{base:'10px', md:"13px"}} mb={2}>General</Text>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Home</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Sign Up</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Businesses / Restaurateurs</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Advertising</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >About KindMeal.my</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Help & FAQ</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Terms & Conditions</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Inspiring Partners</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Lifestyle Ambassadors</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Jobs & Careers</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Contact Us</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'700'} fontSize={{base:'10px', md:"13px"}}>Features</Text>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Meat-Free Deals</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Tasty Menus</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Kind Moments</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Meat-Free Recipes</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Member Recommendations</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Featured Restaurants</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Vegetarian & Vegan Directory</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Food Map</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Become A Superhero</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Vegan News & Vegetarian Articles</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Latest Comments</Link>
            </Stack>                                  
            <Stack align={'flex-start'}>
              <Text fontWeight={'700'} fontSize={{base:'10px', md:"13px"}}>Social Media</Text>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >KindMeal Widget</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Facebook</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Twitter</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Instagram</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'700'} fontSize={{base:'10px', md:"13px"}}>Exciting Promos</Text>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Gadhimai: Ending Mass Slaughter</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Free Meals</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Food Bloggers</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Uber CHIRP</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Jane Goodall Contest</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Win Digi iPhone 6</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Feed The Poor</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Win Superhero Gifts</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Win an iPad Mini 3</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'700'} fontSize={{base:'10px', md:"13px"}}>PetFinder.my</Text>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Adopt A Pet</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Smartphone Apps</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >WAGazine</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Discussion Forum</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'9px', md:"11px"}} >Medical Fund</Link>
            </Stack> 
          </SimpleGrid>
        </Container>
        <Box>
            <Flex justify="center" ><Image opacity="0.8" w="100px" objectFit='cover' src={MyMeal} alt='Logo'  /></Flex>
            <Text fontSize={"10px"} textAlign={'center'}>Copyright © KindMeal.my, 2014 - 2022. All rights reserved. <br/>This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</Text>
        </Box>
      </Box>
    );
  }
