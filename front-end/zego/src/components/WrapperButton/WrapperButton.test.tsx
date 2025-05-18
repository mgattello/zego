import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WrapperButton from './WrapperButton';

describe('WrapperButton', () => {
    it('renders the button', () => {
        render(
            <WrapperButton id="test" buttonName="test">
                Test
            </WrapperButton>,
        );
        const component = screen.getByTestId('wrapper-button-test');

        expect(component).toBeInTheDocument();
        expect(component).toHaveTextContent('Test');
    });
});
