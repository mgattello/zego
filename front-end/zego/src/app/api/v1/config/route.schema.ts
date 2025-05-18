import { ButtonTypeEnum } from '../../../../components/WrapperButton/WrapperButton';
import { AutoCompleteEnum } from '../../../../components/WrapperForm/WrapperForm';
import { InputTypeEnum } from '../../../../components/WrapperInput/WrapperInput';
import { z } from 'zod';

const AriaPropertiesZod = z.object({
    ariaLabelledBy: z.string().optional(),
    ariaLabel: z.string().optional(),
    ariaDescribedBy: z.string().optional(),
});

const InputTypeEnumZod = z.enum(Object.values(InputTypeEnum) as [string, ...string[]]);

const InputPropertiesZodBase = z.object({
    id: z.string(),
    inputPlaceHolder: z.string().optional(),
    inputName: z.string(),
    required: z.boolean(),
    inputValue: z.union([z.string(), z.number()]).optional(),
    inputType: InputTypeEnumZod,
    inputListId: z.string().optional(),
    inputList: z.array(z.string()).optional(),
});

const InputPropertiesZod = InputPropertiesZodBase.merge(AriaPropertiesZod);

const LabelPropertiesZod = z.object({
    labelFor: z.string(),
    labelText: z.string(),
});

const ButtonTypeEnumZod = z.enum(Object.values(ButtonTypeEnum) as [string, ...string[]]);

const ButtonPropertiesZodBase = z.object({
    id: z.string(),
    formId: z.string().optional(),
    buttonType: ButtonTypeEnumZod,
    buttonName: z.string().optional(),
});

const ButtonPropertiesZod = ButtonPropertiesZodBase.merge(AriaPropertiesZod);

const InputComponentZod = z.object({
    type: z.literal('input'),
    properties: InputPropertiesZod,
});

const ButtonComponentZod = z.object({
    type: z.literal('button'),
    properties: ButtonPropertiesZod,
});

const LabelComponentZod = z.object({
    type: z.literal('label'),
    properties: LabelPropertiesZod,
});

const ChildComponentZod = z.discriminatedUnion('type', [InputComponentZod, ButtonComponentZod, LabelComponentZod]);

const FormLayoutZod = z.array(ChildComponentZod);

const AutoCompleteEnumZod = z.enum(Object.values(AutoCompleteEnum) as [string, ...string[]]);

const FormZod = z.object({
    id: z.string(),
    formName: z.string().optional(),
    autoComplete: AutoCompleteEnumZod,
    layout: FormLayoutZod,
});

export const ConfigGetZodSchema = z.object({
    version: z.string().regex(/^\d+\.\d+\.\d+$/, {
        message: 'Version must be in format X.Y.Z (i.e. 1.0.0)',
    }),
    config: FormZod,
});
