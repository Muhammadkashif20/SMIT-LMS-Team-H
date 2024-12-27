import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const [form] = Form.useForm();
  function handleLogin(values) {
    console.log("emailValue=>", values.email);
    console.log("passValue=>", values.password);
    form.resetFields("")
    navigate("/Dashboard")
  }
  return (
    <div
      style={{
        marginTop: "-15rem",
        marginRight: "5rem",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        title="Login to Your Account"
        bordered={false}
        style={{ width: 400 }}
        headStyle={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <Form
          form={form}
          name="loginForm"
          layout="vertical"
          style={{ marginTop: 16 }}
          autoComplete="off"
          onFinish={handleLogin}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              placeholder="Enter your email"
              style={{ padding: "10px" }}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              style={{ padding: "10px" }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              block
              style={{ fontWeight: "bold", marginTop: "10px" }}
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center", marginTop: 10 }}>
          <span>
            Don't have an account?{" "}
            <a href="#" style={{ color: "#1890ff" }}>
              Register now
            </a>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
