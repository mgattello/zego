import { Meta, StoryFn } from '@storybook/react';
import WrapperInput, { InputTypeEnum } from './WrapperInput';

export default {
    title: 'Components/WrapperInput',
    component: WrapperInput,
    parameters: {
        docs: {
            description: {
                component: 'A controlled input component.',
            },
        },
    },
} as Meta<typeof WrapperInput>;

const Template: StoryFn<React.ComponentProps<typeof WrapperInput>> = (args) => <WrapperInput {...args} />;

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
    inputType: InputTypeEnum.Text,
};

InputPassword.args = {
    inputType: InputTypeEnum.Password,
};

InputList.args = {
    inputType: InputTypeEnum.Text,
    inputListId: 'test-list',
    inputList: ['test 1', 'test 2', 'test 3'],
};

InputCheckbox.args = {
    inputType: InputTypeEnum.Checkbox,
};

InputFile.args = {
    inputType: InputTypeEnum.Date,
};

InputFile.args = {
    inputType: InputTypeEnum.Date,
};

InputFile.args = {
    inputType: InputTypeEnum.File,
};

InputNumber.args = {
    inputType: InputTypeEnum.Number,
};

InputRadio.args = {
    inputType: InputTypeEnum.Radio,
};

InputTime.args = {
    inputType: InputTypeEnum.Time,
};

InputWeek.args = {
    inputType: InputTypeEnum.Week,
};
