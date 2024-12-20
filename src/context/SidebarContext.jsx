import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const updateSelectedValue = (value) => {
    setSelectedValue(value);
  };

  return (
    <SidebarContext.Provider value={{ selectedValue, updateSelectedValue }}>
      {children}
    </SidebarContext.Provider>
  );
};


export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
