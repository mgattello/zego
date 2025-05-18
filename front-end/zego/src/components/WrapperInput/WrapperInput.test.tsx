import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WrapperInput, { InputTypeEnum } from './WrapperInput';

function TestWrapperInputList() {
    const inputList = ['test 1', 'test 2', 'test 3'];

    return (
        <WrapperInput
            id="test"
            inputPlaceHolder="Test"
            inputName="test"
            required={true}
            inputType={InputTypeEnum['Text']}
            inputListId="tests"
            dataTestId="list-test"
            inputList={inputList}
        />
    );
}

describe('WrapperInput', () => {
    it('renders the input', () => {
        render(
            <WrapperInput
                id="input-test"
                inputPlaceHolder="Test"
                inputName="test"
                required={true}
                inputType={InputTypeEnum['Text']}
            />,
        );
        const component = screen.getByTestId('wrapper-input-test');

        expect(component).toBeInTheDocument();
        expect(component).toHaveAttribute('placeholder', 'Test');
    });

    it('renders the input with list', () => {
        render(<TestWrapperInputList />);

        const input = screen.getByTestId('wrapper-input-list-test');
        const datalist = screen.getByTestId('wrapper-input-datalist-list-test');
        const options = datalist.querySelectorAll('option');

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('list', 'tests');

        expect(datalist).toBeInTheDocument();
        expect(datalist).toHaveAttribute('id', 'tests');

        expect(options).toHaveLength(3);
        expect(options[0]).toHaveAttribute('value', 'test 1');
        expect(options[1]).toHaveAttribute('value', 'test 2');
        expect(options[2]).toHaveAttribute('value', 'test 3');
    });
});
