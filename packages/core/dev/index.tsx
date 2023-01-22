/* @refresh reload */
import { Component, createSignal } from 'solid-js'
import { render } from 'solid-js/web'

import { Box, ColorMode, WishProvider } from '../src'

const [colorMode, setColorMode] = createSignal<ColorMode>('light')
const toggleColorMode = () => setColorMode((prev) => (prev === 'dark' ? 'light' : 'dark'))

const App: Component = () => {
  const [count, setCount] = createSignal(0)
  const increment = () => setCount(count() + 1)

  return (
    <>
      <button onClick={toggleColorMode}>toggle</button>
      <Box mt={`${count()}px`} backgroundColor="$red10">
        <h4>Counter component</h4>
        <p>it's very important...</p>
        <button onClick={increment}>{count()}</button>
      </Box>
    </>
  )
}

render(() => {
  return (
    <WishProvider theme={{ colorMode: colorMode() }}>
      <App />
    </WishProvider>
  )
}, document.getElementById('root')!)
