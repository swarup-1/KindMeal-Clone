import React from 'react'
import styles from "../Styles/Help.module.css";
import { 
  Box,
  Center,
  Card,
  Text,
  Image,
  Flex,
  Divider,
 } from '@chakra-ui/react'
function Help() {
  return (<Box background= "linear-gradient(180deg, rgba(255,255,255,1) 52%, rgba(233,233,233,1) 100%)">

    <Center>
      <Flex w="80%" mt="20px" gap="50px">
        <Flex direction="column" gap="50px">
        <Card className={styles.Card} >
          <Center><Image src='https://www.kindmeal.my/images/join_normal.png' h="120px" /></Center>
          <Center><Text pt="25px" fontWeight="500">General Help</Text></Center>
        </Card>
        <Card className={styles.Card}>
          <Center><Image src='https://www.kindmeal.my/images/join_shop.png' h="120px" /></Center>
          <Center><Text pt="25px" fontWeight="500">Merchant Help</Text></Center>
        </Card>
        <Card className={styles.Card}>
          <Center><Image src='https://www.kindmeal.my/images/icon-megaphone.png' h="120px" /></Center>
          <Center><Text pt="25px" fontWeight="500">Advertising</Text></Center>
        </Card>
        <Card className={styles.Card} bg="white">
          <Center><Image src='https://www.kindmeal.my/images/about_us.png' h="120px" /></Center>
          <Center><Text pt="25px" fontWeight="500">About KindMeal</Text></Center>
        </Card>
        <Card className={styles.Card} bg="white">
          <Center><Image src='https://www.kindmeal.my/images/about_hero.png' h="120px" /></Center>
          <Center><Text pt="25px" fontWeight="500">SuperHero Guide</Text></Center>
        </Card>
        <Card className={styles.Card} bg="white">
          <Center><Image src='https://www.kindmeal.my/images/contact.png' h="120px" /></Center>
          <Center><Text pt="25px" fontWeight="500">Contact Us</Text></Center>
        </Card>
        </Flex>
        <Box className={styles.Questions}>
          <Text className={styles.Heading}>General Help</Text>
          <Text className={styles.Text}>Wish to find out more on how to use KindMeal? Please check out our frequently-asked questions below. If you are unable to find your answer here, please contact us for further assistance.</Text>
          <Divider p="20px" />

          <Text className={styles.Heading}>What is KindMeal?</Text>
          <Text className={styles.Text}>KindMeal is Malaysia's (and possibly the world's!) pioneering meat-free lifestyle platform. We provide an effective platform to promote compassionate dining in a fun and effective way, that would allow you to save precious animal lives, improve your health,Card Imageeaner environment and of course, save your hard-earned money.</Text>

          <Text className={styles.Heading}>What is Meat-Free?</Text>
          <Text className={styles.Text}>Meat-free means that the food does not contain any meat, or ingredients derived from meat. However, it may contain some elements that people of certain diet do not consume, such as eggs, dairy / milk, or alcohol. Please refer to the details within each specific shop / deal for further information.</Text>

          <Text className={styles.Heading}>How do I sign up to KindMeal? Is it free?</Text>
          <Text className={styles.Text}>Yes, it is absolutely free. To join our community of food lovers and grab awesome deals, please sign up here.If you are a merchant that wish to promote your business for FREE, please proceed to our Businesses Page.</Text>

          <Text className={styles.Heading}>What is a Username?</Text>
          <Text className={styles.Text}>A Username is a nickname exclusively used to identify your profile. It will be used to access your Public Page, such as https://KindMeal.my/MyUsername, and it will also be displayed when you share KindMoments, comments and reviews.</Text>

          <Text className={styles.Heading}>How do KindMeal deals work?</Text>
          <Text className={styles.Text}>Restaurants create attractive deals within KindMeal, which you can obtain coupons for. Our coupons differ from other conventional deal sites in that you do not need to make any upfront payment at KindMeal, and you can easily present our LiveCoupon via computer, mobile or laptop without any print coupons. For restaurants that do not require advance reservations, you can even use the LiveCoupon immediately! After all, eating is an impulsive decision, right?</Text>

          <Text className={styles.Heading}>How do I get a KindMeal coupon?</Text>
          <Text className={styles.Text}> Just browse to a deal you like, select the corresponding outlet location (if the restaurant has multiple locations), then click on Get Coupon. Please note that the outlet location cannot be changed after the coupon is obtained. Each member is limited to 5 active coupons only. You must use the coupons before you can obtain additional ones. Unused coupons will automatically expire upon reaching its due date.</Text>

          <Text className={styles.Heading}>What is KindWords?</Text>
          <Text className={styles.Text}> KindWords is a great way to tell your friends about the great food and instantly get more discount. For deals with KindWords enabled, you can enjoy DOUBLE the discount if you share the deal on Facebook or Twitter. Once you successfully share it, you will immediately receive the exclusive discount for your deal. If you prefer not to take advantage of KindWords, you can still proceed to get the deal at the normal discount price. Please note that not all deals support KindWords - it depends on the merchant.</Text>

          <Text className={styles.Heading}>How do I use my KindMeal LiveCoupon?</Text>
          <Text className={styles.Text}> Once a coupon is received, you can access the LiveCoupon and use it via one of the following ways. An Internet connection is required. At KindMeal website, under Account  - My Coupons section With our KindMeal mobile app, under Deals  - My Coupons section You should only activate the LiveCoupon when you are at the restaurant, and upon informing the merchant. Some merchants may require that you activate it during the ordering process, while some will be during the payment process. Please inform the merchant first when you are ordering to ensure they are aware of your KindMeal LiveCoupon. Once an active LiveCoupon is loaded, you will see a timer counting down the time remaining to use it. To activate it, click on Use LiveCoupon. Please ensure that you only activate it upon the request of the merchant. Activating it ahead of time may void your coupon and deal.</Text>

          <Text className={styles.Heading}>What if I don't have a mobile device or Internet connection, can I use a Print Coupon?</Text>
          <Text className={styles.Text}>This depends on the specific deal. If the merchant allows it, you can also choose to print out the coupon and bring it along. Please refer to the deal's Terms & Conditions to check if print coupons are allowed, and if any prior reservation and usage delay are required.To print your coupon, first access it via KindMeal website at the Account -Account  - My Coupons section, then click on Print Coupon at the corresponding coupon. If the Print Coupon button is not available, it means that only LiveCoupons are accepted for the deal.</Text>

          <Text className={styles.Heading}>What is a Print Coupon's Usage Delay?</Text>
          <Text className={styles.Text}> Some merchants may not have the facilities available to verify Print Coupons instantly, so they may impose a Usage Delay of a certain number of days to first print out a cross-checking reference list. If there is a 3-Day delay, it means that you can only use the Print Coupon 3 days after obtaining the coupon. You may wish to check with the merchant first before using it. We strongly suggest using a LiveCoupon instead, which is immediate with no usage delays.</Text>

          <Text className={styles.Heading}> How do I create a shop and offer deals?</Text>
          <Text className={styles.Text}>You need to first sign up a merchant account. If you have an existing food lover account, we can upgrade it for you to enable the Merchant functions. To do so, please contact us and tell us more about your shop.Once your merchant account is activated, you can find out more details at the Merchant Help section.</Text>

          <Text className={styles.Heading}>Do I need to make any payments to get the deal coupons?</Text>
          <Text className={styles.Text}>No, absolutely no payment is required at KindMeal to obtain your coupon. You will only need to make payment at the restaurant when you use the coupon to purchase your food.</Text>

          <Text className={styles.Heading}>What is a KindMoment?</Text>
          <Text className={styles.Text}> A KindMoment is a food selfie, a photo moment of your delicious food for sharing with the world, and to encourage meat-free dining. Sharing a KindMoment is extremely quick and easy, similar to other social photo sharing websites or mobile apps. If you link your KindMeal account with Facebook, you can also automatically publish your latest KindMoments there. On top of that, you can also manually share on Facebook and Twitter. The public can like and comment on your KindMoments, and you can also edit the KindMoment after publication.</Text>

          <Text className={styles.Heading}>What is Food Menu?</Text>
          <Text className={styles.Text}>Restaurants can additionally showcase meat-free dishes and menu items. These items are different from deals, and there may not be offers available for them. You can discover interesting new food through our menu listings, and browse the corresponding restaurants for more information. To search for specific types of food or restaurants, go to the search section at the bottom of the page. You can click on a menu item to launch the gallery, where you will have a quick view of the corresponding shop's details. Click into a specific</Text>

          <Text className={styles.Heading}>What are Superhero Rankings?</Text>
          <Text className={styles.Text}>Superheroes save lives. So can you. By trying out meat-free meals, sharing delicious moments and encouraging friends to do so, you can earn yourself cool Superhero ranks on KindMeal and win awesome prizes! Check out the Superhero Guide for more information.</Text>
        </Box>
      </Flex>
    </Center>
  </Box>
  )
}

export default Help