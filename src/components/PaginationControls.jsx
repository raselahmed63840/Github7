// components/PaginationControls.jsx
import { Pagination, Select } from "antd";
import { useState, useEffect } from "react";

const PaginationControls = ({ total, current, pageSize, onChange }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16,
        flexWrap: isMobile ? "wrap" : "nowrap",
        gap: isMobile ? "12px" : "0",
      }}
    >
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={(page, size) => onChange(page, size)}
        size={isMobile ? "small" : "default"}
        showSizeChanger={!isMobile}
      />
      <Select
        value={pageSize}
        style={{ width: isMobile ? "100%" : 120, minWidth: "100px" }}
        onChange={(size) => onChange(1, size)}
        options={[
          { value: 5, label: "5 / page" },
          { value: 10, label: "10 / page" },
          { value: 20, label: "20 / page" },
        ]}
        size={isMobile ? "small" : "middle"}
      />
    </div>
  );
};

export default PaginationControls;
