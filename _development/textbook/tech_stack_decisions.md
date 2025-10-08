# Technology Stack Decisions for WRIT20833

## Core Platform Decisions

### Development Environment: Google Colab
**Decision**: Use Google Colab as primary coding environment for students  
**Rationale**: 
- Zero setup required for students
- Free access to computing resources
- Built-in collaboration features
- Easy sharing and grading workflow
- Handles library installations automatically

**Considerations for 2026**:
- Monitor emergence of alternatives (GitHub Codespaces, Replit, etc.)
- Backup plan if Google policies change
- Investigate institutional JupyterHub if available

**Dependencies**: 
- Students need Google accounts
- Reliable internet connection required
- Limited offline capability

### Textbook Platform: Jupyter Book
**Decision**: Use Jupyter Book for textbook hosting  
**Rationale**:
- Integrates well with GitHub workflow
- Supports both markdown and Jupyter notebooks
- Professional appearance and navigation
- Good mobile responsiveness
- Proven track record (Walsh's book)

**Status Update (September 2025)**: Decision validated by existing content structure
- Current lecture HTML presentations demonstrate professional styling capabilities
- Existing notebooks already in proper Jupyter format for integration
- Mini-lecture series provides model for consistent navigation and presentation

**Alternative Considered**: GitBook, custom Jekyll site, WordPress
**Why Jupyter Book**: Better integration with coding content, academic standard, matches existing content format

### Version Control: GitHub
**Decision**: Host everything on GitHub with GitHub Pages deployment  
**Rationale**:
- Industry standard for code collaboration
- Free hosting via GitHub Pages
- Student portfolio development opportunity
- Instructor familiarity growing
- Integration with development tools

**Student Workflow**:
- Students fork textbook repo for personal notes
- Submit assignments via GitHub (or GitHub Classroom)
- Build portfolios on GitHub Pages

**Implementation Status (September 2025)**: Foundation established
- Current repository demonstrates GitHub Pages deployment capability
- Existing notebook structure provides model for student workflow
- Tutorial series shows effective integration of GitHub-hosted content

## Programming Languages & Libraries

### Primary Language: Python 3.9+
**Decision**: Python as sole programming language  
**Rationale**: 
- Beginner-friendly syntax
- Excellent humanities/text analysis ecosystem
- Strong job market relevance
- Extensive documentation and community

**Core Libraries**:
- **pandas**: Data manipulation and analysis
- **matplotlib/seaborn**: Basic visualization
- **nltk/textblob**: Natural language processing
- **requests**: API access and web scraping
- **beautifulsoup4**: Web scraping (if needed)

**Advanced Libraries** (Weeks 13-16):
- **scikit-learn**: Machine learning basics
- **plotly**: Interactive visualizations
- **networkx**: Network analysis
- **wordcloud**: Visual text analysis

**Content Integration Note (September 2025)**: Existing notebooks demonstrate effective use of core libraries with proper pedagogical progression

### Web Technologies: HTML5 + CSS3
**Decision**: Vanilla HTML and CSS, no frameworks initially  
**Rationale**:
- Focus on fundamentals before abstractions
- Better understanding of web structure
- Easier debugging for beginners
- No additional learning curve

**Progression Path**:
- Weeks 9-10: Pure HTML/CSS
- Week 11: JavaScript for data integration (minimal)
- Week 12: Introduction to frameworks (Bootstrap?) for quick styling

## Data Management Strategy

### Dataset Storage: GitHub + Git LFS
**Decision**: Store small datasets in regular Git, large ones in Git LFS  
**Rationale**:
- Keeps everything in one place
- Version control for datasets
- Easy access for students
- Cost-effective

**Size Guidelines**:
- Regular Git: < 50MB files
- Git LFS: 50MB - 1GB files
- External hosting: > 1GB (Google Drive, institutional storage)

### Data Formats: CSV + JSON
**Decision**: Primarily CSV for tabular data, JSON for hierarchical data  
**Rationale**:
- Universal readability
- pandas native support
- Human-readable for debugging
- Industry standard

**Metadata Strategy**: 
- README.md file for each dataset
- Standardized header comments
- Data dictionary files

## Development Tools

### Primary IDE: VS Code
**Decision**: Recommend VS Code for instructor development  
**Rationale**:
- Excellent GitHub integration
- Great markdown support
- Jupyter notebook support
- GitHub Copilot integration
- Free and cross-platform

**Extensions**:
- Python
- Jupyter
- GitHub Copilot
- Markdown All in One
- GitLens

### AI Assistance: GitHub Copilot + Claude Code
**Decision**: Use both for development acceleration  
**Rationale**:
- Copilot: Code completion and generation
- Claude Code: Planning and complex problem solving
- Complementary strengths
- Significant time savings potential

## Student-Facing Technology Requirements

### Minimum Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Google account for Colab access
- GitHub account (free)
- Reliable internet connection

### Recommended Setup
- Laptop/desktop computer (tablets possible but not ideal)
- External monitor for coding work
- Note-taking app for reflection

### Accessibility Considerations
- Screen reader compatibility (Jupyter Book standard)
- Keyboard navigation support
- High contrast options
- Alternative text for all images

## Assessment & Submission Platform

### Primary Method: GitHub
**Decision**: Use GitHub for assignment submission and portfolio development  
**Rationale**:
- Teaches industry-relevant skills
- Natural integration with course content
- Portfolio development opportunity
- Version history for academic integrity

**Backup Method**: Learning Management System (LMS)
- For students who struggle with GitHub
- Traditional gradebook integration
- Institutional requirement compliance

## Deployment & Hosting

### Textbook Hosting: GitHub Pages
**Decision**: Deploy via GitHub Actions to GitHub Pages  
**Rationale**:
- Free hosting
- Automatic deployment on updates
- Custom domain possible
- Good performance and uptime

### Student Project Hosting: GitHub Pages
**Decision**: Students deploy final projects via GitHub Pages  
**Rationale**:
- Learning experience
- Portfolio development
- Public showcase opportunity
- No additional cost

## Risk Mitigation & Alternatives

### Platform Risks
**Google Colab Changes**: 
- Backup plan: Local Jupyter installation guide
- Alternative: Institutional JupyterHub

**GitHub Changes**: 
- Backup plan: GitLab migration strategy
- Alternative: Institutional Git hosting

**Library Dependencies**: 
- Pin specific versions in requirements
- Document installation alternatives
- Test with fresh environments regularly

### Student Access Issues
**Limited Internet**: 
- Downloadable datasets and notebooks
- Campus computer lab backup plan
- Offline coding exercises

**GitHub Learning Curve**: 
- Simplified workflows with GitHub Desktop
- Alternative submission via LMS
- Peer mentoring program

## Technology Timeline

### Fall 2025 Setup
- [ ] Repository structure creation
- [ ] Jupyter Book configuration
- [ ] GitHub Actions workflow setup
- [ ] Development environment standardization

### Spring 2026 Testing
- [ ] Beta test with small group
- [ ] Performance testing on various devices
- [ ] Accessibility audit
- [ ] Student feedback collection

### Summer 2026 Finalization
- [ ] Final platform optimization
- [ ] Documentation completion
- [ ] Instructor training materials
- [ ] Backup procedure documentation

---
*Last Updated: Fall 2025*  
*Review Schedule: Each semester before course launch*