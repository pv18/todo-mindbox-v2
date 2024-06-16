import { FC } from 'react';
import { Form, FormInstance, Input } from 'antd';
import { ValidationTypes } from 'enums';
import { TodoFormFieldType } from '../../model/types/todoTypes';

interface AddTodoFormProps {
    form: FormInstance<TodoFormFieldType>;
    submitForm: (value: TodoFormFieldType) => void;
    initialValues?: TodoFormFieldType;
}

export const TodoForm: FC<AddTodoFormProps> = (props) => {
    const { form, submitForm, initialValues } = props;

    return (
        <Form
            form={form}
            onFinish={submitForm}
            layout={'vertical'}
            initialValues={initialValues}
            autoComplete='off'
        >
            <Form.Item
                name='name'
                label={false}
                rules={[
                    { required: true, message: ValidationTypes.REQUIRED_FIELD },
                ]}
            >
                <Input placeholder='Название задачи' allowClear />
            </Form.Item>

            <Form.Item
                label={false}
                name='description'
                rules={[{ required: false }]}
            >
                <Input.TextArea
                    rows={4}
                    placeholder='Описание задачи'
                    allowClear
                />
            </Form.Item>
        </Form>
    );
};
