import { Flex, useColorMode } from '@chakra-ui/react'

export const Container = (props) => {
  const { colorMode } = useColorMode()
  const color = { light: 'black', dark: 'white' }

  return (
    <Flex

      direction="column"
      alignItems="center"
      bgGradient='linear(#020024 20%, #674ce0  50%, #020024 70%)'
      color={color[colorMode]}
      {...props}
    />
  )
}
