import { Meta, StoryFn } from '@storybook/react';
import WrapperForm from './WrapperForm';
import { TestWrapperInput } from '@/utils/testHelpers';
import WrapperButton from '../WrapperButton/WrapperButton';
import WrapperLabel from '../WrapperLabel/WrapperLabel';

export default {
    title: 'Components/WrapperForm',
    component: WrapperForm,
    parameters: {
        docs: {
            description: {
                component: 'A controlled form component.',
            },
        },
    },
} as Meta<typeof WrapperForm>;

const Template: StoryFn<React.ComponentProps<typeof WrapperForm>> = (args) => <WrapperForm {...args} />;
export const FormPrimary = Template.bind({});

FormPrimary.args = {
    id: 'submit',
    children: (
        <>
            <WrapperLabel labelFor="input-test">Test</WrapperLabel>
            <TestWrapperInput />
            <WrapperButton id="button-test">Submit</WrapperButton>
        </>
    ),
};
