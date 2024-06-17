import { useMemo } from 'react';
import { TodoFilterValueTypes } from 'enums';
import { useTodoContext } from 'context/TodoContext';
import { TodoItem } from '../TodoItem';
import { OptionsPanelTodo } from '../OptionsPanelTodo';
import { Todo } from '../../model/types/todoTypes';
import { Divider } from 'antd';
import cls from './TodoList.module.scss';

export const TodoList = () => {
    const {
        state: { todos, filter },
    } = useTodoContext();

    const filteredTodos: Todo[] = useMemo(() => {
        switch (filter) {
            case TodoFilterValueTypes.ACTIVE:
                return todos.filter((todo) => !todo.completed);
            case TodoFilterValueTypes.COMPLETED:
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    }, [todos, filter]);

    return (
        <div className={cls.wrapper}>
            <h2 className={cls.title}>Список дел</h2>
            <OptionsPanelTodo />
            <Divider rootClassName={cls.divider} />
            <ul className={cls.todoList}>
                {filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
        </div>
    );
};
