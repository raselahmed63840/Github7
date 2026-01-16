// components/EmployeeCard.jsx
import { Card, Tag, Progress, Button, Space, Divider } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  const getPerformanceColor = (score) => {
    if (score >= 80) return "#52c41a";
    if (score >= 60) return "#faad14";
    return "#ff4d4f";
  };

  return (
    <Card
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{employee.name}</span>
          <Tag
            color={
              employee.status === "Active"
                ? "green"
                : employee.status === "On Leave"
                  ? "orange"
                  : "red"
            }
          >
            {employee.status}
          </Tag>
        </div>
      }
      style={{
        marginBottom: 16,
        borderRadius: 8,
        overflow: "hidden",
      }}
      hoverable
    >
      <div>
        <div style={{ marginBottom: 12 }}>
          <p style={{ margin: "8px 0", fontSize: 14 }}>
            <strong>Department:</strong>{" "}
            <span style={{ color: "#1890ff" }}>{employee.department}</span>
          </p>
          <p style={{ margin: "8px 0", fontSize: 14 }}>
            <strong>Role:</strong> {employee.role}
          </p>
          <p style={{ margin: "8px 0", fontSize: 14 }}>
            <strong>Joining Date:</strong> {employee.joiningDate}
          </p>
        </div>

        <Divider style={{ margin: "12px 0" }} />

        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
              fontSize: 13,
            }}
          >
            <span>
              <strong>Performance Score</strong>
            </span>
            <span
              style={{
                color: getPerformanceColor(employee.performance),
                fontWeight: 600,
              }}
            >
              {employee.performance}%
            </span>
          </div>
          <Progress
            percent={employee.performance}
            strokeColor={getPerformanceColor(employee.performance)}
            status={employee.performance >= 80 ? "success" : "normal"}
          />
        </div>

        <Space style={{ width: "100%" }} direction="vertical">
          <Button
            type="primary"
            block
            icon={<EditOutlined />}
            onClick={() => onEdit(employee)}
          >
            Edit Employee
          </Button>
          <Button
            danger
            block
            icon={<DeleteOutlined />}
            onClick={() => onDelete(employee.id)}
          >
            Archive Employee
          </Button>
        </Space>
      </div>
    </Card>
  );
};

export default EmployeeCard;
