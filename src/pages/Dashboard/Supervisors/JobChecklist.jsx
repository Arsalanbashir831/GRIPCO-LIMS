import React from "react";
import TableComponent from "../../../components/_common/TableComponent";
import { Button } from "antd";

const JobChecklist = () => {
  const data = [
    {
      id: 1,
      clientName: "John Doe",
      quotationNumber: "Q12345",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      quotationNumber: "Q67890",
    },
    {
      id: 3,
      clientName: "Sam Johnson",
      quotationNumber: "Q11121",
    },
  ];

  const columns = [
    { header: "Job ID", accessor: "id" },
    { header: "Client Name", accessor: "clientName" },
    { header: "Quotation Number", accessor: "quotationNumber" },
  ];

  const handleEdit = (row) => {
    alert(`Editing: ${row.clientName}`);
  };

  const handleDelete = (row) => {
    alert(`Deleting: ${row.clientName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Received Jobs</h1>
        </div>
        <TableComponent
          userType={"supervisor"}
          data={data}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default JobChecklist;
