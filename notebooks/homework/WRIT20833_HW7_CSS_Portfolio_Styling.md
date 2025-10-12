# WRIT 20833 - Homework 7: CSS Portfolio Styling
## When Coding Meets Culture: Designing Your Data Story

**Due**: Sunday, November 9, 2025
**Format**: Updated GitHub repository with styled portfolio + design report
**Assessment**: Ungrading approach (see criteria below)

---

## Overview

In this assignment, you'll transform your plain HTML portfolio from HW6 into a visually appealing, professionally designed website using CSS. You'll learn how design choices affect how audiences engage with your research story about cultural texts and computational analysis.

**What you'll build**: A fully styled 4-page portfolio with custom typography, colors, layout, and responsive design that enhances your "When Coding Meets Culture" narrative.

**Why this matters**: Visual design isn't just decoration—it's rhetoric. How you present your data-driven insights affects how audiences understand and trust your work.

---

## Learning Objectives

By completing this assignment, you will:
- Apply CSS styling to control typography, colors, and spacing
- Create flexible layouts using CSS Flexbox
- Implement responsive design for different screen sizes
- Make intentional design choices that support your content
- Practice iterative development through multiple commits

---

## Technical Requirements

### Prerequisites
- **Completed HW6**: Your 4-page HTML portfolio structure
- **VS Code** with Live Server for preview
- **GitHub Desktop** for version control

### File Structure
Add CSS to your existing portfolio:

```
my-portfolio/
├── index.html
├── data.html
├── analysis.html
├── insights.html
├── style.css              ← NEW: Your stylesheet
└── images/
    └── (your HW6 visualizations)
```

### Required CSS Features

#### 1. External Stylesheet
- Create `style.css` in your portfolio folder
- Link it in the `<head>` of all 4 HTML pages:
  ```html
  <link rel="stylesheet" href="style.css">
  ```

#### 2. Typography Styling
- Choose readable font families (web-safe or Google Fonts)
- Set appropriate font sizes for headings and body text
- Control line height and letter spacing for readability
- Style your navigation links

#### 3. Color Scheme
- Select a cohesive color palette (3-5 colors)
- Apply colors to text, backgrounds, and accents
- Ensure sufficient contrast for readability
- Consider what your colors communicate about your research

#### 4. Spacing & Layout
- Use margin and padding to create visual breathing room
- Apply CSS Flexbox for at least one layout element (navigation, content sections, or footer)
- Create consistent spacing throughout the site

#### 5. Responsive Design
- Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to HTML `<head>`
- Write at least one media query for smaller screens (mobile/tablet)
- Test responsiveness using browser DevTools

---

## Design Requirements

### Visual Hierarchy
Your styling should guide readers through your content:
- **Page titles** (`<h1>`) should be most prominent
- **Section headings** (`<h2>`, `<h3>`) should be clearly distinguished
- **Body text** should be comfortable to read
- **Navigation** should be easy to identify and use

### Cohesive Design System
Apply consistent styling across all 4 pages:
- Same colors, fonts, and spacing rules
- Navigation looks identical on each page
- Headers and footers maintain consistent appearance

### Content Enhancement
Your design choices should support your research story:
- Highlight key findings visually
- Make visualizations prominent and clear
- Use color to emphasize important insights
- Create clear visual separation between sections

---

## Version Control Requirements

Demonstrate iterative design through **minimum 5-7 commits**:

### Required Commits:
1. **Initial CSS setup**: Create `style.css`, link to HTML files, basic resets
2. **Typography commit**: Add font families, sizes, and text styling
3. **Color scheme commit**: Apply colors to backgrounds, text, and accents
4. **Layout commit**: Add spacing (margin/padding) and flexbox layouts
5. **Responsive design commit**: Add media queries and test mobile view
6. **Refinement commits** (1-2): Polish details, fix issues, improve design

### Good Commit Messages:
- ✅ "Add Google Fonts and typography styling to all pages"
- ✅ "Implement flexbox navigation bar with hover effects"
- ✅ "Add mobile-responsive media query for screens under 768px"
- ❌ "CSS updates"
- ❌ "More styling"

---

## Deliverables

Submit the following:

### 1. Updated GitHub Repository
- Your HW6 repository with new `style.css` file
- All 4 HTML pages linked to stylesheet
- 5-7 commits showing CSS development process
- Updated and polished content

### 2. Design Report (400-500 words)
Submit as PDF or .docx addressing:

**Design Choices**:
- What color palette did you choose and why?
- What do your colors communicate about your research topic?
- Why did you select your fonts and typographic styles?
- How does your design support your "When Coding Meets Culture" narrative?

**Technical Implementation**:
- Where did you use Flexbox and why?
- How did you make your site responsive?
- What CSS challenges did you encounter and how did you solve them?

**Reflection**:
- How does visual design change how readers engage with your data story?
- What surprised you about the power of CSS?
- What design elements are you most proud of?

---

## Assessment Criteria

This assignment follows our **ungrading philosophy**: "earned insight over clean code." You'll engage in self-assessment and receive narrative feedback on your design learning and growth.

### What Success Looks Like

Your styled portfolio demonstrates learning and growth when it shows:

**CSS Implementation**
- External stylesheet properly linked to all pages
- Typography styling applied (fonts, sizes, spacing)
- Cohesive color scheme with good contrast
- Effective use of margin and padding for spacing
- At least one Flexbox layout implemented
- Responsive design with media queries
- *Growth indicator: You understand CSS as a rhetorical tool for visual communication*

**Design Quality**
- Visual hierarchy guides reader through content
- Consistent styling across all 4 pages
- Design choices enhance rather than distract from content
- Professional appearance suitable for public portfolio
- Color and typography choices are intentional and appropriate
- *Growth indicator: You make deliberate design decisions that support your research narrative*

**Version Control Practice**
- 5-7 meaningful commits showing iterative design
- Commits demonstrate progressive development
- Descriptive commit messages explain changes
- *Growth indicator: You embrace iterative design and document your evolution*

**Design Report**
- All prompts addressed thoughtfully
- Demonstrates critical thinking about design rhetoric
- 400-500 word length requirement met
- Clear connection between design choices and research content
- *Growth indicator: You can articulate how visual design shapes meaning*

### Self-Assessment Component

With your submission, include a brief self-assessment (can be part of your design report):
- What design choices are you most proud of and why?
- What CSS challenges pushed your learning the most?
- How did iterative design (through commits) improve your final product?
- How does visual design enhance your data storytelling?
- Where do you see room for continued growth?

You'll receive narrative feedback focused on your design thinking, technical growth, and areas for continued development. The goal is learning to design effectively for web audiences, not achieving design perfection.

---

## Design Guidelines for Beginners

### Choosing Colors

**Start with a simple palette**:
- 1 **primary color** (main brand/theme color)
- 1 **accent color** (for highlights and calls-to-action)
- 1-2 **neutral colors** (grays for text and backgrounds)
- **White/off-white** for backgrounds

**Resources**:
- [Coolors.co](https://coolors.co) - Generate color palettes
- [Adobe Color](https://color.adobe.com) - Explore color harmonies
- Check contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Example palette for cultural analysis research**:
- Primary: Deep blue (#2C3E50) - trustworthy, academic
- Accent: Warm orange (#E67E22) - energetic, highlights findings
- Neutral: Dark gray (#34495E) for text
- Light gray (#ECF0F1) for backgrounds

### Choosing Fonts

**Web-Safe Fonts** (no extra setup needed):
- **Serif**: Georgia, Times New Roman (traditional, academic)
- **Sans-serif**: Arial, Helvetica, Verdana (modern, clean)

**Google Fonts** (add to `<head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
```

**Font pairing tips**:
- **Headings**: Use a bold, distinctive font
- **Body text**: Use a highly readable font
- Don't use more than 2 different font families

**Example pairing**:
- Headings: Merriweather (serif, traditional)
- Body: Open Sans (sans-serif, readable)

### Creating Visual Hierarchy

```css
/* Page title - largest and boldest */
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 1rem;
}

/* Section headings - medium */
h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #34495E;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

/* Subsection headings - smaller */
h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #34495E;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

/* Body text - readable */
p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
}
```

---

## Starter CSS Template

Here's a foundation to build on (adapt to your design!):

```css
/* ========================================
   GLOBAL STYLES & RESET
   ======================================== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* ========================================
   TYPOGRAPHY
   ======================================== */

h1 {
  font-family: 'Merriweather', Georgia, serif;
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 1rem;
}

h2 {
  font-family: 'Merriweather', Georgia, serif;
  font-size: 2rem;
  color: #34495E;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

/* ========================================
   HEADER & NAVIGATION
   ======================================== */

header {
  background-color: #2C3E50;
  color: white;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #E67E22;
}

/* ========================================
   MAIN CONTENT
   ======================================== */

main {
  padding: 2rem 0;
}

/* ========================================
   IMAGES
   ======================================== */

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1.5rem 0;
}

/* ========================================
   FOOTER
   ======================================== */

footer {
  background-color: #ECF0F1;
  padding: 1.5rem;
  margin-top: 3rem;
  text-align: center;
  color: #7F8C8D;
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */

@media (max-width: 768px) {
  body {
    padding: 10px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  nav ul {
    flex-direction: column;
    gap: 1rem;
  }
}
```

---

## Getting Started Checklist

- [ ] Review your HW6 HTML portfolio
- [ ] Review Session 8 notes on CSS basics
- [ ] Review Session 10 notes on Flexbox
- [ ] Review Session 11 notes on responsive design
- [ ] Choose your color palette (3-5 colors)
- [ ] Select your fonts (1-2 font families)
- [ ] Create `style.css` file
- [ ] Link stylesheet to all HTML pages
- [ ] Test with Live Server as you build

---

## Development Workflow

Follow this iterative process:

### 1. Setup (Session 8)
- Create `style.css`
- Link to all HTML files
- Add basic CSS reset
- Make first commit

### 2. Typography (Session 8)
- Choose and add fonts
- Style headings and body text
- Test readability
- Commit typography changes

### 3. Colors (Session 8)
- Apply background colors
- Style text colors
- Add accent colors
- Commit color scheme

### 4. Layout & Spacing (Session 10)
- Add margin and padding
- Implement Flexbox for navigation
- Create visual breathing room
- Commit layout changes

### 5. Responsive Design (Session 11)
- Add viewport meta tag
- Write media queries
- Test on mobile/tablet sizes in DevTools
- Commit responsive CSS

### 6. Polish (Session 9, 12)
- Refine details
- Fix inconsistencies
- Test all pages
- Final commits

---

## Flexbox Examples

### Horizontal Navigation Bar
```css
nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 1rem 0;
}

nav li {
  margin: 0 1rem;
}
```

### Content Sections Side-by-Side
```css
.content-row {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
}

.content-column {
  flex: 1;
}
```

### Centered Content
```css
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}
```

---

## Responsive Design Tips

### Mobile-First Approach
Write your base CSS for mobile, then add complexity for larger screens:

```css
/* Base styles for mobile */
nav ul {
  flex-direction: column;
}

/* Larger screens */
@media (min-width: 768px) {
  nav ul {
    flex-direction: row;
  }
}
```

### Common Breakpoints
- **Mobile**: up to 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

### Testing Responsiveness
1. Open your page in Chrome/Firefox
2. Press F12 to open DevTools
3. Click the device toolbar icon (or Ctrl+Shift+M)
4. Test different screen sizes

---

## Tips for Success

### Design Principles
- **Less is more**: Don't use every CSS property at once
- **Consistency**: Keep styles uniform across pages
- **Readability first**: Make sure text is easy to read
- **Purpose over decoration**: Every design choice should support your content

### Technical Tips
- **Save and preview often**: Use Live Server to see changes immediately
- **Comment your CSS**: Explain sections with `/* comments */`
- **Commit frequently**: After each major design addition
- **Test early**: Check mobile responsiveness as you build, not at the end

### Common Beginner Mistakes to Avoid
- ❌ Using too many colors or fonts
- ❌ Forgetting to link CSS to all HTML pages
- ❌ Setting fixed pixel widths that break on mobile
- ❌ Poor text/background contrast making content unreadable
- ❌ Not testing on different screen sizes

---

## Resources & Support

### Class Resources
- **Session 8**: CSS basics (typography, colors, spacing)
- **Session 10**: Flexbox layouts
- **Session 11**: Responsive design with media queries
- **Session 9, 12**: Workshop time for hands-on styling

### CSS Reference
- [MDN CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Google Fonts](https://fonts.google.com/)

### Getting Help
- **Office Hours**: Get design feedback and troubleshooting
- **Class Workshop Time**: Sessions 9, 12 for hands-on support
- **Peer Review**: Share designs and get classmate feedback

---

## Looking Ahead: HW8

After styling your portfolio in HW7, you'll deploy it publicly with GitHub Pages in HW8. Your styled portfolio will become part of your final project, demonstrating how visual design enhances data storytelling.

---

## Submission Instructions

### By Friday, November 8, 11:59 PM:

1. **Push all CSS commits** to your GitHub repository
2. **Submit to Canvas**:
   - Updated GitHub repository URL (same as HW6)
   - Design report (PDF or .docx)
   - In submission comments, share what design choice you're proudest of

**Filename for report**: `LASTNAME_HW7_Design_Report.pdf`

---

## Questions?

If you're stuck:
1. Review Session 8, 10, 11 notes
2. Check MDN CSS documentation
3. Use class workshop time (Sessions 9, 12)
4. Test with browser DevTools
5. Attend office hours
6. Ask peers—design often benefits from multiple perspectives!

Remember: Design is iterative. Your first attempt won't be perfect, and that's expected. Commit often and refine as you learn!

---

*This assignment is part of the "When Coding Meets Culture" final project sequence. Your styled portfolio will be deployed publicly (HW8) and integrated into your final group project presentation.*
