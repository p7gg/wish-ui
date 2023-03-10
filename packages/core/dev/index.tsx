/* @refresh reload */
import { Component, createSignal, For, Show } from 'solid-js'
import { createStore } from 'solid-js/store'
import { render } from 'solid-js/web'

import {
  ActionIcon,
  Box,
  Button,
  Checkbox,
  Loader,
  Switch,
  Text,
  TextField,
  Transition,
  wishColors,
  WishProvider,
  WishThemeOverrides,
} from '../src'

const [theme, setTheme] = createStore<WishThemeOverrides>({
  colorMode: 'dark',
  primaryColor: 'blue',
})
const toggleColorMode = () => setTheme('colorMode', (pv) => (pv === 'dark' ? 'light' : 'dark'))

const App: Component = () => {
  const [state, setState] = createSignal(false)

  return (
    <>
      <select
        value={theme.primaryColor}
        onChange={(e) => setTheme('primaryColor', e.currentTarget.value as any)}
      >
        <For each={wishColors}>{(cs) => <option value={cs}>{cs}</option>}</For>
      </select>

      <Transition name="w-fade">
        <Show when={state()}>
          <Button uppercase onClick={toggleColorMode}>
            toggle
          </Button>
        </Show>
      </Transition>

      <Button loading>toggle</Button>

      <Box p="$xl">
        <Switch disabled label="disabled label" />
        <Switch
          defaultIsChecked
          label="this is a label"
          description="descr..."
          checked={state()}
          onCheckedChange={setState}
        />
      </Box>

      <Box p="$xl">
        <TextField
          placeholder="default"
          label="label"
          description="description"
          error="error"
          icon={<span>a</span>}
          rightSection={<Loader size="xs" />}
        />
        <TextField variant="filled" placeholder="filled" label="label" description="description" />
      </Box>

      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aut facere similique? Rerum
        aspernatur quasi, sunt aut officiis ut deserunt perferendis ex ducimus nam, dignissimos
        tempora eveniet quidem dolores vel illum necessitatibus ad inventore id! Impedit fugit
        facere doloribus animi corrupti sequi consequatur praesentium? Incidunt aut provident
        dolorum beatae maxime libero praesentium ratione eos omnis quae alias labore ut illo
        cupiditate, magni suscipit. Cum doloremque eaque exercitationem quidem velit expedita
        molestias iste odit ab aliquid, quae quas quisquam! Culpa, in. Corporis sint exercitationem,
        quibusdam aut illo quas ratione reprehenderit quaerat, facere iusto repudiandae nisi sequi
        ipsam, modi delectus. Asperiores, architecto?
      </Text>

      <Box display="flex" flexDirection="column" gap="$xl" p="$md">
        <Checkbox indeterminate defaultIsChecked label="label" description="description" />
        <Checkbox label="label" labelPosition="left" description="description" error="error" />
      </Box>

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
