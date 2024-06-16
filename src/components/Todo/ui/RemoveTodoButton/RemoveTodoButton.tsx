import {FC, memo} from 'react';
import { Button, Popconfirm, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

interface RemoveTodoButtonProps {
    deleteTask: () => void;
    disabled: boolean;
}

export const RemoveTodoButton: FC<RemoveTodoButtonProps> = memo( (props) => {
    const { disabled, deleteTask } = props;

    return (
        <Popconfirm
            placement='left'
            title='Удалить задачу'
            description='Вы действительно хотите удалить задачу?'
            onConfirm={deleteTask}
            okText='Да'
            cancelText='Нет'
        >
            <Tooltip title={!disabled && `Удалить задачу`}>
                <Button
                    type='primary'
                    icon={<DeleteOutlined />}
                    danger
                    disabled={disabled}
                />
            </Tooltip>
        </Popconfirm>
    );
})
