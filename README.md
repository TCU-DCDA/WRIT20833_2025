# WRIT 20833 — Course Materials (2025)

This repository contains course materials for WRIT 20833, including interactive Jupyter notebooks, web-based lectures, and supporting resources for the 2025 semester. As of September 2025, this repository also serves as the foundation for a comprehensive **textbook development project** scheduled for publication in August 2026.

## 📚 Repository Contents

### � **Textbook Development** (New September 2025)
- **Provisional TOC**: Complete chapter structure for "When Coding Meets Culture" textbook
- **Planning Documents**: Technical specifications, dataset requirements, and development timeline
- **Content Integration**: Assessment of existing materials for textbook adaptation
- **Target Publication**: August 2026 for Fall 2026 course launch

### �📓 Notebooks (11 total)
- **CodeAlongs**: Interactive coding sessions covering Python fundamentals, data analysis, and text analysis
  - Python basics: Variables, Data Types, String Methods, Conditionals, Loops, Dictionaries, Functions
  - Data analysis: Pandas fundamentals and data cleaning
  - Text analysis: Ethical data collection, sentiment analysis with VADER
- **Exercises**: In-class practice activities and skill-building exercises
- **Tutorial assignments**: Interactive coding exercises paired with mini-lectures (ready for textbook integration)
- **Homework assignments**: Structured assignments including term frequency and sentiment analysis

### 🎓 Lectures (6 HTML presentations)
- **Main lectures**: "When Coding Meets Culture" - foundational digital humanities introduction
- **Mini-lecture series**: Critical frameworks connecting coding to cultural analysis
  1. Sacred Boundaries (taboos → digital privacy)
  2. Classification Logic (sacred categories → digital classification)  
  3. AI Agency (power and pseudo-agency in AI tools)
  4. Collective Memory (how code remembers what communities forget)
- **Supporting materials**: Curated reading lists, outlines, and academic resources

### 🖼️ Visual Assets (65+ images)
- **Lecture graphics**: Custom illustrations and diagrams
- **Conceptual imagery**: AI-generated and curated visuals
- **Reference materials**: Screenshots and external resources

## 🗂️ Directory Structure

```
WRIT20833-2025/
├── docs/
│   ├── index.md                    # Main course materials index
│   └── lectures/                   # Web-accessible lectures for GitHub Pages
│       ├── main/
│       │   ├── lecture1.html       # "When Coding Meets Culture" presentation
│       │   ├── lecture1-style.css  # Professional presentation styling
│       │   └── images/             # Lecture-specific images (22 files)
│       └── mini-lectures/
│           ├── index.html          # Mini-lecture series overview
│           ├── lecture_outlines_clarified.txt  # Detailed pedagogical notes
│           ├── suggested-readings.md # Curated academic reading list
│           ├── images/             # Shared visual assets (34+ files)
│           └── lecture-1/ through lecture-4/
│               ├── index.html      # Individual critical framework presentations
│               ├── style.css       # Consistent styling
│               └── newImages/      # Additional visual resources
├── notebooks/
│   ├── codeAlongs/                 # Ready for textbook Chapters 3-4, 7-8
│   │   ├── WRIT20833_Variables_DataTypes_F25.ipynb
│   │   ├── WRIT20833_StrMethods_Conditionals_Loops_F25.ipynb
│   │   ├── WRIT20833_Lists_Loops_Complete_F25.ipynb
│   │   ├── WRIT20833_Dictionaries_Functions_F25.ipynb
│   │   ├── WRIT20833_Pandas_01_Found_Data_Fundamentals_F25.ipynb
│   │   ├── WRIT20833_Pandas_02_Data_Cleaning_Analysis_Pandas_F25.ipynb
│   │   ├── WRIT20833_Instant_Data_Scraper_Ethics_F25.ipynb
│   │   └── WRIT20833_VADER_Sentiment_Analysis_F25.ipynb
│   ├── exercises/
│   │   └── WRIT20833_Conditionals_9-5-25.ipynb
│   ├── tutorials/                  # Critical framework integration examples
│   │   ├── Tutorial_01_Digital_Boundaries_MiniLecture1.ipynb
│   │   ├── Tutorial_02_Classification_Logic_MiniLecture2.ipynb
│   │   ├── Tutorial_03_AI_Agency_MiniLecture3.ipynb
│   │   └── Tutorial_04_Collective_Memory_MiniLecture4.ipynb
│   └── homework/                   # Assessment model examples
│       ├── WRIT20833_HW1_Fall2025.ipynb
│       └── WRIT20833_HW4-1_Term_Frequency_Sentiment_F25.ipynb
└── textbook/                       # **NEW: Textbook Development**
    ├── provisionalTOC.md           # Complete 18-chapter structure
    ├── initial_plan.md             # 16-week curriculum design
    ├── tech_stack_decisions.md     # Platform and tool specifications
    ├── datasets_needed.md          # Data collection requirements
    ├── weekly_exercises_outline.md # Pedagogical activity framework
    └── NEXT_STEPS_TOPIC_MODELING.md # Planning for final text analysis phase
```

## 🚀 Getting Started

### **For Current Students (Fall 2025)**
- **Notebooks**: All configured for Google Colab - click links in [`docs/index.md`](docs/index.md)
- **Lectures**: Access HTML presentations directly or via GitHub Pages
- **Course Materials**: Organized access through [`docs/index.md`](docs/index.md)

### **For Textbook Development (2025-2026)**
- **Planning Documents**: Start with [`textbook/provisionalTOC.md`](textbook/provisionalTOC.md) for complete chapter overview
- **Content Assessment**: Existing notebooks map to Chapters 3-4, 7-8 with 80%+ completion for Python and text analysis
- **Integration Strategy**: Mini-lectures provide critical frameworks for technical chapters

## 📋 Course & Textbook Vision

### **Current Course (Fall 2025)**
1. **Digital Boundaries**: Exploring the intersection of technology and society
2. **Classification Logic**: Understanding data categorization and algorithmic thinking  
3. **AI Agency**: Examining artificial intelligence and human interaction
4. **Collective Memory**: Investigating digital memory and cultural preservation

### **Planned Textbook: "When Coding Meets Culture"**
**Target Audience**: Complete coding beginners in humanities  
**Structure**: 18 chapters across 4 parts
- **Part I**: Python Foundations (Weeks 1-4)
- **Part II**: Text Analysis & NLP (Weeks 5-8) 
- **Part III**: Web Development (Weeks 9-12)
- **Part IV**: Integration Projects (Weeks 13-16)

**Key Innovation**: Integrates critical thinking about technology's social implications throughout technical instruction

**Curriculum Philosophy**: Focus maintained on Python foundations and cultural analysis rather than multiple programming languages, ensuring depth over breadth for humanities students learning their first coding skills

## 🛠️ Technical Notes

- **Notebooks**: Jupyter format, Python-based, Colab-ready
- **Lectures**: HTML5 presentations with CSS styling
- **Images**: Optimized web formats (PNG, JPG, GIF, SVG)
- **Structure**: Modular organization for easy maintenance and updates

## 🌿 Development Workflow

### **Branch Strategy**
- **`main` branch**: Stable, classroom-ready content (protected)
- **`textbook-dev` branch**: Active development for textbook project
- **Public access**: Students and colleagues use stable `main` branch content
- **Content control**: Only tested materials reach `main` via pull requests

### **For Contributors & Textbook Development**
```bash
# Work on textbook development
git checkout textbook-dev
# Make changes, test, commit
git push origin textbook-dev

# Publish classroom-ready content
# Create PR: textbook-dev → main
# Merge after review
```

**See [`BRANCHING_STRATEGY.md`](BRANCHING_STRATEGY.md) for detailed workflow guidance.**

## 📅 Project Timeline

### **Current Status (September 2025)**
- ✅ **Content Assessment Complete**: Existing materials evaluated for textbook integration
- ✅ **Provisional TOC Created**: 18-chapter structure with existing content mapped
- ✅ **High-Quality Foundation**: Lectures and notebooks ready for adaptation
- ✅ **Technical Planning**: Platform decisions and development strategy finalized
- ✅ **Development Workflow**: Branch protection and controlled publishing implemented

### **Development Schedule**
- **Fall 2025** (Heavy Development): Python foundations content (Chapters 2-6)
- **Spring 2026** (Maintenance Mode): NLP and web development chapters  
- **Summer 2026** (Final Push): Integration projects and publication preparation
- **August 2026**: Textbook publication for Fall 2026 course launch

### **Current Course Information**
**Course**: WRIT 20833 - Introduction to Coding in the Humanities  
**Institution**: TCU  
**Current Semester**: Fall 2025  
**Repository**: TCU-DCDA/WRIT20833-2025

---

## 🔄 Recent Updates

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
