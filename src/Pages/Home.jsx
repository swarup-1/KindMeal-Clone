import React from 'react'
import { 
  Image,
  Center,
  Box,
  HStack,
 } from '@chakra-ui/react'
function Home() {
  let images =[
    {hotel:"https://images.unsplash.com/photo-1556715371-bdb0d523c870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",dish:"https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    {hotel:"https://images.unsplash.com/photo-1584970091438-19edea48bdc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMzfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",dish:"https://images.unsplash.com/photo-1608835149345-b4d77bc490ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" },
    {hotel:"https://images.pexels.com/photos/10259021/pexels-photo-10259021.jpeg?auto=compress&cs=tinysrgb&w=600",dish:"https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    {hotel:"https://images.unsplash.com/photo-1506813257165-8c4bffd3a57f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMyfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",dish:"https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"   },
    {hotel:"https://images.pexels.com/photos/2670273/pexels-photo-2670273.jpeg?auto=compress&cs=tinysrgb&w=600",dish:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
  ]
  let dish={}
  const [Count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if(Count===images.length-1){
        setCount(0)
      }else{
        setCount((Count) =>Count + 1)
      }
    }, 3000);

    const cleanup = () => {
      clearInterval(intervalId);
    };
    return cleanup;
  },[Count]);
  return (
  <>
    <Center>
      <Center w="70%" p="10px 12px" m="10px 0px" shadow='rgba(50, 50, 93, 0.25) 0px 6px 25px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'>
        <Image w="70%" h="370px" padding="20px 5px" src={images[Count].dish}/>
        <Image w="30%" h="370px" padding="20px 5px" src={images[Count].hotel}/>
      </Center>
    </Center>
    <Center>
      <HStack justify="space-between" w="70%" shadow='md' p="15px" >
      <Image w="120px" h="80px" src={images[0].dish} />
      <Image w="120px" h="80px" src={images[1].dish} />
      <Image w="120px" h="80px" src={images[2].dish} />
      <Image w="120px" h="80px" src={images[3].dish} />
      <Image w="120px" h="80px" src={images[4].dish} />
      </HStack>
    </Center>
    <Center>
      
    </Center>
  </>
  )
}

export default Home