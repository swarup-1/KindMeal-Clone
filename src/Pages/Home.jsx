import React from 'react'
import carousel2 from "../Images/carousel2.jpg"
import carousel4 from "../Images/carousel4.jpg"
import styles from "../Styles/Home.module.css"
import { 
  Image,
  Center,
  Box,
  HStack,
 } from '@chakra-ui/react'
function Home() {
  let images =[
    {hotel:"https://www.kindmeal.my/photos/shop/5/592-4483-m.jpg",dish:"https://www.kindmeal.my/photos/deal/7/700-4802-m.jpg"},
    {hotel:"https://www.kindmeal.my/photos/shop/5/504-3481-m.jpg",dish:"https://www.kindmeal.my/photos/deal/4/469-1822-m.jpg"},
    {hotel:"https://images.unsplash.com/photo-1584970091438-19edea48bdc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMzfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",dish:carousel2},
    {hotel:"https://www.kindmeal.my/photos/shop/6/601-4497-m.jpg",dish:"https://www.kindmeal.my/photos/deal/7/707-4819-m.jpg"},
    {hotel:"https://images.unsplash.com/photo-1506813257165-8c4bffd3a57f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMyfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",dish:carousel4},
    {hotel:"https://www.kindmeal.my/photos/shop/5/598-4450-m.jpg",dish:"https://www.kindmeal.my/photos/deal/7/704-4734-m.jpg"},
    {hotel:"https://www.kindmeal.my/photos/shop/2/219-940-m.jpg",dish:"https://www.kindmeal.my/photos/deal/4/469-1822-m.jpg"}
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
  <Box background= "linear-gradient(180deg, rgba(255,255,255,1) 52%, rgba(233,233,233,1) 100%)">
    <Center>
      <Center w="80%" m="5px 0px 0px 0px" shadow='md' p="10px">
        <Image w="70%" h="370px" pr="1.5px" src={images[Count].dish}/>
        <Image w="30%" h="370px" src={images[Count].hotel}/>
      </Center>
    </Center>
    <Center>
      <HStack className='HStack' justify="space-between" w="80%" shadow='md' p="25px" >
        {images.map((el,i)=><Image className={styles.images} w="120px" h="80px" src={el.dish} onClick={()=>setCount(i)}/>)}
      </HStack>
    </Center>
  </Box>
  )
}

export default Home