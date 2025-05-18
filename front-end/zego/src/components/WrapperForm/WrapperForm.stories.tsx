import { Meta, StoryFn } from '@storybook/react';
import WrapperForm from './WrapperForm';
import WrapperButton from '../WrapperButton/WrapperButton';
import WrapperLabel from '../WrapperLabel/WrapperLabel';
import WrapperInput, { InputTypeEnum } from '../WrapperInput/WrapperInput';

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
            <WrapperInput
                id="input-test"
                inputPlaceHolder="Test"
                inputName="test"
                required={true}
                inputType={InputTypeEnum['Text']}
            />
            <WrapperButton id="button-test">Submit</WrapperButton>
        </>
    ),
};
