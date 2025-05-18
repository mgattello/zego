import { ChangeEvent, useState } from 'react';
import WrapperInput, { InputTypeEnum } from '../components/WrapperInput/WrapperInput';

export function TestWrapperInput() {
    const [inputTestValue, setInputTestValue] = useState<string>();

    return (
        <WrapperInput
            id="input-test"
            inputPlaceHolder="Test"
            inputName="test"
            required={true}
            inputValue={inputTestValue}
            inputType={InputTypeEnum['Text']}
            onChangeFx={(e: ChangeEvent<HTMLInputElement>) => setInputTestValue(e.target.value)}
        />
    );
}
