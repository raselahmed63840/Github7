// pages/Register.jsx
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const existing = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExists = existing.find((u) => u.email === values.email);
    if (alreadyExists) {
      message.error("User already exists!");
      return;
    }
    localStorage.setItem("users", JSON.stringify([...existing, values]));
    message.success("Registration successful!");
    navigate("/login");
  };

  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 400, margin: "auto", marginTop: 50 }}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
