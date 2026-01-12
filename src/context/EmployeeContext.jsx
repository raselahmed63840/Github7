// context/EmployeeContext.jsx
import { createContext, useState, useEffect } from "react";
import { getEmployees, saveEmployees } from "../utils/localStorageUtils";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(getEmployees());

  useEffect(() => {
    saveEmployees(employees);
  }, [employees]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
