
import { Layout, Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";

const DashboardHeader = ({type}) => {
  const { Header } = Layout;

  // Dropdown menu for the avatar
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        backgroundColor: "#ffffff",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
  
      <div style={{ fontSize: "18px", fontWeight: "500" }}>
        Welcome to {type.charAt(0).toUpperCase()+ type.slice(1)} Dashboard
      </div>

      {/* Right Section: Avatar with Dropdown */}
      <div>
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Avatar
            size="large"
            style={{
              backgroundColor: "#3EB489",
              cursor: "pointer",
            }}
          >
            U
          </Avatar>
        </Dropdown>
      </div>
    </Header>
  );
};

export default DashboardHeader;
