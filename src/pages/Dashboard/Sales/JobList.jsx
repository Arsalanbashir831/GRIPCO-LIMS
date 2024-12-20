import React from "react";
import { Badge } from "antd";
import TableComponent from "../../../components/_common/TableComponent";

const JobList = () => {
  const data = [
    {
      id: 1,
      clientName: "John Doe",
      status: "Supervisor",
      quotationNumber: "Q12345",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      status: "Technician",
      quotationNumber: "Q67890",
    },
    {
      id: 3,
      clientName: "Sam Johnson",
      status: "Completed",
      quotationNumber: "Q11121",
    },
  ];

  const columns = [
    { header: "Job ID", accessor: "id" },
    { header: "Client Name", accessor: "clientName" },
    {
      header: "Job Status",
      accessor: "status",
      render: (status) => (
        <Badge
          status={
            status === "Supervisor"
              ? "processing"
              : status === "Technician"
              ? "warning"
              : "success"
          }
          text={status}
        />
      ),
    },
    { header: "Quotation Number", accessor: "quotationNumber" },
  ];

  const handleEdit = (row) => {
    alert(`Editing: ${row.clientName}`);
  };

  const handleDelete = (row) => {
    alert(`Deleting: ${row.clientName}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Job List</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <TableComponent
        userType={'sales'}
          data={data}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default JobList;
