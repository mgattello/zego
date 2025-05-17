import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WrapperLabel from './WrapperLabel';

describe('WrapperLabel', () => {
    it('renders the label', () => {
        render(<WrapperLabel labelFor="test">Test</WrapperLabel>);
        const input = screen.getByTestId('wrapper-label-test');

        expect(input).toBeInTheDocument();
        expect(input).toHaveTextContent('Test');
    });
});
