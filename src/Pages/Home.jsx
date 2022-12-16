import React from 'react'
import carousel2 from "../Images/carousel2.jpg"
import carousel4 from "../Images/carousel4.jpg"
import styles from "../Styles/Home.module.css"
import { 
  Image,
  Center,
  Box,
  HStack,
  Flex,
  Card,
  Text,
  Heading,
  Link
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

  const cardList=[
    {
      heading:"Latest News & Videos",
      otherLinks:{
        li1:"Save Lives with Your Blog",
        li2:"•   News & Articles   •",
        li3:"Follow Our Facebook"
      },
      elements:{
        images:{
          img1:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/127853511_500056460971216_6625358320206453732_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=cT8flw6e3ssAX97i3UO&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDHLN1Dz1I2SoISj0ernr-9FCagKvkvyh0iRHlflWe-XA&oe=639F7B11",
          img2:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/127853511_500056460971216_6625358320206453732_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=cT8flw6e3ssAX97i3UO&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDHLN1Dz1I2SoISj0ernr-9FCagKvkvyh0iRHlflWe-XA&oe=639F7B11",
          img3:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/127853511_500056460971216_6625358320206453732_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=cT8flw6e3ssAX97i3UO&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDHLN1Dz1I2SoISj0ernr-9FCagKvkvyh0iRHlflWe-XA&oe=639F7B11",
          img4:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/127853511_500056460971216_6625358320206453732_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=cT8flw6e3ssAX97i3UO&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDHLN1Dz1I2SoISj0ernr-9FCagKvkvyh0iRHlflWe-XA&oe=639F7B11",
          img5:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/127853511_500056460971216_6625358320206453732_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=cT8flw6e3ssAX97i3UO&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDHLN1Dz1I2SoISj0ernr-9FCagKvkvyh0iRHlflWe-XA&oe=639F7B11"
        },
        links:{
          link1:"Salted Caramel Apple Crumble!",
          link2:"Salted Caramel Apple Crumble!",
          link3:"Salted Caramel Apple Crumble!",
          link4:"Salted Caramel Apple Crumble!",
          link5:"Salted Caramel Apple Crumble!",
        }
      }
    },
    {
      heading:"Yummylicious Moments",
      otherLinks:{},
      elements:{
        images:{},
        links:{}
      }
    },
    {
      heading:"Discover Restaurants",
      otherLinks:{},
      elements:{
        images:{},
        links:{}
      }
    },
    {
      heading:"Amazing Superheroes",
      otherLinks:{},
      elements:{
        images:{},
        links:{}
      }
    },
  ]
  return (
  <Box background= "linear-gradient(180deg, rgba(255,255,255,1) 52%, rgba(233,233,233,1) 100%)">
    <Center>
      <Center className={styles.Carousel}>
        <Image w="70%" h="370px" pr="1.5px" src={images[Count].dish}/>
        <Image w="30%" h="370px" src={images[Count].hotel}/>
      </Center>
    </Center>
    <Center>
      <HStack className={styles.images} justify="space-between" w="80%" shadow='md' p="25px" mb="50px">
        {images.map((el,i)=><Image className={styles.image} w="120px" h="80px" src={el.dish} onClick={()=>setCount(i)}/>)}
      </HStack>
    </Center>

      {cardList.map((e)=>(
        <Center>
            <Flex shadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" w="80%" p="15px" mb="50px" direction="column">
            <Flex justify="space-between" p="10px">
              <Box>
                <Heading fontSize="22px">{e.heading}</Heading>
              </Box>
              <Box>  
                <Link>{e.otherLinks.li1}</Link>
                <Link>{e.otherLinks.li2}</Link>
                <Link>{e.otherLinks.li3}</Link>
              </Box>
            </Flex>
            <Flex justify="space-between">
              <Box>
                <Image src={e.elements.images.img1} h="200px" w="200px" objectFit='cover' borderRadius="5px"/>
                <Link>{e.elements.links.link1}</Link>
              </Box>
              <Box>
                <Image src={e.elements.images.img2} h="200px" w="200px" objectFit='cover' borderRadius="5px"/>
                <Link>{e.elements.links.link2}</Link>
              </Box>
              <Box>
                <Image src={e.elements.images.img3} h="200px" w="200px" objectFit='cover' borderRadius="5px"/>
                <Link>{e.elements.links.link3}</Link>
              </Box>
              <Box>
                <Image src={e.elements.images.img4} h="200px" w="200px" objectFit='cover' borderRadius="5px"/>
                <Link>{e.elements.links.link4}</Link>
              </Box>
              <Box>
                <Image src={e.elements.images.img5} h="200px" w="200px" objectFit='cover' borderRadius="5px"/>
                <Link>{e.elements.links.link5}</Link>
              </Box>
            </Flex>
          </Flex>
        </Center>
      ))}
  </Box>
  )
}

export default Home