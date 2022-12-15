
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
      <Box bg="#2BB670" color="#edf0d1">
        <Container maxW='5xl' py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              <Text fontWeight={'700'} fontSize={{base:'11px', md:"15px"}} mb={2}>General</Text>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Home</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Sign Up</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Businesses / Restaurateurs</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Advertising</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >About KindMeal.my</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Help & FAQ</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Terms & Conditions</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Inspiring Partners</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Lifestyle Ambassadors</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Jobs & Careers</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Contact Us</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'700'} fontSize={{base:'11px', md:"15px"}}>Features</Text>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Meat-Free Deals</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Tasty Menus</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Kind Moments</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Meat-Free Recipes</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Member Recommendations</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Featured Restaurants</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Vegetarian & Vegan Directory</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Food Map</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Become A Superhero</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Vegan News & Vegetarian Articles</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Latest Comments</Link>
            </Stack>                                  
            <Stack align={'flex-start'}>
              <Text fontWeight={'700'} fontSize={{base:'11px', md:"15px"}}>Social Media</Text>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >KindMeal Widget</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Facebook</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Twitter</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Instagram</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'700'} fontSize={{base:'11px', md:"15px"}}>Exciting Promos</Text>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Gadhimai: Ending Mass Slaughter</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Free Meals</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Food Bloggers</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Uber CHIRP</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Jane Goodall Contest</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Win Digi iPhone 6</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Feed The Poor</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Win Superhero Gifts</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Win an iPad Mini 3</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'700'} fontSize={{base:'11px', md:"15px"}}>PetFinder.my</Text>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Adopt A Pet</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Smartphone Apps</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >WAGazine</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Discussion Forum</Link>
              <Link href={'#'} fontWeight="500" fontSize={{base:'10px', md:"13px"}} >Medical Fund</Link>
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
