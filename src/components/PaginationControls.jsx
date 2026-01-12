// components/PaginationControls.jsx
import { Pagination, Select } from "antd";

const PaginationControls = ({ total, current, pageSize, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 16,
      }}
    >
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={(page, size) => onChange(page, size)}
      />
      <Select
        value={pageSize}
        style={{ width: 120 }}
        onChange={(size) => onChange(1, size)}
        options={[
          { value: 5, label: "5 / page" },
          { value: 10, label: "10 / page" },
          { value: 20, label: "20 / page" },
        ]}
      />
    </div>
  );
};

export default PaginationControls;
