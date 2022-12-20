import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import {ArrowRightIcon,ArrowLeftIcon} from '@chakra-ui/icons'


function Pagination({totalPages, currentPage, handlePage , handleChange}){
    let pages = new Array(totalPages).fill(0).map((page,i)=> 
        <Button disabled={currentPage === i+1} key={i+1} fontSize={{base:"12px" ,md:"1vw"}} colorScheme='blue' variant='ghost' onClick={()=>{handlePage(i+1)}} > {i+1}  </Button>
        )
        return(
            <>
            <Flex w='70%' margin='50px auto' justifyContent='space-between' flexDirection={{base:"column" ,md:"row"}}>
                <Flex   fontSize={{base:"12px" ,md:"1.3vw"}} alignItems='center' > Pages:  {pages} </Flex>
                <Flex gap="20px" >
                    <Button onClick={()=>{handleChange(-1)}}><Icon boxSize='2' mr='2' mt='1' as={ArrowLeftIcon} /> Prev</Button>

                    <Button onClick={()=>{handleChange(+1)}}>Next <Icon boxSize='2' ml='2' mt='1' as={ArrowRightIcon} /></Button>
                </Flex>
            </Flex>
            </>
        )
}
export default Pagination;