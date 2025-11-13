# 📄 ResumeLabs - AI-Powered Resume Builder

**Live Demo:** [resume-labs.vercel.app](https://resume-labs.vercel.app)

## 🎯 Overview

ResumeLabs is a modern, AI-powered resume builder application that simplifies the process of creating professional, customizable resumes. Users can fill in their information through intuitive forms, preview their resume in real-time with multiple templates, and leverage AI to generate compelling professional summaries and content suggestions.

## 🚀 Problems Solved

- **Time-Consuming Resume Creation**: Traditional resume building is tedious and requires knowledge of formatting
- **Professional Quality**: Not everyone has design skills; ResumeLabs provides professionally designed templates
- **Content Generation**: Users struggle with writing impactful professional summaries and descriptions
- **Multi-Format Support**: Need for multiple resume versions for different job applications
- **Real-Time Preview**: No need to download multiple times to see how resume looks
- **Version Control**: Users can maintain multiple resume versions with different templates and colors

## ✨ Key Features

### 1. **User Authentication**
- Secure login and registration system
- JWT-based authentication
- Protected routes and data

### 2. **Resume Creation & Management**
- Create multiple resumes
- Edit and update existing resumes
- Delete resumes
- Auto-save functionality
- Resume templates library

### 3. **Multiple Resume Sections**
- **Personal Information**: Name, email, phone, location, social links
- **Professional Summary**: AI-generated or custom professional overview
- **Work Experience**: Job title, company, duration, responsibilities
- **Education**: Degree, institution, graduation date, achievements
- **Projects**: Project name, description, technologies used, links
- **Skills**: Technical and soft skills with proficiency levels

### 4. **AI-Powered Features** 🤖
- **AI Professional Summary Generator**: Generate compelling professional summaries using OpenAI
- **AI Content Enhancement**: Get suggestions to improve bullet points and descriptions
- **Smart Content**: AI-generated tips and content improvements for each section

### 5. **Multiple Templates** 🎨
- **Classic Template**: Traditional, widely-accepted format
- **Modern Template**: Contemporary design with clean layout
- **Minimal Template**: Simple and elegant minimalist design
- **Minimal Image Template**: Includes profile picture support

### 6. **Customization Options**
- **Accent Color Picker**: Customize primary color throughout resume
- **Background Toggle**: Show/hide background elements for printing
- **Font Styling**: Professional typography options
- **Section Management**: Show/hide sections as needed

### 7. **Export & Sharing**
- Download resume as PDF
- Share resume publicly with unique link
- Preview mode for sharing
- Copy resume link to clipboard

### 8. **Real-Time Preview**
- Live preview of resume as you type
- Instant template switching
- Color changes reflected immediately
- WYSIWYG editing experience

## 🏗️ Tech Stack

### Frontend
- **React 19**: UI library for building components
- **Vite**: Lightning-fast build tool and dev server
- **Redux Toolkit**: State management for global app state
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Axios**: HTTP client for API requests
- **Lucide React**: Beautiful SVG icon library
- **React Hot Toast**: Toast notifications
- **React Toastify**: Alternative notification system
- **Styled Components**: CSS-in-JS for component styling
- **React PDF to Text**: PDF text extraction (optional)

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for building REST API
- **MongoDB**: NoSQL database for data persistence
- **Mongoose**: ODM for MongoDB
- **JWT (jsonwebtoken)**: Secure token-based authentication
- **Bcrypt**: Password hashing and encryption
- **OpenAI API**: AI-powered content generation
- **ImageKit**: Image processing and optimization
- **Multer**: File upload middleware
- **CORS**: Cross-origin request handling
- **Dotenv**: Environment variable management

## 📁 Project Structure

## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /user` - Get current user profile

### Resume Routes (`/api/resumes`)
- `POST /create` - Create new resume
- `GET /get/:id` - Get specific resume
- `GET /user-resumes` - Get all user's resumes
- `PUT /update/:id` - Update resume
- `DELETE /delete/:id` - Delete resume

### AI Routes (`/api/ai`)
- `POST /generate-summary` - Generate professional summary
- `POST /enhance-content` - Get content enhancement suggestions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- OpenAI API key

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/Dhayanithi-545/resume-builder.git
cd resume-builder
```

#### 2. Setup Backend
```bash
cd server
npm install
```

Create `.env` file in server directory:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
OPENAI_BASE_URI=https://api.openai.com/v1
IMAGEKIT_PUBLIC_KEY=your_imagekit_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint
PORT=5000
```

Start backend:
```bash
npm run server
```

#### 3. Setup Frontend
```bash
cd client
npm install
```

Create `.env.local` file in client directory:
```
VITE_BASE_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

Visit: `http://localhost:5173`

## 📱 User Workflow

1. **Sign Up/Login** → Create or access your account
2. **Create Resume** → Click "New Resume" on dashboard
3. **Fill Information** → Complete sections with your details
4. **AI Enhancement** → Use AI to generate professional content
5. **Choose Template** → Select from multiple design templates
6. **Customize Colors** → Pick accent color for your resume
7. **Real-Time Preview** → See changes instantly
8. **Download/Share** → Export as PDF or share link
9. **Manage Multiple** → Create different versions for different jobs

## 🎨 Template Features

Each template includes:
- Professional typography
- Optimized spacing and margins
- Print-friendly design
- Responsive sections
- Accent color integration
- Profile photo support (in image templates)

## 🤖 AI Features

### Professional Summary Generation
- Uses OpenAI GPT models
- Generates compelling 2-3 line summaries
- Customizable based on job role


## 🔒 Security Features

- JWT authentication
- Password hashing with bcrypt
- Secure API endpoints
- CORS protection
- Environment variable protection
- Protected routes



## 👨‍💻 Author

**Dhayanithi Anandan**
- GitHub: [@Dhayanithi-545](https://github.com/Dhayanithi-545)

## 🔗 Links

- **Live Demo**: [resume-labs.vercel.app](https://resume-labs.vercel.app)
- **GitHub Repository**: [resume-builder](https://github.com/Dhayanithi-545/resume-builder)
- **Report Issues**: Create an issue on GitHub


**Made with ❤️ by Dhayanithi Anandan**
 
