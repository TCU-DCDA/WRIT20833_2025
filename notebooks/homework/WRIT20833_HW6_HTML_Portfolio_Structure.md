# WRIT 20833 - Homework 6: HTML Portfolio Structure
## When Coding Meets Culture: Building Your Learning Journey Website

**Due**: Wednesday, October 29, 2025
**Format**: Local folder with HTML files + GitHub repository with commit history
**Assessment**: Ungrading approach (see criteria below)

---

## Overview

In this assignment, you'll create the HTML structure for a personal portfolio website that tells the story of your text analysis learning journey. This portfolio will showcase your computational work from HW4-1 and HW4-2, demonstrating how you moved from initial assumptions to data-driven opinions about cultural texts.

**What you'll build**: A 4-page website documenting your research question, data collection, analysis methods, and insights—all using semantic HTML structure (no styling yet; that's HW7!).

**Why this matters**: Learning to present technical work to public audiences is a crucial skill. Your portfolio will become part of your final project, showing how "coding meets culture" in your research.

---

## Learning Objectives

By completing this assignment, you will:
- Understand HTML document structure and semantic elements
- Create multi-page websites with navigation
- Organize content effectively for web presentation
- Practice version control with GitHub Desktop (commits and pushes)
- Present computational analysis work in accessible formats

---

## Technical Requirements

### Development Environment
- **VS Code** for writing HTML (installed in Session 1)
- **Live Server extension** for previewing your work locally
- **GitHub Desktop** for version control (introduced in Session 7)
- **Local folder**: Create a folder called `my-portfolio` on your computer

### File Structure
Your portfolio must include these **4 HTML files**:

```
my-portfolio/
├── index.html          (Homepage: Research Question)
├── data.html           (Data Collection & Ethics)
├── analysis.html       (Methods & Findings)
└── insights.html       (Reflections & Data-Driven Opinions)
```

### Required HTML Elements
Each page must include:
- `<!DOCTYPE html>` declaration
- Proper `<html>`, `<head>`, and `<body>` structure
- `<title>` tag in the `<head>` (unique to each page)
- `<header>` with your name and site title
- `<nav>` with links to all 4 pages
- `<main>` containing your page content
- `<footer>` with course info and date

Use semantic HTML tags throughout:
- `<h1>` for page titles, `<h2>`-`<h3>` for section headings
- `<p>` for paragraphs
- `<ul>` or `<ol>` for lists
- `<a>` for links (navigation and external sources)
- `<img>` for images (visualizations, screenshots)

---

## Content Requirements

### Page 1: `index.html` - Research Question

**Purpose**: Introduce yourself and your cultural research question

**Required Content**:
- Brief personal introduction (2-3 sentences: who you are, your academic interests)
- Your broad topic or area of cultural concern
- Your focused research question from HW4-2
- Your initial hypothesis (what you thought you'd discover)
- Why this question matters for understanding culture

**Example Structure**:
```
About Me
My Research Topic
My Research Question
My Initial Hypothesis
Why This Matters
```

---

### Page 2: `data.html` - Data Collection & Ethics

**Purpose**: Document your dataset and ethical collection practices

**Required Content**:
- Description of your dataset(s) from HW4-1/HW4-2
- How you collected or found the data
- Size and scope (number of texts, time period, source)
- Ethical considerations:
  - robots.txt compliance (if scraped)
  - Privacy considerations
  - Potential biases in the data
- Link to data source or collection method documentation

**Example Structure**:
```
My Dataset
Collection Method
Dataset Details
Ethical Considerations
Data Limitations
```

---

### Page 3: `analysis.html` - Methods & Findings

**Purpose**: Present your computational analysis methods and results

**Required Content**:
- **Methods Used**: Brief explanation of each method
  - Term Frequency Analysis (HW4-1)
  - Sentiment Analysis with VADER (HW4-1)
  - Topic Modeling with Gensim LDA (HW4-2)
- **Key Findings**: What did each method reveal?
- **Visualizations**: Embed screenshots of your charts/graphs from HW4
  - Bar charts of term frequencies
  - Sentiment distribution visualizations
  - Topic modeling results
- **Interpretation**: What patterns emerged from the data?

**Example Structure**:
```
Analysis Methods
Term Frequency Results
Sentiment Analysis Results
Topic Modeling Results
Patterns I Discovered
```

**Technical Note**: Save visualization screenshots in an `images/` folder inside your `my-portfolio` folder.

---

### Page 4: `insights.html` - Reflections & Data-Driven Opinions

**Purpose**: Reflect on your learning journey and share data-driven insights

**Required Content**:
- How your hypothesis was challenged or confirmed
- What surprised you in the data
- Integration reflection: What emerges when computational methods meet humanities interpretation? (from HW4-2)
- Your "data-driven opinion" about your cultural question
- What you learned about being "wrong" as part of the research process
- How this project connects to the "When Coding Meets Culture" course theme

**Example Structure**:
```
What I Expected vs. What I Found
Surprises in the Data
When Coding Meets Culture
My Data-Driven Opinion
What I Learned About Research
```

---

## Version Control Requirements

You must demonstrate progress through **minimum 3-5 commits** showing incremental work:

### Required Commits:
1. **Initial setup commit**: Create folder structure and first HTML file
2. **Content addition commits** (at least 2): Add content to different pages
3. **Revision commit**: Make improvements based on testing/review
4. **Final commit**: Complete all 4 pages

### Good Commit Messages:
- ✅ "Add research question content to index.html"
- ✅ "Create data.html with dataset documentation"
- ✅ "Embed visualization images in analysis.html"
- ❌ "Update files"
- ❌ "Changes"

**GitHub Desktop Workflow** (covered in Session 7):
1. Make changes to your HTML files in VS Code
2. Open GitHub Desktop
3. Review changes in the diff view
4. Write descriptive commit message
5. Commit to main branch
6. Push to GitHub

---

## Deliverables

Submit the following:

### 1. GitHub Repository URL
- Public repository named `my-portfolio` or similar
- Contains all 4 HTML files
- Includes `images/` folder with visualizations
- Shows 3-5 commits in commit history

### 2. Brief Reflection Report (250-300 words)
Submit as a separate document (PDF or .docx) addressing:
- What was challenging about structuring content for the web?
- How did creating HTML pages change how you think about presenting research?
- What did you learn about version control with git/GitHub?
- What are you excited to improve with CSS styling in HW7?

---

## Assessment Criteria

This assignment follows our **ungrading philosophy**: "earned insight over clean code." Rather than receiving a traditional point-based grade, you'll engage in self-assessment and receive narrative feedback on your learning and growth.

### What Success Looks Like

Your portfolio demonstrates learning and growth when it shows:

**HTML Structure & Semantics**
- Proper document structure on all pages
- Semantic HTML elements used appropriately
- All required elements present (`<nav>`, `<header>`, `<main>`, `<footer>`)
- Valid HTML (no missing closing tags, proper nesting)
- *Growth indicator: You understand why semantic HTML matters for accessibility and meaning*

**Content Quality**
- All 4 pages contain required content sections
- Content clearly presents your HW4 research journey
- Visualizations embedded and labeled appropriately
- Writing is clear and audience-appropriate
- *Growth indicator: You can translate technical work into web-accessible narratives*

**Version Control Practice**
- Repository properly set up and public
- 3-5 meaningful commits showing incremental progress
- Descriptive commit messages
- Files properly organized
- *Growth indicator: You understand git as a tool for iterative development and documentation*

**Reflection Report**
- Addresses all reflection prompts thoughtfully
- Demonstrates critical thinking about web presentation
- 250-300 word length requirement met
- *Growth indicator: You can articulate your learning process and challenges overcome*

### Self-Assessment Component

With your submission, include a brief self-assessment (can be part of your reflection):
- What aspects of this assignment challenged you most?
- What are you most proud of accomplishing?
- Where do you see room for growth in HW7?
- How does this work demonstrate your learning?

You'll receive narrative feedback focused on your progress, effort, and areas for continued growth. The goal is learning HTML effectively, not achieving a perfect score.

---

## Getting Started Checklist

Before you begin coding:

- [ ] Review Session 2 notes on HTML basics
- [ ] Create `my-portfolio` folder on your computer
- [ ] Gather HW4-1 and HW4-2 materials for reference
- [ ] Take screenshots of your visualizations (save to `images/` folder)
- [ ] Set up GitHub repository (Session 7)
- [ ] Test Live Server preview in VS Code

---

## Resources & Support

### Class Resources
- **Session 2**: HTML document structure and semantic tags
- **Session 4**: Multi-page navigation and file organization
- **Session 5**: Embedding images and media
- **Session 7**: Git workflow and first commits

### HTML Reference
- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [Semantic HTML Guide](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)

### Getting Help
- **Office Hours**: Schedule 1:1 time for technical troubleshooting
- **Class Sessions**: Use hands-on time (Sessions 3, 6) for questions
- **Peer Support**: Help each other debug HTML structure issues

---

## Tips for Success

### Start Simple
- Get one page working completely before moving to the next
- Test frequently with Live Server preview
- Don't worry about appearance yet—focus on structure

### Content First, Code Second
- Write your content in a separate document first
- Then add HTML tags around it
- This makes structure clearer

### Commit Often
- Commit after completing each page
- Commit before making major changes
- Think of commits as "save points" in a video game

### Embrace Imperfection
- Your first HTML won't be perfect—that's expected!
- The goal is learning, not perfection
- Being "wrong" and revising is part of the process

### Keep Your Audience in Mind
- Write for someone unfamiliar with your project
- Explain technical terms simply
- Show why your research matters

---

## Example Navigation Code

Here's starter code for your `<nav>` element (adapt to your needs):

```html
<nav>
  <ul>
    <li><a href="index.html">Research Question</a></li>
    <li><a href="data.html">Data & Ethics</a></li>
    <li><a href="analysis.html">Analysis & Findings</a></li>
    <li><a href="insights.html">Insights & Reflections</a></li>
  </ul>
</nav>
```

Copy this navigation to all 4 pages so users can move between pages easily.

---

## Looking Ahead: HW7

After completing HW6, you'll add CSS styling in HW7 to make your portfolio visually appealing. For now, focus on:
- Clear content organization
- Proper HTML structure
- Meaningful semantic elements

Your unstyled HTML is the foundation—styling comes next!

---

## Submission Instructions

### By Wednesday, October 29, 11:59 PM:

1. **Push all commits** to your GitHub repository
2. **Submit to Canvas**:
   - GitHub repository URL
   - Brief reflection report (PDF or .docx)
   - In the submission comments, note anything you want me to know

**Filename for reflection**: `LASTNAME_HW6_Reflection.pdf`

---

## Questions?

If you're stuck or confused:
1. Check Session notes and in-class examples
2. Review MDN HTML documentation
3. Ask during class hands-on time (Sessions 3, 4, 5, 6)
4. Attend office hours
5. Post in the class discussion forum

Remember: Everyone is learning web development for the first time in this class. Questions are expected and welcomed!

---

*This assignment is part of the "When Coding Meets Culture" final project sequence. Your HTML portfolio will be styled (HW7) and deployed publicly (HW8) before being integrated into your final group project.*
