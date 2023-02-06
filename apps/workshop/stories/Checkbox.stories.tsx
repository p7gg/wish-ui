import { For } from 'solid-js'

import { action } from '@storybook/addon-actions'

import { Box } from '~core/Box'
import { Checkbox } from '~core/Checkbox'
import { wishColors, wishSizes } from '~core/constants'
import { vars } from '~core/theme'

import type { Meta, StoryObj } from '../types'
type Story = StoryObj<typeof Checkbox>

const sharedStyles = {
  padding: '10px 20px',
  border: `1px solid ${vars.colors.gray6}`,
}

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <Box padding="$xl">
        <Story />
      </Box>
    ),
  ],
  argTypes: {
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
    labelPosition: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'text' },
    },
    validationState: {
      control: { type: 'inline-radio' },
      options: ['valid', 'invalid'],
    },
  },
  args: {
    colorScheme: 'blue',
    size: 'sm',
    radius: 'sm',
    labelPosition: 'left',
    validationState: 'valid',
    disabled: false,
    indeterminate: false,
    label: '',
    description: '',
    error: '',
  },
} satisfies Meta<typeof Checkbox>

export const Playground: Story = {
  render: (args) => <Checkbox onCheckedChange={action('clicked')} {...args} />,
  args: {
    label: 'Label',
  },
}

export const ColorSchemes: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>ColorScheme</th>
            <th style={sharedStyles}>States</th>
          </tr>
        </thead>
        <tbody>
          <For each={wishColors}>
            {(colorScheme) => (
              <tr>
                <td style={sharedStyles}>{colorScheme}</td>

                <td style={sharedStyles}>
                  <Box display="flex" alignItems="center" justifyContent="center" gap="$md">
                    <Checkbox {...args} defaultIsChecked colorScheme={colorScheme} />
                    <Checkbox {...args} defaultIsChecked indeterminate colorScheme={colorScheme} />
                  </Box>
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    )
  },
  args: {
    colorScheme: undefined,
  },
}

export const Sizes: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>Sizes</th>
            <th style={sharedStyles}>States</th>
          </tr>
        </thead>
        <tbody>
          <For each={wishSizes}>
            {(size) => (
              <tr>
                <td style={sharedStyles}>{size}</td>

                <td style={sharedStyles}>
                  <Box display="flex" alignItems="center" justifyContent="center" gap="$md">
                    <Checkbox {...args} defaultIsChecked size={size} />
                    <Checkbox {...args} defaultIsChecked indeterminate size={size} />
                  </Box>
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    )
  },
  args: {
    size: undefined,
  },
}

export const Radiuses: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>Radiuses</th>
            <th style={sharedStyles}>States</th>
          </tr>
        </thead>
        <tbody>
          <For each={wishSizes}>
            {(radius) => (
              <tr>
                <td style={sharedStyles}>{radius}</td>

                <td style={sharedStyles}>
                  <Box display="flex" alignItems="center" justifyContent="center" gap="$md">
                    <Checkbox {...args} defaultIsChecked radius={radius} />
                    <Checkbox {...args} defaultIsChecked indeterminate radius={radius} />
                  </Box>
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    )
  },
  args: {
    radius: undefined,
  },
}

export const LabelPositions: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>Label Positions</th>
            <th style={sharedStyles}>States</th>
          </tr>
        </thead>
        <tbody>
          <For each={['left', 'right'] as const}>
            {(labelPosition) => (
              <tr>
                <td style={sharedStyles}>{labelPosition}</td>

                <td style={sharedStyles}>
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <Checkbox
                      {...args}
                      labelPosition={labelPosition}
                      label={`Hello from the ${labelPosition}`}
                    />
                  </Box>
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    )
  },
  args: {
    labelPosition: undefined,
  },
}
