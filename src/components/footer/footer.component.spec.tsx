import { render, screen } from '@testing-library/react';
import { Footer } from './footer.component';

describe('Footer component', () => {
    test('renders privacy and terms of use links', () => {
        render(<Footer />);

        const privacyLink = screen.getByText('Privacy');
        const termsOfUseLink = screen.getByText('Terms of Use');

        expect(privacyLink).toBeInTheDocument();
        expect(termsOfUseLink).toBeInTheDocument();
    });
});
