import { CheckIcon, SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';




const AllPlaces = () => {

    const [listPlaces, setListPlaces] = useState([]);
    const [listPlaceDinamic, setListPlacesDinamic] = useState([])
    const [province , setProvince] = useState("")

    useEffect(() => {
        const url = "http://localhost:3001/notes"
         axios.get(url)
        .then((response)=>{
            setListPlaces(response.data)
            setListPlacesDinamic(response.data)
        })
       
        .catch((err)=>console.log(err))  
    }, [])

    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=listPlaceDinamic.filter((province)=>{
          if(province.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){
            return province;
          }
        });
        setListPlaces(resultadosBusqueda);
      }



    const handleChange = (e) => {
        setProvince(e.target.value)
        filtrar(e.target.value)
    } 
   if(!listPlaces)return null;

    return (
        <>
        <section>
        <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            color="gray.300"
            fontSize="1.2em"
            children={<SearchIcon color='gray.300' />}
            value={province}
            
            />
            <Input backgroundColor="white" onChange ={handleChange} placeholder= "Search by province" />
            
            {province.length > 2 &&  <InputRightElement children={<CheckIcon color='green.300' />} />}
           
        </InputGroup>

           {listPlaces.map((place)=>{
               return(
                   
                   <ul key={place.id}>
                        <li><PlaceCard
                            title={place.title}
                            picture={place.image}
                            description={place.description}
                            address={place.address}
                         /></li>
                   </ul>
               )
           })}
        </section>
        <style jsx>{`       
            input{
                position:relative

            }
        `}</style>
        </>
    );
};

export default AllPlaces;