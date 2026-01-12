// components/EmptyState.jsx
import { Empty } from "antd";

const EmptyState = () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="No employees found. Try adjusting filters or add new employees."
    />
  );
};

export default EmptyState;
