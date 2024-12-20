import React, { useState } from "react";
import {
  LogoutOutlined,
  FileAddFilled,
  OrderedListOutlined,
  SyncOutlined,
  SafetyCertificateOutlined,
  FileDoneOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useSidebarContext } from "../../context/SidebarContext";

const Sidebar = ({ type }) => {
  const { Sider } = Layout;
  const { updateSelectedValue } = useSidebarContext(); // Access context
  const [collapsed, setCollapsed] = useState(false);
  
  const getMenuItems = () => {
    if (type === "sales") {
      return [
        {
          key: "1",
          icon: <OrderedListOutlined />,
          label: "Job Lists",
          value: "joblist",
        },
        {
          key: "2",
          icon: <FileAddFilled />,
          label: "Add Job",
          value: "addJob",
        },
        {
          key: "3",
          icon: <SyncOutlined />,
          label: "Job Traceability",
          value: "jobtraceability",
        },
      ];
    } else if (type ==='supervisor'){
      return [
        {
          key: "1",
          icon: <OrderedListOutlined />,
          label: "Job Checklist",
          value: "jobchecklist",
        },
        {
          key: "2",
          icon: <SyncOutlined />,
          label: "Job Traceability",
          value: "jobtraceability",
        },
        {
          key: "3",
          icon: <FileDoneOutlined />,
          label: "Test Certificates",
          value: "testcertificates",
        },
      ];
    }
    else if (type ==='labtechnician'){
      return [
      
        {
          key: "1",
          icon: <SafetyCertificateOutlined />,
          label: "Test Certificates",
          value: "testcertificates",
        },
      ];
    }
    return [
      {
        key: "4",
        icon: <LogoutOutlined />,
        value: "logout",
        label: "Logout",
      },
    ];
  };

  const handleMenuClick = ({ item }) => {
    updateSelectedValue(item.props.value); 
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        backgroundColor: "#001529",
      }}
    >
      <div
        style={{
          height: "64px",
          margin: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          color: "white",
        }}
      >
        <img src="/logo_gripco.png" alt="Logo" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={getMenuItems()}
        onClick={handleMenuClick} // Handle menu clicks
      />
    </Sider>
  );
};

export default Sidebar;
