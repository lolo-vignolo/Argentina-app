import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";

import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react';



function ScoopePage () {

    const router = useRouter()
    const id = router.query._id
    

   

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

{/* 

// const Starts = ({star}) => {


//     const stars = {
//         one : "⭐",
//         two: "⭐⭐",
//         three:"⭐⭐⭐",
//         four:"⭐⭐⭐⭐"
//     }
//     if (star <= 5){
//         return (<h1>{stars.one}</h1>)
//     }
//     if(star >= 6 && star < 10){
//         return (<h1>{stars.two}</h1>)}
//     if(star >= 10 && star < 20){
//         return (<h1>{stars.three}</h1>)}  
        
//     if(star >= 20){
//         return ( <h1>{stars.four}</h1> )}

       
       
       

    
// };

// export default Starts; */}