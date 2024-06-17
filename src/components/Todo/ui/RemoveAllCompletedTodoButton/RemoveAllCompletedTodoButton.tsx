import { useTodoContext } from 'context/TodoContext';
import { Button } from 'antd';

export const RemoveAllCompletedTodoButton = () => {
    const { dispatch } = useTodoContext();

    const onRemoveAllCompletedTodo = () => {
        dispatch({ type: 'CLEAR_COMPLETED' });
    };

    return (
        <Button onClick={onRemoveAllCompletedTodo} danger>
            Удалить завершенные
        </Button>
    );
};
