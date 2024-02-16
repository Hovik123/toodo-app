import React from 'react';
import { render } from '@testing-library/react';
import { PrivateRoute } from './private-route.component';
import { useAuthStore } from '@/store/auth.store';

// Mock the useAuthStore hook
jest.mock('../../store/auth.store');

describe('PrivateRoute component', () => {
    it('renders children when isAuthenticated is true', () => {
        // Mock isAuthenticated to return true
        jest.mocked(useAuthStore).mockReturnValue(true);

        // Render the PrivateRoute component with children
        const { getByText } = render(
            <PrivateRoute>
                <div data-testid="children">Children content</div>
            </PrivateRoute>
        );

        // Assert that children content is rendered
        expect(getByText('Children content')).toBeInTheDocument();
    });

    it('renders login message when isAuthenticated is false', () => {
        // Mock isAuthenticated to return false
        jest.mocked(useAuthStore).mockReturnValue(false);

        // Render the PrivateRoute component
        const { getByText } = render(
            <PrivateRoute>
                <div data-testid="children">Children content</div>
            </PrivateRoute>
        );

        // Assert that login message is rendered
        expect(getByText('You need to be authenticated please')).toBeInTheDocument();
        expect(getByText('Login')).toBeInTheDocument(); // Ensure Login component is rendered
    });
});
