import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Welcome = () => {
    return (
        <>
            <section>
                <div className='div-h1'>
                <h1>Welcome to Argentina 🚀</h1>
                    
                </div>
                <h2>Login to Start</h2>
            
                <button><Link href="/auth"><a>Login</a></Link></button>
            
            
                <img className='img-class' src ="/argentina.jpg" />
            
            </section>
            <style jsx>{`
            
                section {
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    align-items:center;
                    height:100%;
                    width:auto;
                    background:#1A202C
                }
                .div-h1{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:65%
                }

                h1{
                    font-size:2rem;
                    font-weight: 700;
                    color:white;
                    margin-left:1rem
                }

                h2{
                    color:#E2E8F0
                }

                button{
                    font-size:1.5rem;
                    font-weight: bold;
                    background-color:#B2F5EA;
                    margin: 0.5rem;
                    padding:3px 10px ;
                    border-radius: 5px
                }
                button:hover{
                    background-color:#81E6D9;
                }

                .img-class{
                    border-radius:15px;
                    weight: 200px;
                    height:350px;
                    border:solid;
                    border-color:white
                }
                
                @media (min-width: 500px){


                    .div-h1{
                    width:58%;
                    }

                    h1{
                    font-size:3.5rem;
                    font-weight: 700;
                    color:white;
                    }

                    h2{
                    font-size:2rem;
                    
                    }

                    button{
                    font-size:2.5rem;
                    margin-top: -2rem;
                    padding:3px 10px ;
                    }

                    .img-class{
                    border-radius:15px;
                    weight: 350px;
                    height:500px;
                    border:solid;
                    border-color:white
                    }


                
                }



            `}</style>
        </>
    );
};

export default Welcome;