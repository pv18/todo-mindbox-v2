import { useState, KeyboardEvent } from 'react';
import { Button, Input, Space } from 'antd';
import { useTodoContext } from 'context/TodoContext';
import { generateUniqueId } from 'helpers';
import { Todo } from '../../model/types/todoTypes';
import cls from './AddTodoButton.module.scss';

export const AddTodoButton = () => {
    const { dispatch } = useTodoContext();
    const [input, setInput] = useState<string>('');

    const onAddTodo = () => {
        if (input.trim().length) {
            const id = generateUniqueId();

            const newTodo: Todo = {
                id,
                name: input,
                completed: false,
            };

            dispatch({ type: 'ADD_TODO', todo: newTodo });
            setInput('');
        }
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onAddTodo();
        }
    };

    return (
        <div className={cls.addTodoButton}>
            <Space.Compact>
                <Input
                    className={cls.input}
                    value={input}
                    onChange={(e) => setInput(e.currentTarget.value)}
                    onKeyDown={onKeyDownHandler}
                    placeholder={'Добавить задачу'}
                    allowClear
                />
                <Button
                    type='primary'
                    onClick={onAddTodo}
                    disabled={!input.length}
                >
                    Добавить
                </Button>
            </Space.Compact>
        </div>
    );
};
