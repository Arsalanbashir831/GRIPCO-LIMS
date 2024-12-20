import React from 'react'
import { useSidebarContext } from '../../../context/SidebarContext';
import TestCertificates from './TestCertificates';
import TestCompilation from './TestCompilation';
import JobList from '../Sales/JobList';

const LabTechnicianDashboard = () => {
  const {selectedValue} = useSidebarContext()

 
  const renderComponentItem = (item) => {
    switch (item) {
      case "testcertificates":
       return <TestCertificates />;
      case "testcompilation":
       return <TestCompilation />;
     
      default:
       return <TestCertificates />;
    }
  };


  return (
    <div>{renderComponentItem(selectedValue)}</div>
  )
}

export default LabTechnicianDashboard