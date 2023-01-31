/* @refresh reload */
import { Component, createSignal, For } from 'solid-js'
import { createStore } from 'solid-js/store'
import { render } from 'solid-js/web'

import {
  Box,
  Button,
  Loader,
  wishColors,
  WishProvider,
  wishSizes,
  WishThemeOverrides,
} from '../src'

const [theme, setTheme] = createStore<WishThemeOverrides>({
  colorMode: 'dark',
  primaryColor: 'blue',
})
const toggleColorMode = () => setTheme('colorMode', (pv) => (pv === 'dark' ? 'light' : 'dark'))

const App: Component = () => {
  const [state, setState] = createSignal(false)
  const toggleState = () => setState(!state())

  return (
    <>
      <Button uppercase onClick={toggleColorMode}>
        toggle
      </Button>
      <Button loading>toggle</Button>

      <Loader width="150px" />

      <select
        value={theme.primaryColor}
        onChange={(e) => setTheme('primaryColor', e.currentTarget.value as any)}
      >
        <For each={wishColors}>{(cs) => <option value={cs}>{cs}</option>}</For>
      </select>

      <Box padding="$xl">
        <Button.Group>
          <Button variant="default">Button</Button>
          <Button variant="default">Button</Button>
          <Button variant="default">Button</Button>
          <Button variant="default">Button</Button>
        </Button.Group>
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
