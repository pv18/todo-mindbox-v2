import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useMemo,
    useReducer,
} from 'react';
import { todoReducer, Action, TodoState } from 'components/Todo';
import { TodoFilterValueTypes } from 'enums';

const initialState: TodoState = {
    todos: [],
    filter: TodoFilterValueTypes.ALL,
};

export const TodoContext = createContext<{
    state: TodoState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

interface TodoProviderProps {
    children: ReactNode;
}

const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    // Мемоизация контекста
    const contextValue = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};

const useTodoContext = () => useContext(TodoContext);

export { TodoProvider, useTodoContext };
