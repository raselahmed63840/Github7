// components/EmployeeDrawer.jsx
import { Drawer, Form, Input, Button, DatePicker, Select, message } from "antd";
import { useContext, useEffect } from "react";
import dayjs from "dayjs";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeDrawer = ({ open, onClose, employee, isNewEmployee }) => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [form] = Form.useForm();

  useEffect(() => {
    if (employee) {
      form.setFieldsValue({
        ...employee,
        joiningDate: employee.joiningDate ? dayjs(employee.joiningDate) : null,
      });
    }
  }, [employee, form]);

  const handleSave = (values) => {
    if (isNewEmployee) {
      // Add new employee
      const newEmployee = {
        ...employee,
        ...values,
        joiningDate:
          values.joiningDate?.format("YYYY-MM-DD") ||
          new Date().toISOString().split("T")[0],
      };
      setEmployees([...employees, newEmployee]);
      message.success("Employee added successfully!");
    } else {
      // Update existing employee
      const updatedJoiningDate =
        values.joiningDate?.format("YYYY-MM-DD") || employee.joiningDate;
      const updated = employees.map((emp) =>
        emp.id === employee.id
          ? { ...emp, ...values, joiningDate: updatedJoiningDate }
          : emp,
      );
      setEmployees(updated);
      message.success("Employee updated successfully!");
    }
    form.resetFields();
    onClose();
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={isNewEmployee ? "Add New Employee" : "Edit Employee"}
      width={500}
    >
      <Form form={form} layout="vertical" onFinish={handleSave}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: "Please enter employee name" },
            { min: 2, message: "Name must be at least 2 characters" },
          ]}
        >
          <Input placeholder="Enter employee name" />
        </Form.Item>

        <Form.Item
          name="department"
          label="Department"
          rules={[{ required: true, message: "Please select a department" }]}
        >
          <Select
            placeholder="Select department"
            options={[
              { value: "HR", label: "HR" },
              { value: "IT", label: "IT" },
              { value: "Finance", label: "Finance" },
              { value: "Sales", label: "Sales" },
              { value: "Marketing", label: "Marketing" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="role"
          label="Role"
          rules={[
            { required: true, message: "Please enter employee role" },
            { min: 2, message: "Role must be at least 2 characters" },
          ]}
        >
          <Input placeholder="Enter employee role" />
        </Form.Item>

        <Form.Item name="joiningDate" label="Joining Date">
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Please select a status" }]}
        >
          <Select
            placeholder="Select status"
            options={[
              { value: "Active", label: "Active" },
              { value: "Archived", label: "Archived" },
              { value: "On Leave", label: "On Leave" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="performance"
          label="Performance Score (1-100)"
          rules={[
            { required: true, message: "Please enter performance score" },
            {
              type: "number",
              min: 1,
              max: 100,
              message: "Score must be between 1 and 100",
            },
          ]}
        >
          <Input
            type="number"
            min={1}
            max={100}
            placeholder="Enter score (1-100)"
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit" block>
            {isNewEmployee ? "Add Employee" : "Save Changes"}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default EmployeeDrawer;
