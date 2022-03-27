import { Text, Image, AspectRatio } from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react';




const PlaceCard = ({title, picture , description, address,id}) => {



    // const handleDelete = () =>{
    //     axios.delete(`/api/hello/${id}`, {id})
    //     .then((response)=>console.log(response.data))
    // } 


    return (
        <>
       
            <div className='main_div'>
            
                <div className='div__img'>
                <Image 
                    borderRadius='15px' 
                    src={picture}
                    alt={title}
                    boxSize='150px'
                    objectFit='cover' 
                    />
                </div>

                <div className='box__div' bg='white' >
                    <div className='content_div'>
                        <Text fontSize='2xl'>{title} 🧐 </Text>
                        <p>{description}</p>
                    </div>

                    <div className="div__more">
                        <div><Link href= {`allPlaces/${id}`} ><a>see more</a></Link></div>
                        {/* <div><button onClick = {handleDelete}>Delete</button></div> */}
                    </div>
                

                </div>
              
            </div>
            
           

            <style jsx>
            {`
                .main_div{
                    display:flex;
                    align-items:center;
                    flex-direction:row;
                    justify-content:center;
                    border:solid;
                    border-radius:10px;
                    border-color:#C6F6D5;
                    margin-top:3rem;
                    padding:1rem;
                    background:white;
                    height:25rem;
                    width: 20rem;
                   
                }

                .div__img{     
                    display:flex;
                    padding-top:0;
                }

                .box__div{
                    height:27rem;
                    width:20rem;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    padding-top:0;
                    padding-left:1rem;
                    margin-top:1rem;
                    align-items:space-between;
                    

                    
                }
                .content_div{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                p{
                    font-size: 15px;
                    margin-top:0.5rem;
                    margin-bottom:0.5rem;
                    height:12rem
                }

                .div__more{
                    color:#E6FFFA;
                    background-color:#2C7A7B;
                    width:6rem;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border-radius:15px;
                    margin-top:1rem!important
                    
                }

                
                @media (min-width:640px) {

                    .main_div{
                    
                    height:25rem;
                    width: 30rem;
                   
                    }

                }

            `}
            </style>
            
        </>
      
    );
};

export default PlaceCard;