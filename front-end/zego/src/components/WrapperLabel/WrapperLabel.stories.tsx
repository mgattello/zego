import { Meta, StoryFn } from '@storybook/react';
import WrapperLabel from './WrapperLabel';

export default {
    title: 'Components/WrapperLabel',
    component: WrapperLabel,
    parameters: {
        docs: {
            description: {
                component: 'A controlled label component.',
            },
        },
    },
} as Meta<typeof WrapperLabel>;

const Template: StoryFn<React.ComponentProps<typeof WrapperLabel>> = (args) => <WrapperLabel {...args} />;

export const LabelText = Template.bind({});

LabelText.args = {
    labelFor: 'test',
    children: 'Label:'
};
