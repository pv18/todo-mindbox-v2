import { Action, Todo, TodoFilterType, TodoState } from '../types/todoTypes';
import { todoReducer } from './todoReducer';

const data: TodoState = {
    todos: [
        { id: '1', name: 'First Todo', completed: false },
        { id: '2', name: 'Second Todo', completed: true },
        { id: '3', name: 'Third Todo', completed: false },
        { id: '4', name: 'Fourth Todo', completed: true },
    ],
    filter: 'all' as TodoFilterType,
};

describe('todoReducer.test', () => {
    // Добавить дело
    test('correct todo should be added to todos array', () => {
        const startState = data;
        const newTodo: Todo = {
            id: '5',
            name: 'New Todo',
            completed: false,
        };

        const action: Action = { type: 'ADD_TODO', todo: newTodo };
        const endState = todoReducer(startState, action);

        expect(endState.todos.length).toBe(5);
        expect(endState.todos[4].id).toBeDefined();
        expect(endState.todos[4].name).toBe('New Todo');
        expect(endState.todos[4].completed).toBe(false);
    });

    // Удалить дело
    test('correct task should be deleted from array todo', () => {
        const startState = data;

        const action: Action = { type: 'DELETE_TODO', id: '2' };
        const endState = todoReducer(startState, action);

        expect(endState.todos.length).toBe(3);
        expect(endState.todos.every((t) => t.id !== '2')).toBeTruthy();
        expect(endState.todos[0].id).toBe('1');
        expect(endState.todos[1].id).toBe('3');
    });

    // Изменить статус(completed) дела
    test('status completed todo should be changed', () => {
        const startState = data;

        const action: Action = { type: 'TOGGLE_TODO', id: '2' };
        const endState = todoReducer(startState, action);

        expect(endState.todos[0].completed).toBeFalsy();
        expect(endState.todos[1].completed).toBeFalsy();
    });

    // Изменить значение name и description дела
    test('name and description todo should be changed', () => {
        const startState = data;
        const name = 'New Todo';

        const action: Action = {
            type: 'CHANGE_TODO',
            id: '2',
            name,
        };
        const endState = todoReducer(startState, action);

        expect(endState.todos[1].name).toBe(name);
    });

    // Удалить все завершенные дела
    test('delete all completed todo', () => {
        const startState = data;

        const action: Action = { type: 'CLEAR_COMPLETED' };
        const endState = todoReducer(startState, action);

        expect(endState.todos[0].id).toBeDefined();
        expect(endState.todos.length).toBe(2);
    });

    // Изменение фильтра
    test('correct filter of todo should be changed', () => {
        const startState = data;

        const newFilter: TodoFilterType = 'active' as TodoFilterType;

        const action: Action = { type: 'CHANGE_FILTER', newFilter };
        const endState = todoReducer(startState, action);

        expect(endState.filter).toBe(newFilter);
    });
});
