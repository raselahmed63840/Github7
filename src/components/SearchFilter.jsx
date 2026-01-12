// components/SearchFilter.jsx
import { Input, Select, DatePicker, Form } from "antd";
import { useEffect, useState } from "react";

const { RangePicker } = DatePicker;

const SearchFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    department: "",
    status: "",
    dateRange: [],
  });

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      onFilter({ searchTerm, ...filters });
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, filters, onFilter]);

  return (
    <Form layout="inline" style={{ marginBottom: 16 }}>
      <Form.Item>
        <Input
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Select
          placeholder="Department"
          style={{ width: 150 }}
          onChange={(val) => setFilters({ ...filters, department: val })}
          options={[
            { value: "HR", label: "HR" },
            { value: "IT", label: "IT" },
            { value: "Finance", label: "Finance" },
          ]}
        />
      </Form.Item>
      <Form.Item>
        <Select
          placeholder="Status"
          style={{ width: 150 }}
          onChange={(val) => setFilters({ ...filters, status: val })}
          options={[
            { value: "Active", label: "Active" },
            { value: "Archived", label: "Archived" },
          ]}
        />
      </Form.Item>
      <Form.Item>
        <RangePicker
          onChange={(dates) => setFilters({ ...filters, dateRange: dates })}
        />
      </Form.Item>
    </Form>
  );
};

export default SearchFilter;
