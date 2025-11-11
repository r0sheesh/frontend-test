# 🚀 Responsive Contact Form Web Application

A modern, fully responsive single-page web application featuring a dynamic contact form with API integration, built as part of a frontend development assessment.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Live Demo

🔗 **[View Live Application](https://frontend-test-theta-bice.vercel.app/)**

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Features

✅ **Fully Responsive Design** - Optimized for mobile, tablet, and desktop devices  
✅ **Modern UI/UX** - Dark theme with glassmorphism and gradient effects  
✅ **Form Validation** - Client-side validation for all input fields  
✅ **Email Validation** - Real-time email format checking  
✅ **API Integration** - Seamless backend communication via REST API  
✅ **Success Notifications** - Visual feedback for successful form submissions  
✅ **Error Handling** - Comprehensive error handling and user feedback  
✅ **Loading States** - Loading indicators during form submission  
✅ **Smooth Animations** - Engaging transitions and hover effects  
✅ **Accessibility** - Semantic HTML and keyboard navigation support  

## 🛠️ Tech Stack

### Frontend
- **React.js 18.3.1** - UI library for building interactive interfaces
- **Vite 5.4.10** - Next-generation frontend build tool
- **Tailwind CSS 3.4.1** - Utility-first CSS framework

### Tools & Deployment
- **Git/GitHub** - Version control
- **Vercel** - Cloud deployment platform
- **VS Code** - Code editor
- **Node.js** - JavaScript runtime

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/r0sheesh/frontend-test.git
   cd frontend-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🎮 Usage

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Environment Variables
No environment variables required - the API endpoint is publicly accessible.

## 🔌 API Integration

The application integrates with the following API endpoint:

**Endpoint:** `https://vernanbackend.ezlab.in/api/contact-us/`  
**Method:** `POST`  
**Content-Type:** `application/json`

### Request Format
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "This is a test message"
}
```

### Success Response (200)
```json
{
  "id": 49,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "This is a test message",
  "created_at": "2025-11-10T05:27:59.371578Z",
  "updated_at": "2025-11-10T05:27:59.371598Z"
}
```

### Validation Rules
- ✅ All fields are required
- ✅ Email must be in valid format
- ✅ Client-side validation before API call
- ✅ Real-time error feedback

## 📁 Project Structure

```
frontend-test/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles & Tailwind imports
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## 🎨 Design Highlights

- **Dark Theme** - Modern black background with colorful accents
- **Glassmorphism** - Frosted glass effects on cards and forms
- **Gradient Animations** - Dynamic color transitions
- **Mouse-Following Effects** - Interactive background elements
- **Smooth Transitions** - 60fps animations throughout
- **Hover States** - Engaging interactive feedback

## 🚀 Deployment

This project is deployed on **Vercel** for automatic deployments on every push to the main branch.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/r0sheesh/frontend-test)

### Manual Deployment
```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Ishaan Kandpal**

- GitHub: [@r0sheesh](https://github.com/r0sheesh)
- LinkedIn: [Ishaan Kandpal](https://www.linkedin.com/in/ishaan-kandpal/)
- Email: kgytkool@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern web trends
- Icons and emojis for enhanced visual appeal
- Tailwind CSS for rapid UI development
- React community for excellent documentation

---

⭐ **If you found this project helpful, please consider giving it a star!** ⭐

Made with ❤️ by Ishaan Kandpal
