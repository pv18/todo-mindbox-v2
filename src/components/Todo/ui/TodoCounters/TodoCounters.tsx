import { getDeclension } from 'helpers';
import { useMemo } from 'react';
import { useTodoContext } from 'context/TodoContext';
import { Todo } from '../../model/types/todoTypes';
import {TodoCounter} from '../TodoCounter';
import cls from './TodoCounters.module.scss';

const ACTIVE_WORDS: string[] = ['активная', 'активные', 'активных'];
const COMPLETED_WORDS: string[] = ['завершенная', 'завершенные', 'завершенных'];
const TASK_WORDS: string[] = ['задача', 'задачи', 'задач'];

export const TodoCounters = () => {
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

    const completedCounter = useMemo(() => todos.length - uncompletedCounter, [todos, uncompletedCounter]);

    return (
        <div className={cls.todoCounters}>
            <TodoCounter
                count={uncompletedCounter}
                title={
                    `${getDeclension(uncompletedCounter, ACTIVE_WORDS)}
                      ${getDeclension(uncompletedCounter, TASK_WORDS)}`
                }
                empty={'Нет активных задач'}
            />
            <TodoCounter
                count={completedCounter}
                title={
                    `${getDeclension(completedCounter, COMPLETED_WORDS)}
                      ${getDeclension(completedCounter, TASK_WORDS)}`
                }
                empty={'Нет завершенных задач'}
            />
        </div>
    );
};
