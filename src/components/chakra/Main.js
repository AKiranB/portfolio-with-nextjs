import { Stack } from '@chakra-ui/react'

// eslint-disable-next-line react/display-name
export const Main = (props) => (
  <Stack
    bgGradient='linear(#020024 20%, #bdbdbd 50%, #020024 70%)'
    spacing="0.5rem"
    width="100%"
    height='auto'
    mt="0vh"
    px="1rem"
    {...props}
  />
)
