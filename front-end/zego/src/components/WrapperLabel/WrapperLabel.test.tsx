import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WrapperLabel from './WrapperLabel';

describe('WrapperLabel', () => {
    it('renders the label', () => {
        render(<WrapperLabel labelFor="test">Test</WrapperLabel>);
        const component = screen.getByTestId('wrapper-label-test');

        expect(component).toBeInTheDocument();
        expect(component).toHaveTextContent('Test');
    });
});
