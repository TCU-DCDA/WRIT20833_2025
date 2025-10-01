# Mini-Lecture Template Guide

**For WRIT20833-2025 Mini-Lecture Series**
*Last Updated: October 2025*

---

## Quick Start

1. **Copy the template**: Duplicate `template.html` into a new lecture directory (e.g., `lecture-7/`)
2. **Rename**: Keep as `index.html` in the new directory
3. **Update metadata**: Change title, lecture number, and description
4. **Add content**: Fill in your slides using the provided layout patterns
5. **Create images folder**: Add `images/` directory with optimized images
6. **Optional**: Create `style.css` for lecture-specific overrides

---

## File Structure

```
mini-lectures/
├── shared-style.css          # Base styles (DON'T EDIT)
├── template.html             # Copy this for new lectures
├── TEMPLATE_GUIDE.md         # This file
├── lecture-N/
│   ├── index.html            # Your lecture (copied from template.html)
│   ├── style.css             # Optional: lecture-specific styles
│   └── images/
│       ├── slide1.jpg
│       ├── slide2.jpg
│       └── ...
```

---

## Layout Patterns

### 1. **Title/Hook Slide** (Full-Width Centered)

**When to use**: Opening slide with main title, hook question, or compelling visual

**Structure**:
```html
<div class="slide-container active">
    <div class="slide">
        <h1>[Lecture Title]</h1>
        <p class="subtitle">[Subtitle]</p>
        <img src="images/slide1.jpg" alt="[Description]" class="slide-image">

        <div class="hook-question">
            <h2 style="color: #c9a9ff; font-size: 2.5rem; margin: 2rem 0;">
                "[Compelling question here]"
            </h2>
        </div>
    </div>
</div>
```

**Best Practices**:
- Keep title concise (2-5 words)
- Use subtitle for clarity
- Hook question should provoke thought
- Image should be visually striking (max 500px width recommended)

---

### 2. **Image-Left Layout** (40% image, 60% text)

**When to use**: When you want the image to "introduce" the text content, flowing left-to-right

**Structure**:
```html
<div class="layout-image-left">
    <div class="layout-image">
        <img src="images/slide2.jpg" alt="[Description]">
    </div>

    <div class="layout-content">
        <h3>[Content Heading]</h3>
        <p>[Text content]</p>
        <ul>
            <li>[Point 1]</li>
            <li>[Point 2]</li>
        </ul>
    </div>
</div>
```

**Image Sizing**:
- Images auto-scale proportionally
- Max height: 550px (desktop), 350px (tablet), 250px (mobile)
- Use high-quality images (at least 800px width)
- Object-fit ensures proper aspect ratio

**Best Practices**:
- Use for visual concepts that need explanation
- Keep text to 3-5 bullet points or 2-3 paragraphs
- Image should clearly relate to adjacent content

---

### 3. **Image-Right Layout** (60% text, 40% image)

**When to use**: When text should be read first, with image as supporting visual

**Structure**:
```html
<div class="layout-image-right">
    <div class="layout-content">
        <h3>[Content Heading]</h3>
        <p>[Text content]</p>
    </div>

    <div class="layout-image">
        <img src="images/slide3.jpg" alt="[Description]">
    </div>
</div>
```

**Best Practices**:
- Use for text-heavy explanations with visual support
- Image reinforces concepts described in text
- Good for definitions, frameworks, or theoretical concepts

---

### 4. **Multi-Slide Text-Heavy Content** (Continuation Pattern)

**When to use**: Complex concepts requiring more than 5-6 bullet points or 3-4 paragraphs

**Slide 1 Structure** (Part 1):
```html
<div class="slide-container" data-part="Part 1 of 2">
    <div class="slide">
        <h2>[Topic Title]</h2>

        <div class="text-section">
            <h3>[First Aspect]</h3>
            <ul>
                <li>[Point 1]</li>
                <li>[Point 2]</li>
                <li>[Point 3]</li>
            </ul>
        </div>

        <div class="continuation-arrow">↓</div>
        <p style="text-align: center; font-style: italic; color: #c9a9ff;">
            Continued on next slide...
        </p>
    </div>
</div>
```

**Slide 2 Structure** (Part 2):
```html
<div class="slide-container" data-part="Part 2 of 2">
    <div class="slide">
        <h2>[Topic Title] <span style="font-size: 1.5rem;">(continued)</span></h2>

        <div class="text-section">
            <h3>[Remaining Content]</h3>
            <ul>
                <li>[Point 4]</li>
                <li>[Point 5]</li>
            </ul>
        </div>

        <div class="key-insight">
            <p><strong>Synthesis:</strong> [Bring it together]</p>
        </div>
    </div>
</div>
```

**How It Works**:
- Add `data-part="Part 1 of 2"` attribute to the `<div class="slide-container">` element
- The part indicator automatically appears in the navigation bar (upper right)
- Indicator only shows when present, hides on slides without the attribute
- Format: "Part X of Y" (e.g., "Part 1 of 2", "Part 2 of 3")

**When to Split Content**:
- ✅ **DO split** when you have 6+ bullet points
- ✅ **DO split** at natural concept boundaries (e.g., "Causes" → "Effects")
- ✅ **DO split** when a single slide feels crowded
- ❌ **DON'T split** mid-concept or mid-list arbitrarily
- ❌ **DON'T split** just to add more slides

**Best Practices**:
- Each part should feel complete on its own
- Use continuation badges consistently
- End Part 1 with clear transition indicator
- Begin Part 2 with reference to previous content
- Maximum 3 parts per concept (if you need more, reconsider structure)

---

### 5. **Comparison Grid Layout** (Side-by-Side)

**When to use**: Comparing two concepts, approaches, or time periods

**Structure**:
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
    <div style="background: rgba(201, 169, 255, 0.1); padding: 1.5rem; border-radius: 12px;">
        <h3>[Option A]</h3>
        <ul>
            <li>→ [Point 1]</li>
            <li>→ [Point 2]</li>
        </ul>
    </div>

    <div style="background: rgba(231, 76, 60, 0.15); padding: 1.5rem; border-radius: 12px;">
        <h3>[Option B]</h3>
        <ul>
            <li>→ [Point 1]</li>
            <li>→ [Point 2]</li>
        </ul>
    </div>
</div>
```

**Color Schemes**:
- **Purple** (`rgba(201, 169, 255, 0.1)`): Default, neutral
- **Red** (`rgba(231, 76, 60, 0.15)`): Warning, negative, "now"
- **Green** (`rgba(46, 204, 113, 0.15)`): Positive, solution, "better"
- **Yellow** (`rgba(255, 217, 61, 0.1)`): Caution, important note

---

### 6. **Emphasis/Question Slide** (Centered)

**When to use**: Critical questions, key statements, or transitions

**Structure**:
```html
<div class="hook-question">
    <h2 style="color: #c9a9ff; font-size: 2rem; margin: 2rem 0;">
        "[Important question or statement]"
    </h2>
</div>
```

**Best Practices**:
- Use sparingly for maximum impact
- Font size: 2-2.5rem for questions
- Keep text to one sentence or question
- Follow with explanation or context

---

### 7. **Resources/Readings Slide** (Card Grid)

**When to use**: Final slide with recommended readings or external resources

**Structure**: See `template.html` for full card grid structure

**Best Practices**:
- Include author, year, and title
- Brief description (1-2 sentences)
- Working links (test before publishing)
- 2-4 resources maximum
- Use "Read Online →" or "Publisher Page →" for link text

---

## Navigation Components

### Fixed Positioning (DO NOT MODIFY)

**Upper Left**: Series Navigation
```html
<div class="inter-lecture-nav">
    <div class="lecture-nav">
        <a href="../index.html" class="lecture-nav-btn series-home">← Series Home</a>
    </div>
</div>
```

**Upper Right**: Slide Controls
```html
<div class="navigation-container">
    <div class="navigation">
        <button class="nav-btn" onclick="previousSlide()">←</button>
        <span class="nav-counter" id="slideCounter">1 / 8</span>
        <button class="nav-btn" onclick="nextSlide()">→</button>
    </div>
</div>
```

**Keyboard Shortcuts**:
- `→` or `Space`: Next slide
- `←`: Previous slide

---

## Image Guidelines

### Sizing Recommendations

| Context | Recommended Size | Max File Size |
|---------|-----------------|---------------|
| Full-width slide image | 1000-1200px width | 300KB |
| Side-by-side layout | 800-1000px width | 200KB |
| Small image | 600-800px width | 150KB |

### Format Guidelines
- **Format**: JPG for photos, PNG for graphics with text
- **Optimization**: Use tools like TinyPNG or ImageOptim
- **Alt Text**: Always include descriptive alt text for accessibility
- **Naming**: Use descriptive names (`ethics_framework.jpg` not `img1.jpg`)

### Folder Structure
```
lecture-N/
└── images/
    ├── slide1_title.jpg
    ├── slide2_concept.jpg
    └── slide3_example.jpg
```

---

## Responsive Design

All layouts are **automatically responsive**. No additional work required.

### Breakpoints
- **Desktop** (>768px): Original layout
- **Tablet** (481-768px): Adjusted spacing, smaller images
- **Mobile** (≤480px): Single column, stacked layout

### Mobile Behavior
- Image-left/right layouts → Stack vertically (image always on top)
- Images scale down to 250px max height
- Text remains readable at 1.2rem
- Navigation buttons remain accessible

---

## Color Theme

### Primary Palette
- **Purple Gradient**: `#c9a9ff` → `#9b59b6` → `#e74c3c`
- **Background**: `#1a0330` → `#2d1b5e` (gradient)
- **Text**: White with variations
- **Links**: `#e6d3ff` (WCAG compliant)

### Accent Colors
- **Success/Positive**: `#2ecc71` (green)
- **Warning/Important**: `#ffc107` (yellow)
- **Error/Negative**: `#e74c3c` (red)
- **Info/Neutral**: `#3498db` (blue)

---

## Typography

### Fonts
- **Headings**: Orbitron (monospace, futuristic)
- **Body Text**: Rajdhani (sans-serif, readable)
- **Code**: Courier New (monospace)

### Hierarchy
```
h1: 4rem    - Main lecture title
h2: 3rem    - Slide titles
h3: 1.8rem  - Section headings
h4: 1.4rem  - Subsection headings
p:  1.4rem  - Body text
```

---

## Accessibility Checklist

Before publishing your lecture, ensure:

- [ ] All images have descriptive alt text
- [ ] Color contrast meets WCAG AA standards (links are `#e6d3ff`)
- [ ] Keyboard navigation works (test arrow keys)
- [ ] Text is readable at all zoom levels
- [ ] Links are underlined for visibility
- [ ] Focus states are visible (test with Tab key)

---

## Common Mistakes to Avoid

### ❌ DON'T
- Modify `shared-style.css` directly (use lecture-specific `style.css` instead)
- Use images larger than 1MB
- Create slides with >7 bullet points
- Use inline styles for complex layouts
- Forget alt text on images
- Use color alone to convey meaning
- Split content arbitrarily across slides

### ✅ DO
- Test on multiple screen sizes
- Optimize images before adding
- Use continuation indicators for multi-slide content
- Keep slide count to 8-12 slides
- Provide context for all visuals
- Use semantic HTML structure
- Test keyboard navigation

---

## Testing Checklist

Before publishing, test:

1. **Desktop Browser** (Chrome, Firefox, Safari)
   - [ ] All slides display correctly
   - [ ] Images load and scale properly
   - [ ] Navigation buttons work
   - [ ] Keyboard shortcuts work

2. **Mobile/Tablet** (Chrome mobile, Safari iOS)
   - [ ] Layouts stack vertically
   - [ ] Images fit screen width
   - [ ] Touch navigation works
   - [ ] Text remains readable

3. **Accessibility**
   - [ ] Tab through all interactive elements
   - [ ] Screen reader reads content in logical order
   - [ ] All images have alt text
   - [ ] Links have clear labels

---

## Example Workflows

### Workflow 1: Creating a New Lecture from Scratch

1. Copy `template.html` → `lecture-7/index.html`
2. Update `<title>` and lecture metadata
3. Plan slide structure on paper/whiteboard
4. Gather and optimize images
5. Fill in content using appropriate layouts
6. Test on desktop and mobile
7. Proofread and check accessibility
8. Commit to GitHub

### Workflow 2: Converting Existing Content

1. Identify slide types in existing content
2. Map to template layout patterns
3. Create new HTML from template
4. Copy content into appropriate layout structures
5. Update image paths and alt text
6. Test and refine
7. Replace old file with new version

---

## Support and Resources

- **Template Questions**: Refer to this guide first
- **CSS Issues**: Check `shared-style.css` documentation
- **Layout Problems**: Review responsive design section
- **Accessibility**: See checklist above

---

## Version History

- **v1.0** (October 2025): Initial template with standardized layouts
  - Image-left/right layouts
  - Multi-slide continuation pattern
  - Comprehensive documentation

---

**Questions?** Refer to existing lectures (`lecture-0-humanities` through `lecture-6-archaeology`) for working examples of each pattern.
