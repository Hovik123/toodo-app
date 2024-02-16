import React from 'react';
import { render } from '@testing-library/react';
import { Logout } from './logout.component';

// Mock the useAuthStore hook
jest.mock('../../store/auth.store', () => ({
    useAuthStore: jest.fn().mockReturnValue({
        logout:jest.fn()
    }),
}));

describe('Logout component', () => {
    test('renders the logout button', () => {
        const { getByText } = render(<Logout />);
        const logoutButton = getByText('logout');
        expect(logoutButton).toBeInTheDocument();
    });
});
