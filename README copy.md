# Student Portfolio React Template

A modern, responsive portfolio template built with React and TailwindCSS, designed specifically for software engineering students to showcase their projects, skills, and experience.

## 🌟 Features

- **Modern Stack**: Built with React 18 and TailwindCSS
- **Responsive Design**: Mobile-first approach with beautiful layouts
- **Easy Customization**: Simple data files for content management
- **GitHub Pages Ready**: Includes CI/CD pipeline for automatic deployment
- **Professional Sections**: Home, About, Education, Experience, Projects, Certifications, Contact
- **Interactive Components**: Contact forms, project filters, and more
- **SEO Friendly**: Optimized for search engines
- **Accessibility**: Built with accessibility best practices

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/student-portfolio-react.git
   cd student-portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Visit `http://localhost:3000` to see your portfolio

## 📁 Project Structure

```
student-portfolio-react/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/
│   ├── index.html             # HTML template
│   └── assets/                # Static files (images, resume, etc.)
├── src/
│   ├── components/            # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── CertificationCard.jsx
│   │   └── ContactForm.jsx
│   ├── pages/                 # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── data/                  # Content files (EDIT THESE!)
│   │   ├── personal.js        # Your personal information
│   │   ├── projects.js        # Your projects data
│   │   └── certifications.js  # Your certifications
│   ├── App.jsx                # Main app component
│   ├── index.js               # React entry point
│   └── index.css              # Global styles
├── package.json
├── tailwind.config.js
└── README.md
```

## ✏️ Customization Guide

### 1. Personal Information
Edit `src/data/personal.js` to add your information:
```javascript
export const personal = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  // ... add your details
};
```

### 2. Projects
Update `src/data/projects.js` with your projects:
```javascript
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "Node.js"],
    githubLink: "https://github.com/yourusername/project",
    // ... more details
  }
];
```

### 3. Certifications
Modify `src/data/certifications.js`:
```javascript
export const certifications = [
  {
    name: "Your Certification",
    provider: "Certification Provider",
    year: 2024,
    // ... more details
  }
];
```

### 4. Assets
Add your files to `public/assets/`:
- `profile.jpg` - Your profile picture
- `resume.pdf` - Your resume
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots

## 🚀 Deployment

### GitHub Pages (Automatic)

1. **Fork this repository** to your GitHub account
2. **Enable GitHub Pages** in repository settings
3. **Update package.json** homepage field:
   ```json
   "homepage": "https://yourusername.github.io/student-portfolio-react"
   ```
4. **Push to main branch** - GitHub Actions will automatically build and deploy

### Manual Build

```bash
npm run build
```

The `build` folder contains the production-ready files.

## 🛠️ Development Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (⚠️ irreversible)

## 🎨 Customizing Styles

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // ... your colors
      }
    }
  }
}
```

### Fonts
Add fonts in `public/index.html` and update `tailwind.config.js`.

## 📚 Learning Objectives

This template helps you learn:
- **React Fundamentals**: Components, props, state, routing
- **Modern CSS**: TailwindCSS utility-first approach
- **Git Workflow**: Branching, commits, pull requests
- **CI/CD**: GitHub Actions for automated deployment
- **Project Structure**: Organizing a real-world React application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have questions or need help:
- Check the [Issues](https://github.com/yourusername/student-portfolio-react/issues) page
- Create a new issue with your question
- Email: your.email@example.com

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Deployed with [GitHub Pages](https://pages.github.com/)

---

**Made with ❤️ for students learning web development**
