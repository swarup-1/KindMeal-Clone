import {useState,} from 'react'
import styles from "../Styles/Signup.module.css";
import { 
    Box,
    Center,
    Card,
    Text,
    Image,
    Flex,
    UnorderedList,
    ListItem,
    FormControl,
    FormLabel,
    Input,
    Select,
    Radio,
    RadioGroup,
    Button,
    HStack,
    Heading,
    Link
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
const initState={
    first:"",
    last:"",
    email:"",
    password:"",
    userName:"",
    
}
function Signup() {
    const[ userData, setUserData]= useState(initState)
    const navigate=useNavigate();
    
    const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    const states = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"]
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const currentYear = (new Date()).getFullYear();
    const years = [] 
    for(let i=currentYear;i>=1970;i--){
        years.push(i)
    }
    // console.log('years:', years)


    const handleChange=(e)=>{
      setUserData({...userData,[e.target.name]:e.target.value})
    }
    console.log('userData:', userData)
    const handleSubmit=(e)=>{
      e.preventDefault();
      localStorage.setItem("userData",JSON.stringify(userData))
      navigate("/")
    }
    return (
    <Box background= "linear-gradient(180deg, rgba(255,255,255,1) 52%, rgba(233,233,233,1) 100%)">

    <Center>
      <Flex w="80%" mt="20px" gap="50px">
        <Flex direction="column" gap="30px">
            <Card className={styles.Card} >
              <Center><Image src='https://www.kindmeal.my/images/join_normal.png' h="120px" /></Center>
              <Center><Text pt="25px" fontWeight="500">General Help</Text></Center>
            </Card>
            <Card className={styles.Card}>
              <Center><Image src='https://www.kindmeal.my/images/join_shop.png' h="120px" /></Center>
              <Center><Text pt="25px" fontWeight="500">Merchant Help</Text></Center>
            </Card>
            <Card className={styles.Card}>
            <Text fontSize="xl">Why KindMeal?</Text>
            <br />
            <UnorderedList m="0px" fontSize="13px" fontWeight="700" >
              <ListItem>Exclusive meat-free deals</ListItem>
              <ListItem>Share yummy food moments</ListItem>
              <ListItem>Meet friendly food lovers</ListItem>
              <ListItem>Discover cool restaurants</ListItem>
              <ListItem>Email updates on tasty deals</ListItem>
              <ListItem>Instant coupons & dining</ListItem>
              <ListItem>No upfront payment, booking or printing</ListItem>
            </UnorderedList>
        </Card>

        </Flex>
            <FormControl w='80%' >
            <Flex flexDirection='column' textAlign='left' gap='3' >
                <Heading fontSize='2vw' fontWeight='400' >Food Lover? Sign Up Now or <Link  to="/#" _hover={{textDecoration:"underline"}} ><span style= {{color:"#2184ff"}}>Login With Facebook</span></Link> </Heading>
                <Text color='blackAlpha.900' fontWeight='500' >Discover tasty meat-free meals and dine instantly — no coupon payment, booking or printing is required.</Text>
                <Text color='blackAlpha.900' fontWeight='500' >KindMeal is a fun, exciting and cool new way for you to show your compassion towards animals. We collaborate with kind restaurants and cafes across the nation to bring you delicious meat-free foods that will not only help save precious animal lives, but improve your health and save your money at the same time!</Text>
            </Flex>
            <Flex  justifyContent='space-between' mt='5' >
                <Text alignSelf='center' textAlign='left' w='20%' >Your Name</Text>    
                <Flex w='80%' gap='5' >
                    <Box w='40%' >
                        <FormLabel color='#666666' >First name</FormLabel>
                        <Input type='text' onChange={handleChange} name="first"  borderColor='gray.500'  />
                    </Box>
                    <Box w='40%' >
                        <FormLabel color='#666666' >Last name</FormLabel>
                        <Input type='text' onChange={handleChange} name="last"  borderColor='gray.500' />
                    </Box>
                </Flex>
            </Flex>
            <Flex  justifyContent='space-between' mt='5'  >
                <Text alignSelf='center' textAlign='left' w='20%' >Email</Text>
                <Box w='80%'>
                    <FormLabel color='#666666' >Your email must be correct to receive activation email</FormLabel>
                    <Input type='email' onChange={handleChange} name="email"  borderColor='gray.500'  />
                </Box>
            </Flex>
            <Flex  justifyContent='space-between' mt='5'  >
                <Text alignSelf='center' textAlign='left' w='20%' >Password</Text>
                <Box w='80%'>
                    <Input type='password' onChange={handleChange} name="password"  borderColor='gray.500'  />
                </Box>
            </Flex>
            <Flex  justifyContent='space-between' mt='5'  >
                <Text alignSelf='center' textAlign='left' w='20%' >Username</Text>
                <Box w='80%'>
                    <FormLabel color='#666666'  >Choose a cool username for your Personal Profil Page ,comment & reviews</FormLabel>
                    <FormLabel color='blue.400' > http://KindMeal.my/Username </FormLabel>
                    <Input type='text' onChange={handleChange} name="userName"  borderColor='gray.500'  />
                </Box>
            </Flex>
            <Flex   mt='5'  >
                <Text alignSelf='center' textAlign='left' w='20%' >Birth Date</Text>
                <Box w='60%'>
                    <FormLabel color='#666666' >Only your age will be publicly visible</FormLabel>
                    <Flex gap='5' >
                        <Select placeholder='Month'  borderColor='gray.500' >
                            {months.map((month)=>(
                                <option key={month} > {month} </option>
                            ))}
                        </Select>
                        <Select placeholder='Day' borderColor='gray.500' >
                            {dates.map((date)=>(
                                <option key={date}  > {date} </option>
                            ))}
                        </Select>
                        <Select placeholder='Year' borderColor='gray.500' >
                            {years.map((year)=>(
                                <option key={year} > {year} </option>
                            ))}
                        </Select>
                    </Flex>
                </Box>
            </Flex>
            <Flex  mt='5'  >
                <Text alignSelf='center' textAlign='left' w='20%' >Country</Text>
                <Box w='30%'>
                    <Select placeholder='Select Country' borderColor='gray.500' >
                        {country_list.map((country , i)=>(
                            <option key={country}> {country} </option>
                        ))}
                    </Select>
                </Box>
            </Flex>
            <Flex  mt='5'  >
                <Text alignSelf='center' textAlign='left' w='20%' >State</Text>
                <Box w='30%'>
                    <Select placeholder='Select State' borderColor='gray.500' >
                        {states.map((state , i)=>(
                            <option key={state} > {state} </option>
                        ))}  
                    </Select>
                </Box>
            </Flex>
            <Flex  mt='5'  >
                <Text alignSelf='center' textAlign='left' w='20%' >Gender</Text>
                <Box w='30%'>
                <RadioGroup>
                  <HStack spacing='24px' >
                    <Radio value='male'>Male</Radio>
                    <Radio value='female'>Female</Radio>
                  </HStack>
                </RadioGroup>
                </Box>
            </Flex>
            <Button 
            type='submit'
            onClick={handleSubmit}
            fontSize="20px"
            mt="20px"
            bg="red"
            color="white"
            p="25px 40px"
            >Join buttom</Button>
        </FormControl>
      </Flex>
    </Center>
  </Box>
  )
}

export default Signup