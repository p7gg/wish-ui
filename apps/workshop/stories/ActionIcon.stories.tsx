import { For } from 'solid-js'

import { action } from '@storybook/addon-actions'

import { ExternalLink, Settings2 } from 'lucide-solid'

import { ActionIcon } from '~core/ActionIcon'
import { Box } from '~core/Box'
import { actionIconVariants, wishColors, wishSizes } from '~core/constants'
import { vars } from '~core/theme'

const sharedStyles = {
  padding: '10px 20px',
  border: `1px solid ${vars.colors.gray6}`,
}

export default {
  title: 'ActionIcon',
  component: ActionIcon,
  parameters: { options: { showPanel: false, panelPosition: 'right' } },
  decorators: [
    (Story: any) => (
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
}

export const Playground = (args: any) => (
  <ActionIcon onPress={action('clicked')} {...args}>
    <Settings2 size={15} />
  </ActionIcon>
)
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
                      <ActionIcon variant={variant} {...state.props}>
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
                      <ActionIcon variant={variant} colorScheme={colorScheme}>
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
                      <ActionIcon variant={variant} size={size}>
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
                      <ActionIcon variant={variant} radius={radius}>
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
}
Radiuses.parameters = {
  options: { showPanel: false },
}

export function AsLink() {
  return (
    <ActionIcon as="a" variant="light" colorScheme="sky" href="https://google.com" target="_blank">
      <ExternalLink size={15} />
    </ActionIcon>
  )
}
AsLink.parameters = {
  options: { showPanel: false },
}
