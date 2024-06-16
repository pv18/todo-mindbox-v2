import { FC, memo } from 'react';
import { useTodoContext } from 'context/TodoContext';
import { RemoveTodoButton } from '../RemoveTodoButton';
import { ChangeTodoButton } from '../ChangeTodoButton';
import { Checkbox } from 'antd';
import cls from './TodoItem.module.scss';

interface TodoItemProps {
    id: string;
    name: string;
    description?: string;
    completed: boolean;
}

export const TodoItem: FC<TodoItemProps> = memo((props) => {
    const { id, name, completed, description } = props;
    const { dispatch } = useTodoContext();

    const toggleTodo = () => {
        dispatch({ type: 'TOGGLE_TODO', id });
    };

    const deleteTodo = () => {
        dispatch({ type: 'DELETE_TODO', id });
    };

    return (
        <li className={cls.todo}>
            <div className={cls.leftBlock}>
                <Checkbox checked={completed} onChange={toggleTodo} />
                <div className={cls.content}>
                    <h4 className={`${cls.name} ${completed && cls.checked}`}>
                        {name}
                    </h4>
                    <p className={cls.description}>{description}</p>
                </div>
            </div>
            <div className={cls.rightBlock}>
                <ChangeTodoButton
                    id={id}
                    checked={completed}
                    name={name}
                    description={description}
                />
                <RemoveTodoButton
                    deleteTask={deleteTodo}
                    disabled={completed}
                />
            </div>
        </li>
    );
});
