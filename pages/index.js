import Head from 'next/head'
import Card from '../components/Card'
import Map from '../components/Map'


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

    `}</style>
    </>
  )
}

