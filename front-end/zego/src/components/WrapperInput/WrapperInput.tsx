import { AriaProps } from '@/types/AriaProps';
import { DataTestProps } from '@/types/DataTestType';
import { StlyeProps } from '@/types/StlyleProps';

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
    inputType: InputTypeEnum;
    inputListId?: string;
    inputList?: string[];
} & DataTestProps &
    AriaProps &
    StlyeProps;

export default function WrapperInput({
    id,
    inputPlaceHolder = '',
    inputName = '',
    required = true,
    inputType,
    inputListId,
    inputList,
    ariaLabelledBy,
    ariaDescribedBy,
    ariaLabel,
    classes,
    dataTestId = 'test',
}: WrapperInputProps) {
    return (
        <>
            <input
                list={inputListId}
                className={`${classes ? classes : 'm-2 py-2 px-3 text-base w-auto h-10 bg-white rounded-xl'}`}
                id={id}
                type={inputType}
                placeholder={inputPlaceHolder}
                name={inputName}
                required={required}
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
