import { Layout } from "antd";
import Sidebar from "../../components/_common/Sidebar";
import DashboardHeader from "../../components/_common/DashboardHeader";
import { Outlet, useParams } from "react-router";
import SupervisorDashboard from "./Supervisors/SupervisorDashboard";
import SalesDashboard from "./Sales/SalesDashboard";
import LabTechnicianDashboard from "./LabTechnician/LabTechnicianDashboard";
import AdminDashboard from "./Admin/AdminDashboard";
import { SidebarProvider } from "../../context/SidebarContext";
import JobIdProvider from "../../context/JobIdContext";


const DashboardLayout = () => {
  const { type } = useParams();

  const dashboardType = (type) => {
    switch (type) {
      case "sales":
        return <SalesDashboard />;
      case "labtechnician":
        return <LabTechnicianDashboard />;
      case "supervisor":
        return <SupervisorDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <SalesDashboard />;
    }
  };

  return (
    <SidebarProvider>
    <JobIdProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar type={type} />
        <Layout>
          <DashboardHeader type={type} />
          {dashboardType(type)}
        </Layout>
      </Layout>
    </JobIdProvider>
    </SidebarProvider>
  );
};

export default DashboardLayout;
