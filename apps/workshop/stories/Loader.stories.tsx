import { For } from 'solid-js'

import { Box } from '~core/Box'
import { loaderVariants, wishColors, wishSizes } from '~core/constants'
import { Loader } from '~core/Loader'
import { vars } from '~core/theme'

import type { Meta, StoryObj } from '../types'
type Story = StoryObj<typeof Loader>

const sharedStyles = {
  padding: '10px 20px',
  border: `1px solid ${vars.colors.gray6}`,
}

export default {
  title: 'Loader',
  component: Loader,
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
      options: loaderVariants,
    },
    colorScheme: {
      control: { type: 'select' },
      options: wishColors,
    },
    size: {
      control: { type: 'inline-radio' },
      options: wishSizes,
    },
  },
  args: {
    variant: 'oval',
    colorScheme: 'blue',
    size: 'md',
  },
} satisfies Meta<typeof Loader>

export const Playground: Story = {
  render: (args) => <Loader {...args} />,
}

export const ColorSchemes: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>&nbsp;</th>

            <For each={loaderVariants}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
          </tr>
        </thead>
        <tbody>
          <For each={wishColors}>
            {(colorScheme) => (
              <tr>
                <td style={sharedStyles}>{colorScheme}</td>

                <For each={loaderVariants}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Loader {...args} variant={variant} colorScheme={colorScheme} />
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
    colorScheme: undefined,
    variant: undefined,
  },
}

export const Sizes: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>&nbsp;</th>

            <For each={loaderVariants}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
          </tr>
        </thead>
        <tbody>
          <For each={wishSizes}>
            {(size) => (
              <tr>
                <td style={sharedStyles}>{size}</td>

                <For each={loaderVariants}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Loader {...args} variant={variant} size={size} />
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
