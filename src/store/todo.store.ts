import {create} from 'zustand';
export interface Todo {
    id: number;
    text: string;
}

interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (text) =>
        set((state) => ({
            todos: [...state.todos, { id: Date.now(), text, completed: false }],
        }))
}));
