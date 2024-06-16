import { ActiveTaskCounter } from '../ActiveTaskCounter';
import { AddTodoButton } from '../AddTodoButton';
import { RemoveAllCompletedTodoButton } from '../RemoveAllCompletedTodoButton';
import { TodoFilter } from '../TodoFilter';
import cls from './OptionsPanelTodo.module.scss';

export const OptionsPanelTodo = () => {
    return (
        <div className={cls.optionPanel}>
            <div className={cls.row}>
                <AddTodoButton />
                <RemoveAllCompletedTodoButton />
            </div>
            <div className={cls.row}>
                <ActiveTaskCounter />
                <TodoFilter />
            </div>
        </div>
    );
};
