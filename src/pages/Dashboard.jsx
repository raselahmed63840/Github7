// pages/Dashboard.jsx
import { useState } from "react";
import { Button, Switch, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined, PlusOutlined } from "@ant-design/icons";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeDrawer from "../components/EmployeeDrawer";
import SearchFilter from "../components/SearchFilter";
import PaginationControls from "../components/PaginationControls";
import EmptyState from "../components/EmptyState";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { EmployeeContext } from "../context/EmployeeContext";

const { Header, Content } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [view, setView] = useState("table");
  const [editing, setEditing] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isNewEmployee, setIsNewEmployee] = useState(false);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const filteredEmployees = employees.filter((emp) => {
    // Search by name
    if (
      filters.searchTerm &&
      !emp.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
    )
      return false;

    // Filter by department
    if (filters.department && emp.department !== filters.department)
      return false;

    // Filter by status
    if (filters.status && emp.status !== filters.status) return false;

    // Filter by date range (joining date)
    if (
      filters.dateRange &&
      filters.dateRange.length === 2 &&
      emp.joiningDate
    ) {
      const empDate = new Date(emp.joiningDate);
      const startDate = new Date(filters.dateRange[0]);
      const endDate = new Date(filters.dateRange[1]);

      if (empDate < startDate || empDate > endDate) return false;
    }

    return true;
  });

  const paginated = filteredEmployees.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleAddEmployee = () => {
    const newEmployee = {
      id: Math.max(...employees.map((e) => e.id), 0) + 1,
      name: "",
      department: "",
      role: "",
      joiningDate: new Date().toISOString().split("T")[0],
      status: "Active",
      performance: 75,
    };
    setEditing(newEmployee);
    setIsNewEmployee(true);
    setDrawerOpen(true);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#001529",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: 20,
        }}
      >
        <h2 style={{ color: "white", margin: 0 }}>Employee Management</h2>
        <div>
          <span style={{ marginRight: 20 }}>Welcome, {user?.name}</span>
          <Button
            type="primary"
            danger
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Header>
      <Content style={{ padding: "20px" }}>
        <div style={{ marginBottom: 16 }}>
          <SearchFilter onFilter={setFilters} />
        </div>
        <div style={{ marginBottom: 16, display: "flex", gap: 10 }}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddEmployee}
          >
            Add Employee
          </Button>
          <Switch
            checked={view === "card"}
            onChange={(checked) => setView(checked ? "card" : "table")}
          />
          <span> Toggle Card View</span>
        </div>

        {filteredEmployees.length === 0 ? (
          <EmptyState />
        ) : view === "table" ? (
          <EmployeeTable
            employees={paginated}
            onEdit={(emp) => {
              setEditing(emp);
              setIsNewEmployee(false);
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
                setIsNewEmployee(false);
                setDrawerOpen(true);
              }}
              onDelete={(id) =>
                setEmployees(
                  employees.map((e) =>
                    e.id === id ? { ...e, status: "Archived" } : e,
                  ),
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
            onClose={() => {
              setDrawerOpen(false);
              setIsNewEmployee(false);
            }}
            employee={editing}
            isNewEmployee={isNewEmployee}
          />
        )}
      </Content>
    </Layout>
  );
};

export default Dashboard;
