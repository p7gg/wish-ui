/* @refresh reload */
import { Component, createSignal, For } from 'solid-js'
import { createStore } from 'solid-js/store'
import { render } from 'solid-js/web'

import { Box, Button, wishColors, WishProvider, WishThemeOverrides } from '../src'

const [theme, setTheme] = createStore<WishThemeOverrides>({
  colorMode: 'dark',
  primaryColor: 'blue',
  defaultLoader: 'bars',
})
const toggleColorMode = () => setTheme('colorMode', (pv) => (pv === 'dark' ? 'light' : 'dark'))

const App: Component = () => {
  const [uppercase, setUppercase] = createSignal(false)
  const toggle = () => setUppercase(!uppercase())

  return (
    <>
      <Button onClick={toggleColorMode}>toggle</Button>

      <select
        value={theme.primaryColor}
        onChange={(e) => setTheme('primaryColor', e.currentTarget.value as any)}
      >
        <For each={wishColors}>{(cs) => <option value={cs}>{cs}</option>}</For>
      </select>

      <Box p="$xl">
        <Button uppercase={uppercase()} onPress={toggle}>
          uppercase
        </Button>
      </Box>
    </>
  )
}

render(() => {
  return (
    <WishProvider withGlobalStyles theme={theme}>
      <App />
    </WishProvider>
  )
}, document.getElementById('root')!)
