import { DataTestType } from '@/types/DataTestType';
import { SetStateAction } from 'react';

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
    inputValue: string;
    inputType: InputTypeEnum;
    inputListId?: string;
    inputList?: string[];
    /**
     * Use when the label is visually present but not using <label>. i.e.:
     *
     * <span id="label-username">Username</span>
     * <input ... aria-labbelledby="label-username" name="username"/>
     */
    labelledBy?: string;
    onChangeFx: () => React.Dispatch<SetStateAction<string>>;
} & DataTestType;

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
    labelledBy,
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
                aria-labelledby={labelledBy}
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
