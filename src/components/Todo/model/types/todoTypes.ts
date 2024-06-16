import { TodoFilterNameTypes, TodoFilterValueTypes } from 'enums';

// Тип для одного дела
export type Todo = {
    id: string;
    name: string;
    completed: boolean;
};

// Тип названия фильтра
export type TodoFilterNameType =
    | TodoFilterNameTypes.ALL
    | TodoFilterNameTypes.COMPLETED
    | TodoFilterNameTypes.ACTIVE;

// Тип значения фильтра
export type TodoFilterType =
    | TodoFilterValueTypes.ALL
    | TodoFilterValueTypes.COMPLETED
    | TodoFilterValueTypes.ACTIVE;

// Тип для состояния
export type TodoState = {
    todos: Todo[];
    filter: TodoFilterType;
};

// Типы Actions
export type Action =
    | { type: 'ADD_TODO'; todo: Todo }
    | { type: 'TOGGLE_TODO'; id: string }
    | { type: 'DELETE_TODO'; id: string }
    | { type: 'CHANGE_TODO'; id: string; name: string }
    | { type: 'CHANGE_FILTER'; newFilter: TodoFilterType }
    | { type: 'CLEAR_COMPLETED' };
