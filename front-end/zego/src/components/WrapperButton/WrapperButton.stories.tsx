import { Meta, StoryFn } from '@storybook/react';
import WrapperButton, { InputType } from './WrapperButton';

export default {
    title: 'Components/WrapperInput',
    component: WrapperButton,
    parameters: {
        docs: {
            description: {
                component: 'A controlled input component.',
            },
        },
    },
} as Meta<typeof WrapperButton>;

const Template: StoryFn<React.ComponentProps<typeof WrapperButton>> = (args) => <WrapperButton {...args} />;

export const InputText = Template.bind({});
export const InputPassword = Template.bind({});
export const InputList = Template.bind({});
export const InputCheckbox = Template.bind({});
export const InputFile = Template.bind({});
export const InputNumber = Template.bind({});
export const InputRadio = Template.bind({});
export const InputTime = Template.bind({});
export const InputWeek = Template.bind({});

InputText.args = {
    inputType: InputType.Text,
};

InputPassword.args = {
    inputType: InputType.Password,
};

InputList.args = {
    inputType: InputType.Text,
    inputListId: 'test-list',
    inputList: ['test 1', 'test 2', 'test 3'],
};

InputCheckbox.args = {
    inputType: InputType.Checkbox,
};

InputFile.args = {
    inputType: InputType.Date,
};

InputFile.args = {
    inputType: InputType.Date,
};

InputFile.args = {
    inputType: InputType.File,
};

InputNumber.args = {
    inputType: InputType.Number,
};

InputRadio.args = {
    inputType: InputType.Radio,
};

InputTime.args = {
    inputType: InputType.Time,
};

InputWeek.args = {
    inputType: InputType.Week,
};
