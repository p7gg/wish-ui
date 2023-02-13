import { For } from 'solid-js'

import { AtSign } from 'lucide-solid'

import { Box } from '~core/Box'
import { textFieldVariants, wishColors, wishSizes } from '~core/constants'
import { Loader } from '~core/Loader'
import { TextField } from '~core/TextField'
import { vars } from '~core/theme'

import type { Meta, StoryObj } from '../types'

type Story = StoryObj<typeof TextField>

const sharedStyles = {
  padding: '10px 20px',
  border: `1px solid ${vars.colors.gray6}`,
}

export default {
  title: 'TextField',
  component: TextField,
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
    validationState: {
      control: { type: 'inline-radio' },
      options: ['valid', 'invalid'],
    },
    placeholder: {
      control: { type: 'text' },
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
  },
  args: {
    colorScheme: 'blue',
    size: 'sm',
    radius: 'sm',
    validationState: 'valid',
    label: 'Label',
    description: '',
    error: '',
  },
} satisfies Meta<typeof TextField>

export const Playground: Story = {
  render: (args) => (
    <>
      <TextField placeholder="default variant" {...args} />
      <TextField variant="filled" placeholder="filled variant" my="$lg" {...args} />
    </>
  ),
}

export const Sections: Story = {
  render: (args) => {
    const states = [
      {
        name: 'with icon',
        props: {
          icon: <AtSign size={14} />,
        },
      },
      {
        name: 'with right section',
        props: {
          rightSection: <Loader size="xs" />,
        },
      },
      {
        name: 'with both',
        props: {
          icon: <AtSign size={14} />,
          rightSection: <Loader size="xs" />,
        },
      },
    ]

    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>&nbsp;</th>

            <For each={textFieldVariants}>
              {(variant) => <th style={sharedStyles}>{variant}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={states}>
            {(state) => (
              <tr>
                <td style={sharedStyles}>{state.name}</td>

                <For each={textFieldVariants}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <TextField {...args} variant={variant} {...state.props} />
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
    placeholder: 'hello',
  },
}

export const Sizes: Story = {
  render: (args) => {
    return (
      <table style={{ 'border-collapse': 'collapse' }}>
        <thead>
          <tr>
            <th style={sharedStyles}>&nbsp;</th>

            <For each={textFieldVariants}>
              {(variant) => <th style={sharedStyles}>{variant}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={wishSizes}>
            {(size) => (
              <tr>
                <td style={sharedStyles}>{size}</td>

                <For each={textFieldVariants}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <TextField
                          placeholder={`${size} size...`}
                          {...args}
                          variant={variant}
                          size={size}
                        />
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

            <For each={textFieldVariants}>
              {(variant) => <th style={sharedStyles}>{variant}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={wishSizes}>
            {(radius) => (
              <tr>
                <td style={sharedStyles}>{radius}</td>

                <For each={textFieldVariants}>
                  {(variant) => (
                    <td style={sharedStyles}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <TextField
                          placeholder={`${radius} radius...`}
                          {...args}
                          variant={variant}
                          radius={radius}
                        />
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
