import { FC, memo, useCallback, useState } from 'react';
import { useTodoContext } from 'context/TodoContext';
import { RemoveTodoButton } from '../RemoveTodoButton';
import { ChangeTodoButton } from '../ChangeTodoButton';
import { EditableField } from '../EditableField';
import { Checkbox } from 'antd';
import cls from './TodoItem.module.scss';

interface TodoItemProps {
    id: string;
    name: string;
    completed: boolean;
}

export const TodoItem: FC<TodoItemProps> = memo((props) => {
    const { id, name, completed } = props;
    const [isEditMode, setEditMode] = useState(false);
    const [title, setTitle] = useState<string>(name);
    const { dispatch } = useTodoContext();

    // Включить режим редактирования
    const showEditMode = useCallback(() => {
        setEditMode(true);
    }, []);

    // Изменить статус задачи
    const toggleTodo = () => {
        dispatch({ type: 'TOGGLE_TODO', id });
    };

    // Удалить задачу
    const deleteTodo = useCallback(() => {
        dispatch({ type: 'DELETE_TODO', id });
    }, []);

    // Изменить задачу
    const changedTodo = useCallback((newValue: string) => {
        if (name !== newValue && !!newValue.trim().length) {
            dispatch({ type: 'CHANGE_TODO', id, name: newValue });
        } else {
            setTitle(name);
        }
    }, []);

    return (
        <li className={cls.todo}>
            <div className={cls.leftBlock}>
                <Checkbox
                    checked={completed}
                    onChange={toggleTodo}
                    disabled={isEditMode}
                />
                <EditableField
                    title={title}
                    setTitle={setTitle}
                    onChange={changedTodo}
                    completed={completed}
                    editMode={isEditMode}
                    setEditMode={setEditMode}
                />
            </div>
            <div className={cls.actionButtons}>
                <ChangeTodoButton
                    onClick={showEditMode}
                    disabled={completed || isEditMode}
                />
                <RemoveTodoButton
                    deleteTask={deleteTodo}
                    disabled={completed || isEditMode}
                />
            </div>
        </li>
    );
});
