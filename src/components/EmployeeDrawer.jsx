// components/EmployeeDrawer.jsx
import { Drawer, Form, Input, Button, DatePicker, Select } from "antd";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeDrawer = ({ open, onClose, employee }) => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [form] = Form.useForm();

  const handleSave = (values) => {
    const updated = employees.map((emp) =>
      emp.id === employee.id ? { ...emp, ...values } : emp
    );
    setEmployees(updated);
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose} title="Edit Employee">
      <Form form={form} initialValues={employee} onFinish={handleSave}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="department"
          label="Department"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="role" label="Role" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="joiningDate" label="Joining Date">
          <DatePicker />
        </Form.Item>
        <Form.Item name="status" label="Status" rules={[{ required: true }]}>
          <Select options={[{ value: "Active" }, { value: "Archived" }]} />
        </Form.Item>
        <Form.Item name="performance" label="Performance Score">
          <Input type="number" min={1} max={100} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={() => form.submit()}>
          Save & Continue Editing
        </Button>
      </Form>
    </Drawer>
  );
};

export default EmployeeDrawer;
