import { getDeclension } from 'helpers';
import { FC, memo } from 'react';
import { TodoCounter } from '../TodoCounter';
import cls from './TodoCounters.module.scss';

const ACTIVE_WORDS: string[] = ['активная', 'активные', 'активных'];
const COMPLETED_WORDS: string[] = ['завершенная', 'завершенные', 'завершенных'];
const TASK_WORDS: string[] = ['задача', 'задачи', 'задач'];

interface TodoCountersProps {
    uncompletedCounter: number;
    completedCounter: number;
}

export const TodoCounters: FC<TodoCountersProps> = memo((props) => {
    const { uncompletedCounter, completedCounter } = props;

    return (
        <div className={cls.todoCounters}>
            <TodoCounter
                count={uncompletedCounter}
                title={`${getDeclension(uncompletedCounter, ACTIVE_WORDS)}
                      ${getDeclension(uncompletedCounter, TASK_WORDS)}`}
                empty={'Нет активных задач'}
            />
            <TodoCounter
                count={completedCounter}
                title={`${getDeclension(completedCounter, COMPLETED_WORDS)}
                      ${getDeclension(completedCounter, TASK_WORDS)}`}
                empty={'Нет завершенных задач'}
            />
        </div>
    );
});
