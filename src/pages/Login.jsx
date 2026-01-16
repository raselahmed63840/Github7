// pages/Login.jsx
import { Form, Input, Button, message, Card, Divider, Space } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
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
      (u) => u.email === trimmedEmail && u.password === trimmedPassword,
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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ margin: "0 0 8px 0", color: "#1890ff", fontSize: 28 }}>
            Employee Management System
          </h1>
          <p style={{ margin: 0, color: "#666", fontSize: 14 }}>
            Login to your account
          </p>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Valid email required",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              size="large"
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large">
            Login
          </Button>
        </Form>

        <Divider>OR</Divider>

        <Space direction="vertical" style={{ width: "100%" }}>
          <p style={{ margin: 0, textAlign: "center", fontSize: 14 }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#1890ff", fontWeight: 600 }}>
              Register here
            </Link>
          </p>
        </Space>

        <div
          style={{
            marginTop: 24,
            padding: 12,
            backgroundColor: "#e6f7ff",
            borderRadius: 4,
            fontSize: 12,
            color: "#0050b3",
          }}
        >
          <strong>Demo Credentials:</strong>
          <p style={{ margin: "4px 0" }}>Email: user@example.com</p>
          <p style={{ margin: "4px 0" }}>Password: password123</p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
