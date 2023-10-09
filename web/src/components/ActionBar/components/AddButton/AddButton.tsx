import React, { useState } from "react";
import { Button, Form, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { DifficultOptions } from "./consts";
import { DifficultQuestion } from "../../../../consts/DifficultQuestion";
import { FormValues } from "./types";

export const AddButton = () => {
  const [visibleModal, setVisible] = useState(false);
  const [form] = Form.useForm<FormValues>();

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
        type="primary"
      >
        Добавить вопрос
      </Button>
      <Modal
        title="Добавить новый вопрос"
        open={visibleModal}
        onCancel={() => {
          setVisible(false);
        }}
        cancelText="Отменить"
        okText="Добавить"
        onOk={() => {
          console.log(form.getFieldsValue());
        }}
      >
        <Form
          form={form}
          name="new_question"
          initialValues={{ difficult: DifficultQuestion.JUNIOR }}
        >
          <Form.Item label="Сложность" name="difficult">
            <Select options={DifficultOptions} />
          </Form.Item>
          <Form.Item label="Вопрос" name="question">
            <TextArea />
          </Form.Item>
          <Form.Item label="Ответ" name="answer">
            <TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
