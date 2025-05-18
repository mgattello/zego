'use client';
import { AriaProps } from '@/types/AriaProps';
import { DataTestProps } from '@/types/DataTestType';
import { StlyeProps } from '@/types/StlyleProps';
import { PropsWithChildren, useEffect } from 'react';
import { useActionState } from 'react';
import { submit } from '../../app/actions/submit';

export type WrapperFormProps = {
    id: string;
    formName?: string;
} & DataTestProps &
    AriaProps &
    StlyeProps;

export default function WrapperForm({
    id,
    formName,
    children,
    ariaLabelledBy,
    ariaDescribedBy,
    ariaLabel,
    classes,
    dataTestId = 'test',
}: PropsWithChildren<WrapperFormProps>) {
    const [message, submitAction] = useActionState(submit, null);

    useEffect(() => {
        if (message) {
            console.log(message);
        }
    }, [message]);

    return (
        <>
            <form
                className={`${classes ? classes : 'm-2 py-2 px-3 text-base w-auto h-auto text-[#27252D] rounded-xl cursor-pointer'}`}
                id={id}
                name={formName}
                action={submitAction}
                aria-labelledby={ariaLabelledBy}
                aria-describedby={ariaDescribedBy}
                aria-label={ariaLabel}
                data-testid={`wrapper-form-${dataTestId}`}
            >
                {children}
            </form>
        </>
    );
}
