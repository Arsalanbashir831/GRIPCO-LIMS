import React from 'react'
import { useSidebarContext } from '../../../context/SidebarContext';
import Tracibility from '../Tracibility';
import JobChecklist from './JobChecklist';
import CompileChecklist from './CompileChecklist';
import TestCertificates from './TestCertificates';

const SupervisorDashboard = () => {
  const {selectedValue} = useSidebarContext()
  const renderComponentItem = (item) => {
    switch (item) {
      case "jobchecklist":
       return <JobChecklist />;
      case "jobtraceability":
       return <Tracibility />;
      case "compilechecklist":
       return <CompileChecklist  />;
      case "testcertificates":
       return <TestCertificates  />;
      default:
       return <Tracibility />;
    }
  };
  return (
    <div>{renderComponentItem(selectedValue)}</div>
  )
}

export default SupervisorDashboard