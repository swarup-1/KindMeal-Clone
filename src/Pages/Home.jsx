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
  SimpleGrid,
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
        li1:"Save Lives with Your Blog ",
        li2:"•   News & Articles   •",
        li3:" Follow Our Facebook"
      },
      elements:[
        {
          img:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/127853511_500056460971216_6625358320206453732_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=cT8flw6e3ssAX97i3UO&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDHLN1Dz1I2SoISj0ernr-9FCagKvkvyh0iRHlflWe-XA&oe=639F7B11",
          link:"Salted Caramegggggggggl Apple Crumble!"
        },
        {
          img:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/313572633_1222446185289163_301818545381834372_n.jpg?stp=dst-jpg_s720x720&_nc_cat=1&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=YQIGmo8tlTkAX9uSzj1&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfCAmO-LxRCjXSY1rE0M3ByCqX9lC9fls7rd_4CLHcIC5w&oe=63A19575",
          link:"Wild Turkeys gggggggggGo Nuts About!",
        },
        {
          img:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/317917398_835831947653314_7294252524021926878_n.jpg?stp=dst-jpg_s720x720&_nc_cat=105&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=hsHMEsxpCYYAX8jh38A&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDkd2PRB6BOyoROnAZwU9nxWFY9QrfAZNo5iWlu_4wJHg&oe=63A1D530",
          link:"Sick Baby Cowgggggggggsf Headbutts",
        },
        {
          img:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/318915884_561186642153164_127441678623272126_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=RbU2RzfjjLkAX9GaRhy&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfB_yJsQegCoLtqzEXYf5cr9wdpKOPZ26zW3oij8Gj720A&oe=63A1215C",
          link:"The Best Air Fryer Recipe",
        },
        {
          img:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/283214530_476021257630109_5388539080951558766_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=xEbgWl_cqR8AX8oGPxP&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfAU_h8g1E1spqVverxvxQPIbovldQCmPxJ6Zz0CI8BHyA&oe=63A0854B",
          link:"Sea Turtl At Just The Right Time",
        }
      ],
    },
    {
      heading:"Yummylicious Moments",
      otherLinks:{
        li1:"Secret Recipes ",
        li2:"•   Member Hot Picks   •",
        li3:" Photo Moments"
      },
      elements:[
        {
          img:"https://www.kindmeal.my/photos/moment/24/24754-48161-s.jpg",
          link:"Purple Cane Tea Restaurant @ The Gardens - VyVian!"
        },
        {
          img:"https://www.kindmeal.my/photos/moment/24/24753-48157-s.jpg",
          link:"Pine 3 Vegetarian Restaurent - VyVian!",
        },
        {
          img:"https://www.kindmeal.my/photos/moment/24/24752-48154-s.jpg",
          link:"Pure Heart Vegetarian - William21",
        },
        {
          img:"https://www.kindmeal.my/photos/moment/24/24752-48154-s.jpg",
          link:"MyTOWN Shopping Centre - FatJedi",
        },
        {
          img:"https://www.kindmeal.my/photos/member/42/42102-m.jpg",
          link:"Paharganj - sonalivarma",
        }
      ],
    },
    {
      heading:"Discover Restaurants",
      otherLinks:{
        li1:"Vegetarian Directory ",
        li2:"• Restaurant Menu •",
        li3:" Food Map"
      },
      elements:[
        {
          img:"https://www.kindmeal.my/photos/item/0/292-3016-s.jpg",
          link:"BOOSTER - carrot, beetroot and orange!"
        },
        {
          img:"https://www.kindmeal.my/photos/item/0/331-3451-s.jpg",
          link:"Al Funghi Pasta!",
        },
        {
          img:"https://www.kindmeal.my/photos/item/0/418-5750-s.jpg",
          link:"Affogato",
        },
        {
          img:"https://www.kindmeal.my/photos/item/0/627-9654-s.jpg",
          link:"Ice Grey Latte",
        },
        {
          img:"https://www.kindmeal.my/photos/item/0/350-3728-s.jpg",
          link:"Pesto Pasta",
        }
      ],
    },
    {
      heading:"Amazing Superheroes",
      otherLinks:{
        li1:"Latest Buzz ",
        li2:"•    Lifestyle Ambassadors    •",
        li3:" Win Gifts!"
      },
      elements:[
        {
          img:"https://www.kindmeal.my/photos/member/41/41364-m.jpg",
          link:"DebbieNg1"
        },
        {
          img:"https://www.kindmeal.my/photos/member/42/42102-m.jpg",
          link:"TowhidulIslam!",
        },
        {
          img:"https://www.kindmeal.my/photos/member/19/19852-m.jpg",
          link:"JennyOoi",
        },
        {
          img:"https://www.kindmeal.my/photos/member/35/35327-m.jpg",
          link:"KehChinChoo",
        },
        {
          img:"https://www.kindmeal.my/photos/member/19/19739-m.jpg",
          link:"KarenKhoo",
        }
      ],
    },
  ]

  
  return (
  <Box background= "linear-gradient(180deg, rgba(255,255,255,1) 52%, rgba(233,233,233,1) 100%)">
    <Center>
      <Center className={styles.Carousel} w={{base:"100%", md:"80%"}}>
        <Image w="70%" h={{base:"200px",md:"370px"}} pr="1.5px" src={images[Count].dish}/>
        <Image w="30%" h={{base:"200px",md:"370px"}} src={images[Count].hotel}/>
      </Center>
    </Center>
    <Center>
      <HStack className={styles.images} justify="space-between" w={{base:"100%",md:"80%"}}  shadow='md' p="25px" mb="50px">
        {images.map((el,i)=><Image className={styles.image} w="120px" h={{base:"20px",sm:"40px",md:"80px"}}  src={el.dish} onClick={()=>setCount(i)}/>)}
      </HStack>
    </Center>

      {cardList.map((e)=>(
        <Center>
            <Flex shadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" w={{base:"100%",md:"80%"}} p="15px" mb="50px" direction="column">
            <Flex justify="space-between" p="10px">
              <Box>
                <Heading fontSize={{base:"10px",md:"22px"}}>{e.heading}</Heading>
              </Box>
              <Box>  
                <Link fontSize={{base:"10px",md:"20px"}}>{e.otherLinks.li1}</Link>
                <Link fontSize={{base:"10px",md:"20px"}}>{e.otherLinks.li2}</Link>
                <Link fontSize={{base:"10px",md:"20px"}}>{e.otherLinks.li3}</Link>
              </Box>
            </Flex>
            <SimpleGrid columns={{base:3, sm:5}} justifyContent="space-around" gap={{base:"10px",sm:"15px",md:"17px",xl:"20px"}}>
              {e.elements && e.elements.map((el)=>
                  <Box w={{base:"60px",sm:"100px",md:"200px"}}>
                    <Image src={el.img} h={{base:"80px",sm:"100px",md:"150px",xl:"200px"}}  w="100%" objectFit='cover' borderRadius="5px"/>
                    <Link textAlign="justify" fontSize={{base:"8px",md:"12px"}} >{el.link}</Link>
                  </Box>
              )}
            </SimpleGrid>
          </Flex>
        </Center>
      ))}
        <Box bgColor="white" align="center"><Image src="https://www.kindmeal.my/images/media-feature2.png" alt="meals_footer_image" /></Box>
        <Box bgColor="gray.100" >
          <Box align="center"><Image src="https://www.kindmeal.my/images/banner_whykindmeal.png" alt="meals_footer_image" /></Box>
        </Box>
  </Box>
  )
}

export default Home










