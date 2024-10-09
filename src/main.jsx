import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import App from './App.jsx'

const theme = extendTheme({
  fonts: {
    heading: `'Inter Variable'`,
    body: `'Inter Variable'`,
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='light' />
      < App />
    </ChakraProvider>
  </StrictMode>,
)
