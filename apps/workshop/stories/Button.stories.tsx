import { For } from 'solid-js'

import { action } from '@storybook/addon-actions'

import { Box } from '~core/Box'
import { Button } from '~core/Button'
import { wishButtons, wishColors, wishSizes } from '~core/constants'
import { vars } from '~core/theme'

import type { Meta, StoryObj } from '../types'
type Story = StoryObj<typeof Button>

const BUTTON_LOADER_POSITIONS = ['left', 'right', 'center'] as const
const sharedStyles = {
  padding: '10px 20px',
  border: `1px solid ${vars.colors.gray6}`,
}

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <Box padding="$xl">
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: wishButtons,
    },
    colorScheme: {
      control: { type: 'select' },
      options: wishColors,
    },
    size: {
      control: { type: 'inline-radio' },
      options: wishSizes,
    },
    radius: {
      control: { type: 'inline-radio' },
      options: wishSizes,
    },
    loaderPosition: {
      control: { type: 'inline-radio' },
      options: ['left', 'right', 'center'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    compact: {
      control: { type: 'boolean' },
    },
    uppercase: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'filled',
    colorScheme: 'blue',
    size: 'sm',
    radius: 'sm',
    loaderPosition: 'left',
    disabled: false,
    loading: false,
    fullWidth: false,
    compact: false,
    uppercase: false,
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export const Playground: Story = {
  render: (args) => <Button onPress={action('clicked')} {...args} />,
}

export const States: Story = {
  render: (args) => {
    const states = [
      {
        name: 'enabled',
        props: undefined,
      },
      {
        name: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        name: 'loading',
        props: {
          loading: true,
        },
      },
    ]

    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>&nbsp;</th>

            <For each={wishButtons}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
          </tr>
        </thead>
        <tbody>
          <For each={states}>
            {(state) => (
              <tr>
                <td style={sharedStyles}>{state.name}</td>

                <For each={wishButtons}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Button {...args} variant={variant} {...state.props}>
                          {variant}
                        </Button>
                      </Box>
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    )
  },
  args: {
    disabled: undefined,
    loading: undefined,
  },
}

export const StatesInsideFieldsetDisabled: Story = {
  render: (args, ctx) => {
    return <fieldset disabled>{States.render?.(args, ctx)}</fieldset>
  },
  args: {
    disabled: undefined,
    loading: undefined,
  },
}

export const ColorSchemes: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>&nbsp;</th>

            <For each={wishButtons}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
          </tr>
        </thead>
        <tbody>
          <For each={wishColors}>
            {(colorScheme) => (
              <tr>
                <td style={sharedStyles}>{colorScheme}</td>

                <For each={wishButtons}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Button {...args} variant={variant} colorScheme={colorScheme}>
                          {variant}
                        </Button>
                      </Box>
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    )
  },
  args: {
    variant: undefined,
    colorScheme: undefined,
  },
}

export const Sizes: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>&nbsp;</th>

            <For each={wishButtons}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
          </tr>
        </thead>
        <tbody>
          <For each={wishSizes}>
            {(size) => (
              <tr>
                <td style={sharedStyles}>{size}</td>

                <For each={wishButtons}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Button {...args} variant={variant} size={size}>
                          {variant}
                        </Button>
                      </Box>
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    )
  },
  args: {
    variant: undefined,
    size: undefined,
  },
}

export const Radiuses: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>&nbsp;</th>

            <For each={wishButtons}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
          </tr>
        </thead>
        <tbody>
          <For each={wishSizes}>
            {(radius) => (
              <tr>
                <td style={sharedStyles}>{radius}</td>

                <For each={wishButtons}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Button {...args} variant={variant} radius={radius}>
                          {variant}
                        </Button>
                      </Box>
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    )
  },
  args: {
    variant: undefined,
    radius: undefined,
  },
}

export const Groups: Story = {
  render: (args) => {
    return (
      <>
        <Button.Group>
          <Button {...args}>First</Button>
          <Button {...args}>Second</Button>
          <Button {...args}>Third</Button>
          <Button {...args}>Forth</Button>
          <Button {...args}>Last</Button>
        </Button.Group>
        <Button.Group mt="$xl" orientation="vertical">
          <Button {...args}>First</Button>
          <Button {...args}>Second</Button>
          <Button {...args}>Third</Button>
          <Button {...args}>Forth</Button>
          <Button {...args}>Last</Button>
        </Button.Group>
      </>
    )
  },
  args: {
    variant: 'default',
  },
}

export const LoaderPositions: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>&nbsp;</th>

            <For each={wishButtons}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
          </tr>
        </thead>
        <tbody>
          <For each={BUTTON_LOADER_POSITIONS}>
            {(loaderPosition) => (
              <tr>
                <td style={sharedStyles}>{loaderPosition}</td>

                <For each={wishButtons}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Button {...args} loading variant={variant} loaderPosition={loaderPosition}>
                          {variant}
                        </Button>
                      </Box>
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    )
  },
  args: {
    loading: true,
  },
}

export const AsLink: Story = {
  render: (args) => {
    return (
      <Button {...args} as="a" href="https://google.com" target="_blank">
        Link
      </Button>
    )
  },
  args: {
    variant: 'light',
    colorScheme: 'sky',
  },
}
