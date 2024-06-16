import { TodoFilterType } from '../types/todoTypes';
import { TodoFilterNameTypes, TodoFilterValueTypes } from 'enums';

export const getFilterNameByFilterValue = (
    value: TodoFilterType
): TodoFilterNameTypes => {
    switch (value) {
        case TodoFilterValueTypes.ACTIVE:
            return TodoFilterNameTypes.ACTIVE;
        case TodoFilterValueTypes.COMPLETED:
            return TodoFilterNameTypes.COMPLETED;
        default:
            return TodoFilterNameTypes.ALL;
    }
};
