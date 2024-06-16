import { useState } from 'react';
import { Button, Form, FormProps, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { TodoForm } from '../TodoForm';
import { useTodoContext } from 'context/TodoContext';
import { Todo, TodoFormFieldType } from 'components';
import { generateUniqueId } from 'helpers';
import cls from './AddTodoButton.module.scss';

export const AddTodoButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { dispatch } = useTodoContext();
    const [form] = Form.useForm();
    const taskName = Form.useWatch('name', form);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    const onSubmit: FormProps<TodoFormFieldType>['onFinish'] = (data) => {
        const { name, description } = data;
        const id = generateUniqueId();

        const newTodo: Todo = {
            id,
            name,
            description,
            completed: false,
        };

        dispatch({ type: 'ADD_TODO', todo: newTodo });
        handleCancel();
    };

    return (
        <>
            <div className={cls.wrapper}>
                <Button
                    type='primary'
                    shape='circle'
                    icon={<PlusOutlined />}
                    onClick={showModal}
                />
                <p>Добавить задачу</p>
            </div>
            <Modal
                title={<h3 className={cls.modalTitle}>Добавить задачу</h3>}
                open={isModalOpen}
                onCancel={handleCancel}
                maskClosable={false}
                footer={
                    <div className={cls.actionButtons}>
                        <Button onClick={handleCancel}>Отмена</Button>
                        <Button
                            type={'primary'}
                            onClick={form.submit}
                            disabled={!taskName}
                        >
                            Добавить Задачу
                        </Button>
                    </div>
                }
            >
                <TodoForm form={form} submitForm={onSubmit} />
            </Modal>
        </>
    );
};
