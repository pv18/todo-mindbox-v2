import { FC, memo } from 'react';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

interface ChangeTodoButtonProps {
    disabled?: boolean;
    onClick?: () => void;
}

export const ChangeTodoButton: FC<ChangeTodoButtonProps> = memo((props) => {
    const { disabled, onClick } = props;

    return (
        <Button
            type='primary'
            icon={<EditOutlined />}
            onClick={onClick}
            disabled={disabled}
        />
    );
});
