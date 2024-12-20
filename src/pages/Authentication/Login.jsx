
import { Form, Input, Button, Typography } from "antd";

const Login = () => {
  const { Title } = Typography;

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",
      
      }}
    >
      {/* Left Image Section */}
      <div
        style={{
          flex: 1,
          backgroundImage: "url('/login.png')", // Path to your uploaded image
          backgroundSize: "cover",
          backgroundPosition: "center",
  
          width: "100%",
        }}
      ></div>

      {/* Right Login Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#ffffff",
          }}
        >
       
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
          
          </div>

          {/* Login Form */}
          <Title level={3} style={{ textAlign: "center", marginBottom: "20px" }}>
            Log in
          </Title>
          <Form
            layout="vertical"
            onFinish={(values) => {
              console.log("Login submitted: ", values);
            }}
          >
            {/* Email Input */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            {/* Password Input */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {/* Login Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#28a745",
                  borderColor: "#28a745",
                  width: "100%",
                }}
              >
                Login
              </Button>
            </Form.Item>

            {/* Forgot Password */}
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <a href="/forgot-password" style={{ color: "#28a745" }}>
                Forgot Password?
              </a>
            </div>
          </Form>

          {/* Terms and Privacy Links */}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "12px",
              color: "#666",
            }}
          >
            <a href="/terms" style={{ marginRight: "10px", color: "#666" }}>
              Terms & Conditions
            </a>
            <a href="/privacy" style={{ color: "#666" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
