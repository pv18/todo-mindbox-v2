import { getDeclension } from 'helpers';
import { useMemo } from 'react';
import { useTodoContext } from 'context/TodoContext';
import { SmileOutlined } from '@ant-design/icons';
import { Todo } from '../../model/types/todoTypes';
import cls from './ActiveTaskCounter.module.scss';

const FIRST_WORD: string[] = ['активная', 'активные', 'активных'];
const SECOND_WORD: string[] = ['задача', 'задачи', 'задач'];

export const ActiveTaskCounter = () => {
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

    return (
        <>
            {uncompletedCounter ? (
                <div className={cls.counter}>
                    <span>{uncompletedCounter}</span>
                    <p>
                        {`${getDeclension(uncompletedCounter, FIRST_WORD)}
                             ${getDeclension(uncompletedCounter, SECOND_WORD)}`}
                    </p>
                </div>
            ) : (
                <div className={cls.counter}>
                    <p>Нет активных задач</p>
                    <SmileOutlined style={{ fontSize: 20 }} />
                </div>
            )}
        </>
    );
};
