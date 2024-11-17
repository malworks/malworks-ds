import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
    args: {
		children: 'Button',
	},
} satisfies Meta;

export default meta;

export const Primary: Story = {
	args: {
		children: 'Button', // what is this actually for?
		variant: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Button',
		variant: 'secondary',
	},
};

export const Destructive: Story = {
	args: {
		children: 'Button',
		variant: 'destructive',
	},
};