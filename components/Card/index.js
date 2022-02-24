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
        <Box maxW='sm' borderWidth='1px' borderRadius='sm' overflow='hidden' key={property.id}>
          <a href={property.webSite}><Image src={property.imageUrl} alt={property.imageAlt}  boxSize='200px'
            objectFit='cover' borderRadius='15px'/></a>
    
          <Box p='1'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
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
              <Box as='span' color='gray.600' fontSize='sm'>
                / Click info.
              </Box>
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {property.reviewCount} reviews
              </Box>
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