import { Box, Image, Badge  } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import {Hotels} from "./DataHotel.js"
import { useState } from 'react';


const Card = () => {

  const [hotelList, setfirst] = useState(Hotels)

  console.log(hotelList);
  return (
    <>
      {
        hotelList.map((property)=>{
          return (
        <Box maxW='sm' borderWidth='5px' borderRadius='sm' overflow='hidden' key={property.id} mr="10px">
          <a href={property.webSite}><Image src={property.imageUrl} alt={property.imageAlt}  boxSize='160px'
            objectFit='cover' borderRadius='15px'/></a>
    
          <Box p='1'>
            <Box display='flex' alignItems='baseline' maxW='sm'  >
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              
            </Box>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {property.title}
            </Box>
    
            <Box>
              {property.formattedPrice}
              <Box as='span' color='gray.600' fontSize='10px'>
                / Click info.
              </Box>
            </Box>
    
            <Box display='flex' mt='2' alignItems='center' fontSize='sm' >
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
                </Box>  
              <Box as='span'  color='gray.600' fontSize='sm'>
                {property.reviewCount} reviews
              </Box>
            
          </Box>
        </Box>
      )
          
        })
      }

    </>
  )
      
   
};

export default Card;