# Employee Management System

A modern, responsive React-based Employee Management System built with MERN stack principles. This application allows users to manage employee information with features like search, filtering, pagination, and both table and card views.

## 📋 Features

### ✅ Authentication

- User Registration with validation
- Secure Login with email/password
- Protected Dashboard Routes
- Logout functionality
- Session persistence via localStorage

### 👥 Employee Management

- View employees in Table or Card view
- Create new employee records
- Edit employee information
- Archive employees (soft delete)
- Pagination support (5, 10, 20 per page)

### 🔍 Search & Filtering

- Real-time name search with debouncing
- Filter by Department (HR, IT, Finance, Sales, Marketing)
- Filter by Status (Active, Archived, On Leave)
- Filter by joining date range
- Clear all filters option

### 📊 Data Display

- Sortable employee table
- Beautiful employee cards
- Performance progress indicators
- Color-coded status tags
- Empty state handling

### 📱 Responsive Design

- Mobile-optimized interface
- Tablet-friendly layouts
- Desktop full-featured UI
- Touch-friendly controls
- Responsive typography

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool & dev server
- **Ant Design 6.1.4** - Component library
- **Tailwind CSS 4.1.18** - Styling
- **React Router DOM 7.12.0** - Routing
- **Day.js** - Date handling

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/your-username/employee-management-system.git

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:5173
```

### Build

```bash
npm run build
npm run preview
```

## 📖 Usage

### Login Demo Credentials

- **Email:** `user@example.com`
- **Password:** `password123`

### Features Usage

**Add Employee**

- Click "Add Employee" button
- Fill in details
- Click "Add Employee"

**Edit Employee**

- Click "Edit" button
- Update information
- Click "Save Changes"

**Search & Filter**

- Type in search box for name search
- Select department, status, or date range
- Click "Clear Filters" to reset

**View Options**

- Toggle between Table and Card views
- Adjust pagination (5, 10, 20 per page)

**Archive Employee**

- Click "Archive" button
- Confirm action

## 📁 Project Structure

```
src/
├── components/
│   ├── EmployeeTable.jsx
│   ├── EmployeeCard.jsx
│   ├── EmployeeDrawer.jsx
│   ├── SearchFilter.jsx
│   ├── PaginationControls.jsx
│   └── EmptyState.jsx
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Dashboard.jsx
├── context/
│   ├── AuthContext.js
│   ├── AuthProvider.jsx
│   └── EmployeeContext.jsx
├── utils/
│   └── localStorageUtils.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🔒 Authentication

- Registration creates new user accounts
- Login validates credentials
- JWT-ready architecture (for backend integration)
- Protected routes with PrivateRoute component
- Session persistence in localStorage

## 💾 Data Management

### Current Storage

- localStorage for all data
- Default employee records included
- Automatic save on changes

### Employee Data Schema

```javascript
{
  id: number,
  name: string,
  department: string,
  role: string,
  joiningDate: string (YYYY-MM-DD),
  status: string (Active|Archived|On Leave),
  performance: number (1-100)
}
```

## 📱 Responsive Breakpoints

- **Desktop** (1024px+) - Full features
- **Tablet** (768px-1023px) - Optimized layout
- **Mobile** (<768px) - Touch-friendly
- **Small Mobile** (<480px) - Minimal layout

## 🎨 Styling

- Ant Design components
- Tailwind CSS utilities
- Responsive typography with clamp()
- Gradient backgrounds
- Smooth animations

## 🔗 API Documentation

Postman collection included: `Employee_Management_API.postman_collection.json`

Import in Postman to view all endpoint specifications:

- Authentication endpoints
- Employee CRUD operations
- Search/filter endpoints
- Dashboard statistics

Set variables:

- `baseUrl`: `http://localhost:5000`
- `token`: JWT token (auto-filled)

## 🚀 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag dist folder to Netlify
```

### Render / Railway / Heroku

- Connect GitHub repo
- Set build: `npm install && npm run build`
- Set start: `npm run preview`

## 📚 Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 🐛 Troubleshooting

**Port 5173 in use:**

```bash
npm run dev -- --port 3000
```

**Clear localStorage:**

```javascript
localStorage.clear();
```

**Build issues:**

```bash
rm -rf node_modules
npm install
npm run build
```

## 📄 License

MIT License - See LICENSE file

## 🎯 Future Enhancements

- [ ] Backend API (Node.js/Express)
- [ ] MongoDB database
- [ ] Dark mode
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Export to PDF/Excel
- [ ] User roles & permissions
- [ ] Profile pictures
- [ ] Audit logging

## 👨‍💻 Author

Rasel Ahmed - Development

## 📞 Support

- Check GitHub Issues
- Review documentation
- Create new issue with details
- rasel63840@gmail.com

---

**Version:** 1.0.0  
**Status:** ✅ Complete  
**Last Updated:** January 17, 2026
