import React, { useState } from "react";
import { Button, Select, Table, Input, Upload, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const TestCompilation = () => {
  const [selectedTests, setSelectedTests] = useState([]);
  const [activeTest, setActiveTest] = useState(null);

  const dynamicTestTable = [
    { id: 1, testName: "Test 1", columnName: ["Column A", "Column B", "Column C"] },
    { id: 2, testName: "Test 2", columnName: ["Column X", "Column Y"] },
    { id: 3, testName: "Test 3", columnName: ["Column 1", "Column 2", "Column 3", "Column 4"] },
  ];

  const handleSelectTest = (testId) => {
    const test = dynamicTestTable.find((item) => item.id === parseInt(testId));
    if (test) {
      setSelectedTests([...selectedTests, { ...test, rows: [] }]);
      setActiveTest(null); // Close selection dropdown after adding
    }
  };

  const handleAddRow = (testId) => {
    const updatedTests = selectedTests.map((test) => {
      if (test.id === testId) {
        const newRow = {
          images: [], // Initialize an empty array for uploaded images
        };
        test.columnName.forEach((col) => {
          newRow[col] = ""; // Initialize empty values for each column
        });
        return { ...test, rows: [...test.rows, newRow] };
      }
      return test;
    });
    setSelectedTests(updatedTests);
  };

  const handleInputChange = (testId, rowIndex, column, value) => {
    const updatedTests = selectedTests.map((test) => {
      if (test.id === testId) {
        const updatedRows = test.rows.map((row, index) => {
          if (index === rowIndex) {
            return { ...row, [column]: value };
          }
          return row;
        });
        return { ...test, rows: updatedRows };
      }
      return test;
    });
    setSelectedTests(updatedTests);
  };

  const handleUpload = (testId, rowIndex, fileList) => {
    const updatedTests = selectedTests.map((test) => {
      if (test.id === testId) {
        const updatedRows = test.rows.map((row, index) => {
          if (index === rowIndex) {
            return { ...row, images: fileList };
          }
          return row;
        });
        return { ...test, rows: updatedRows };
      }
      return test;
    });
    setSelectedTests(updatedTests);
  };

  const handleRemoveTest = (testId) => {
    const updatedTests = selectedTests.filter((test) => test.id !== testId);
    setSelectedTests(updatedTests);
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", selectedTests);
    // Replace this with an API call to submit the data
    // Example: axios.post('/api/submit', selectedTests);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Test Compilation</h1>

      {/* Add Test Section */}
      <div className="mb-4">
        <Select
          placeholder="Select a Test"
          style={{ width: 200 }}
          onChange={handleSelectTest}
        >
          {dynamicTestTable.map((test) => (
            <Option key={test.id} value={test.id}>
              {test.testName}
            </Option>
          ))}
        </Select>
      </div>

      {/* Display Dynamic Tables */}
      {selectedTests.map((test) => (
        <div key={test.id} className="mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-2">{test.testName}</h2>
            <Button
              type="primary"
              danger
              onClick={() => handleRemoveTest(test.id)}
            >
              Remove Test
            </Button>
          </div>
          <Button
            type="dashed"
            onClick={() => handleAddRow(test.id)}
            className="mb-2"
          >
            + Add Row
          </Button>
          <Table
            dataSource={test.rows.map((row, index) => ({
              ...row,
              key: index,
            }))}
            columns={[
              ...test.columnName.map((col) => ({
                title: col,
                dataIndex: col,
                key: col,
                render: (text, record, rowIndex) => (
                  <Input
                    value={text}
                    onChange={(e) =>
                      handleInputChange(test.id, rowIndex, col, e.target.value)
                    }
                  />
                ),
              })),
              {
                title: "Images",
                dataIndex: "images",
                key: "images",
                render: (images, record, rowIndex) => (
                  <Upload
                    listType="picture"
                    fileList={images}
                    onChange={({ fileList }) =>
                      handleUpload(test.id, rowIndex, fileList)
                    }
                    beforeUpload={() => false} // Prevent automatic upload
                  >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                ),
              },
            ]}
            pagination={false}
            bordered
          />
        </div>
      ))}

      {/* Submit Button */}
      <div className="mt-4">
        <Button type="primary" onClick={handleSubmit}>
          Submit All Data
        </Button>
      </div>
    </div>
  );
};

export default TestCompilation;
