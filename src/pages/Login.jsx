// pages/Login.jsx
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onFinish = ({ email, password }) => {
    // Get registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Trim input to avoid space issues
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Match user
    const matchedUser = users.find(
      (u) => u.email === trimmedEmail && u.password === trimmedPassword
    );

    if (matchedUser) {
      login(matchedUser); // Save to AuthContext + localStorage
      message.success("Login successful!");
      navigate("/dashboard");
    } else {
      message.error("Invalid email or password!");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", marginTop: 80 }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Login</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, type: "email", message: "Valid email required" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
