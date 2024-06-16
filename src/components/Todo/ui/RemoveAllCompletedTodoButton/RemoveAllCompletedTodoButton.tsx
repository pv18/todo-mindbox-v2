import { useMemo } from 'react';
import { useTodoContext } from 'context/TodoContext';
import { Button, Popconfirm, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

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
                <Popconfirm
                    placement='left'
                    title='Удалить завершенные задачи'
                    description='Вы действительно хотите удалить все завершенные задачи?'
                    onConfirm={onRemoveAllCompletedTodo}
                    okText='Да'
                    cancelText='Нет'
                >
                    <Tooltip
                        title={
                            !!completedCounter &&
                            `Удалить все завершенные задачи`
                        }
                        placement='topRight'
                    >
                        <Button
                            type='primary'
                            icon={<DeleteOutlined />}
                            danger
                            disabled={!completedCounter}
                            shape='circle'
                        />
                    </Tooltip>
                </Popconfirm>
            )}
        </>
    );
};
