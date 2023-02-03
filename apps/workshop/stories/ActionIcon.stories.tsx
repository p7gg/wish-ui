import { For } from 'solid-js'

import { action } from '@storybook/addon-actions'

import { ExternalLink, Settings2 } from 'lucide-solid'

import { ActionIcon } from '~core/ActionIcon'
import { Box } from '~core/Box'
import { actionIconVariants, wishColors, wishSizes } from '~core/constants'
import { vars } from '~core/theme'

import type { Meta, StoryObj } from '../types'

type Story = StoryObj<typeof ActionIcon>

const sharedStyles = {
  padding: '10px 20px',
  border: `1px solid ${vars.colors.gray6}`,
}

export default {
  title: 'ActionIcon',
  component: ActionIcon,
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
      options: actionIconVariants,
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
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'subtle',
    colorScheme: 'gray',
    size: 'md',
    radius: 'sm',
    disabled: false,
    loading: false,
  },
} satisfies Meta<typeof ActionIcon>

export const Playground: Story = {
  render: (args) => (
    <ActionIcon onPress={action('clicked')} {...args}>
      <Settings2 size={15} />
    </ActionIcon>
  ),
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

            <For each={actionIconVariants}>
              {(variant) => <th style={sharedStyles}>{variant}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={states}>
            {(state) => (
              <tr>
                <td style={sharedStyles}>{state.name}</td>

                <For each={actionIconVariants}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <ActionIcon {...args} variant={variant} {...state.props}>
                          <Settings2 size={15} />
                        </ActionIcon>
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

            <For each={actionIconVariants}>
              {(variant) => <th style={sharedStyles}>{variant}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={wishColors}>
            {(colorScheme) => (
              <tr>
                <td style={sharedStyles}>{colorScheme}</td>

                <For each={actionIconVariants}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <ActionIcon {...args} variant={variant} colorScheme={colorScheme}>
                          <Settings2 size={15} />
                        </ActionIcon>
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

            <For each={actionIconVariants}>
              {(variant) => <th style={sharedStyles}>{variant}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={wishSizes}>
            {(size) => (
              <tr>
                <td style={sharedStyles}>{size}</td>

                <For each={actionIconVariants}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <ActionIcon {...args} variant={variant} size={size}>
                          <Settings2 size={15} />
                        </ActionIcon>
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

            <For each={actionIconVariants}>
              {(variant) => <th style={sharedStyles}>{variant}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={wishSizes}>
            {(radius) => (
              <tr>
                <td style={sharedStyles}>{radius}</td>

                <For each={actionIconVariants}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <ActionIcon {...args} variant={variant} radius={radius}>
                          <Settings2 size={15} />
                        </ActionIcon>
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

export const AsLink: Story = {
  render: (args) => {
    return (
      <ActionIcon as="a" href="https://google.com" target="_blank" {...args}>
        <ExternalLink size={15} />
      </ActionIcon>
    )
  },
}
