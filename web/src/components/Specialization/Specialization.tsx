import React from "react";
import { Tabs } from "antd";
import { Wrapper } from "./styled";
import { SpecializationVariants } from "../../consts";
import { QuestionsList } from "../QuestionsList";

export const Specialization = () => {
  const items = [
    {
      key: SpecializationVariants.FE,
      label: "Frontend",
      children: <QuestionsList />,
    },
    {
      key: SpecializationVariants.BE,
      label: "Backend",
      children: "Backend content",
    },
  ];

  return (
    <Wrapper>
      <Tabs defaultActiveKey={SpecializationVariants.FE} items={items} />
    </Wrapper>
  );
};
