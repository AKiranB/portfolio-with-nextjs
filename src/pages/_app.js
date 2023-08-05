import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../theme";
import { Container } from "../components/chakra/Container";
import { Main } from "../components/chakra/Main";
import "../components/hero/hero.css";
import "../components/nav/nav.css";
import "../components/projects/projectcard.css";
import "../components/contact/contact.css";
import "../components/about/about.css";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/roboto";
import "./index.css";
import Particles from "react-tsparticles";
import { theme as colors } from "../constants/colors";
import Navbar from "../components/nav/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Navbar />
        <Particles
          className="particles"
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#faf9ff",
                width: 5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 1,
              },
            },
            detectRetina: true,
          }}
        />

        <Container height="auto">
          <Main>
            <Component {...pageProps} />
          </Main>
        </Container>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
