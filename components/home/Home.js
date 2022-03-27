import Head from 'next/head'
import Card from '../Card'
import Map from '../Map'



export default function Home() {

  return (
     <>
    <Head>
      <title>Home</title>
    </Head> 
      <section className='section_1'>
      <div className='div__map'>
        <Map />
      </div>
      <div className='div__presentation'>
        <h1>Welcome to a Trip around Argentina 🤩</h1>
        <p>Chose the province and take a look to the most beautiful places that this site offers. </p>
      </div>
      </section> 
      <section  className='sec_footer'>
        <div className='div_footer'>
          <Card />
        </div>
      </section>
   
    <style jsx>{`

    .section_1{
       display:flex;
       justify-content:center;
       align-items:center;
       flex-direction:column;
       margin-left:1rem;
       margin-right:1rem;
       margin-bottom:2rem  
    }

    h1{
      font-size:1.8rem;
      font-family:font-family: 'Lobster', cursive;
      margin-left:2rem
    }

    p{
      margin-left:1rem
    }

    .div__map{
        width:70%;
        height:auto;
        margin-top:2rem;
    
    }

    .div__presentation{
      margin-top:1.8rem;
    }

    .div_footer{
      display:flex;
      flex-direction:row;
      align-items:space-between;
      justify-content:center;
    }

    .sec_footer{
      display:flex;
      align-items:center;
      justify-content:center
    }

    @media (min-width: 500px){

    h1{
    font-size:2.5rem;
    font-weight:800;
    margin-left:2rem;
    margin-bottom:2rem;
    font-family:font-family: 'Lobster', cursive;
    }

    p{
      font-size: 1.5rem;
      font-weight:400;
      align-self:center;
      margin-bottom:2rem;
      margin-left:2rem
    }

                
    }

    `}</style>
    </>
  )
}
