import { Component, createSignal } from 'solid-js'
import { Box, ColorMode, WishProvider } from '@wish-ui/core'

export const App: Component = () => {
  const [colorMode, setColorMode] = createSignal<ColorMode>('light')
  const toggleColorMode = () => setColorMode(colorMode() === 'dark' ? 'light' : 'dark')

  const [count, setCount] = createSignal(0)
  const increment = () => setCount(count() + 1)

  return (
    <WishProvider theme={{ colorMode: colorMode() }}>
      <button onClick={toggleColorMode}>toggle</button>

      <Box pt={`${count()}px`} backgroundColor="$red10">
        <h4>Counter component</h4>
        <p>it's very important...</p>
        <button onClick={increment}>{count()}</button>
      </Box>
    </WishProvider>
  )
}
