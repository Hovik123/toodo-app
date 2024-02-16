import { render} from '@testing-library/react';
import { AddContent } from './add-content.component';
import { useForm } from 'react-hook-form';

// Mock the useForm hook
jest.mock('react-hook-form', () => ({
    useForm: jest.fn(),
}));

// Mock the useTodoStore hook
jest.mock('../../store/todo.store', () => ({
    useTodoStore: jest.fn(() => ({
        addTodo: jest.fn(), // Mock the addTodo function
    })),
}));

// Mock the form data and validation schema
const mockFormData = {
    content: 'Test content',
};

const mockAddTodo = jest.fn();

// Mock the useForm hook behavior
(useForm as jest.Mock).mockReturnValue({
    register: jest.fn(),
    handleSubmit: jest.fn((callback) => callback),
    reset: jest.fn(),
    formState: { errors: {} },
});

describe('AddContent component', () => {
    it('renders form elements correctly', () => {
        const { getByLabelText, getByText } = render(<AddContent />);

        // Check if form elements are rendered
        expect(getByLabelText('Content')).toBeInTheDocument();
        expect(getByText('Add new content')).toBeInTheDocument();
    });
});
