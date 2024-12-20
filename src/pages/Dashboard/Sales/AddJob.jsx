import React from "react";
import { Form, Input, Button } from "antd";

const AddJob = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Submitted: ", values);
    form.resetFields();
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center  items-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full ">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Add Job</h1>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          {/* Requirements */}
          <Form.Item
            label="Requirements"
            name="requirements"
            rules={[{ required: true, message: "Please enter requirements!" }]}
          >
            <Input.TextArea
              placeholder="Enter job requirements"
              rows={4}
              style={{ resize: "none" }}
            />
          </Form.Item>

          {/* Quotation Number */}
          <Form.Item
            label="Quotation Number"
            name="quotationNumber"
            rules={[
              { required: true, message: "Please enter the quotation number!" },
            ]}
          >
            <Input placeholder="Enter quotation number" />
          </Form.Item>

          {/* Client Details Section */}
          <div className="border-t border-gray-200 mt-6 pt-4">
            <h2 className="text-lg font-medium text-gray-700 mb-4">
              Client Details
            </h2>

            {/* Client Name */}
            <Form.Item
              label="Client Name"
              name="clientName"
              rules={[
                { required: true, message: "Please enter the client's name!" },
              ]}
            >
              <Input placeholder="Enter client name" />
            </Form.Item>

            {/* Company Name */}
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[
                {
                  required: true,
                  message: "Please enter the company's name!",
                },
              ]}
            >
              <Input placeholder="Enter company name" />
            </Form.Item>

            {/* Address */}
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter the address!" }]}
            >
              <Input.TextArea
                placeholder="Enter address"
                rows={2}
                style={{ resize: "none" }}
              />
            </Form.Item>
          </div>

          {/* Submit Button */}
          <Form.Item className="mt-6">
            <Button type="primary" htmlType="submit" className="w-full">
              Add Job
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddJob;
