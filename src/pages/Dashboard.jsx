// pages/Dashboard.jsx
import { useState } from "react";
import { Button, Switch } from "antd";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeDrawer from "../components/EmployeeDrawer";
import SearchFilter from "../components/SearchFilter";
import PaginationControls from "../components/PaginationControls";
import EmptyState from "../components/EmptyState";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const Dashboard = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [view, setView] = useState("table");
  const [editing, setEditing] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const filteredEmployees = employees.filter((emp) => {
    if (
      filters.searchTerm &&
      !emp.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
    )
      return false;
    if (filters.department && emp.department !== filters.department)
      return false;
    if (filters.status && emp.status !== filters.status) return false;
    return true;
  });

  const paginated = filteredEmployees.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div style={{ padding: 20 }}>
      <SearchFilter onFilter={setFilters} />
      <div style={{ marginBottom: 16 }}>
        <Switch
          checked={view === "card"}
          onChange={(checked) => setView(checked ? "card" : "table")}
        />{" "}
        Toggle Card View
      </div>

      {filteredEmployees.length === 0 ? (
        <EmptyState />
      ) : view === "table" ? (
        <EmployeeTable
          onEdit={(emp) => {
            setEditing(emp);
            setDrawerOpen(true);
          }}
        />
      ) : (
        paginated.map((emp) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            onEdit={(emp) => {
              setEditing(emp);
              setDrawerOpen(true);
            }}
            onDelete={(id) =>
              setEmployees(
                employees.map((e) =>
                  e.id === id ? { ...e, status: "Archived" } : e
                )
              )
            }
          />
        ))
      )}

      <PaginationControls
        total={filteredEmployees.length}
        current={page}
        pageSize={pageSize}
        onChange={(p, s) => {
          setPage(p);
          setPageSize(s);
        }}
      />

      {editing && (
        <EmployeeDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          employee={editing}
        />
      )}
    </div>
  );
};

export default Dashboard;
