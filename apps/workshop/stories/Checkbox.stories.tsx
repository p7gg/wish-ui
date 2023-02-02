import { For } from 'solid-js'

import { action } from '@storybook/addon-actions'

import { Box } from '~core/Box'
import { Checkbox } from '~core/Checkbox'
import { wishColors, wishSizes } from '~core/constants'
import { vars } from '~core/theme'

const sharedStyles = {
  padding: '10px 20px',
  border: `1px solid ${vars.colors.gray6}`,
}

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: { options: { showPanel: false, panelPosition: 'right' } },
  decorators: [
    (Story: any) => (
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
  },
  args: {
    colorScheme: 'blue',
    size: 'sm',
    radius: 'sm',
    labelPosition: 'left',
    disabled: false,
    indeterminate: false,
    label: 'Label',
    description: '',
    error: '',
  },
}

export const Playground = (args: any) => <Checkbox onCheckedChange={action('clicked')} {...args} />
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
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Checkbox defaultIsChecked colorScheme={colorScheme} />
                  <Checkbox defaultIsChecked indeterminate colorScheme={colorScheme} />
                </Box>
              </td>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  )
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
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Checkbox defaultIsChecked size={size} />
                  <Checkbox defaultIsChecked indeterminate size={size} />
                </Box>
              </td>
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
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Checkbox defaultIsChecked radius={radius} />
                  <Checkbox defaultIsChecked indeterminate radius={radius} />
                </Box>
              </td>
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

// export function Groups() {
//   return (
//     <>
//       <Button.Group>
//         <Button variant="default">First</Button>
//         <Button variant="default">Second</Button>
//         <Button variant="default">Third</Button>
//         <Button variant="default">Forth</Button>
//         <Button variant="default">Last</Button>
//       </Button.Group>
//       <Button.Group mt="$xl" orientation="vertical">
//         <Button variant="default">First</Button>
//         <Button variant="default">Second</Button>
//         <Button variant="default">Third</Button>
//         <Button variant="default">Forth</Button>
//         <Button variant="default">Last</Button>
//       </Button.Group>
//     </>
//   )
// }
// Groups.parameters = {
//   options: { showPanel: false },
// }

export function LabelPositions() {
  return (
    <table
      style={{
        'border-collapse': 'collapse',
      }}
    >
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
}
LabelPositions.parameters = {
  options: { showPanel: false },
}
