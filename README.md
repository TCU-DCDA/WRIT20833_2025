# WRIT 20833 — When Coding Meets Culture (Fall 2025)

Course materials for **Introduction to Coding in the Humanities** including interactive Jupyter notebooks, web-based lectures, and supporting resources. Students explore how computational analysis meets cultural interpretation, developing data-driven opinions through hands-on text analysis projects.

## 📚 Course Materials

### 🎯 Quick Access for Students
- **Course Website**: https://tcu-dcda.github.io/WRIT20833-2025/
- **Homework Assignments**: [`notebooks/homework/`](notebooks/homework/)
- **CodeAlong Tutorials**: [`notebooks/codeAlongs/`](notebooks/codeAlongs/)
- **Course Lectures**: [`docs/lectures/`](docs/lectures/)

### �📓 Notebooks (11 total)
- **CodeAlongs**: Interactive coding sessions covering Python fundamentals, data analysis, and text analysis
  - Python basics: Variables, Data Types, String Methods, Conditionals, Loops, Dictionaries, Functions
  - Data analysis: Pandas fundamentals and data cleaning
  - Text analysis: Ethical data collection, sentiment analysis with VADER
- **Exercises**: In-class practice activities and skill-building exercises
- **Tutorial assignments**: Interactive coding exercises paired with mini-lectures (ready for textbook integration)
- **Homework assignments**: Structured assignments including term frequency and sentiment analysis

### 🎓 Lectures (14 HTML presentations)
- **Main lectures**: "When Coding Meets Culture" - foundational digital humanities introduction
- **Mini-lecture series**: Critical frameworks connecting coding to cultural analysis (13 lectures)
  0. Humanities & Coding
  1. Connotations & Code
  2. Boundaries (taboos → digital privacy)
  3. Classification Logic (sacred categories → digital classification)  
  4. AI Agency (power and pseudo-agency in AI tools)
  5. Collective Memory (how code remembers what communities forget)
  6. Data Archaeology
  7. NLP & Topic Modeling
  8. Code as Rhetoric
  9. Public Arguments
  10. GitHub Infrastructure
  11. HTML as Structure
  12. CSS as Rhetoric
- **Supporting materials**: Curated reading lists, outlines, and academic resources

### 🖼️ Visual Assets (100+ images)
- **Lecture graphics**: Custom illustrations and diagrams across 13 mini-lectures
- **Conceptual imagery**: AI-generated and curated visuals
- **Reference materials**: Screenshots and external resources

### 🌐 Web Development Materials
- **HTML/CSS Workshop**: Comprehensive in-class code-along for semantic HTML and CSS fundamentals
  - `html_training/semantic_html_css_workshop.md` - Markdown source
  - `html_training/semantic_html_css_workshop.html` - Styled browser version
- **Web Portfolio Homework Series**: Progressive assignments building student project sites
  - `homework_md/WRIT20833_HW6_HTML_Portfolio_Structure.md`
  - `homework_md/WRIT20833_HW7_CSS_Portfolio_Styling.md`
  - `homework_md/WRIT20833_HW8_Portfolio_Deployment.md`
- **Final Project Requirements**: `docs/WRIT20833_Final_Project_Requirements.html`

## 🗂️ Directory Structure

```
WRIT20833-2025/
├── docs/
│   ├── index.html                  # Main course website (GitHub Pages)
│   ├── WRIT20833_Final_Project_Requirements.md
│   ├── WRIT20833_HW5_Final_Project_Proposal.html
│   └── lectures/                   # Web-accessible lectures for GitHub Pages
│       ├── main/
│       │   ├── lecture1.html       # "When Coding Meets Culture" presentation
│       │   ├── lecture1-style.css  # Professional presentation styling
│       │   └── images/             # Lecture-specific images (22 files)
│       └── mini-lectures/
│           ├── index.html          # Mini-lecture series overview
│           ├── lecture_outlines_clarified.txt  # Detailed pedagogical notes
│           ├── suggested-readings.md # Curated academic reading list
│           ├── shared-style.css    # Consistent styling across all lectures
│           ├── images/             # Shared visual assets (50+ files)
│           └── lecture-0/ through lecture-12/
│               ├── index.html      # Individual lecture presentations (13 total)
│               └── images/         # Lecture-specific visual resources
├── notebooks/
│   ├── codeAlongs/                 # Ready for textbook Chapters 3-4, 7-8
│   │   ├── WRIT20833_Variables_DataTypes_F25.ipynb
│   │   ├── WRIT20833_StrMethods_Conditionals_Loops_F25.ipynb
│   │   ├── WRIT20833_Lists_Loops_Complete_F25.ipynb
│   │   ├── WRIT20833_Dictionaries_Functions_F25.ipynb
│   │   ├── WRIT20833_Pandas_01_Found_Data_Fundamentals_F25.ipynb
│   │   ├── WRIT20833_Pandas_02_Data_Cleaning_Analysis_Pandas_F25.ipynb
│   │   ├── WRIT20833_Instant_Data_Scraper_Ethics_F25.ipynb
│   │   ├── WRIT20833_VADER_Sentiment_Analysis_F25.ipynb
│   │   └── WRIT20833_Topic_Modeling_Gensim_F25.ipynb
│   ├── exercises/
│   │   └── WRIT20833_Conditionals_9-5-25.ipynb
│   ├── tutorials/                  # Critical framework integration examples
│   │   ├── Tutorial_01_Digital_Boundaries_MiniLecture1.ipynb
│   │   ├── Tutorial_02_Classification_Logic_MiniLecture2.ipynb
│   │   ├── Tutorial_03_AI_Agency_MiniLecture3.ipynb
│   │   └── Tutorial_04_Collective_Memory_MiniLecture4.ipynb
│   └── homework/                   # Complete learning arc: assumptions → data → insights
│       ├── WRIT20833_HW1_Fall2025.ipynb
│       ├── WRIT20833_HW4-1_Term_Frequency_Sentiment_F25.ipynb
│       ├── WRIT20833_HW4-2_Topic_Modeling_Integration_F25.ipynb
│       └── WRIT20833_HW5_Final_Project_Proposal.md
├── html_training/                  # Web development workshop materials
│   ├── semantic_html_css_workshop.md   # Two-session workshop (markdown source)
│   └── semantic_html_css_workshop.html # Styled browser version
├── homework_md/                    # Markdown source files for homework assignments
│   ├── WRIT20833_HW5_Final_Project_Proposal.md
│   ├── WRIT20833_HW6_HTML_Portfolio_Structure.md
│   ├── WRIT20833_HW7_CSS_Portfolio_Styling.md
│   └── WRIT20833_HW8_Portfolio_Deployment.md
├── datasets/                       # Cultural data for analysis projects
└── _development/                   # Course and textbook development materials
```

## 🚀 Getting Started

### **For Students**
- **All notebooks configured for Google Colab** - just click and run!
- **Complete course website** at https://tcu-dcda.github.io/WRIT20833-2025/
- **Final Project workflow**: Proposal → Requirements → Portfolio
- **Direct access to all materials** through organized directory structure

### **For Instructors & Collaborators**
- **Complete course materials** ready for classroom use
- **Modular organization** for easy adaptation and updates
- **Development materials** available in [`_development/`](_development/) directory

## 📋 Course & Textbook Vision

### **Current Course Theme: "When Coding Meets Culture: Developing Data-Driven Opinions" (Fall 2025)**
The course explores what happens when computational analysis meets cultural interpretation, guiding students from initial assumptions to well-grounded, data-driven opinions through:

1. **Digital Boundaries**: Exploring the intersection of technology and society
2. **Classification Logic**: Understanding data categorization and algorithmic thinking  
3. **AI Agency**: Examining artificial intelligence and human interaction
4. **Collective Memory**: Investigating digital memory and cultural preservation

**Complete Learning Arc**: Students progress from predictions → computational analysis → data-driven insights → public portfolio presentation, discovering how "being wrong" about initial assumptions leads to genuine learning and more sophisticated cultural understanding.

### **Course Structure**
**Target Audience**: Complete coding beginners in humanities  
**16-Week Progression**:
- **Weeks 1-4**: Python Foundations (variables, loops, functions)
- **Weeks 5-8**: Text Analysis & Cultural Data (pandas, sentiment analysis, topic modeling)
- **Weeks 9-12**: Web Development & Portfolio Creation (HTML/CSS workshop, HW6-HW8, GitHub Pages)
- **Weeks 13-16**: Final Projects & Public Presentation

**Pedagogical Philosophy**: Integrates critical thinking about technology's cultural implications throughout technical instruction, helping students develop both computational skills and cultural analysis capabilities.

## 🎯 Final Project: When Coding Meets Culture

### **Complete Learning Arc (HW4-1 → HW4-2 → HW5)**
Students experience the full journey from assumptions to data-driven opinions:

1. **HW4-1**: Term frequency analysis and sentiment analysis with initial predictions
2. **HW4-2**: Topic modeling integration and reflection on "being wrong" as learning
3. **HW5**: Final project proposal → requirements → public portfolio presentation

### **Project Structure**
- **Proposal Stage** (`homework_md/WRIT20833_HW5_Final_Project_Proposal.md`): 8-point proposal building on HW4 insights
- **Requirements Document** (`docs/WRIT20833_Final_Project_Requirements.html`): Complete project specifications with ungrading philosophy
- **Web Portfolio Development** (`homework_md/HW6-HW8`): Progressive assignments from HTML structure → CSS styling → GitHub Pages deployment
- **Three Deliverables**: Research essay + Python notebooks + Web portfolio (HTML/CSS)

### **Assessment Philosophy**
Prioritizes **earned insight over clean code**, emphasizing:
- Evolution of thinking from initial predictions through final, data-driven opinions
- Integration of technical analysis with humanistic interpretation
- Critical assessment of both results and analytical tools
- "Being wrong" in predictions as evidence of genuine learning

## 🛠️ Technical Notes

- **Notebooks**: Jupyter format, Python-based, Colab-ready
- **Lectures**: HTML5 presentations with CSS3 styling and responsive design
- **Web Development**: Semantic HTML5, modern CSS (flexbox, custom properties), GitHub Pages deployment
- **Images**: Optimized web formats (PNG, JPG, GIF, SVG)
- **Structure**: Modular organization for easy maintenance and updates

## 📅 Course Information

**Course**: WRIT 20833 - Introduction to Coding in the Humanities  
**Institution**: Texas Christian University  
**Semester**: Fall 2025  
**Instructor**: [Your name]

**Course Website**: https://tcu-dcda.github.io/WRIT20833-2025/  
**Repository**: https://github.com/TCU-DCDA/WRIT20833-2025

---

## 🔄 Recent Updates

### **November 4, 2025 - Web Portfolio Development Phase**
- **HTML/CSS Workshop Created**: Comprehensive two-session code-along covering semantic HTML and CSS fundamentals
- **Web Portfolio Homework Series**: HW6 (HTML Structure), HW7 (CSS Styling), HW8 (Deployment)
- **Mini-Lectures Expansion**: Lectures 10-12 added covering GitHub Infrastructure, HTML as Structure, CSS as Rhetoric
- **Final Project Requirements**: HTML version created with complete specifications and assessment criteria
- **Course Website Updates**: All materials linked through main course index at https://tcu-dcda.github.io/WRIT20833-2025/

### **September 20, 2025 - Development Workflow Implementation**
- **Branch Strategy**: Implemented protected `main` branch with `textbook-dev` for active development
- **Repository Setup**: Added development documentation and gitignore configuration
- **Controlled Publishing**: Branch protection ensures only tested content reaches public main branch
- **Developer Environment**: Jupyter Lab configuration and Python environment verified

### **September 28, 2025 - Text Analysis Development Phase**
- **Instant Data Scraper CodeAlong**: Ethical data collection with browser extensions
- **VADER Sentiment Analysis CodeAlong**: Cultural text analysis with sentiment tools
- **HW4-1 Complete**: Term frequency and sentiment analysis assignment
- **Topic Modeling Planning**: Next steps document for Gensim LDA implementation

### **September 6, 2025 - Major Assessment & Planning Session**
- **Comprehensive Content Review**: Evaluated all existing materials for textbook potential
- **Provisional TOC Created**: Complete 18-chapter structure with integration strategy
- **Content Mapping**: Identified 80%+ completion for Python foundations and text analysis (Chapters 3-4, 7-8)
- **Development Strategy**: Accelerated timeline due to high-quality existing content
- **Integration Plan**: Mini-lectures provide critical frameworks for technical chapters

### **Previous Migration**
*This repository represents a complete migration and reorganization of course materials from the previous WRIT20833 repository, optimized for the 2025 semester with improved structure and accessibility.*
