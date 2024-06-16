import { TodoFilterNameTypes } from 'enums';
import { useTodoContext } from 'context/TodoContext';
import { TodoFilterNameType } from '../../model/types/todoTypes';
import {
    getFilterNameByFilterValue,
    getFilterValueByFilterName,
} from '../../model/helpers';
import { Segmented } from 'antd';

const OPTIONS: TodoFilterNameTypes[] = [
    TodoFilterNameTypes.ALL,
    TodoFilterNameTypes.ACTIVE,
    TodoFilterNameTypes.COMPLETED,
];

export const TodoFilter = () => {
    const {
        state: { filter },
        dispatch,
    } = useTodoContext();

    const changeFilter = (value: TodoFilterNameType) => {
        const newFilter = getFilterValueByFilterName(value);

        dispatch({
            type: 'CHANGE_FILTER',
            newFilter: newFilter,
        });
    };

    return (
        <Segmented<string>
            options={OPTIONS}
            value={getFilterNameByFilterValue(filter)}
            onChange={(value) => changeFilter(value as TodoFilterNameType)}
        />
    );
};
