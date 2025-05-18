import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WrapperButton from './WrapperButton';
import { SetStateAction } from 'react';

describe('WrapperButton', () => {
    it('renders the button', () => {
        render(
            <WrapperButton id="test" buttonName="test">
                Test
            </WrapperButton>,
        );
        const input = screen.getByTestId('wrapper-button-test');

        expect(input).toBeInTheDocument();
        expect(input).toHaveTextContent('Test');
    });
});
