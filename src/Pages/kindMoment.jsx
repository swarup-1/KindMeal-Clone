import React from 'react'
import axios from "axios"
import Pagination from "../Components/Pagination"
import { useEffect,useState } from 'react'
import {Box, Button,  HStack,  Image, Link, SimpleGrid, Stack, Text, Center, Flex, Select, Input, RadioGroup} from '@chakra-ui/react'
function KindMoment() {
  const [data,setData] = useState([])
  const [total,setTotal] = useState(1)
  const [page,setPage] = useState(1)  
  const [color, setColor] = useState(1)
  const style2={background:'white', color:"black", border:"1px solid gray"}
  const style1={background:'green', color:"white", border:"1px solid gray"}
  const [searchLocation,setSearchLocation] = useState("") 


  useEffect(()=>{
    axios.get(`https://kindmeal-3kea.onrender.com/moment`,{
      params:{
        _page:page,
        _limit:searchLocation=="" ? 6 : 40 
      }
    }).then((res)=>{
      if(searchLocation==""){
        setData(res.data)
        setTotal(Math.floor(40/6))
      }else{
        const newData = res.data.filter((el)=>{
          return el.location==searchLocation
        })
        setData(newData)
      }
    })
    .catch((err)=>console.log(err))
  },[page,searchLocation])

  const handlePage =(p)=>{
    setPage(p)
  }
  const handleChange=(p)=>{
    setPage((page)=>page+p)
  }
  return (
      <Box background= "linear-gradient(180deg, rgba(255,255,255,1) 52%, rgba(233,233,233,1) 100%)">
            <Center bg="#f0f0f0" mb="20px">
              <Box p="20px" w="80%" >
                <Flex gap="20px">
                  <Text fontWeight="500" fontSize="3xl">KindMoments</Text>
                  <Text fontWeight="500" fontSize="2xl" > | </Text>
                  <Text fontWeight="500" fontSize="2xl" color="#00000080">Saving Lives with Yummy Photos</Text>
                </Flex>
                <Text fontSize="sm" p="10px 0px">Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. Share your interesting KindMoments, and build your own fans and followers to encourage kind, healthy meals.</Text>
                <Text fontSize="sm" p="10px 0px">Download our mobile app now to easily get coupons and start dining in a few seconds. Effortlessly save lives, health, environment and money now!</Text>
              </Box>
            </Center>

          <Center>
            <Flex w="80%" justifyContent="space-between">
                <Flex gap="15px">
                  <Button value="1" p="10px 40px" style={color=="1" ? style1 : style2} onClick={(e)=>setColor(e.target.value)}>Moments</Button>
                  <Button value="2" p="10px 40px" style={color=="2" ? style1 : style2} onClick={(e)=>setColor(e.target.value)}>Deal Reviews</Button>
                  <Button value="3" p="10px 40px" style={color=="3" ? style1 : style2} onClick={(e)=>setColor(e.target.value)}>Following</Button>
                </Flex>
              <Flex gap="15px">
                <Input bgColor="white" placeholder="Search User or Shop" p="0.5%" rounded="4" variant='unstyled' border="1px solid gray" />
                <Select bgColor="white" onChange={(e)=>setSearchLocation(e.target.value)}>
                  <option value="">All Locations</option>
                  <option value="2">Klang vally</option>
                  <option value="3">Kualalumpur</option>
                  <option value="4">Petaling Jaya</option>
                  <option value="5">Ipoh</option>
                  <option value="1">Bangsar</option>
                  <option value="2">Cheras</option>
                  <option value="4">Perek</option>
                  <option value="3">Sepang</option>
                  <option value="5">Taman Desa</option>
                  <option value="1">Subang</option>
                </Select>
                <Button p="10px 80px" colorScheme='red' color="white">Search Deals</Button>
              </Flex>
            </Flex>
          </Center>
          <Pagination  totalPages={total} currentPage={page} handlePage={handlePage} handleChange={handleChange} />
          <SimpleGrid columns={[1,3]} w='80%' margin='50px  auto' spacing={10} position="relative" >
              {
                  data.map(item =>(

                      <Box key={item.dealid}  rounded={10} boxShadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'  h='26rem' position='relative' bg='white' >
                          <Stack direction={'row'} justifyContent='space-between' p={3}>
                              <HStack>
                          <Box><Image src={item.mphoto} w={45} rounded='full' alt={item.mname}/></Box>
                          <Box>{item.mname}</Box>
                          </HStack>
                          <Button colorScheme='red'>View</Button>
                  
                          </Stack>
                          <Box>
                          <Image cursor='pointer' src={item.mophoto} w='100%' h="15rem" />
                          </Box>
                          <Text textAlign='left'fontSize='1.2vw' m={2} color='#666666' > {item.musername} </Text>
                          <Text textAlign='left'm={2}>{item.motext}<Link color='blue.400' >see more</Link> </Text> 
                      </Box> 
                  ))
              }
          </SimpleGrid>
          <Pagination  totalPages={total} currentPage={page} handlePage={handlePage} handleChange={handleChange} />
          <Box align="center"><Image src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="meals_footer_image" /></Box>
      </Box>

  )
}

export default KindMoment