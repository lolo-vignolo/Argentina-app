import { Image } from '@chakra-ui/react';
import React from 'react';


const index = () => {

    const img1 = "site/js.png"
    const img2 = "site/next.png"
    const img3 = "site/ts.png"
    const img4 = "site/node.png"
    const img5 = "site/react.png"
    const img6 = "site/firebase.png"
    const img7 = "site/html.png"
    const img8 = "site/css.png"
    console.log(img1);
    
    return (
        <>
        <section>
            <div className='main__picture'>
                <div>   
                    <Image
                        borderRadius='full'
                        boxSize='130px'
                        src='Lorenzo.jpg'
                        alt='Dan Abramov'
                    />
                    <h1> Lorenzo Vignolo</h1>
                    <h2>Web Developer</h2>
                </div>
                <div className='logos'>
                    <div className='logo-column'>
                    <Image src={img1} alt="img" width = {30} height = {30} ml={1} mr={1} />
                    <Image src={img2} alt="img" width = {30} height = {30} ml={1} mr={1} />
                    <Image src={img3} alt="img" width = {30} height = {30} ml={1} mr={1} />
                    <Image src={img7} alt="img" width = {30} height = {30} ml={1} mr={1} />
                </div> 
                <div className='logo-column'>    
                    <Image src={img4} alt="img" width = {30} height = {30} ml={1} mr={1} />
                    <Image src={img5} alt="img" width = {30} height = {30} ml={1} mr={1} />
                    <Image src={img6} alt="img" width = {30} height = {30} ml={1} mr={1} />
                    <Image src={img8} alt="img" width = {30} height = {30} ml={1} mr={1}/>
                </div>
                  
                </div>
                
            </div>
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
                        <li><a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/25146674#overview">🥇 Next.js & React - The Complete Guide</a></li>
                        <br/>
                        <h1> In Progress:</h1>
                        <li><a href="https://fullstackopen.com/es/">📘 FULL STACK open source Helsinki University </a></li>
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
                flex-direction:column;
                align-items:flex-start;
                background-color: white;   
            }

            .main__picture{
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content: center;
                background-color:#C6F6D5;
                padding-top:2rem;
                width:100%
               
            }

            .logos{
                display: flex;
                justify-content:center;
            }

            .logo-column{
                display: flex;
                justify-content:center;
                align-items:space-between;
                flex-direction:row;
                margin-bottom:1rem; 
                margin-top:1rem; 
            
            }

            h1{
                margin-top:1.5rem;
                font-family:  "Lucida Console", Courier, monospace;
                font-weight: 900;
            }
            h2{
                margin-top:0.5rem;
                font-family:  "Lucida Console", Courier, monospace;
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
                font-family: "Lucida Console", Courier, monospace;
                font-weight: 900;
                margin-top:2rem
            }
            p{
                padding-top: 2rem;
                font-weight:500;
                font-family: "Lucida Console", Courier, monospace;
                margin-bottom:2rem
            }


         `}</style>  

        </>
    );
};

export default index;