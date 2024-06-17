import { useMemo } from 'react';
import { TodoCounters } from '../TodoCounters';
import { AddTodoButton } from '../AddTodoButton';
import { RemoveAllCompletedTodoButton } from '../RemoveAllCompletedTodoButton';
import { TodoFilter } from '../TodoFilter';
import { useTodoContext } from 'context/TodoContext';
import { Todo } from '../../model/types/todoTypes';
import cls from './OptionsPanelTodo.module.scss';

export const OptionsPanelTodo = () => {
    const {
        state: { todos },
    } = useTodoContext();

    const uncompletedCounter = useMemo(() => {
        return todos.reduce((acc: number, todo: Todo) => {
            if (!todo.completed) {
                return acc + 1;
            }
            return acc;
        }, 0);
    }, [todos]);

    const completedCounter = useMemo(
        () => todos.length - uncompletedCounter,
        [todos, uncompletedCounter]
    );

    return (
        <div className={cls.optionPanel}>
            <div className={cls.row}>
                <AddTodoButton />
                {!!completedCounter && <RemoveAllCompletedTodoButton />}
            </div>
            <div className={cls.row}>
                <TodoCounters
                    uncompletedCounter={uncompletedCounter}
                    completedCounter={completedCounter}
                />
                <TodoFilter />
            </div>
        </div>
    );
};
