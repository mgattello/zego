import { AriaProps } from '@/types/AriaProps';
import { DataTestProps } from '@/types/DataTestType';
import { StlyeProps } from '@/types/StlyleProps';
import { PropsWithChildren } from 'react';

export enum ButtonTypeEnum {
    Button = 'button',
    Reset = 'reset',
    Submit = 'submit',
}

export type WrapperButtonProps = {
    id: string;
    formId?: string;
    buttonType?: ButtonTypeEnum;
    buttonName?: string;
} & DataTestProps &
    AriaProps &
    StlyeProps;

export default function WrapperButton({
    id,
    formId,
    buttonType = ButtonTypeEnum.Submit,
    buttonName,
    children,
    ariaDescribedBy,
    ariaLabel,
    classes,
    dataTestId = 'test',
}: PropsWithChildren<WrapperButtonProps>) {
    return (
        <button
            className={`${classes ? classes : 'm-2 py-2 px-3 text-base w-full h-10 bg-[#12EFD4] text-[#27252D] rounded-xl cursor-pointer'}`}
            id={id}
            form={formId}
            type={buttonType}
            name={buttonName}
            aria-describedby={ariaDescribedBy}
            aria-label={ariaLabel}
            data-testid={`wrapper-button-${dataTestId}`}
        >
            {children}
        </button>
    );
}
