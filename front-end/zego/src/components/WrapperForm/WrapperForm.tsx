import { AriaProps } from '@/types/AriaProps';
import { DataTestProps } from '@/types/DataTestType';
import { PropsWithChildren } from 'react';

export enum AutoCompleteEnum {
    On = 'on',
    Off = 'off',
}

export type WrapperFormProps = {
    id: string;
    formName?: string;
    formAction: (formData: FormData) => void | Promise<void>;
    autoComplete?: AutoCompleteEnum;
} & DataTestProps &
    AriaProps;

export default function WrapperForm({
    id,
    formAction,
    formName,
    autoComplete = AutoCompleteEnum.On,
    children,
    ariaLabelledBy,
    ariaDescribedBy,
    ariaLabel,
    dataTestId = 'test',
}: PropsWithChildren<WrapperFormProps>) {
    return (
        <form
            className="m-2 py-2 px-3 text-base w-auto h-auto text-[#27252D] rounded-xl cursor-pointer"
            id={id}
            name={formName}
            action={formAction}
            autoComplete={autoComplete}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            aria-label={ariaLabel}
            data-testid={`wrapper-form-${dataTestId}`}
        >
            {children}
        </form>
    );
}
