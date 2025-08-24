# Student Lab Guide: React Portfolio Development

## 🎯 Overview
This lab guide will walk you through setting up, customizing, and deploying your React portfolio. By the end, you'll have a professional portfolio website deployed on GitHub Pages!

## 📋 Prerequisites
- Basic HTML/CSS knowledge
- Git basics (clone, commit, push)
- GitHub account
- Node.js installed on your computer

## 🚀 Lab Steps

### Phase 1: Setup and Exploration (30 minutes)

#### Step 1: Clone and Setup
```bash
# Clone the repository
git clone https://github.com/your-instructor/student-portfolio-react.git
cd student-portfolio-react

# Install dependencies
npm install

# Start development server
npm start
```

**🎯 Goal**: Get the project running locally and explore the structure.

#### Step 2: Explore the Codebase
1. Open the project in VS Code
2. Explore the folder structure:
   - `src/components/` - Reusable UI components
   - `src/pages/` - Different pages of your portfolio
   - `src/data/` - **Your content goes here!**
3. Look at how data flows from `data/` files to components

**✅ Checkpoint**: You should see the template portfolio running at `http://localhost:3000`

### Phase 2: Personalization (45 minutes)

#### Step 3: Update Personal Information
Edit `src/data/personal.js`:
```javascript
export const personal = {
  name: "Your Full Name",
  role: "Software Engineering Student",
  bio: "Write a brief bio about yourself...",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, State",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  // ... update all fields
};
```

**🎯 Goal**: Replace all placeholder data with your real information.

#### Step 4: Add Your Projects
Edit `src/data/projects.js`:
1. Replace the sample projects with your own
2. For each project, include:
   - Clear title and description
   - Technologies used
   - GitHub repository link
   - Live demo link (if available)
3. Mark your best projects as `featured: true`

**💡 Tip**: If you don't have many projects yet, include class assignments, personal experiments, or tutorials you've completed.

#### Step 5: Update Certifications
Edit `src/data/certifications.js`:
1. Add any certifications you have
2. Include online courses from Coursera, Udemy, etc.
3. Add relevant skills for each certification

**✅ Checkpoint**: Your portfolio should now show your personal information!

### Phase 3: Assets and Styling (30 minutes)

#### Step 6: Add Your Assets
Create these files in `public/assets/`:
1. `profile.jpg` - Your professional photo (square, 500x500px recommended)
2. `resume.pdf` - Your current resume
3. `project1.jpg`, `project2.jpg`, etc. - Screenshots of your projects

**🎯 Goal**: Replace placeholder images with your real content.

#### Step 7: Customize Colors (Optional)
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#your-color',    // Change this
    600: '#your-color',    // And this
    700: '#your-color',    // And this
  }
}
```

**✅ Checkpoint**: Your portfolio should look personalized with your content and assets.

### Phase 4: Git Workflow (30 minutes)

#### Step 8: Create Your Repository
1. Create a new repository on GitHub named `student-portfolio-react`
2. Make it public
3. Don't initialize with README (we already have one)

#### Step 9: Git Setup
```bash
# Remove existing git history
rm -rf .git

# Initialize new repository
git init
git add .
git commit -m "Initial portfolio setup"

# Connect to your GitHub repository
git remote add origin https://github.com/yourusername/student-portfolio-react.git
git branch -M main
git push -u origin main
```

**🎯 Goal**: Your personalized portfolio code is now in your GitHub repository.

### Phase 5: Deployment Setup (30 minutes)

#### Step 10: Configure for GitHub Pages
1. Edit `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/student-portfolio-react",
     ...
   }
   ```

2. Update `src/App.jsx` basename:
   ```javascript
   <Router basename="/student-portfolio-react">
   ```

#### Step 11: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Source: "GitHub Actions"
4. The workflow file is already included in `.github/workflows/deploy.yml`

#### Step 12: Deploy
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

**✅ Checkpoint**: Your portfolio should be live at `https://yourusername.github.io/student-portfolio-react`

### Phase 6: Advanced Features (45 minutes)

#### Step 13: Add a New Project (Practice React)
1. Add a new project to `src/data/projects.js`
2. Create a feature branch:
   ```bash
   git checkout -b add-new-project
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add new project: [project name]"
   git push origin add-new-project
   ```
4. Create a Pull Request on GitHub
5. Merge the PR

**🎯 Goal**: Practice the full Git workflow and see the CI/CD in action.

#### Step 14: Customize Contact Form (Optional)
Modify `src/components/ContactForm.jsx`:
1. Add form validation
2. Integrate with a service like Formspree or Netlify Forms
3. Add more fields if needed

#### Step 15: SEO Optimization
Update `public/index.html`:
1. Change the title tag
2. Update meta description
3. Add Open Graph tags for social media sharing

## 🎉 Completion Checklist

- [ ] Portfolio running locally
- [ ] Personal information updated
- [ ] Projects added with descriptions
- [ ] Profile photo and resume uploaded
- [ ] Repository created and code pushed
- [ ] GitHub Pages deployment working
- [ ] Live portfolio accessible via URL
- [ ] At least one Pull Request created and merged

## 🚀 Next Steps

### Continuous Improvement
1. **Regular Updates**: Add new projects as you complete them
2. **Blog Section**: Consider adding a blog to share your learning journey
3. **Analytics**: Add Google Analytics to track visitors
4. **Custom Domain**: Purchase a domain name for a more professional URL

### Advanced Features to Add
1. **Dark Mode Toggle**
2. **Project Filtering by Technology**
3. **Testimonials Section**
4. **Blog/Articles Section**
5. **Interactive Resume Timeline**

### Learning Extensions
1. **Testing**: Add unit tests with Jest and React Testing Library
2. **TypeScript**: Convert the project to TypeScript
3. **Performance**: Optimize bundle size and loading times
4. **Accessibility**: Improve ARIA labels and keyboard navigation

## 🆘 Troubleshooting

### Common Issues

**Node.js version errors**
```bash
node --version  # Should be 16+
npm --version   # Should be 8+
```

**Build fails**
- Check for syntax errors in your data files
- Ensure all imported images exist in `public/assets/`

**GitHub Pages not updating**
- Check the Actions tab in your repository
- Ensure the workflow completed successfully
- Clear your browser cache

**Styling issues**
- Make sure TailwindCSS classes are spelled correctly
- Check the browser console for errors

### Getting Help
1. Check the browser console for error messages
2. Review the GitHub Actions logs for deployment issues
3. Ask for help in class or office hours
4. Create an issue in the repository

## 📝 Submission

Submit the following:
1. **GitHub Repository URL**: Link to your portfolio repository
2. **Live Website URL**: Link to your deployed portfolio
3. **Reflection**: 2-3 paragraphs about what you learned

### Grading Criteria
- **Functionality** (40%): Portfolio works, all pages load, links work
- **Content** (30%): Personal information, projects, professional presentation
- **Code Quality** (20%): Clean commits, proper Git workflow, code organization
- **Deployment** (10%): Successfully deployed and accessible

---

**Happy coding! 🚀 Remember, this portfolio will grow with you throughout your career.**
