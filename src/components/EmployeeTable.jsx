// components/EmployeeTable.jsx
import { Table, Tag, Button, Popconfirm } from "antd";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeTable = ({ onEdit }) => {
  const { employees, setEmployees } = useContext(EmployeeContext);

  const handleDelete = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, status: "Archived" } : emp
      )
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    { title: "Department", dataIndex: "department" },
    { title: "Role", dataIndex: "role" },
    { title: "Joining Date", dataIndex: "joiningDate" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Performance",
      dataIndex: "performance",
      render: (score) => <progress value={score} max="100" />,
    },
    {
      title: "Actions",
      render: (_, record) => (
        <>
          <Button onClick={() => onEdit(record)}>Edit</Button>
          <Popconfirm
            title="Archive employee?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={employees}
      rowKey="id"
      pagination={{ pageSize: 5 }}
    />
  );
};

export default EmployeeTable;
