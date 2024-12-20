import React, { useState } from "react";
import { List, Avatar, Drawer, Steps, Input } from "antd";

const { Step } = Steps;
const { Search } = Input;

const Tracibility = () => {
  // Sample data for jobs
  const jobs = [
    {
      id: 1,
      clientName: "John Doe",
      company: "Doe Enterprises",
      address: "123 Business Lane, Cityville",
      requirements: "Job requires X, Y, Z.",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      company: "Smith Corp",
      address: "456 Industry Blvd, Townsville",
      requirements: "Job requires A, B, C.",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      clientName: "Sam Johnson",
      company: "Johnson & Co",
      address: "789 Corporate Ave, Metropolis",
      requirements: "Job requires D, E, F.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const [filteredJobs, setFilteredJobs] = useState(jobs); // Filtered job list
  const [selectedJob, setSelectedJob] = useState(null); // Selected job for the drawer
  const [drawerVisible, setDrawerVisible] = useState(false); // Drawer visibility

  // Open drawer with job details
  const handleJobClick = (job) => {
    setSelectedJob(job);
    setDrawerVisible(true);
  };

  // Close drawer
  const handleDrawerClose = () => {
    setSelectedJob(null);
    setDrawerVisible(false);
  };

  // Handle search
  const handleSearch = (value) => {
    const lowerValue = value.toLowerCase();
    const filtered = jobs.filter(
      (job) =>
        job.clientName.toLowerCase().includes(lowerValue) ||
        job.company.toLowerCase().includes(lowerValue) ||
        job.id.toString().includes(lowerValue)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Job Tracibility</h1>

      {/* Search Input */}
      <div className="mb-4">
        <Search
          placeholder="Search by Job ID, Client Name, or Company"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
      </div>

      {/* Job List */}
      <List
        itemLayout="horizontal"
        dataSource={filteredJobs}
        renderItem={(job) => (
          <List.Item
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => handleJobClick(job)}
          >
            <List.Item.Meta
              avatar={<Avatar src={job.avatar} />}
              title={
                <div>
                  <span className="text-lg font-medium">{job.clientName}</span>{" "}
                  <span className="text-gray-500">(#ID: {job.id})</span>
                </div>
              }
              description={job.company}
            />
          </List.Item>
        )}
        bordered
      />

      {/* Drawer for Job Track */}
      <Drawer
        title={`Job Track: ${selectedJob?.clientName || ""}`}
        placement="right"
        onClose={handleDrawerClose}
        visible={drawerVisible}
        width={400}
      >
        {selectedJob && (
          <div>
            {/* Client Details */}
            <div className="mb-4">
              <h3 className="text-lg font-medium">Client Details</h3>
              <p>
                <strong>Name:</strong> {selectedJob.clientName}
              </p>
              <p>
                <strong>Address:</strong> {selectedJob.address}
              </p>
              <p>
                <strong>Company:</strong> {selectedJob.company}
              </p>
            </div>

            {/* Job Requirements */}
            <div className="mb-4">
              <h3 className="text-lg font-medium">Job Requirements</h3>
              <p>{selectedJob.requirements}</p>
            </div>

            {/* Job Tracking */}
            <Steps direction="vertical" size="small" current={3}>
              <Step title="Job Submitted" description="First Phase completed." />
              <Step
                title="Forwarded To Lab Supervisor"
                description="Supervisor reviewing the job."
              />
              <Step
                title="Forwarded to Lab Technician"
                description="Technician is working on the job."
              />
              <Step title="Completed" description="Job is marked as completed." />
            </Steps>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Tracibility;
