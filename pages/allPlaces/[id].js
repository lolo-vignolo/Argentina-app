import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react';
import Starts from "./Starts";


function ScoopePage () {

    const router = useRouter()
    const id = router.query.id
    
    const [star , setStar] = useState(1)

   

    const [place, setPlaces] = useState([]);
    
    useEffect(() => {
        const url = `http://localhost:3001/notes/${id}`
         axios.get(url)
        .then((response)=>{
            setPlaces(response.data)
            
        })
       
        .catch((err)=>console.log(err))  
    }, [])

    const handleClick = () => {
        router.push("/allPlaces")
    }

    const handleStar = () => {
        setStar(star + 1)
    }

    console.log(star);
   

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
        <Starts star={star} />
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