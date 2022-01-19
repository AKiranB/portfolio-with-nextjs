import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Navbar from '../components/nav/Navbar'
import theme from '../theme'
import { Container } from '../components/chakra/Container';
import { Main } from '../components/chakra/Main'
import '../components/hero/hero.css'
import '../components/nav/nav.css'
import '../components/projects/projectcard.css'
import '../components/contact/contact.css'
import '../components/about/about.css'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import './index.css'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Navbar />
        <Container height="auto" >
          <Main>
            <Component {...pageProps} />
          </Main>
        </Container>
      </ColorModeProvider>
    </ChakraProvider>
  )
};

export default MyApp
