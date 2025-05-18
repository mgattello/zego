import { Meta, StoryFn } from '@storybook/react';
import WrapperButton from './WrapperButton';

export default {
    title: 'Components/WrapperButton',
    component: WrapperButton,
    parameters: {
        docs: {
            description: {
                component: 'A controlled button component.',
            },
        },
    },
} as Meta<typeof WrapperButton>;

const Template: StoryFn<React.ComponentProps<typeof WrapperButton>> = (args) => <WrapperButton {...args} />;
export const ButtonText = Template.bind({});

ButtonText.args = {
    id: 'submit',
    children: 'Submit',
};
