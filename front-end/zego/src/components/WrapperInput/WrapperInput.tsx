import { AriaLabelProps } from '@/types/AriaLabelProps';
import { DataTestProps } from '@/types/DataTestType';
import { ChangeEvent, SetStateAction } from 'react';

export enum InputTypeEnum {
    Text = 'text',
    Password = 'password',
    Email = 'email',
    Number = 'number',
    Tel = 'tel',
    Url = 'url',
    Search = 'search',
    Date = 'date',
    DatetimeLocal = 'datetime-local',
    Month = 'month',
    Week = 'week',
    Time = 'time',
    Checkbox = 'checkbox',
    Radio = 'radio',
    Range = 'range',
    Color = 'color',
    File = 'file',
    Hidden = 'hidden',
    Submit = 'submit',
    Reset = 'reset',
    Button = 'button',
    Image = 'image',
}

export type WrapperInputProps = {
    id: string;
    inputPlaceHolder?: string;
    inputName: string;
    required: boolean;
    inputValue: string | number | undefined;
    inputType: InputTypeEnum;
    inputListId?: string;
    inputList?: string[];
    onChangeFx: (event: ChangeEvent<HTMLInputElement>) => void;
} & DataTestProps &
    AriaLabelProps;

export default function WrapperInput({
    id,
    inputPlaceHolder = '',
    inputName = '',
    required = true,
    inputValue,
    inputType,
    inputListId,
    inputList,
    dataTestId = 'test',
    ariaLabelledBy,
    ariaDescribedBy,
    ariaLabel,
    onChangeFx,
}: WrapperInputProps) {
    return (
        <>
            <input
                list={inputListId}
                className="m-2 py-2 px-3 text-base w-full h-10 bg-white rounded-xl"
                id={id}
                type={inputType}
                placeholder={inputPlaceHolder}
                name={inputName}
                required={required}
                value={inputValue}
                onChange={onChangeFx}
                aria-labelledby={ariaLabelledBy}
                aria-describedby={ariaDescribedBy}
                aria-label={ariaLabel}
                data-testid={`wrapper-input-${dataTestId}`}
            />
            {inputListId && inputList ? (
                <datalist
                    id={inputListId}
                    data-testid={`wrapper-input-datalist-${dataTestId}`}
                    className="w-full bg-white"
                >
                    {inputList.map((option, index) => (
                        <option value={option} key={`wrapper-input-option-${inputListId}-${index}`} />
                    ))}
                </datalist>
            ) : (
                ''
            )}
        </>
    );
}
