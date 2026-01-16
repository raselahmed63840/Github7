# Setup & Deployment Guide

## 🚀 Local Development Setup

### 1. Prerequisites

- Node.js v16 or higher
- npm or yarn
- Git

### 2. Clone & Install

```bash
# Clone the repository
git clone https://github.com/your-username/employee-management-system.git

# Navigate to project
cd employee-management-system

# Install dependencies
npm install
```

### 3. Start Development

```bash
# Run development server
npm run dev

# Open http://localhost:5173 in your browser
```

### 4. Login

Use demo credentials:

- **Email:** `user@example.com`
- **Password:** `password123`

---

## 📦 Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Deploy the 'dist' folder to your hosting
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

#### Setup

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

#### Configuration

- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Node.js version: 18

#### Environment Variables

No env variables needed for current version (uses localStorage)

```bash
# Alternative: Deploy via CLI
npm i -g vercel
vercel
```

---

### Option 2: Netlify

#### Setup

1. Build locally: `npm run build`
2. Go to https://netlify.com
3. Drag & drop the `dist` folder
4. Done!

#### Continuous Deployment

1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Click "Deploy site"

---

### Option 3: GitHub Pages

#### Setup

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Update package.json
```

#### package.json changes

```json
{
  "homepage": "https://your-username.github.io/employee-management-system",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Deploy

```bash
npm run deploy
```

---

### Option 4: Render

#### Setup

1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repo
4. Fill in details:
   - **Name:** employee-management-system
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run preview`
   - **Node Version:** 18

5. Click "Create Web Service"

---

### Option 5: Railway

#### Setup

1. Go to https://railway.app
2. Click "New Project"
3. Select GitHub repo
4. Configure:
   - **Build:** `npm run build`
   - **Start:** `npm run preview`

5. Deploy!

---

### Option 6: Docker Deployment

#### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine
RUN npm install -g serve

COPY --from=0 /app/dist /app/dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
```

#### Build & Run

```bash
docker build -t employee-management .
docker run -p 3000:3000 employee-management
```

---

## 📝 GitHub Repository Setup

### 1. Initialize Repository

```bash
git init
git add .
git commit -m "Initial commit: Employee Management System"
```

### 2. Create GitHub Repo

- Go to https://github.com/new
- Name: `employee-management-system`
- Add description
- Choose Public for submission
- Click "Create repository"

### 3. Push Code

```bash
git branch -M main
git remote add origin https://github.com/your-username/employee-management-system.git
git push -u origin main
```

### 4. Add Files for Submission

- ✅ Source code
- ✅ README.md
- ✅ .gitignore
- ✅ package.json
- ✅ Postman collection (Employee_Management_API.postman_collection.json)

---

## ✅ Submission Checklist

Before submitting, verify:

- [ ] Code pushed to GitHub/GitLab
- [ ] Repository is public
- [ ] README.md is comprehensive
- [ ] Postman collection included
- [ ] Project builds without errors (`npm run build`)
- [ ] Dev server runs (`npm run dev`)
- [ ] Demo works with test credentials
- [ ] Mobile responsive (test on different screen sizes)
- [ ] All features working (add, edit, delete, search, filter)
- [ ] GitHub URL ready to share

---

## 🔗 Submission Links

After deployment, prepare these links:

1. **GitHub Repository URL**

   ```
   https://github.com/your-username/employee-management-system
   ```

2. **Live Demo URL** (if deployed)

   ```
   https://your-domain.vercel.app
   or
   https://your-domain.netlify.app
   ```

3. **Form Submission**
   - Fill the Google Form provided
   - Include both URLs above

---

## 🧪 Testing Before Submission

### 1. Test Locally

```bash
npm run dev
# Test all features
```

### 2. Test Production Build

```bash
npm run build
npm run preview
# Verify everything works
```

### 3. Test on Different Devices

- [ ] Desktop (1920px+)
- [ ] Laptop (1024px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### 4. Test Features

- [ ] Register new user
- [ ] Login with credentials
- [ ] Add employee
- [ ] Edit employee
- [ ] Delete/Archive employee
- [ ] Search employees
- [ ] Filter by department
- [ ] Filter by status
- [ ] Filter by date range
- [ ] Toggle table/card view
- [ ] Pagination works
- [ ] Logout

---

## 🆘 Troubleshooting

### Port already in use

```bash
npm run dev -- --port 3000
```

### Dependencies conflict

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails

```bash
npm run build
# Check error messages
# Usually missing files or syntax errors
```

### Deploy fails

1. Ensure `dist` folder exists
2. Check build command is correct
3. Verify Node.js version compatible
4. Check environment variables

---

## 📞 Support

- **Email:** rasel63840@gmail.com
- **GitHub Issues:** Create issue in repository
- **Discord:** Ostad community channel

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Ant Design Docs](https://ant.design)
- [Deployment Guides](https://vercel.com/docs)

---

**Last Updated:** January 17, 2026
