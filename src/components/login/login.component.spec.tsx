import React from 'react';
import { render} from '@testing-library/react';
import { Login } from './login.component';
import { useAuthStore } from '@/store/auth.store'; // Update the import path as per your project structure

// Mock the useAuthStore hook
jest.mock('../../store/auth.store', () => ({
    useAuthStore: jest.fn(),
}));

describe('Login component', () => {
    test('renders the login button', () => {
        // Mock the login function
        const loginMock = jest.fn();
        jest.mocked(useAuthStore).mockReturnValue({ login: loginMock });

        const { getByText } = render(<Login />);
        const loginButton = getByText('Login');
        expect(loginButton).toBeInTheDocument();
    });
});
