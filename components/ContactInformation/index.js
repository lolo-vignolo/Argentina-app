import { Image } from '@chakra-ui/react';
import React from 'react';

const index = () => {
    return (
        <>
        <section>
            <main className='main__picture'>
                <div>   
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <h1> Lorenzo Vignolo</h1>
                    <h2>Web Developer</h2>
                </div>
                <div>
                    <ul className='ul_lenguages'>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Firebase</li>
                        <li>Style components</li>
                        <li>English C1</li>
                        <li> and more 😉</li>
                    </ul>
                </div>
                
            </main>
            <main className='main__courses'>
                <header>
                    Programming Education
                </header>
                <div className='div__certificates'>
                    <ul className='certificates'>
                        <h1> Finished:</h1>
                        <li><a href="https://www.udemy.com/certificate/UC-0a7ac204-3c6d-47db-95cf-8ac556ee3501/">🏅 Next.js crea tu tineda online completa </a></li>
                        <li><a href="https://www.udemy.com/certificate/UC-ceda6ccc-8d31-457c-bda7-9e7cdeef7859/">🥈React de cero a experto</a></li>
                        <li><a heref="https://www.udemy.com/certificate/UC-081f9728-4c91-42b0-a695-81bbf09cd7e9/">🥇 The complete Python Pro Bootcamp, by Angela Yu.</a></li>
                        <li><a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-0dda7f82-9f7f-4092-907c-1b722cc05fcb.pdf">🥉Become a Full-Stack Web Developer with just One course.HTML, CSS, JavaScript, Node, React, MongoDB.</a></li>
                        <br/>
                        <h1> In Progress:</h1>
                        <li><a href="https://fullstackopen.com/es/">📘 FULL STACK open source Helsinki University </a></li>
                        <li><a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/25146674#overview">📗 Next.js & React - The Complete Guide</a></li>
                        <li><a href="https://www.udemy.com/certificate/UC-0a7ac204-3c6d-47db-95cf-8ac556ee3501/">📒 Modern React with Redux </a></li>
                    </ul>
                    <br />
                    <div>

                    <p>I am Lorenzo Vignolo a frontend developer, thought I have done my university studys in Business Administration 
                    during the last two year I have bees developing my skills in the awesome programmming world. Environment that allow us 
                    develop our skills and keep us learning the new technologies, something that I find incredible.  </p>   
                    </div>
                </div>

            </main>
            
        </section>

         <style jsx>{`

            section{
                display:flex;
                flex-direction:row;
                align-items:flex-start;
                background-color: white;
                height:70vh
            }

            .main__picture{
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content: flex-start;
                width:50vw;
                background-color:#C6F6D5;
                height:100%;
                padding-top:2rem
            }
            .ul_lenguages{
                font-weight:500;
            }

            h1{
                margin-top:1.5rem;
                font-family: Lobster, cursive;
                font-weight: 900;
            }
            h2{
                margin-top:1.5rem;
                font-family: Lobster, cursive;
                font-weight: 800;
            }
            .certificates{
                color: #276749;
            }
            .main__courses{
                display:flex;
                flex-direction:column;
                margin-left:2rem 
            }

            .div__certificates{
                display:flex;
                flex-direction:column;
                width:90%
            }

            header{
                font-size: 2rem;
                font-family: Lobster, cursive;
                font-weight: 900;
                margin-top:2rem
            }
            p{
                padding-top: 4rem;
                font-weight:500;
                font-family: Lobster, cursive;
            }


         `}</style>  

        </>
    );
};

export default index;