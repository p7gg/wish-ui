import { For } from 'solid-js'

import { Box } from '~core/Box'
import { wishColors, wishLoaders, wishSizes } from '~core/constants'
import { Loader } from '~core/Loader'
import { vars } from '~core/theme'

const sharedStyles = {
  padding: '10px 20px',
  border: `1px solid ${vars.colors.gray6}`,
}

export default {
  title: 'Loader',
  component: Loader,
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
      options: wishLoaders,
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
}

export const Playground = (args: any) => <Loader {...args} />
Playground.parameters = {
  options: { showPanel: true },
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

          <For each={wishLoaders}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={wishColors}>
          {(colorScheme) => (
            <tr>
              <td style={sharedStyles}>{colorScheme}</td>

              <For each={wishLoaders}>
                {(variant) => (
                  <td style={sharedStyles}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <Loader variant={variant} colorScheme={colorScheme} />
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

          <For each={wishLoaders}>{(variant) => <th style={sharedStyles}>{variant}</th>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={wishSizes}>
          {(size) => (
            <tr>
              <td style={sharedStyles}>{size}</td>

              <For each={wishLoaders}>
                {(variant) => (
                  <td style={sharedStyles}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <Loader variant={variant} size={size} />
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
