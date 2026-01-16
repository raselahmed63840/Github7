// pages/Register.jsx
import { Form, Input, Button, message, Card, Divider } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Validate passwords match
    if (values.password !== values.confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExists = existing.find((u) => u.email === values.email);
    if (alreadyExists) {
      message.error("User with this email already exists!");
      return;
    }

    // Remove confirmPassword before storing
    const { confirmPassword, ...newUser } = values;

    localStorage.setItem("users", JSON.stringify([...existing, newUser]));
    message.success("Registration successful! Please login.");
    navigate("/login");
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
            Create Account
          </h1>
          <p style={{ margin: 0, color: "#666", fontSize: 14 }}>
            Register to access the system
          </p>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Full Name"
            rules={[
              { required: true, message: "Please enter your full name" },
              { min: 2, message: "Name must be at least 2 characters" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your full name"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Valid email required",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Enter your email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please enter a password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            rules={[
              { required: true, message: "Please confirm your password" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm your password"
              size="large"
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large">
            Register
          </Button>
        </Form>

        <Divider>OR</Divider>

        <p style={{ margin: 0, textAlign: "center", fontSize: 14 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#1890ff", fontWeight: 600 }}>
            Login here
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
