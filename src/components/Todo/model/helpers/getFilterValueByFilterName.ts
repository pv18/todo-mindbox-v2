import { TodoFilterNameTypes, TodoFilterValueTypes } from 'enums';

export const getFilterValueByFilterName = (
    value: TodoFilterNameTypes
): TodoFilterValueTypes => {
    switch (value) {
        case TodoFilterNameTypes.ACTIVE:
            return TodoFilterValueTypes.ACTIVE;
        case TodoFilterNameTypes.COMPLETED:
            return TodoFilterValueTypes.COMPLETED;
        default:
            return TodoFilterValueTypes.ALL;
    }
};
