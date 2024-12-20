import React, { createContext, useContext, useState } from "react";

const JobIdContext = createContext();

export const JobIdProvider = ({ children }) => {
  const [selectedJob, setselectedJob] = useState(null);

  const updateJobSelecton = (value) => {
    setselectedJob(value);
  };

  return (
    <JobIdContext.Provider value={{ selectedJob, updateJobSelecton }}>
      {children}
    </JobIdContext.Provider>
  );
};

// Custom hook to use the context
export const useJobIdContext = () => {
  return useContext(JobIdContext);
};

export default JobIdProvider;
