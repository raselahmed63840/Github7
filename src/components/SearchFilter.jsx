// components/SearchFilter.jsx
import { Input, Select, DatePicker, Form, Button, Space } from "antd";
import { useEffect, useState } from "react";
import { ClearOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

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
      onFilter({
        searchTerm,
        ...filters,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, filters, onFilter]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilters({
      department: "",
      status: "",
      dateRange: [],
    });
  };

  return (
    <div
      style={{
        marginBottom: 20,
        padding: "clamp(12px, 3vw, 16px)",
        backgroundColor: "#fafafa",
        borderRadius: "4px",
      }}
    >
      <Form layout="vertical">
        <Form.Item label="Search Employee" style={{ marginBottom: "12px" }}>
          <Input
            placeholder="Search by employee name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            allowClear
            size="large"
          />
        </Form.Item>

        <Space wrap style={{ width: "100%", gap: "8px" }}>
          <Form.Item
            style={{ marginBottom: 0, minWidth: "clamp(140px, 30vw, 200px)" }}
          >
            <Select
              placeholder="Department"
              allowClear
              onChange={(val) => setFilters({ ...filters, department: val })}
              value={filters.department || undefined}
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
            style={{ marginBottom: 0, minWidth: "clamp(120px, 25vw, 150px)" }}
          >
            <Select
              placeholder="Status"
              allowClear
              onChange={(val) => setFilters({ ...filters, status: val })}
              value={filters.status || undefined}
              options={[
                { value: "Active", label: "Active" },
                { value: "Archived", label: "Archived" },
                { value: "On Leave", label: "On Leave" },
              ]}
            />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: 0, minWidth: "clamp(200px, 50vw, 280px)" }}
          >
            <RangePicker
              format="YYYY-MM-DD"
              style={{ width: "100%" }}
              value={
                filters.dateRange && filters.dateRange.length === 2
                  ? [dayjs(filters.dateRange[0]), dayjs(filters.dateRange[1])]
                  : null
              }
              onChange={(dates) => {
                if (dates && dates.length === 2) {
                  setFilters({
                    ...filters,
                    dateRange: [
                      dates[0].format("YYYY-MM-DD"),
                      dates[1].format("YYYY-MM-DD"),
                    ],
                  });
                } else {
                  setFilters({ ...filters, dateRange: [] });
                }
              }}
              placeholder={["Start", "End"]}
            />
          </Form.Item>

          <Button
            icon={<ClearOutlined />}
            onClick={handleClearFilters}
            type="dashed"
          >
            Clear Filters
          </Button>
        </Space>
      </Form>
    </div>
  );
};

export default SearchFilter;
