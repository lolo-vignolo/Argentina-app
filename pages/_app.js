import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

import AppLayout from '../components/AppLayout'
import NavBar from '../components/NavBar'


function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {

  return (
    <SessionProvider session={session}>
      <AppLayout>
        <ChakraProvider>
            <NavBar />
            <Component {...pageProps} />
        </ChakraProvider>
      </AppLayout>
    </SessionProvider>
  )
} 

export default MyApp
