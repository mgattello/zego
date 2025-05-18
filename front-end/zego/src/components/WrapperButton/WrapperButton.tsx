import { AriaLabelProps } from '@/types/AriaLabelProps';
import { DataTestProps } from '@/types/DataTestType';
import { PropsWithChildren, SetStateAction } from 'react';

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
    onClickFx?: (...args: unknown[]) => unknown;
} & DataTestProps &
    AriaLabelProps;

export default function WrapperButton({
    id,
    formId,
    buttonType = ButtonTypeEnum.Submit,
    buttonName,
    children,
    onClickFx,
    ariaDescribedBy,
    ariaLabel,
    dataTestId = 'test',
}: PropsWithChildren<WrapperButtonProps>) {
    return (
        <button
            className="m-2 py-2 px-3 text-base w-full h-10 bg-[#12EFD4] text-[#27252D] rounded-xl cursor-pointer"
            id={id}
            form={formId}
            type={buttonType}
            name={buttonName}
            onChange={onClickFx}
            aria-describedby={ariaDescribedBy}
            aria-label={ariaLabel}
            data-testid={`wrapper-button-${dataTestId}`}
        >
            {children}
        </button>
    );
}
