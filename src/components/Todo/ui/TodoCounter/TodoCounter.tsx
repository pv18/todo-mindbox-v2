import React, {FC, memo} from 'react';
import cls from './TodoCounter.module.scss';

interface TodoCounterProps {
    count:number
    title:string
    empty:string
}

export const TodoCounter:FC<TodoCounterProps> = memo( (props) => {
    const {count,title,empty} = props

    return (
        <>
            {count ? (
                <div className={cls.todoCounter}>
                    <span>{count}</span>
                    <p>{title}</p>
                </div>
            ) : (
                <div className={cls.todoCounter}>
                    <p>{empty}</p>
                </div>
            )}
        </>
    );
})

