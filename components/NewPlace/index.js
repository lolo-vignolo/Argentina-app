import { Button, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const index = () => {

    const [title, setTitle] = useState("")
    const [image, setURL] = useState("")
    const [description, setDescription] = useState("")
    const router = useRouter()

    const handleTitle =(e)=>{
        const {value}= e.target
        setTitle(value)   
    }

    const handleUrl = (e)=> {
        const {value}= e.target
        setURL(value)
     }

    const HandleDescription = (e)=> {
        const {value}= e.target
        setDescription(value)
    }

    const newEntry = {
        title,
        image,
        description
    }



    const handleSubmit= (e)=>{
        e.preventDefault();
        axios.post("/api/hello", newEntry)
        .then((response)=>console.log(response.data))
        .then(()=>router.push("/allPlaces"))   
      console.log(e);

      
    }
    return (

        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <div className='div_title'>
                        <h3>Write the name of the place:</h3>
                        <input 
                            onChange = {handleTitle}
                            value = {title}
                            placeholder = ' Place' 
                            />
                    </div>
                    <div className='div_picture'>
                        <h3>Paste a picture URL from the place</h3>
                        <input 
                            value={image}
                            onChange={handleUrl} 
                            placeholder=' Picture URL' 
                            type="url"
                            required
                             />  
                    </div>
                        <h3>Leave a small description:</h3>
                    <div className='div_picture'>
                        <textarea 
                            value = {description}
                            onChange={HandleDescription} 
                            placeholder=' Add a description...'   
                            row="5" 
                            maxLength="600"
                            required
                            />                 
                    </div>  
                    <Stack direction='row' spacing={4} mt={6}>
                        <Button onClick={()=>router.push("/home")}  colorScheme='teal' variant='solid'>
                           Home
                        </Button>
                        <Button
                            // isLoading
                            loadingText='Submitting'
                            colorScheme='teal'
                            variant='outline'
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Stack> 
                </form>

            </section>
            <style jsx>{`
               section{
                   display:flex;
                   justify-content:center;
                   background-color:#9AE6B4;
                   width: 80%;
                   height:80%;
                   max-height:30rem;
                   border-radius:15px;
               }

               form{
                   width: 85%;
                   height:auto
               }
               input{
                   display:flex;
                   height:2.3rem;
                   width: 100%;
                   border-style: solid;
                   border-width: 2px;
                   border-color:#9AE6B4;
                   font-size: 1rem;
               }

               textarea{
                   display:flex;
                   height:7rem;
                   width: 100%;
                   border-style: solid;
                   border-width: 2px;
                   border-color:#9AE6B4;
                   font-size: 1rem;
                   resize: none;

               }

               h3{
                   font-size:1rem;
                   font-family:"Goudy Bookletter 1911", sans-serif;;
                   margin-top:0.5rem;
                   margin-bottom:0.5rem

               }
               .div_title{
                   display:flex;
                   flex-direction:column;
                   width:100%;
                   height:5rem
               }

               @media (min-width: 640px) {

                section{
                   width:85%;
                   height:100%;
                   border-radius:15px;
               }
                h3{
                   font-size:1.5rem;
               }
                
                }
            

            `}</style>
        </>
    );
};

export default index;