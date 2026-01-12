import React from "react";
import Dashboard from "./pages/Dashboard";
import { EmployeeProvider } from "./context/EmployeeContext";

const App = () => {
  return (
    <EmployeeProvider>
      <div>
        <Dashboard />
      </div>
    </EmployeeProvider>
  );
};

export default App;
