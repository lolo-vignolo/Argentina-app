import { ChakraProvider } from '@chakra-ui/react'

import AppLayout from '../components/AppLayout'
import NavBar from '../components/NavBar'


function MyApp({ Component, pageProps }) {


  return (
    <AppLayout>
  <ChakraProvider>
  <NavBar />
      <Component {...pageProps} />
  </ChakraProvider>
    </AppLayout>
  )
} 

export default MyApp
