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
      <Button onClick={toggleColorMode}>toggle</Button>
      <Button loading>toggle</Button>

      <Loader width="150px" />

      <select
        value={theme.primaryColor}
        onChange={(e) => setTheme('primaryColor', e.currentTarget.value as any)}
      >
        <For each={wishColors}>{(cs) => <option value={cs}>{cs}</option>}</For>
      </select>

      <Box p="$xl">
        Normal
        <For each={wishSizes}>
          {(size) => (
            <Button variant="subtle" size={size}>
              uppercase
            </Button>
          )}
        </For>
      </Box>
      <Box p="$xl">
        Compact
        <For each={wishSizes}>
          {(size) => (
            <Button variant="subtle" compact size={size}>
              uppercase
            </Button>
          )}
        </For>
      </Box>
      <Box p="$xl">
        Normal with left icon
        <For each={wishSizes}>
          {(size) => (
            <Button variant="subtle" size={size} leftIcon={<div />}>
              uppercase
            </Button>
          )}
        </For>
      </Box>
      <Box p="$xl">
        Normal with right icon
        <For each={wishSizes}>
          {(size) => (
            <Button variant="subtle" size={size} rightIcon={<div />}>
              uppercase
            </Button>
          )}
        </For>
      </Box>
      <Box p="$xl">
        Compact with left icon
        <For each={wishSizes}>
          {(size) => (
            <Button variant="subtle" compact size={size} leftIcon={<div />}>
              uppercase
            </Button>
          )}
        </For>
      </Box>
      <Box p="$xl">
        Compact with right icon
        <For each={wishSizes}>
          {(size) => (
            <Button variant="subtle" compact size={size} rightIcon={<div />}>
              uppercase
            </Button>
          )}
        </For>
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
