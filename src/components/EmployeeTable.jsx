// components/EmployeeTable.jsx
import { Table, Tag, Button, Popconfirm, Progress } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeTable = ({ onEdit, employees = [] }) => {
  const { setEmployees, employees: contextEmployees } =
    useContext(EmployeeContext);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleDelete = (id) => {
    setEmployees(
      contextEmployees.map((emp) =>
        emp.id === id ? { ...emp, status: "Archived" } : emp,
      ),
    );
  };

  const getColumns = () => {
    const baseColumns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
        width: isMobile ? "30%" : "15%",
      },
      {
        title: "Department",
        dataIndex: "department",
        key: "department",
        width: isMobile ? "25%" : "15%",
        responsive: ["md"],
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
        width: isMobile ? "25%" : "15%",
        responsive: ["lg"],
      },
      {
        title: "Joining Date",
        dataIndex: "joiningDate",
        key: "joiningDate",
        width: isMobile ? "0%" : "15%",
        responsive: ["lg"],
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status) => (
          <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
        ),
        width: isMobile ? "20%" : "10%",
      },
      {
        title: "Performance",
        dataIndex: "performance",
        key: "performance",
        render: (score) => <Progress percent={score} strokeColor="#1890ff" />,
        width: isMobile ? "0%" : "12%",
        responsive: ["lg"],
      },
      {
        title: "Actions",
        key: "actions",
        render: (_, record) => (
          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            <Button
              type="primary"
              size="small"
              icon={<EditOutlined />}
              onClick={() => onEdit(record)}
            >
              {!isMobile && "Edit"}
            </Button>
            <Popconfirm
              title="Archive Employee"
              description="Are you sure you want to archive this employee?"
              onConfirm={() => handleDelete(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger size="small" icon={<DeleteOutlined />}>
                {!isMobile && "Archive"}
              </Button>
            </Popconfirm>
          </div>
        ),
        width: isMobile ? "25%" : "18%",
      },
    ];

    return isMobile
      ? baseColumns.filter(
          (col) => !col.responsive || col.responsive.includes("md"),
        )
      : baseColumns;
  };

  const displayEmployees =
    employees && employees.length > 0 ? employees : contextEmployees;

  return (
    <Table
      columns={getColumns()}
      dataSource={displayEmployees}
      rowKey="id"
      pagination={false}
      scroll={{ x: "100%" }}
      size={isMobile ? "small" : "middle"}
    />
  );
};

export default EmployeeTable;
