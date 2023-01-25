/* @refresh reload */
import { Component, createSignal } from 'solid-js'
import { render } from 'solid-js/web'

import { Box, ColorMode, UnstyledButton, WishProvider } from '../src'

const [colorMode, setColorMode] = createSignal<ColorMode>('dark')
const toggleColorMode = () => setColorMode((prev) => (prev === 'dark' ? 'light' : 'dark'))

const App: Component = () => {
  const [count, setCount] = createSignal(0)
  const increment = () => setCount(count() + 1)

  return (
    <>
      <button onClick={toggleColorMode}>toggle</button>

      <Box
        mt={`${count()}px`}
        backgroundColor="$red10"
        display={{ mobile: 'flex', desktop: 'grid' }}
      >
        <h4>Counter component</h4>
        <p>it's very important...</p>
        <UnstyledButton onClick={increment}>{count()}</UnstyledButton>
      </Box>
    </>
  )
}

render(() => {
  return (
    <WishProvider withGlobalStyles theme={{ colorMode: colorMode() }}>
      <App />
    </WishProvider>
  )
}, document.getElementById('root')!)
