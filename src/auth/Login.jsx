import React from "react";
import { Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  function handleLogin(values) {
    console.log("emailValue=>", values.email);
    console.log("passValue=>", values.password);
    form.resetFields("");
    navigate("/Student/Dashboard");
  }

  return (
    <div className="flex justify-between items-center h-screen px-12 bg-gray-100">
      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-semibold mb-4">
          Login into Your SMIT Students Portal 🔒
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to the SMIT LMS Portal! Please Login & Move To Students
          Dashboard.
        </p>
      </div>

      {/* Right Section */}
      <Card
        title="Login to Your Account"
        bordered={false}
        className="w-full max-w-sm shadow-lg rounded-xl text-center"
      >
        <Form
          form={form}
          name="loginForm"
          layout="vertical"
          className="mt-4"
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
              className="p-3 rounded-md"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="p-3 rounded-md"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              block
              className="font-bold mt-4 bg-blue-500 border-none p-3 rounded-md"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-3">
          <span>
            Don't have an account?{" "}
            <a href="#" className="text-blue-500">
              Register now
            </a>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
