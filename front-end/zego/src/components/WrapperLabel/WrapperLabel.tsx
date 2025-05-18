import { AriaLabelProps } from '@/types/AriaLabelProps';
import { DataTestProps } from '@/types/DataTestType';
import { PropsWithChildren } from 'react';

export type WrapperLabelProps = {
    labelFor: string;
} & DataTestProps &
    AriaLabelProps;

export default function WrapperLabel({
    labelFor,
    dataTestId = 'test',
    children,
}: PropsWithChildren<WrapperLabelProps>) {
    return (
        <label htmlFor={labelFor} className="m-2 py-2 px-3 text-base" data-testid={`wrapper-label-${dataTestId}`}>
            {children}
        </label>
    );
}
