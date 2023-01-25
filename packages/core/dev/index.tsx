/* @refresh reload */
import { Component, createSignal, For } from 'solid-js'
import { createStore } from 'solid-js/store'
import { render } from 'solid-js/web'

import {
  Box,
  Button,
  ColorMode,
  Loader,
  UnstyledButton,
  WishColor,
  wishColors,
  WishProvider,
  WishThemeOverrides,
} from '../src'

const [theme, setTheme] = createStore<WishThemeOverrides>({
  colorMode: 'dark',
  primaryColor: 'blue',
  defaultLoader: 'bars',
})
const toggleColorMode = () => setTheme('colorMode', (pv) => (pv === 'dark' ? 'light' : 'dark'))

const App: Component = () => {
  const [count, setCount] = createSignal(0)
  const increment = () => setCount(count() + 1)

  return (
    <>
      <Button onClick={toggleColorMode}>toggle</Button>

      <select
        value={theme.primaryColor}
        onChange={(e) => setTheme('primaryColor', e.currentTarget.value as any)}
      >
        <For each={wishColors}>{(cs) => <option value={cs}>{cs}</option>}</For>
      </select>

      <Loader />

      <Box mt={`${count()}px`} backgroundColor="$red10">
        <h4>Counter component</h4>
        <p>it's very important...</p>
        <UnstyledButton onClick={increment}>{count()}</UnstyledButton>
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
