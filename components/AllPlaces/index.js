import { CheckIcon, SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';




const AllPlaces = () => {

    const [listPlaces, setListPlaces] = useState([]);
    const [listPlaceDinamic, setListPlacesDinamic] = useState([])
    const [province , setProvince] = useState("")
   
   

    

    useEffect(() => {
        fetch('/api/hello',{
            
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
        })
        .then((res)=>res.json())
        .then(data=>{
            setListPlacesDinamic(data.comments)
            setListPlaces(data.comments)
        })
       
    }, [])

    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda = listPlaceDinamic.filter((province)=>{
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
                   
                   <ul key={place._id}>
                        <li><PlaceCard
                            title={place.title}
                            picture={place.image}
                            description={place.description}
                            id = {place._id}
                         /></li>
                   </ul>
               )
           })}
        </section>
        <style jsx>{`

            section{
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center
            }       
            input{
                position:relative

            }

            ul{
                list-style:none 
            }
        `}</style>
        </>
    );
};

export default AllPlaces;