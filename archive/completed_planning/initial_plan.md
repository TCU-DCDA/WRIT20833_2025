# Initial Development Plan for WRIT20833 Textbook

## Project Overview
**Course**: WRIT20833 (Intro to Coding in the Humanities)  
**Target Audience**: Complete coding beginners  
**Duration**: 16 weeks, 3 hours/week  
**Launch Date**: August 1, 2026  
**Platform**: GitHub-hosted textbook, Google Colab for coding  
**Inspiration**: Melanie Walsh's Intro to Cultural Analytics

## Course Focus
- **Programming**: Python fundamentals + introductory NLP
- **Web Development**: HTML/CSS for public-facing projects
- **Content Focus**: Contemporary issues, pop culture, social media (vs. historical texts)
- **Final Output**: Student-created websites presenting NLP-driven arguments to community audiences

## 16-Week Content Map

### Weeks 1-4: Python Foundations
- **Week 1**: Environment setup (Colab), variables, basic data types, why code in humanities
- **Week 2**: Lists, loops, conditionals - working with text data from the start
- **Week 3**: Functions, file handling - reading in social media posts, news articles
- **Week 4**: Libraries (pandas, matplotlib) - first data visualizations of text datasets

### Weeks 5-8: Text Analysis & NLP
- **Week 5**: String manipulation, regular expressions - cleaning messy social media data
- **Week 6**: Word frequencies, basic text statistics - analyzing trending hashtags or song lyrics
- **Week 7**: Sentiment analysis with TextBlob/VADER - comparing coverage of same event across platforms
- **Week 8**: Introduction to topic modeling (basic LDA) - discovering themes in Reddit communities

### Weeks 9-12: Web Fundamentals
- **Week 9**: HTML basics - structure, semantic elements, accessibility
- **Week 10**: CSS fundamentals - styling, layout, responsive design
- **Week 11**: Integrating data into web pages - displaying charts, embedding visualizations
- **Week 12**: GitHub Pages deployment - making projects public

### Weeks 13-16: Integration Projects
- **Week 13**: Project planning - choosing datasets, defining research questions
- **Week 14**: Advanced analysis techniques - text classification, network basics
- **Week 15**: Building public-facing arguments - designing for specific audiences
- **Week 16**: Project presentations, peer review, reflection on digital humanities methods

## NLP Techniques for Intro Level
- Sentiment analysis (social media posts, product reviews, news coverage)
- Topic modeling (Reddit discussions, news articles, trending hashtags)
- Text classification (spam detection, genre categorization, bias identification)
- Basic network analysis (social media connections, mention patterns)
- Frequency analysis and word clouds (trending topics, campaign rhetoric)

## Collaborative Elements
- **Weeks 6-8**: Students analyze different platforms around same event, compare findings
- **Week 11**: Peer feedback on web design and data presentation
- **Week 14**: Small groups tackle different aspects of larger research question
- **Week 16**: Thematic final presentations building on each other's work

## Development Timeline

### Fall 2025 (Now - December) - Heavy Development Phase
**Current semester: 2 courses, maximum bandwidth available**  
**Status Update (September 6, 2025): Major progress achieved**

- [x] **Content Assessment Complete**: Comprehensive review of existing materials
- [x] **Provisional TOC Created**: Complete 18-chapter structure with content mapping
- [x] **Integration Strategy Developed**: Existing content mapped to specific chapters
- [ ] Complete all Python foundations content (Weeks 1-4) - **ACCELERATED due to existing notebooks**
- [ ] Draft NLP chapters (Weeks 5-8)
- [ ] Set up repository structure and workflow
- [ ] Curate and clean all major datasets
- [ ] Create exercise templates for each week

**Key Discovery**: Existing notebooks provide 80%+ complete content for Chapters 3-4, significantly accelerating timeline

### Spring 2026 - Maintenance Mode
**Spring semester: 3 courses, limited bandwidth**
- [ ] Light revisions and testing of existing chapters
- [ ] Draft HTML/CSS sections (Weeks 9-12) in small chunks
- [ ] Pilot 1-2 chapters with current students for feedback
- [ ] Finalize integration project framework (Weeks 13-16)
- [x] **Content integration**: Adapt existing mini-lectures as critical frameworks

**Updated Priority**: Focus on NLP chapters (5-8) since Python foundations have strong existing base

### Summer 2026 - Final Push
**No teaching commitments, full focus available**
- [ ] Complete all remaining content
- [ ] Comprehensive testing and revision
- [ ] Create all student-facing documentation
- [ ] Set up hosting and deployment
- [ ] Build instructor resources and answer keys
- [ ] Final polish and organization

## Technical Infrastructure

### Repository Structure (Proposed)
```
writ20833-textbook/
├── book/                 # Main textbook content
├── datasets/            # Cleaned, ready-to-use data files
├── student-examples/    # Anonymized past work (future)
├── exercises/           # Weekly hands-on activities
├── instructor-resources/ # Answer keys, additional materials
└── README.md           # Setup instructions for students
```

**Status Update (September 2025)**: Current WRIT20833-2025 repository provides excellent foundation with:
- High-quality lecture content ready for Chapter 1
- Complete notebooks for Chapters 3-4 Python foundations  
- Tutorial series with critical frameworks for integration throughout
- Professional presentation materials and pedagogical structures

### Tools & Platforms
- **Development**: Claude Code, VS Code, GitHub Copilot
- **Hosting**: GitHub Pages (likely via Jupyter Book)
- **Student Environment**: Google Colab (subject to change based on platform evolution)
- **Version Control**: GitHub

## Contemporary Case Study Ideas
*To be developed - focus on recent events, pop culture phenomena, social media trends*

## Assessment Strategy
*To be developed - balance code functionality, critical analysis, and public communication skills*

## Immediate Next Steps
1. Set up GitHub repository structure
2. Begin Week 1 content development
3. Start dataset collection and curation
4. Create development workflow with chosen tools

## Questions for Future Development
- Specific contemporary case studies to anchor weeks around
- Beta testing opportunities with current students
- Final project hosting and presentation format
- Integration of collaborative elements throughout course

---
*Plan created: Fall 2025*  
*Target completion: August 1, 2026*