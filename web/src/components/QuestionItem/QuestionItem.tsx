import React from "react";
import { FC } from "react";
import { QuestionItemProps } from "./types";
import { Wrapper } from "./styled";
import { Button, Checkbox, Collapse } from "antd";

export const QuestionItem: FC<QuestionItemProps> = ({ question }) => {
  const item = [
    { key: question.id, label: "Ответ", children: <p>{question.answer}</p> },
  ];

  return (
    <Wrapper>
      <Checkbox value={question.id}>{question.label}</Checkbox>
      <Collapse ghost items={item} />
    </Wrapper>
  );
};
