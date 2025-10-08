# Next Steps: Repository Reorganization for Fall 2026

## Overview
Following the successful development of WRIT20833's text analysis curriculum and HTML/CSS portfolio sequence, the repository should be reorganized using professional pedagogical structure principles. This reorganization will align with textbook publication (August 2026) and create a more systematic foundation for course adoption and collaboration.

## Timeline Rationale

### **Why NOT Now (Fall 2025):**
- **Mid-semester stability**: Current structure works well for active course
- **GitHub Pages compatibility**: Existing `docs/` structure deployed and functional
- **Student continuity**: URLs and file paths should remain stable during semester
- **Development focus**: Energy better spent on HTML/CSS curriculum completion

### **Why Fall 2026 (Perfect Timing):**
- **Fresh semester launch**: New students, clean slate, no legacy disruption
- **Textbook publication alignment**: Repository ready for professional presentation
- **Course maturity**: All curriculum components fully developed and tested
- **Adoption readiness**: Professional structure for other instructors to implement

## Current vs. Proposed Structure

### **Current WRIT20833-2025 Structure:**
```
WRIT20833-2025/
├── docs/                           # Mixed: lectures + GitHub Pages content
│   ├── index.html                  # Course materials landing page
│   └── lectures/                   # Lecture presentations
├── notebooks/                      # Mixed: all notebook types together
│   ├── codeAlongs/                 # 8 sequential CodeAlongs
│   ├── exercises/                  # In-class practice activities
│   ├── homework/                   # Major assignments (HW1, HW4-1, HW4-2)
│   └── tutorials/                  # Critical framework integration
├── textbook/                       # Planning documents and TOC
├── archive/                        # Cleaned up historical content
├── README.md                       # Main repository documentation
└── CLAUDE.md                       # Internal development guidance
```

### **Proposed WRIT20833-2026 Structure:**
```
WRIT20833-2026/
├── course_content/                 # All teaching materials (public-facing)
│   ├── codeAlongs/                 # Sequential learning progression
│   │   ├── 01_variables_datatypes/
│   │   ├── 02_strings_conditionals/
│   │   ├── 03_lists_loops/
│   │   ├── 04_dictionaries_functions/
│   │   ├── 05_pandas_fundamentals/
│   │   ├── 06_pandas_cleaning/
│   │   ├── 07_data_collection_ethics/
│   │   ├── 08_sentiment_analysis/
│   │   ├── 09_topic_modeling/
│   │   ├── 10_html_foundations/
│   │   ├── 11_css_styling/
│   │   └── 12_portfolio_deployment/
│   ├── lectures/                   # All presentation content
│   │   ├── main_lectures/          # Core conceptual presentations
│   │   └── mini_lectures/          # Critical framework content
│   ├── exercises/                  # In-class practice activities
│   ├── homework/                   # Major assignments and rubrics
│   └── final_projects/             # Portfolio examples and templates
├── instructor_materials/           # Teaching support (private/restricted)
│   ├── course_admin/               # Grading rubrics, answer keys
│   ├── development_docs/           # CLAUDE.md, technical documentation
│   ├── assessment_guides/          # Detailed grading guidelines
│   └── troubleshooting/            # Common student issues and solutions
├── student_resources/              # Support materials (public)
│   ├── datasets/                   # Practice and example datasets
│   ├── reference_guides/           # HTML/CSS, Python, GitHub guides
│   ├── installation_help/          # Software setup assistance
│   └── digital_humanities_context/ # Broader field connections
├── textbook_manuscript/            # Book development (draft/final)
│   ├── chapters/                   # Individual chapter drafts
│   ├── images/                     # Book-specific images and diagrams
│   ├── appendices/                 # Reference materials for book
│   └── publisher_materials/        # Marketing, proposal, reviews
└── archived/                       # Historical versions and deprecated content
    ├── 2025_semester/              # Complete Fall 2025 materials
    └── development_iterations/     # Earlier versions and experiments
```

## Detailed Reorganization Plan

### **Phase 1: Content Categorization (Spring 2026)**

#### **Course Content Migration**
- **CodeAlongs**: Renumber and organize into clear progression
  - Add week/lesson numbers for clarity
  - Include learning objectives and prerequisite mapping
  - Create consistent naming convention
- **Lectures**: Consolidate all presentation materials
  - Maintain existing mini-lecture critical framework structure
  - Ensure consistent styling and navigation
- **Exercises and Homework**: Organize by assessment type
  - Include detailed rubrics and grading guidelines
  - Add sample student work and common issues

#### **Instructor vs. Student Material Separation**
- **Move to instructor_materials/**: CLAUDE.md, development docs, internal planning
- **Move to student_resources/**: Datasets, reference guides, troubleshooting
- **Keep in course_content/**: All direct teaching materials

### **Phase 2: Professional Documentation (Summer 2026)**

#### **Enhanced Student Resources**
- **Installation Guides**: VS Code, GitHub Desktop, Python environment setup
- **Reference Materials**: HTML/CSS quick reference, Python syntax guide
- **Troubleshooting Database**: Common errors and solutions from Fall 2025 experience
- **Digital Humanities Context**: Connections to broader field, career applications

#### **Instructor Support Materials**
- **Teaching Guides**: Lesson timing, common student challenges, adaptation suggestions
- **Assessment Tools**: Detailed rubrics, peer review guidelines, portfolio assessment
- **Technical Setup**: Course deployment, GitHub Pages configuration, LMS integration
- **Adoption Guidelines**: How other instructors can implement the curriculum

### **Phase 3: Textbook Integration (August 2026)**

#### **Manuscript Organization**
- **Chapter Development**: Convert CodeAlongs and lectures into book chapters
- **Pedagogical Enhancements**: Add exercises, reflection questions, further reading
- **Publisher Materials**: Professional presentation for academic publication
- **Marketing Assets**: Course adoption materials, instructor resources

#### **Repository as Companion Resource**
- **Live Code Examples**: All notebook content accessible and runnable
- **Updated Materials**: Post-publication updates and improvements
- **Community Contributions**: Framework for instructor adaptations and improvements

## Technical Implementation Plan

### **Migration Strategy**
1. **Create new repository**: `WRIT20833-2026` with proposed structure
2. **Systematic content migration**: Move materials into appropriate directories
3. **Update all internal links**: Ensure no broken references
4. **GitHub Pages reconfiguration**: Maintain web-accessible course materials
5. **Archive current repository**: Preserve Fall 2025 as historical reference

### **Naming Conventions**
- **Sequential numbering**: 01-12 for clear progression
- **Descriptive names**: Balance brevity with clarity
- **Consistent formatting**: Standardize across all materials
- **Version tracking**: Clear semester/version identification

### **Documentation Standards**
- **README files**: Every directory explains its contents and purpose
- **Learning objectives**: Clear goals for every component
- **Prerequisite mapping**: Show how materials build on each other
- **Assessment alignment**: Connect activities to course outcomes

## Benefits Analysis

### **For Course Instruction**
- **Clearer navigation**: Students and instructors find materials easily
- **Better progression**: Learning sequence is obvious and logical
- **Professional presentation**: Confidence-inspiring for students and colleagues
- **Easier maintenance**: Updates and improvements more systematically organized

### **For Textbook Publication**
- **Publisher-ready organization**: Professional structure impresses academic publishers
- **Clear separation**: Course materials vs. book content clearly delineated
- **Adoption support**: Other instructors can easily implement curriculum
- **Marketing advantage**: Professional repository demonstrates course quality

### **For Academic Community**
- **Open source curriculum**: Other institutions can adapt and improve
- **Digital humanities model**: Exemplar of computational humanities curriculum
- **Collaboration framework**: Clear structure for multi-institutional development
- **Long-term sustainability**: Professional organization supports ongoing development

### **For Student Experience**
- **Intuitive organization**: Easy to find materials and understand progression
- **Professional modeling**: Students see example of good project organization
- **Portfolio integration**: Course structure models portfolio organization principles
- **Career preparation**: Experience with professional development practices

## Risk Assessment and Mitigation

### **Potential Challenges**
- **Link breakage**: All existing URLs would change
- **Learning curve**: New structure requires adjustment period
- **Migration complexity**: Large-scale content reorganization is labor-intensive
- **Timing pressure**: Must coordinate with textbook publication deadline

### **Mitigation Strategies**
- **Gradual migration**: Phase implementation to reduce disruption
- **Comprehensive documentation**: Clear migration guides and new structure explanation
- **Redirect planning**: Maintain legacy links where possible
- **Early testing**: Pilot new structure with small user group before full deployment

## Success Metrics

### **Technical Metrics**
- **Zero broken links**: All internal references work correctly
- **Faster navigation**: Users find materials more quickly
- **Easier maintenance**: Updates and improvements take less time
- **Better collaboration**: Other instructors successfully implement curriculum

### **Academic Metrics**
- **Publisher acceptance**: Textbook proposal enhanced by professional repository
- **Peer adoption**: Other institutions implement WRIT20833 curriculum
- **Student satisfaction**: Improved course experience and learning outcomes
- **Professional recognition**: Repository cited as model for digital humanities education

## Timeline for Implementation

### **Spring 2026 (Planning Phase)**
- **February**: Finalize new repository structure design
- **March**: Begin content migration and reorganization
- **April**: Test new structure with instructor collaborators
- **May**: Complete migration and documentation

### **Summer 2026 (Publication Phase)**
- **June**: Integrate with textbook manuscript development
- **July**: Publisher review and feedback incorporation
- **August**: Official launch with textbook publication

### **Fall 2026 (Implementation Phase)**
- **September**: Deploy reorganized course for first time
- **October**: Monitor adoption and gather feedback
- **November**: Document lessons learned and improvements
- **December**: Plan ongoing maintenance and updates

## Resource Requirements

### **Human Resources**
- **Lead developer**: Coordinate migration and ensure consistency
- **Content reviewer**: Verify all materials maintain pedagogical quality
- **Technical support**: GitHub configuration and web deployment
- **Documentation specialist**: Create comprehensive user guides

### **Technical Infrastructure**
- **GitHub repository management**: New repository setup and configuration
- **Web hosting**: GitHub Pages reconfiguration for new structure
- **Link management**: Redirect strategy for legacy URLs
- **Backup systems**: Ensure no content loss during migration

### **Quality Assurance**
- **Content review**: Verify all materials migrate correctly
- **Link testing**: Ensure all internal references work
- **User testing**: Pilot with small group before full deployment
- **Documentation review**: Comprehensive guides for new structure

## Long-term Vision

### **Sustainable Development Model**
- **Community contributions**: Framework for ongoing improvements
- **Version management**: Clear process for updates and iterations
- **Multi-institutional collaboration**: Support for shared development
- **Open source principles**: Transparent, accessible, improvable

### **Professional Impact**
- **Field leadership**: WRIT20833 as model for computational humanities education
- **Textbook adoption**: Wide implementation in digital humanities programs
- **Pedagogical innovation**: Influence on broader humanities curriculum development
- **Academic recognition**: Citation and adoption by peer institutions

### **Student Outcomes**
- **Professional preparation**: Students experience industry-standard project organization
- **Portfolio development**: Course structure models best practices for academic portfolios
- **Career readiness**: Technical and organizational skills valuable across fields
- **Digital humanities competency**: Complete preparation for advanced study and professional work

---

**Status**: Planning document for Fall 2026 implementation
**Priority**: Medium (important for long-term success, not urgent for current semester)
**Dependencies**: Completion of Fall 2025 semester, textbook publication timeline, HTML/CSS curriculum development

**Next Steps**: Monitor Fall 2025 course delivery, document organizational challenges, begin detailed planning in Spring 2026 for systematic implementation aligned with textbook publication.