import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Table, Space } from "antd";
import * as XLSX from "xlsx";
import { useJobIdContext } from "../../../context/JobIdContext";

const { Option } = Select;

const CompileChecklist = () => {
  const [tests, setTests] = useState([]);
  const [checklist, setChecklist] = useState([]);
  const [testForm] = Form.useForm();
  const [checklistForm] = Form.useForm();

  const { selectedJob } = useJobIdContext();

  // Add test handler
  const handleAddTest = (values) => {
    setTests([...tests, { ...values, key: tests.length + 1 }]);
    testForm.resetFields();
  };

  // Add checklist row handler
  const handleAddChecklist = (values) => {
    setChecklist([...checklist, { ...values, key: checklist.length + 1 }]);
    checklistForm.resetFields();
  };

  // Download Excel handler
  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(checklist);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Checklist");
    XLSX.writeFile(workbook, "Checklist.xlsx");
  };

  // Test Table Columns
  const testColumns = [
    { title: "Sr #", dataIndex: "key", key: "key" },
    {
      title: "Test Description",
      dataIndex: "testDescription",
      key: "testDescription",
    },
    { title: "Requirements", dataIndex: "requirements", key: "requirements" },
    {
      title: "Completion Date",
      dataIndex: "completionDate",
      key: "completionDate",
    },
  ];

  // Checklist Table Columns
  const checklistColumns = [
    { title: "Sr #", dataIndex: "key", key: "key" },
    {
      title: "Activity Description",
      dataIndex: "activityDescription",
      key: "activityDescription",
    },
    {
      title: "Applicable Criteria",
      dataIndex: "applicableCriteria",
      key: "applicableCriteria",
    },
    { title: "Acceptable", dataIndex: "acceptable", key: "acceptable" },
    {
      title: "Not Applicable",
      dataIndex: "notApplicable",
      key: "notApplicable",
    },
    { title: "Rejected", dataIndex: "rejected", key: "rejected" },
    { title: "Remarks", dataIndex: "remarks", key: "remarks" },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex  gap-5">
        <h1 className="text-2xl font-semibold mb-4">Compile Checklist</h1>
      </div>
      {/* Test Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-medium mb-4">Create Test</h2>
        <Form form={testForm} layout="vertical" onFinish={handleAddTest}>
          <Form.Item
            label="Test Type/Description"
            name="testDescription"
            rules={[{ required: true, message: "Please select a test type!" }]}
          >
            <Select placeholder="Select Test">
              <Option value="Test 1">Test 1</Option>
              <Option value="Test 2">Test 2</Option>
              <Option value="Test 3">Test 3</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Requirements"
            name="requirements"
            rules={[{ required: true, message: "Please enter requirements!" }]}
          >
            <Input.TextArea placeholder="Enter requirements" rows={3} />
          </Form.Item>

          <Form.Item
            label="Target Completion Date"
            name="completionDate"
            rules={[
              {
                required: true,
                message: "Please select a target completion date!",
              },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Add Test
          </Button>
        </Form>
      </div>

      {/* Test Table */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-medium mb-4">Added Tests</h2>
        <Table
          columns={testColumns}
          dataSource={tests.map((test) => ({
            ...test,
            completionDate: test.completionDate
              ? test.completionDate.format("YYYY-MM-DD")
              : "N/A",
          }))}
          pagination={{ pageSize: 5 }}
        />
      </div>

      {/* Checklist Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-medium mb-4">Add Checklist Item</h2>
        <Form
          form={checklistForm}
          layout="vertical"
          onFinish={handleAddChecklist}
        >
          <Form.Item
            label="Activity Description"
            name="activityDescription"
            rules={[
              { required: true, message: "Please enter activity description!" },
            ]}
          >
            <Input placeholder="Enter activity description" />
          </Form.Item>

          <Form.Item
            label="Applicable Criteria"
            name="applicableCriteria"
            rules={[
              { required: true, message: "Please enter applicable criteria!" },
            ]}
          >
            <Input placeholder="Enter applicable criteria" />
          </Form.Item>

          <Form.Item label="Acceptable" name="acceptable">
            <Input placeholder="Enter acceptable criteria" />
          </Form.Item>

          <Form.Item label="Not Applicable" name="notApplicable">
            <Input placeholder="Enter not applicable criteria" />
          </Form.Item>

          <Form.Item label="Rejected" name="rejected">
            <Input placeholder="Enter rejected criteria" />
          </Form.Item>

          <Form.Item label="Remarks" name="remarks">
            <Input.TextArea placeholder="Enter remarks" rows={2} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Add Checklist Item
          </Button>
        </Form>
      </div>

      {/* Checklist Table */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-medium mb-4">Checklist</h2>
        <Table
          columns={checklistColumns}
          dataSource={checklist}
          pagination={{ pageSize: 5 }}
        />
        <Space className="mt-4">
          <Button type="primary" onClick={handleDownloadExcel}>
            Download as Excel
          </Button>
          <Button type="primary" onClick={handleDownloadExcel}>
            Submit to Technician
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default CompileChecklist;
