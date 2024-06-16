import { Action, TodoState } from '../types/todoTypes';

export const todoReducer = (state: TodoState, action: Action): TodoState => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.todo] };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };
        case 'CHANGE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id
                        ? { ...todo, name: action.name }
                        : todo
                ),
            };
        case 'CHANGE_FILTER':
            return { ...state, filter: action.newFilter };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.completed),
            };
        default:
            return state;
    }
};
