import { Checkbox, Space, Typography } from "antd";
import React from "react";
import { questionsList } from "../../__fixtures__/questionsList";
import { Wrapper } from "./styled";
import { QuestionItem } from "../QuestionItem";
import { useGate } from "effector-react";
import { QuestionListGate } from "../../models/QuestionsList";

export const QuestionsList = () => {
  const { Title } = Typography;

  useGate(QuestionListGate);

  return (
    <Wrapper>
      <Checkbox.Group
        onChange={(dsa) => {
          console.log(dsa);
        }}
      >
        <Title level={4}>Junior</Title>
        <Space size={8} direction="vertical">
          {questionsList.junior.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </Space>
        <Title level={4}>Middle</Title>
        <Space size={8} direction="vertical">
          {questionsList.middle.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </Space>
        <Title level={4}>Senior</Title>
        <Space size={8} direction="vertical">
          {questionsList.senior.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </Space>
      </Checkbox.Group>
    </Wrapper>
  );
};
