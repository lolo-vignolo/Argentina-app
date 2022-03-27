
import {signIn} from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import {
    Alert,
    AlertIcon,
  } from '@chakra-ui/react'


import newUser from './newUser';


const AuthForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()
    const [isLogin, setIsLogin] = useState(true)

    const [status , setStatus] = useState()


    useEffect(() => {
        if (status) {
          const timer = setTimeout(() => {
            setStatus(null);
            
          }, 3000);
    
          // este clear es para que no queden en lacola timeOuts
          return () => clearTimeout(timer);
        }
      }, [status]);




    const handleEmail = (e) =>{
        let emailValue = e.target.value
        setEmail(emailValue )
    }

    const handlePassword = (e) => {
        let passwordValue = e.target.value
        setPassword(passwordValue)
    } 


    const handleLogin = () => {
        setIsLogin ((prevState) => !prevState)
    }

    async function handleSubmit (e) {
        e.preventDefault()

        if(isLogin){
            const result = await signIn("credentials", {
                redirect:false,
                email:email,
                password:password
            })

            if(!result.error){
                setStatus("loginSucces")
                router.replace("/home")
            }else{
                setStatus("error")     
            }
            

        }else{

            try{
               const result = await newUser(email, password)
               setStatus("succes");
               router.replace("/home")
               console.log(result);

            }catch(err){
                console.log(err);
                setStatus("longer")
            }
        }
    }
    

    return (
        <>
        <section>
            <div>
                <h1>{isLogin?"Login":"Sign up"}</h1>
                <form onSubmit={handleSubmit}>
                    <div className='div-email-password'>
                        <label htmlFor='email'>Your Email</label>
                        <input type="email" id="email" required value={email} onChange={handleEmail} />
                    </div>
                    <div className='div-email-password'>
                        <label htmlFor='password' > Your Password </label>
                        <input type="password" id="password" required  value ={password} onChange={handlePassword} />
                    </div>
                    <div className='div-button'>
                        <button className='button-submit' type='submit'>{isLogin?"Login":"Create Account"} </button>

                        <button
                            className='button-toggle'
                            type='button'
                            onClick={handleLogin}
                        >{isLogin? "Create new Account":"Login with axisting account"}</button>
                    </div>
                         
                </form>           
            </div>
            
            {status === "error" &&
                <Alert status='error'>
                    <AlertIcon />
                    Check your email or your password! 
                </Alert>                     
            } 
            {status === "longer" &&
                <Alert status='warning'>
                    <AlertIcon />
                    Yout password musb be 6 characters long at leas or this account already exist!
                </Alert>                     
            } 
            {status === "succes" &&
            <Alert status='success'>
                <AlertIcon />
                New account was created
                </Alert>                    
            } 
            {status === "loginSucces" &&
            <Alert status='success'>
                <AlertIcon />
                succesful Login!
                </Alert>                   
            } 


        </section>

        <style jsx>{`
        
            section{
                margin: 6rem auto;
                width: 95%;
                height: 70%;
                max-height: 25rem;
                max-width: 25rem;
                border-radius: 6px;
                background-color: #9AE6B4;
                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
                padding: 1rem;
                text-align: center;
            }
            h1 {
                font-size: 3rem
            }

            .div-email-password{
                display:flex;
                flex-direction:column;
                margin:1rem
            }

            label {
                font-size: 1.5rem;
                color: #22543D;
            }

            input{
                font: inherit;
                background-color: #f1e1fc;
                color: #38015c;
                border-radius: 4px;
                border: 1px solid white;
                width: 100%;
                text-align: left;
                padding: 0.25rem;
            }

            .div-button{
                display: flex;
                flex-direction: column
            }

            .button-submit{
                cursor: pointer;
                font: inherit;
                color: white;
                background-color: #38A169;
                border: 1px solid #38A169;
                border-radius: 4px;
                padding: 0.3rem 2rem;
            }

            .button-submit:hover {
                background-color: #2F855A;
                border-color: #2F855A;
                }

            .button-toggle {
                margin-top: 1rem;
                background-color: transparent;
                color: #38A169;
                border: none;
                padding: 0.15rem 1.5rem;
                }

            .button-toggle:hover {
                background-color: transparent;
                color: #68D391;
                }

        
        `}</style>
        </>
    );
};

export default AuthForm;