<!-- Standard claude.md ruleset -->

# CLAUDE.md Boilerplate

I will start a coding session with you.

Output the message number after each message without explanation.

Every 4th message, remind yourself of these rules:

**MANDATORY CHECKS:**  
* Only change what's explicitly requested – NEVER modify unrelated code  
* Update `package.json`/dependencies when adding imports  
* NO placeholders (`YOUR_API_KEY`, `TODO`) – use proper variables/config  
* Questions = Answers ONLY – don't modify code unless asked to "change/update/fix"  
* NO assumptions – ASK for missing information  
* Security first – NO secrets in client code, use env variables  
* Add intelligent logging to core flows automatically  
* Clean unused code when making changes  
* Provide CODE EVIDENCE when asked about implementations  
* Output the message number after each message without explanation  
* Every 4th message, remind yourself of these rules  

If you violate these rules, you are breaking critical development protocols.

Start with message #1.




# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WRIT20833-2025 is a digital humanities course repository containing materials for "Introduction to Coding in the Humanities" at TCU. The repository serves dual purposes:
1. **Current Course Materials** (Fall 2025): Interactive Jupyter notebooks, HTML lectures, and supporting resources
2. **Textbook Development Project**: Foundation for "When Coding Meets Culture" textbook (publication target: August 2026)

## Repository Structure

```
WRIT20833-2025/
├── docs/                          # Web-accessible course materials (GitHub Pages)
│   ├── lectures/main/             # Primary lecture presentations (HTML)
│   └── lectures/mini-lectures/    # Critical framework mini-lectures (HTML)
├── notebooks/                     # Jupyter notebooks for student activities
│   ├── homework/                  # Structured assignments
│   ├── exercises/                 # In-class practice activities
│   └── tutorials/                 # Interactive coding paired with mini-lectures
├── textbook/                      # Textbook development planning
│   ├── provisionalTOC.md         # Complete 18-chapter structure
│   ├── tech_stack_decisions.md   # Platform and tool specifications
│   └── datasets_needed.md        # Data collection requirements
└── exercises/                     # Additional exercise materials
```

## Technology Stack

### Primary Development Environment
- **Student Environment**: Google Colab (zero setup, automatic library installation)
- **Content Format**: Jupyter notebooks (.ipynb) with Python 3.9+
- **Web Presentations**: HTML5 with custom CSS styling
- **Deployment**: GitHub Pages for web-accessible content

### Core Python Libraries Used
- **pandas**: Data manipulation and analysis
- **matplotlib/seaborn**: Data visualization
- **vaderSentiment**: Sentiment analysis for social media and informal text
- **nltk/textblob**: Natural language processing (alternative tools)
- **re, collections**: Text processing and analysis
- **requests**: API access (when needed)
- **gensim**: Topic modeling with LDA (planned for HW4-2)

### Content Development Tools
- **Jupyter Book**: Planned textbook platform
- **GitHub**: Version control and collaboration
- **VS Code**: Recommended instructor IDE with Python, Jupyter, and Markdown extensions

## Course Architecture

### Pedagogical Approach
The course integrates **technical Python instruction** with **critical cultural analysis**, using a "When Coding Meets Culture" framework that connects programming concepts to humanities concerns:

1. **Sacred Boundaries**: Technology and privacy
2. **Classification Logic**: How code categorizes culture
3. **AI Agency**: Power and pseudo-agency in AI tools
4. **Collective Memory**: Digital memory and cultural preservation

### Content Integration Pattern
- **Main Lectures**: Foundational digital humanities concepts (HTML presentations)
- **Mini-Lectures**: Critical frameworks connecting coding to cultural analysis
- **Tutorials**: Interactive coding exercises paired with critical thinking
- **Homework**: Structured assignments demonstrating assessment approaches

## Development Commands

### Working with Notebooks
```bash
# Notebooks are designed for Google Colab - no local setup required
# For local development:
jupyter notebook                    # Start local Jupyter server
jupyter nbconvert --to html file.ipynb  # Convert notebook to HTML
```

### GitHub Pages Deployment
```bash
# Content is automatically deployed via GitHub Pages
# Preview locally with any static server:
python -m http.server 8000          # Serve current directory
open http://localhost:8000/docs/    # View docs in browser
```

### Content Validation
```bash
# Check for broken links in HTML files
find docs/ -name "*.html" -exec grep -l "href=" {} \;

# Validate notebook structure
find notebooks/ -name "*.ipynb" -exec python -m json.tool {} \; > /dev/null
```

## Textbook Development Status

### Existing Content (Ready for Integration)
- **Chapter 1**: "When Coding Meets Culture" lecture (`docs/lectures/main/lecture1.html`)
- **Critical Frameworks**: Four mini-lectures with accompanying tutorials
- **Python Foundations**: Notebooks covering variables, data types, loops, conditionals
- **Assessment Models**: Homework assignments demonstrating grading approaches

### Development Priorities (Fall 2025)
1. **Chapters 2-6**: Python foundations content (high priority)
2. **Chapters 7-10**: Text analysis and NLP (current focus - sentiment analysis and topic modeling)
3. **Planning Phase**: Web development and integration chapters

### Recent Developments (Week 7-8)
- **Instant Data Scraper CodeAlong**: Ethical data collection using browser extensions
- **VADER Sentiment Analysis CodeAlong**: Cultural text sentiment analysis
- **HW4-1**: Term frequency and sentiment analysis assignment (completed)
- **Next Steps**: Topic modeling with Gensim LDA for HW4-2

### Key Planning Documents
- `textbook/provisionalTOC.md`: Complete chapter structure and content mapping
- `textbook/tech_stack_decisions.md`: Technical platform decisions and rationale
- `textbook/datasets_needed.md`: Data collection requirements for examples

## Content Standards

### Notebook Structure
- **Header Cell**: Course info, assignment title, student name field
- **Setup Cells**: Import statements and helper functions
- **Exercise Cells**: Clear instructions with expected outputs
- **Reflection Cells**: Critical thinking prompts connecting code to culture
- **Submission Guidelines**: Naming conventions and upload instructions

### HTML Presentation Style
- **Professional CSS**: Custom styling in `lecture1-style.css` and individual `style.css` files
- **Image Organization**: Lecture-specific `images/` directories
- **Accessibility**: Semantic HTML structure for screen readers
- **Mobile Responsive**: Tested across device sizes

### Critical Framework Integration
All technical content should connect to one of the four critical frameworks:
1. Sacred Boundaries (privacy, digital divides)
2. Classification Logic (algorithmic bias, categorization)
3. AI Agency (power structures, pseudo-intelligence)
4. Collective Memory (cultural preservation, digital archives)

## File Naming Conventions

### Notebooks
- Course format: `WRIT20833_[Topic]_[Semester].ipynb`
- Student submission: `LASTNAME_[Assignment].ipynb`

### Lectures
- Main lectures: `lecture[number].html`
- Mini-lectures: `lecture-[number]/index.html`
- Supporting: `[lecture]-style.css`, `images/`

### Planning Documents
- Markdown format with descriptive names
- Date stamp for version tracking
- Cross-reference with TOC and datasets files

## Data and Ethics Considerations

### Dataset Requirements
- **Size Limits**: <50MB for regular Git, 50MB-1GB for Git LFS
- **Formats**: Primarily CSV and JSON for student accessibility
- **Sources**: Cultural APIs, social media (scrubbed), public domain texts
- **Documentation**: README.md and data dictionary for each dataset

### Student Privacy
- No personal data collection in exercises
- Public GitHub repositories for portfolio development
- Alternative LMS submission for students uncomfortable with GitHub

## Common Development Tasks

### Adding New Notebook Content
1. Follow existing notebook template structure
2. Include critical framework connection
3. Test in Google Colab environment
4. Add to appropriate `notebooks/` subdirectory
5. Update course index if needed

### Creating New Lecture Material
1. Use existing HTML/CSS template structure
2. Optimize images for web delivery
3. Test responsive design across devices
4. Follow semantic HTML practices for accessibility
5. Deploy via GitHub Pages

### Textbook Chapter Development
1. Reference `provisionalTOC.md` for chapter specifications
2. Integrate existing notebook content where applicable
3. Connect to critical frameworks throughout
4. Follow beginner-friendly pedagogical approach
5. Document dataset requirements in `datasets_needed.md`

---

*Last Updated: September 28, 2025*
*For questions about this codebase: Refer to planning documents in `textbook/` directory*

### Recent CodeAlong Development (Week 7-8)
- `WRIT20833_Instant_Data_Scraper_Ethics_F25.ipynb`: Ethical data collection with robots.txt compliance
- `WRIT20833_VADER_Sentiment_Analysis_F25.ipynb`: Cultural text sentiment analysis
- `WRIT20833_HW4-1_Term_Frequency_Sentiment_F25.ipynb`: Complete text analysis assignment
- Planning document: `NEXT_STEPS_TOPIC_MODELING.md` for upcoming Gensim LDA work