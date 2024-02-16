import React from 'react';
import { render, screen } from '@testing-library/react';
import {Header} from './header.component';
import { useAuthStore } from '@/store/auth.store';

// Mocking the useAuthStore hook
jest.mock('../../store/auth.store');

describe('Header component', () => {
    test('renders correctly when authenticated', () => {
        // Mock isAuthenticated as true
        jest.mocked (useAuthStore).mockReturnValue(true);

        render(<Header />);

        // Check if "List" and "Add Card" links are rendered when authenticated
        expect(screen.getByText('List')).toBeInTheDocument();
        expect(screen.getByText('Add Card')).toBeInTheDocument();

        // Check if logout button is rendered
        expect(screen.getByText('logout')).toBeInTheDocument();
    });

    test('renders correctly when not authenticated', () => {
        // Mock isAuthenticated as false
        jest.mocked (useAuthStore).mockReturnValue(false);

        render(<Header />);

        // Check if "List" and "Add Card" links are not rendered when not authenticated
        expect(screen.queryByText('List')).toBeNull();
        expect(screen.queryByText('Add Card')).toBeNull();

        // Check if login button is rendered
        expect(screen.getByText('Login')).toBeInTheDocument();
    });
});
