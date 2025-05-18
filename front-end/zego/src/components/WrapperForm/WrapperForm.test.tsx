import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WrapperForm from './WrapperForm';
import WrapperLabel from '../WrapperLabel/WrapperLabel';
import WrapperButton from '../WrapperButton/WrapperButton';
import WrapperInput, { InputTypeEnum } from '../WrapperInput/WrapperInput';

describe('WrapperForm', () => {
    it('renders the form', () => {
        render(
            <WrapperForm id="form-test" formAction={() => {}}>
                <>
                    <WrapperLabel labelFor="input-test">Test</WrapperLabel>
                    <WrapperInput
                        id="input-test"
                        inputPlaceHolder="Test"
                        inputName="test"
                        required={true}
                        inputType={InputTypeEnum['Text']}
                    />
                    <WrapperButton id="button-test">Submit</WrapperButton>
                </>
            </WrapperForm>,
        );
        const component = screen.getByTestId('wrapper-form-test');

        expect(component).toBeInTheDocument();
        expect(component).toHaveTextContent('Test');
        expect(component).toHaveTextContent('Submit');
    });
});
