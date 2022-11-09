import '../styles/globals.css'
import '../styles/font.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { AppWrapper } from '../context/UserContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppWrapper>
        <Navbar />
        <Component {...pageProps} />
      </AppWrapper>
    </ChakraProvider>
  )
}

export default MyApp
