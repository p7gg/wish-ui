import { Box } from '~core/Box'
import { Text } from '~core/Text'

import type { Meta, StoryObj } from '../types'
type Story = StoryObj<typeof Text>

export default {
  title: 'Text',
  component: Text,
  decorators: [
    (Story) => (
      <Box padding="$xl">
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    lineClamp: {
      control: { type: 'number' },
    },
    truncate: {
      control: { type: 'boolean' },
    },
    inline: {
      control: { type: 'boolean' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    strikeThrough: {
      control: { type: 'boolean' },
    },
    inherit: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa et perspiciatis consequuntur, quaerat nesciunt dolorum tempore. Sed, totam nesciunt quidem minima ab ipsam sapiente neque iste quo ut dolorem rem eum impedit libero voluptate, iure voluptatem consectetur, expedita ea et eaque error vitae. Totam sunt laudantium atque perferendis. Omnis tempore voluptates quia repellendus fugiat veritatis totam illum soluta ipsa. Repellendus aut rerum iusto. Aliquid est assumenda doloribus unde praesentium ducimus maiores aperiam? Delectus, aperiam. Quis voluptatum ducimus hic. A eaque iure illum distinctio non at repellat quod ad! Expedita vel, explicabo eligendi maxime aut magni beatae laborum quis nihil?',
    truncate: false,
    inline: false,
    underline: false,
    strikeThrough: false,
    inherit: false,
  },
} satisfies Meta<typeof Text>

export const Playground: Story = {
  render: (args) => <Text {...args} />,
}
