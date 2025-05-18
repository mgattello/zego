import { DataTestType } from '@/types/DataTestType';
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
    onClickFx?: () => React.Dispatch<SetStateAction<string>>;
} & DataTestType;

export default function WrapperButton({
    id,
    formId,
    buttonType = ButtonTypeEnum.Submit,
    buttonName,
    children,
    onClickFx,
    dataTestId = 'test',
}: PropsWithChildren<WrapperButtonProps>) {
    return (
        <button
            className="m-2 py-2 px-3 text-base w-full h-10 bg-white rounded-xl"
            id={id}
            form={formId}
            type={buttonType}
            name={buttonName}
            onChange={onClickFx}
            data-testid={`wrapper-button-${dataTestId}`}
        >
            {children}
        </button>
    );
}
