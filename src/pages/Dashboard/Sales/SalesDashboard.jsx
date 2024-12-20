import React, { useState } from "react";
import AddJob from "./AddJob";
import JobList from "./JobList";
import { useSidebarContext } from "../../../context/SidebarContext";
import Tracibility from "../Tracibility";

const SalesDashboard = () => {
 const {selectedValue} = useSidebarContext()

 
  const renderComponentItem = (item) => {
    switch (item) {
      case "addJob":
       return <AddJob />;
      case "joblist":
       return <JobList />;
      default:
       return <Tracibility />;
    }
  };

  return <>{renderComponentItem(selectedValue)}</>;
};

export default SalesDashboard;
