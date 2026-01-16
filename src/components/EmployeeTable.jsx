// components/EmployeeTable.jsx
import { Table, Tag, Button, Popconfirm, Progress } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeTable = ({ onEdit, employees = [] }) => {
  const { setEmployees, employees: contextEmployees } =
    useContext(EmployeeContext);

  const handleDelete = (id) => {
    setEmployees(
      contextEmployees.map((emp) =>
        emp.id === id ? { ...emp, status: "Archived" } : emp,
      ),
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: "15%",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      width: "15%",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: "15%",
    },
    {
      title: "Joining Date",
      dataIndex: "joiningDate",
      key: "joiningDate",
      width: "15%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
      width: "10%",
    },
    {
      title: "Performance",
      dataIndex: "performance",
      key: "performance",
      render: (score) => <Progress percent={score} strokeColor="#1890ff" />,
      width: "12%",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            onClick={() => onEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Archive Employee"
            description="Are you sure you want to archive this employee?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger size="small" icon={<DeleteOutlined />}>
              Archive
            </Button>
          </Popconfirm>
        </div>
      ),
      width: "18%",
    },
  ];

  const displayEmployees =
    employees && employees.length > 0 ? employees : contextEmployees;

  return (
    <Table
      columns={columns}
      dataSource={displayEmployees}
      rowKey="id"
      pagination={false}
      scroll={{ x: 1200 }}
    />
  );
};

export default EmployeeTable;
