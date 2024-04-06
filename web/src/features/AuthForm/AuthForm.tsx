import React, { useState } from "react";
import { Wrapper } from "./styled";
import { Button, Form, Input } from "antd";
export const AuthForm = () => {
  const [form] = Form.useForm();
  const [isLogin, setLoginStatus] = useState(true);
  const headerText = isLogin ? "Авторизация" : "Регистрация";
  const textButton = isLogin ? "Login" : "Registration";

  return (
    <Wrapper>
      <h4>{headerText}</h4>
      <Form form={form} layout="horizontal">
        <Form.Item name="login">
          <Input placeholder="Login" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary"> {textButton} </Button>
        </Form.Item>
        {isLogin && (
          <p>
            No account?
            <Button
              type="link"
              onClick={() => {
                setLoginStatus(false);
              }}
            >
              Registration
            </Button>
          </p>
        )}
        {!isLogin && (
          <p>
            Have account?
            <Button
              type="link"
              onClick={() => {
                setLoginStatus(true);
              }}
            >
              Login
            </Button>
          </p>
        )}
      </Form>
    </Wrapper>
  );
};
