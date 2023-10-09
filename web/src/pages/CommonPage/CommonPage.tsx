import React from "react";
import { Wrapper } from "./styled";
import { Typography } from "antd";
import { ActionBar, Specialization } from "../../components";

export const CommonPage = () => {
  const { Title } = Typography;
  return (
    <Wrapper>
      <Title level={3}>Вопросы к собеседованию</Title>
      <Specialization />
      <ActionBar />
    </Wrapper>
  );
};
