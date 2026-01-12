// utils/localStorageUtils.js

// Default dummy data
const defaultEmployees = [
  {
    id: 1,
    name: "Rasel Ahmed",
    department: "IT",
    role: "Frontend Developer",
    joiningDate: "2023-05-10",
    status: "Active",
    performance: 85,
  },
  {
    id: 2,
    name: "Sadia Rahman",
    department: "HR",
    role: "HR Manager",
    joiningDate: "2022-11-01",
    status: "Active",
    performance: 78,
  },
  {
    id: 3,
    name: "Tanvir Islam",
    department: "Finance",
    role: "Accountant",
    joiningDate: "2021-07-15",
    status: "Archived",
    performance: 65,
  },
];

// Get employees from localStorage or fallback to default
export const getEmployees = () => {
  const stored = JSON.parse(localStorage.getItem("employees"));
  if (Array.isArray(stored) && stored.length > 0) {
    return stored;
  } else {
    localStorage.setItem("employees", JSON.stringify(defaultEmployees));
    return defaultEmployees;
  }
};

// Save employees to localStorage
export const saveEmployees = (data) => {
  localStorage.setItem("employees", JSON.stringify(data));
};
