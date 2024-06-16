import {useMemo} from 'react';
import {useTodoContext} from 'context/TodoContext';
import {Button} from 'antd';

export const RemoveAllCompletedTodoButton = () => {
    const {
        state: { todos },
        dispatch,
    } = useTodoContext();

    const completedCounter: number = useMemo(() => {
        return todos.reduce((acc, todo) => {
            if (todo.completed) {
                return acc + 1;
            }
            return acc;
        }, 0);
    }, [todos]);

    const onRemoveAllCompletedTodo = () => {
        dispatch({ type: 'CLEAR_COMPLETED' });
    };

    return (
        <>
            {!!completedCounter && (
                <Button
                    onClick={onRemoveAllCompletedTodo}
                    danger
                    disabled={!completedCounter}
                >
                    Удалить завершенные
                </Button>
            )}
        </>
    );
};
