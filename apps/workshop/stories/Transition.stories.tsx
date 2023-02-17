import { createSignal, For, Match, Show, Switch } from 'solid-js'

import { Box } from '~core/Box'
import { Button } from '~core/Button'
import { wishTransitions } from '~core/constants'
import { Text } from '~core/Text'
import { vars } from '~core/theme'
import { Transition } from '~core/Transition'

import type { Meta, StoryObj } from '../types'

type Story = StoryObj<typeof Transition>

const sharedStyles = {
  padding: '10px 20px',
  border: `1px solid ${vars.colors.gray6}`,
}

const prefixedTransitionNames = wishTransitions.map((t) => `w-${t}`)

export default {
  title: 'Transition',
  component: Transition,
  decorators: [
    (Story) => (
      <Box padding="$xl">
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: prefixedTransitionNames,
    },
  },
  args: {
    name: 'w-fade',
  },
} satisfies Meta<typeof Transition>

export const Playground: Story = {
  render: (args) => {
    const [show, setShow] = createSignal(false)

    return (
      <>
        <Button onClick={() => setShow(!show())}>Toggle {args.name}</Button>

        <Transition {...args}>
          {show() && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding="$lg"
              my="$lg"
              bg="$blue3"
              fontWeight="bold"
            >
              hello
            </Box>
          )}
        </Transition>
      </>
    )
  },
}

export const Transitions: Story = {
  render: (args) => {
    const [show, setShow] = createSignal(false)

    return (
      <>
        <Button
          onClick={() => setShow(!show())}
          top="50%"
          right="20px"
          style={{ position: 'fixed', transform: 'translateY(-50%)' }}
        >
          Toggle transitions
        </Button>

        <table style={{ 'border-collapse': 'collapse' }}>
          <thead>
            <tr>
              <th style={sharedStyles}>&nbsp;</th>

              <th style={sharedStyles}>transitions</th>
            </tr>
          </thead>
          <tbody>
            <For each={prefixedTransitionNames}>
              {(name) => (
                <tr>
                  <td style={sharedStyles}>{name}</td>

                  <td style={{ ...sharedStyles, height: '65px', padding: '0' }}>
                    <Transition {...args} name={name}>
                      {show() && (
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          padding="$lg"
                          bg="$blue3"
                          fontWeight="bold"
                        >
                          hello
                        </Box>
                      )}
                    </Transition>
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </>
    )
  },
  args: {
    name: undefined,
  },
}

export const TransitionBetweenComponents: Story = {
  render: (args) => {
    const [docState, setDocState] = createSignal('saved')

    return (
      <>
        <Text>Click to cycle through states:</Text>

        <Box position="relative">
          <Transition {...args}>
            <Switch>
              <Match when={docState() === 'saved'}>
                <Button style={{ position: 'absolute' }} onClick={() => setDocState('edited')}>
                  Edit
                </Button>
              </Match>
              <Match when={docState() === 'edited'}>
                <Button
                  variant="light"
                  colorScheme="green"
                  style={{ position: 'absolute' }}
                  onClick={() => setDocState('editing')}
                >
                  Save
                </Button>
              </Match>
              <Match when={docState() === 'editing'}>
                <Button
                  variant="outline"
                  colorScheme="red"
                  style={{ position: 'absolute' }}
                  onClick={() => setDocState('saved')}
                >
                  Cancel
                </Button>
              </Match>
            </Switch>
          </Transition>
        </Box>
      </>
    )
  },
  args: {
    name: 'w-pop',
  },
}

export const JsTransition: Story = {
  name: 'JS Transition',
  render: (args) => {
    const [show, setShow] = createSignal(false)

    return (
      <>
        <Button onClick={() => setShow(!show())}>Toggle transition</Button>

        <Transition {...args} name={undefined}>
          <Show when={show()}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding="$lg"
              my="$lg"
              bg="$blue3"
              fontWeight="bold"
            >
              hello
            </Box>
          </Show>
        </Transition>
      </>
    )
  },
  args: {
    name: undefined,
    onEnter(el, done) {
      const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 600,
      })

      a.finished.then(done)
    },
    onExit(el, done) {
      const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 600,
      })

      a.finished.then(done)
    },
  },
}
