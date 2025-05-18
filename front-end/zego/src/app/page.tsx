import Image from 'next/image';
import { GET } from './api/v1/config/route';
import { Fragment, Suspense } from 'react';
import { ButtonComponentType, InputComponentType, LabelComponentType } from './api/v1/config/route.schema';
import WrapperLabel from '@/components/WrapperLabel/WrapperLabel';
import WrapperInput, { InputTypeEnum } from '@/components/WrapperInput/WrapperInput';
import WrapperButton, { ButtonTypeEnum } from '@/components/WrapperButton/WrapperButton';
import WrapperForm from '@/components/WrapperForm/WrapperForm';

export default async function Home() {
    const response = await GET();
    const data = await response.json();

    return (
        <main className="grid place-items-center w-full h-auto">
            <div className="w-7xl mx-20 my-10">
                <Image src="/zego.svg" alt="Zego logo" width={100} height={100} priority />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                {data ? (
                    <section className="flex flex-col w-[550px] gap-10">
                        <h1 className="text-5xl font-bold">{data.form.title}</h1>
                        <hr className="border-t-1 opacity-10" />
                        <WrapperForm id={data.form.id} classes="grid grid-cols-2 gap-10">
                            {data.form.layout.map(
                                (el: ButtonComponentType | LabelComponentType | InputComponentType, index: number) => {
                                    if (el.type === 'label') {
                                        return (
                                            <Fragment key={`label-${index}`}>
                                                <WrapperLabel labelFor={el.properties.labelFor}>
                                                    {el.properties.labelText}
                                                </WrapperLabel>
                                            </Fragment>
                                        );
                                    }
                                    if (el.type === 'input') {
                                        const capitalizedInputType =
                                            el.properties.inputType.charAt(0).toUpperCase() +
                                            el.properties.inputType.slice(1);
                                        return (
                                            <Fragment key={`input-${index}`}>
                                                <WrapperInput
                                                    id={el.properties.id}
                                                    inputList={el.properties.inputList}
                                                    inputListId={el.properties.inputListId}
                                                    inputType={
                                                        InputTypeEnum[
                                                            capitalizedInputType as keyof typeof InputTypeEnum
                                                        ]
                                                    }
                                                    inputPlaceHolder={el.properties.inputPlaceHolder}
                                                    inputName={el.properties.inputName}
                                                    ariaDescribedBy={el.properties.ariaDescribedBy}
                                                    ariaLabel={el.properties.ariaLabel}
                                                    ariaLabelledBy={el.properties.ariaLabelledBy}
                                                    required={el.properties.required}
                                                />
                                            </Fragment>
                                        );
                                    }

                                    if (el.type === 'button') {
                                        return (
                                            <Fragment key={`button-${index}`}>
                                                <WrapperButton
                                                    classes="py-2 px-3 text-base w-full h-10 bg-[#12EFD4] text-[#27252D] rounded-xl cursor-pointer col-span-2 font-bold"
                                                    id={el.properties.id}
                                                    buttonType={
                                                        ButtonTypeEnum[
                                                            el.properties.buttonType as keyof typeof ButtonTypeEnum
                                                        ]
                                                    }
                                                    formId={el.properties.formId}
                                                    buttonName={el.properties.buttonName}
                                                    ariaLabelledBy={el.properties.ariaLabelledBy}
                                                    ariaLabel={el.properties.ariaLabel}
                                                    ariaDescribedBy={el.properties.ariaDescribedBy}
                                                >
                                                    {el.properties.buttonText}
                                                </WrapperButton>
                                            </Fragment>
                                        );
                                    }
                                    return <>{JSON.stringify(el)}</>;
                                },
                            )}
                        </WrapperForm>
                    </section>
                ) : (
                    <></>
                )}
            </Suspense>
        </main>
    );
}
