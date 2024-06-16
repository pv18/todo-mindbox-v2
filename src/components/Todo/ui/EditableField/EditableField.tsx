import React, { FC, KeyboardEvent, memo } from 'react';
import { Input } from 'antd';
import cls from './EditableField.module.scss';

interface EditableFieldProps {
    completed: boolean;
    onChange: (newValue: string) => void;
    editMode: boolean;
    setEditMode: (value: boolean) => void;
    title: string;
    setTitle: (value: string) => void;
}

export const EditableField: FC<EditableFieldProps> = memo((props) => {
    const { onChange, completed, editMode, setEditMode, title, setTitle } =
        props;

    const changeFieldValue = () => {
        onChange(title);
        setEditMode(false);
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            changeFieldValue();
        }
    };

    return (
        <div className={cls.wrapper}>
            {editMode ? (
                <Input
                    className={cls.input}
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    onBlur={changeFieldValue}
                    onKeyDown={onKeyDownHandler}
                    autoFocus
                    allowClear
                />
            ) : (
                <h4 className={`${cls.name} ${completed && cls.checked}`}>
                    {title}
                </h4>
            )}
        </div>
    );
});
