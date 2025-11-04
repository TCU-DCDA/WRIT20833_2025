# Semantic HTML & CSS Workshop
## Building Meaningful Web Structures

**Duration:** Two 50-minute sessions  
**Prerequisites:** Basic understanding of HTML tags  
**Learning Outcomes:** Students will improve HTML semantics, fix common errors, and apply foundational CSS

---

## Session 1: Semantic HTML Improvements (50 minutes)

### Opening: What is Semantic HTML? (5 minutes)

**Question to Class:** "What's the difference between these two pieces of code?"

```html
<!-- Version A -->
<div class="header">
    <div class="navigation">...</div>
</div>

<!-- Version B -->
<header>
    <nav>...</nav>
</header>
```

**Answer:** Both might *look* the same to users, but Version B uses **semantic HTML**—tags that describe their *meaning*, not just their appearance.

**Why does this matter?**
- **Accessibility:** Screen readers understand semantic tags
- **SEO:** Search engines prioritize content in semantic containers
- **Maintainability:** Code is easier to read and update
- **Professional Standard:** Industry best practice

---

### Part 1: Fixing Real Code Together (20 minutes)

**Activity:** Let's examine and improve actual student code from the TCU-DCDA/20833_project repository.

#### Issue #1: Navigation Structure & Link Syntax

**Current Code:**
```html
<nav>
Home | 
<a href="#overview">Overview |</a>
<a href="#background">Background |</a>
<a href="#methodology"></a>Methodology |</a>  <!-- ERROR HERE -->
<a href="#analysis">Analysis |</a>
<a href ="#findings">Findings</a>
</nav>
```

**🔍 Problems to Notice:**
1. Navigation uses plain text with pipe separators (not semantic)
2. Line 5: `</a>` appears BEFORE the link text—link is broken!
3. "Home" is plain text, not a clickable link
4. Extra space in `href ="#findings"`
5. No list structure makes it hard to style consistently

**✅ Better Approach: Use a List Structure**
```html
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#background">Background</a></li>
        <li><a href="#methodology">Methodology</a></li>
        <li><a href="#analysis">Analysis</a></li>
        <li><a href="#findings">Findings</a></li>
    </ul>
</nav>
```

**💡 Why Use a List for Navigation?**
- **Semantic meaning:** Navigation IS a list of links
- **Accessibility:** Screen readers announce "list of 6 items"
- **Easier to style:** We can remove bullets and arrange horizontally with CSS
- **Link syntax check:** Each link properly wraps its text: `<a href="...">text</a>`
- **Consistent structure:** All items follow the same pattern

**📝 Note:** Right now this will display as a vertical bulleted list. That's OK! In Session 2, we'll use CSS to:
- Remove the bullets with `list-style: none;`
- Arrange items horizontally with `display: flex;`
- Add spacing and hover effects

**First we build semantic HTML structure, then we style it with CSS.**

---

#### Issue #2: Missing Semantic Structure

**Current Code:**
```html
<body>
<nav>...</nav>
<h1>Welcome to the Project Home</h1>
<section id="overview">...</section>
<section id="background">...</section>
<!-- more sections -->
</body>
```

**❌ Problems:**
- No clear document structure
- H1 floating loose in `<body>`
- Missing semantic containers

**✅ Improved Version:**
```html
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#background">Background</a></li>
                <li><a href="#methodology">Methodology</a></li>
                <li><a href="#analysis">Analysis</a></li>
                <li><a href="#findings">Findings</a></li>
            </ul>
        </nav>
        <h1>Welcome to the Project Home</h1>
    </header>

    <main>
        <section id="overview">
            <h2>Project Overview</h2>
            <p>Content about the project overview...</p>
        </section>
        
        <section id="background">
            <h2>Background</h2>
            <p>Content about the background...</p>
        </section>
        
        <!-- Additional sections -->
    </main>

    <footer>
        <p>&copy; 2025 Research Project Name</p>
    </footer>
</body>
```

**💡 Key Semantic Elements:**

| Element | Purpose | Rules |
|---------|---------|-------|
| `<header>` | Contains site/page header content | Usually includes nav, logo, title |
| `<nav>` | Contains navigation links | Should be inside `<header>` |
| `<main>` | Primary content of the page | **Only ONE per page** |
| `<section>` | Thematic grouping of content | Should have a heading |
| `<footer>` | Footer content (copyright, etc.) | Usually at bottom of page |

---

### Part 2: Hands-On Practice (20 minutes)

**Activity: Fix Your Own Code**

Students open their project's `index.html` and:

1. **Rebuild navigation as a `<ul>` list structure** (check link syntax!)
2. **Add semantic containers** (`<header>`, `<main>`, `<footer>`)
3. **Verify each `<section>` has an ID and heading**

**Pair Programming:** Work with a neighbor to:
- Review each other's code
- Identify improvements
- Test navigation links

**Instructor Circulates:** Check on progress, answer questions

---

### Part 3: Preparing for CSS (5 minutes)

**Add Classes for Future Styling:**

```html
<body>
    <header class="site-header">
        <nav class="main-nav">
            <ul class="nav-list">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#overview" class="nav-link">Overview</a></li>
                <li><a href="#background" class="nav-link">Background</a></li>
                <!-- etc -->
            </ul>
        </nav>
        <h1 class="page-title">Welcome to the Project Home</h1>
    </header>

    <main class="main-content">
        <section id="overview" class="content-section">
            <h2 class="section-heading">Project Overview</h2>
            <p class="section-text">...</p>
        </section>
    </main>

    <footer class="site-footer">
        <p>&copy; 2025 Research Project</p>
    </footer>
</body>
```

**💡 Class Naming Best Practices:**
- Use descriptive names that explain purpose
- Use hyphens for multi-word names: `content-section` not `contentSection`
- Be consistent throughout your project

**⚠️ Classes vs IDs:**
- **IDs** = Unique, one per page (used for navigation anchors)
- **Classes** = Reusable, can appear many times (used for styling)

---

### Session 1 Wrap-Up & Homework (5 minutes)

**Check Your Understanding:**
1. Can you identify all semantic elements in your HTML?
2. Is your navigation built as a `<ul>` list with proper link syntax?
3. Have you added classes to prepare for CSS?

**Homework Before Session 2:**
- Complete semantic restructuring of your HTML
- Rebuild navigation as a list structure
- Link your CSS file: `<link rel="stylesheet" href="css/styles.css">`
- Add basic meta tags (see below)

**Enhanced `<head>` Section:**
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A brief description of your project">
    <meta name="author" content="Your Name">
    <title>Project Title - Your Name</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
```

---

## Session 2: CSS Fundamentals & Visual Design (50 minutes)

### Opening: CSS as Visual Rhetoric (5 minutes)

**Remember from Lecture 8:** Code makes arguments!

Every CSS choice is a rhetorical choice:
- `font-size: 48px` → "This is IMPORTANT"
- `color: red` → "Pay attention! Urgent!"
- `margin: 100px` → "Give this breathing room"
- `display: none` → "This doesn't exist (for some audiences)"

Today we style with **intention**, not just decoration.

---

### Part 1: Understanding the CSS File (10 minutes)

**Current CSS from the repo:**
```css
h1, h2 {
    color: purple;
}

p {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 
                'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}  /* Missing semicolon here! */
```

**❌ Issues:**
1. Missing semicolon after font-family
2. No layout or spacing
3. Not using the classes we added

**✅ Let's Build Better CSS Together**

---

### Part 2: CSS Fundamentals (15 minutes)

#### 1. Reset & Base Styles

```css
/* =========================
   Basic Reset & Typography
   ========================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 
                 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}
```

**Why these choices?**
- `* { margin: 0; padding: 0; }` = Remove browser defaults (gives you control)
- `box-sizing: border-box` = Makes sizing calculations easier
- `line-height: 1.6` = Improves readability
- Set base styles on `body`, they inherit to children

---

#### 2. The Box Model Concept

**Every HTML element is a box with 4 parts:**

```
┌─────────────────────────────────┐
│         MARGIN (outside)         │
│  ┌───────────────────────────┐  │
│  │      BORDER              │  │
│  │  ┌───────────────────┐  │  │
│  │  │    PADDING       │  │  │
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  CONTENT │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └───────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**Visual Example:**
```css
.content-section {
    /* Content = defined by width/height */
    width: 300px;
    
    /* Padding = space inside, between content and border */
    padding: 20px;
    
    /* Border = visible edge */
    border: 2px solid purple;
    
    /* Margin = space outside, between this element and others */
    margin: 30px;
}
```

---

#### 3. Color & Typography

**Using a Consistent Color Palette:**

```css
/* At the top of your CSS, define your colors */
:root {
    --primary-color: #4d1979;      /* TCU Purple */
    --secondary-color: #7c3aed;    /* Light Purple */
    --accent-color: #ffd700;       /* Gold accent */
    --text-color: #333;            /* Dark gray for text */
    --bg-color: #f4f4f4;           /* Light background */
    --white: #ffffff;
}

/* Then use them throughout */
.site-header {
    background-color: var(--primary-color);
    color: var(--white);
}

.section-heading {
    color: var(--primary-color);
    border-bottom: 3px solid var(--secondary-color);
}
```

**💡 Why CSS Variables?**
- Change colors in ONE place
- Easier to maintain consistent theme
- Professional standard

---

### Part 3: Styling Your Portfolio (20 minutes)

**Live Coding Together:** We'll build CSS step-by-step

#### Step 1: Header & Navigation

```css
/* =========================
   Header & Navigation
   ========================= */
.site-header {
    background-color: #4d1979;
    color: white;
    padding: 1rem 0;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-title {
    color: white;
    margin: 1rem 0;
    font-size: 2rem;
}

.main-nav {
    background-color: #3d1461;
    padding: 0.75rem;
}

/* Style the navigation list */
.nav-list {
    list-style: none;           /* Remove bullets */
    padding: 0;
    margin: 0;
    display: flex;              /* Arrange items horizontally */
    justify-content: center;    /* Center the items */
    gap: 1rem;                  /* Space between items */
    flex-wrap: wrap;            /* Wrap on small screens */
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease;
    border-radius: 4px;
}

.nav-link:hover {
    background-color: #4d1979;
}
```

**💡 CSS Concepts Introduced:**
- **list-style: none;** Removes bullet points from the list
- **display: flex;** Modern layout that arranges list items in a row
- **justify-content: center;** Centers items horizontally
- **gap:** Space between flex items (cleaner than margins)
- **flex-wrap: wrap;** Items move to new line on small screens
- **Padding/Margin Units:** `rem` (relative to root font size)
- **Box Shadow:** Creates depth `box-shadow: x y blur color`
- **Transition:** Smooth animation on hover
- **Pseudo-class (`:hover`):** Styles that apply on user interaction

---

#### Step 2: Main Content Layout

```css
/* =========================
   Main Content
   ========================= */
.main-content {
    max-width: 900px;          /* Don't get too wide */
    margin: 2rem auto;         /* Center horizontally */
    padding: 0 1rem;           /* Space on sides for mobile */
}

.content-section {
    background-color: white;
    padding: 2rem;
    margin-bottom: 2rem;       /* Space between sections */
    border-radius: 8px;        /* Rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-heading {
    color: #4d1979;
    border-bottom: 3px solid #7c3aed;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

.section-text {
    margin-bottom: 1rem;
    line-height: 1.8;
}
```

**💡 Layout Concepts:**
- `max-width + margin: auto` = Centered container that doesn't get too wide
- `border-radius` = Rounded corners (modern look)
- Consistent spacing creates visual rhythm

---

#### Step 3: Special Elements

```css
/* Highlighted text box */
.highlighted {
    background-color: #f0e7f8;
    padding: 1rem;
    border-left: 4px solid #7c3aed;
    border-radius: 4px;
    margin: 1rem 0;
}

/* External links */
.external-link {
    color: #4d1979;
    font-weight: bold;
    text-decoration: underline;
}

.external-link:hover {
    color: #7c3aed;
}

/* Footer */
.site-footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
}
```

---

#### Step 4: Responsive Design (Mobile-Friendly)

```css
/* =========================
   Responsive Design
   ========================= */
@media (max-width: 768px) {
    .page-title {
        font-size: 1.5rem;     /* Smaller on mobile */
    }
    
    .main-nav {
        font-size: 0.9rem;
    }
    
    .content-section {
        padding: 1rem;         /* Less padding on mobile */
    }
}
```

**💡 Media Queries:**
- `@media (max-width: 768px)` = "When screen is 768px or narrower"
- Tablet/phone breakpoint
- Adjust font sizes, padding for small screens

---

### Part 4: Testing & Refinement (10 minutes)

**Activity: Apply & Test**

Students:
1. Copy the CSS code to their `styles.css` file
2. Refresh browser to see changes
3. Resize browser window to test responsive design
4. Customize colors using CSS variables

**Quick Wins to Try:**
```css
/* Smooth scrolling for anchor links */
html {
    scroll-behavior: smooth;
}

/* Sticky navigation that stays at top */
.main-nav {
    position: sticky;
    top: 0;
    z-index: 100;
}
```

---

### Session 2 Wrap-Up (5 minutes)

**What We Accomplished:**
✅ Fixed HTML structure with semantic elements  
✅ Added classes for CSS targeting  
✅ Built complete CSS from scratch  
✅ Created professional, responsive layout  
✅ Understood CSS as rhetorical choices  

**Key Takeaways:**
1. **Semantic HTML** helps accessibility, SEO, and maintainability
2. **CSS Box Model** controls spacing and layout
3. **Classes** let you style multiple elements consistently
4. **Responsive design** ensures mobile users have good experience
5. **Every style choice is an argument** about what matters

---

## Additional Resources

### CSS Property Quick Reference

**Typography:**
```css
font-family: 'Arial', sans-serif;
font-size: 16px;
font-weight: bold;
line-height: 1.6;
text-align: center;
text-decoration: underline;
color: #333;
```

**Spacing:**
```css
margin: 20px;               /* All sides */
margin: 10px 20px;          /* Top/bottom left/right */
margin: 10px 20px 30px 40px; /* Top right bottom left */
padding: 1rem;              /* Same syntax as margin */
```

**Background & Borders:**
```css
background-color: #f4f4f4;
background-image: url('image.jpg');
border: 2px solid purple;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
```

**Layout:**
```css
width: 300px;
max-width: 900px;
height: 200px;
display: block | inline | flex | grid;
position: static | relative | absolute | fixed | sticky;
```

---

### Common CSS Mistakes & Fixes

| Mistake | Fix |
|---------|-----|
| Missing semicolons | Always end declarations with `;` |
| Wrong selector | Check spelling, use browser DevTools |
| Specificity issues | Use classes, avoid `!important` |
| No units on numbers | `margin: 20px` not `margin: 20` |
| Colors without `#` | `color: #333` not `color: 333` |

---

### Next Steps: Extension Challenges

**For students who want to go further:**

1. **Add CSS Grid for multi-column layout:**
   ```css
   .content-grid {
       display: grid;
       grid-template-columns: 2fr 1fr;
       gap: 2rem;
   }
   ```

2. **Create a color scheme with complementary colors:**
   - Use [Adobe Color](https://color.adobe.com/) or [Coolors](https://coolors.co/)

3. **Add CSS animations:**
   ```css
   .fade-in {
       animation: fadeIn 1s ease-in;
   }
   
   @keyframes fadeIn {
       from { opacity: 0; }
       to { opacity: 1; }
   }
   ```

4. **Improve accessibility:**
   - Add `focus` states for keyboard navigation
   - Ensure color contrast meets WCAG standards
   - Test with screen reader

---

## Assessment Checklist

**Students should be able to:**

- [ ] Identify and fix HTML syntax errors
- [ ] Use semantic HTML elements appropriately
- [ ] Explain the purpose of `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] Add classes to HTML elements
- [ ] Link external CSS file to HTML
- [ ] Understand the CSS box model
- [ ] Apply colors, fonts, and spacing with CSS
- [ ] Create hover effects on interactive elements
- [ ] Make basic responsive design adjustments
- [ ] Test their website on different screen sizes

---

## Instructor Notes

**Session 1 Timing:**
- Opening discussion: 5 min
- Code review & fixing: 20 min
- Hands-on practice: 20 min
- Wrap-up: 5 min

**Session 2 Timing:**
- Opening: 5 min
- CSS fundamentals: 15 min
- Live coding: 20 min
- Testing: 10 min

**Differentiation:**
- **Struggling students:** Provide template files with comments
- **Advanced students:** Extension challenges listed above
- **All students:** Pair programming encourages peer learning

**Common Questions:**
- "Why isn't my CSS working?" → Check file path, spelling, browser cache
- "How do I pick colors?" → Start with 2-3 colors, use color wheel
- "What about JavaScript?" → That's next! HTML/CSS foundation comes first

---

## Example: Complete Before & After

### Before (Student Code):
```html
<!DOCTYPE html>
<html>
<head>
    <title>Project</title>
</head>
<body>
<nav>
Home | <a href="#overview">Overview</a>
</nav>
<h1>My Project</h1>
<section id="overview">
<h2>Overview</h2>
<p>Some text here.</p>
</section>
</body>
</html>
```

### After (Improved Code):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Research project on digital humanities">
    <meta name="author" content="Student Name">
    <title>Research Project - Student Name</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header class="site-header">
        <nav class="main-nav">
            <a href="#home" class="nav-link">Home</a> | 
            <a href="#overview" class="nav-link">Overview</a> | 
            <a href="#background" class="nav-link">Background</a>
        </nav>
        <h1 class="page-title">My Research Project</h1>
    </header>

    <main class="main-content">
        <section id="overview" class="content-section">
            <h2 class="section-heading">Overview</h2>
            <p class="section-text">This project explores the intersection 
            of digital humanities methods and cultural analysis...</p>
        </section>
        
        <section id="background" class="content-section">
            <h2 class="section-heading">Background</h2>
            <p class="section-text">Lorem ipsum dolor sit amet...</p>
        </section>
    </main>

    <footer class="site-footer">
        <p>&copy; 2025 Student Name. All rights reserved.</p>
    </footer>
</body>
</html>
```

**What improved?**
✅ Semantic structure with `<header>`, `<main>`, `<footer>`  
✅ Proper meta tags in `<head>`  
✅ CSS linked and classes added  
✅ All navigation items are links  
✅ Descriptive class names  
✅ Professional structure ready for styling  

---

*End of Workshop Materials*
