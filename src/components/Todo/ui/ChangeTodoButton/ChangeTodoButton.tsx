import {FC, memo, useState} from 'react';
import { useTodoContext } from 'context/TodoContext';
import { TodoFormFieldType } from '../../model/types/todoTypes';
import { TodoForm } from '../TodoForm/TodoForm';
import { Button, Form, FormProps, Modal, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import cls from './ChangeTodoButton.module.scss';

interface ChangeTodoButtonProps {
    id: string;
    name: string;
    description: string | undefined;
    checked: boolean;
}

export const ChangeTodoButton: FC<ChangeTodoButtonProps> = memo((props) => {
    const { id, name, description, checked } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { dispatch } = useTodoContext();
    const [form] = Form.useForm();
    const taskName = Form.useWatch('name', form);
    const taskDescription = Form.useWatch('description', form);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSubmit: FormProps<TodoFormFieldType>['onFinish'] = (data) => {
        const { name, description } = data;

        dispatch({ type: 'CHANGE_TODO', id, name, description });
        handleCancel();
    };

    return (
        <>
            <Tooltip title={!checked && `Изменить задачу`}>
                <Button
                    type='primary'
                    icon={<EditOutlined />}
                    onClick={showModal}
                    disabled={checked}
                />
            </Tooltip>
            <Modal
                title={<h3 className={cls.modalTitle}>Изменить задачу</h3>}
                open={isModalOpen}
                onCancel={handleCancel}
                maskClosable={false}
                footer={
                    <div className={cls.actionButtons}>
                        <Button onClick={handleCancel}>Отмена</Button>
                        <Button
                            type={'primary'}
                            onClick={form.submit}
                            disabled={
                                taskName === name &&
                                taskDescription === description
                            }
                        >
                            Изменить задачу
                        </Button>
                    </div>
                }
            >
                <TodoForm
                    form={form}
                    submitForm={onSubmit}
                    initialValues={{ name: name, description: description }}
                />
            </Modal>
        </>
    );
})
