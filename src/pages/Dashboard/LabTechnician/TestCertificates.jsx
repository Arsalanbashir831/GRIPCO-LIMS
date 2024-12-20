import React from "react";
import TableComponent from "../../../components/_common/TableComponent";
import { Badge } from "antd";

const TestCertificates = () => {
  const data = [
    {
      id: 1,
      status: "Pending",
      quotationNumber: "Q12345",
    },
    {
      id: 2,
      status: "Pending",
      quotationNumber: "Q67890",
    },
    {
      id: 3,
      status: "Complete",
      quotationNumber: "Q11121",
    },
  ];

  const columns = [
    { header: "Job ID", accessor: "id" },
    {
      header: "Job Status",
      accessor: "status",
      render: (status) => (
        <Badge
          status={status === "Pending" ? "warning" : "success"}
          text={status}
        />
      ),
    },
    { header: "Quotation Number", accessor: "quotationNumber" },
  ];

  const handleEdit = (row) => {
    alert(`Editing Job ID: ${row.id}`);
  };

  const handleDelete = (row) => {
    alert(`Deleting Job ID: ${row.id}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Test Certificates </h1>
        <TableComponent
          userType={"labtechnician"}
          data={data}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TestCertificates;
