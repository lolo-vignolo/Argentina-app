import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";

import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react';



function ScoopePage () {

    const router = useRouter()
    const id = router.query._id
    
    const [star , setStar] = useState(1)

   

    const [placeSelected, setPlaces] = useState([]);
  
    
    useEffect(() => {
        fetch(`/api/hello`,{
            
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
        })
        .then((res)=>res.json())
        .then(data=>{
            setPlaces(data.comments)
        })
       
    }, [])


    const  placeArray = placeSelected.filter(p => p._id === id)

    const[place] = placeArray
   

    const handleClick = () => {
        router.push("/allPlaces")
    }

    const handleStar = () => {
        setStar(star + 1)
    }


   if(!place) return null;
    
    return(
        <>
        <section>
        <Box align="center" >
        <Text fontSize='3xl'>{place.title}</Text>     
     
        </Box>
        <Box mr="3rem" ml="3rem" mt="1.5rem" align="center">
            
        <Image 
                    borderRadius='15px' 
                    src={place.image}
                    alt={place.title}
                    /> 
        <div>
        
        <br />
        <Button colorScheme='teal' variant='outline' size='xs' onClick={handleStar}>Add a - <StarIcon /> </Button>
       
        </div>
       
        
            
        </Box>
        <Box mr="3rem" ml="3rem" mt="2rem" align="center">
            {/* <p>{place.fullDescription}</p> */}
            <Text fontSize='1xl'>{place.description}</Text>  
            
        </Box>
        <Box  mt="2rem" align="center">
            
            <Button onClick={handleClick}  leftIcon={<ArrowBackIcon />} colorScheme='teal' variant='solid' mb="15px">
                Go Back!
            </Button>
        </Box>

        </section>

        <style jsx>{`
        
        
        `}</style>
            

        </>

        
    )
        
    

}

export default ScoopePage

