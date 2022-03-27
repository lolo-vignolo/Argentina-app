import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react'
import AuthForm from '../components/auth/AuthForm';

const Auth = () => {
    const router = useRouter()

  const [loading, setLoading] = useState (true)

  useEffect(() => {

    async function gettingSession (){
      const session =  await getSession()
        console.log(session);
      if(session){
        router.replace("/home")
      }else{
        setLoading(false)
      }
    }
    gettingSession()
  }, [router])
  

  if(loading){
    return (
    <div 
      style = {{display:"flex" , justifyContent:"center" , alignItems:"center"}}
    > 
    <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    />
    </div>
    )
  
  }
    return <AuthForm />
        
            
};

export default Auth;