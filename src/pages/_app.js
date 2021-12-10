import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import theme from '../theme'
import { Container } from '../components/Container';
import { Main } from '../components/Main'
import { Hero } from '../components/Hero';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Navbar />
        <Container height="100vh" >
          <Main>
            <Component {...pageProps} />
          </Main>
        </Container>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
