// components/EmployeeCard.jsx
import { Card, Tag, Progress, Button } from "antd";

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <Card
      title={employee.name}
      extra={
        <Tag color={employee.status === "Active" ? "green" : "red"}>
          {employee.status}
        </Tag>
      }
      style={{ marginBottom: 16 }}
    >
      <p>
        <b>Department:</b> {employee.department}
      </p>
      <p>
        <b>Role:</b> {employee.role}
      </p>
      <p>
        <b>Joining Date:</b> {employee.joiningDate}
      </p>
      <Progress percent={employee.performance} />
      <div style={{ marginTop: 12 }}>
        <Button type="primary" onClick={() => onEdit(employee)}>
          Edit
        </Button>
        <Button
          danger
          style={{ marginLeft: 8 }}
          onClick={() => onDelete(employee.id)}
        >
          Archive
        </Button>
      </div>
    </Card>
  );
};

export default EmployeeCard;
