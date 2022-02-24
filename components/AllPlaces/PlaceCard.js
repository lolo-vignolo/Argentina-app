import { Text, Image, AspectRatio } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';



const PlaceCard = ({title, picture , description, address}) => {
    return (
        <>
       
            <div className='main_div'>
            
                <div bg='tomato'>
                <Image 
                    borderRadius='15px' 
                    src={picture}
                    alt='Dan Abramov'
                    boxSize='280px'
                    objectFit='cover' 
                    />
                </div>

                <div className='box__div' bg='white' >
                    <div className='content_div'>
                        <Text fontSize='2xl'>{title} 🧐 </Text>
                        <p>{description}</p>
                    </div>

                    <div className='div__map'>
                    <AspectRatio ratio={2.9/0.8} mb="3px">
                        <iframe
                            src= {address?address:""}
                            alt="bandera.png"
                        />
                    </AspectRatio>
                    </div>

                </div>

                
            </div>
           

            <style jsx>
            {`
                .main_div{
                    display:flex;
                    align-items:center;
                    flex-direction:row;
                    border:solid;
                    border-radius:10px;
                    border-color:#C6F6D5;
                    margin:3rem;
                    padding:1rem;
                    background:white;
                   
                }

                .box__div{
                    height:17rem;
                    width:20rem;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    padding-top:0;
                    padding-left:1rem

                    
                }
                .content_div{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                }
                .div__map{
                    margin-left:3rem;   
                }

                p{
                    font-size: 15px;
                }
            `}
            </style>
            
        </>
      
    );
};

export default PlaceCard;