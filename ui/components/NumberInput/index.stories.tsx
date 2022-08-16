import React from 'react';
import { NumberInput } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Example/NumberInput',
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
