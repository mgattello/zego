import { DataTestProps } from '@/types/DataTestType';
import { StlyeProps } from '@/types/StlyleProps';
import { PropsWithChildren } from 'react';

export type WrapperLabelProps = {
    labelFor: string;
} & DataTestProps &
    StlyeProps;

export default function WrapperLabel({
    labelFor,
    children,
    classes,
    dataTestId = 'test',
}: PropsWithChildren<WrapperLabelProps>) {
    return (
        <label
            htmlFor={labelFor}
            className={`${classes ? classes : 'm-2 py-2 px-3 text-base'}`}
            data-testid={`wrapper-label-${dataTestId}`}
        >
            {children}
        </label>
    );
}
