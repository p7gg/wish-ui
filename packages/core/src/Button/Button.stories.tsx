import { For } from 'solid-js'

import { action } from '@storybook/addon-actions'

import { Box } from '../Box'
import { wishColors, wishSizes } from '../constants'
import { vars } from '../theme'

import { Button } from './Button'

const BUTTON_VARIANTS = ['filled', 'subtle', 'outline', 'light', 'default'] as const
const BUTTON_LOADER_POSITIONS = ['left', 'right', 'center'] as const
const sharedStyles = {
  padding: '10px 20px',
  border: `1px solid ${vars.colors.gray6}`,
}

export default {
  title: 'Button',
  component: Button,
  parameters: { options: { showPanel: false, panelPosition: 'right' } },
  decorators: [
    (Story: any) => (
      <Box padding="xl">
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: BUTTON_VARIANTS,
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
    disabled: false,
    loading: false,
    fullWidth: false,
    compact: false,
    uppercase: false,
    children: 'Button',
  },
}

export const Playground = (args: any) => <Button onPress={action('clicked')} {...args} />
Playground.parameters = {
  options: { showPanel: true },
}

export function States() {
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
    <table
      style={{
        'border-collapse': 'collapse',
      }}
    >
      <thead>
        <tr>
          <th style={sharedStyles}>&nbsp;</th>

          <For each={BUTTON_VARIANTS}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={states}>
          {(state) => (
            <tr>
              <td style={sharedStyles}>{state.name}</td>

              <For each={BUTTON_VARIANTS}>
                {(variant) => (
                  <td style={sharedStyles}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <Button variant={variant} colorScheme="blue" {...state.props}>
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
}
States.parameters = {
  options: { showPanel: false },
}

export function StatesInsideFieldsetDisabled() {
  return (
    <fieldset disabled>
      <States />
    </fieldset>
  )
}
StatesInsideFieldsetDisabled.parameters = {
  options: { showPanel: false },
}

export function ColorSchemes() {
  return (
    <table
      style={{
        'border-collapse': 'collapse',
      }}
    >
      <thead>
        <tr>
          <th style={sharedStyles}>&nbsp;</th>

          <For each={BUTTON_VARIANTS}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={wishColors}>
          {(colorScheme) => (
            <tr>
              <td style={sharedStyles}>{colorScheme}</td>

              <For each={BUTTON_VARIANTS}>
                {(variant) => (
                  <td style={sharedStyles}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <Button variant={variant} colorScheme={colorScheme}>
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
}
ColorSchemes.parameters = {
  options: { showPanel: false },
}

export function Sizes() {
  return (
    <table
      style={{
        'border-collapse': 'collapse',
      }}
    >
      <thead>
        <tr>
          <th style={sharedStyles}>&nbsp;</th>

          <For each={BUTTON_VARIANTS}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={wishSizes}>
          {(size) => (
            <tr>
              <td style={sharedStyles}>{size}</td>

              <For each={BUTTON_VARIANTS}>
                {(variant) => (
                  <td style={sharedStyles}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <Button variant={variant} size={size}>
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
}
Sizes.parameters = {
  options: { showPanel: false },
}

export function Radiuses() {
  return (
    <table
      style={{
        'border-collapse': 'collapse',
      }}
    >
      <thead>
        <tr>
          <th style={sharedStyles}>&nbsp;</th>

          <For each={BUTTON_VARIANTS}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={wishSizes}>
          {(radius) => (
            <tr>
              <td style={sharedStyles}>{radius}</td>

              <For each={BUTTON_VARIANTS}>
                {(variant) => (
                  <td style={sharedStyles}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <Button variant={variant} radius={radius}>
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
}
Radiuses.parameters = {
  options: { showPanel: false },
}

export function LoaderPositions() {
  return (
    <table
      style={{
        'border-collapse': 'collapse',
      }}
    >
      <thead>
        <tr>
          <th style={sharedStyles}>&nbsp;</th>

          <For each={BUTTON_VARIANTS}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={BUTTON_LOADER_POSITIONS}>
          {(loaderPosition) => (
            <tr>
              <td style={sharedStyles}>{loaderPosition}</td>

              <For each={BUTTON_VARIANTS}>
                {(variant) => (
                  <td style={sharedStyles}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <Button loading variant={variant} loaderPosition={loaderPosition}>
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
}
LoaderPositions.parameters = {
  options: { showPanel: false },
}

export function AsLink() {
  return (
    <Button
      component="a"
      variant="light"
      colorScheme="sky"
      href="https://google.com"
      target="_blank"
    >
      Link
    </Button>
  )
}
AsLink.parameters = {
  options: { showPanel: false },
}
