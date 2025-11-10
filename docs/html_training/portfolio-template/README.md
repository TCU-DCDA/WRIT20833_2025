# WRIT 20833 Portfolio Template

This template provides a complete starting point for your "When Coding Meets Culture" final project web portfolio.

## What's Included

```
portfolio-template/
├── index.html          ← Your main HTML file (complete template)
├── css/
│   └── styles.css      ← Complete CSS styling (no changes needed!)
├── images/             ← Put your visualization PNG files here
└── README.md           ← This file
```

## Getting Started

### Step 1: Download and Set Up

1. **Download this template folder** to your computer
2. **Rename the folder** to match your project (e.g., `my-sentiment-project`)
3. **Open `index.html`** in a text editor (VS Code, Sublime, Notepad++, etc.)

### Step 2: Customize Your Content

Open `index.html` and look for `<!-- TODO: ... -->` comments. These mark places where you need to add your own content:

**Replace these:**
- `Your Project Title` → Your actual project title
- `Your Name` → Your name
- All `TODO` comments with your research content

**Fill in these sections:**
1. **Research Question** - Your research question and background
2. **Data & Methods** - Dataset details, collection methods, ethical considerations
3. **Analysis** - Add your visualizations, code examples, and findings
4. **Findings** - Present your main discoveries with data tables
5. **Reflection** - Connect to course frameworks and reflect critically

### Step 3: Add Your Visualizations

1. **Export charts from Jupyter** as PNG files (see code example below)
2. **Save PNG files** in the `images/` folder
3. **Update image paths** in `index.html` to match your filenames

**Example: Exporting from Jupyter**

```python
import matplotlib.pyplot as plt

# Create your visualization
plt.figure(figsize=(10, 6))
# ... your plotting code ...

# Save as PNG
plt.savefig('sentiment-distribution.png', dpi=300, bbox_inches='tight')
plt.show()

# Then move the PNG file to your portfolio-template/images/ folder
```

### Step 4: Preview Your Portfolio

**Open `index.html` in a web browser:**
- **Mac:** Right-click → Open With → Chrome/Firefox/Safari
- **Windows:** Right-click → Open with → Chrome/Firefox/Edge

Refresh the browser after making changes to see updates.

### Step 5: Deploy to GitHub Pages (Optional)

1. Create a new repository on GitHub
2. Upload your portfolio folder contents
3. Go to Settings → Pages
4. Select "Deploy from main branch"
5. Your portfolio will be live at: `yourusername.github.io/repository-name`

## Template Features

### ✅ What's Already Done for You

- **Semantic HTML structure** - Properly organized with nav, header, main, sections, footer
- **Complete CSS styling** - Professional design with TCU colors
- **Responsive design** - Works on desktop, tablet, and mobile
- **Sticky navigation** - Menu stays at top when scrolling
- **Code block styling** - Python code displays with dark theme
- **Data visualization containers** - Image galleries with captions
- **Data tables** - Formatted result tables
- **Framework callouts** - Special styling for critical reflections
- **Smooth scrolling** - Anchor links scroll smoothly
- **Print-friendly** - Portfolio prints nicely for offline viewing

### 🎨 Color Scheme

The template uses TCU colors:
- **Primary:** TCU Purple (#4d1979)
- **Secondary:** Light Purple (#7c3aed)
- **Accent:** Gold (#ffd700)

**Want different colors?** Edit the `:root` section at the top of `css/styles.css`

## Content Guidelines

### Research Question Section
- State your research question clearly
- Explain why it matters
- Provide background context

### Data & Methods Section
Include:
- Data source and size
- Collection methodology
- Ethical considerations (privacy, consent, etc.)
- Analysis tools (pandas, VADER, Gensim)

### Analysis Section
Show:
- Visualizations with descriptive captions
- Code snippets demonstrating your methods
- Clear explanations of what you discovered

### Findings Section
Present:
- Key discoveries (numbered list recommended)
- Data tables with results
- Discussion of what surprised you

### Reflection Section
Address:
- Integration of computational + interpretive methods
- Connections to course frameworks (Classification Logic, AI Agency, etc.)
- Limitations of your approach
- Future research directions
- Your confidence level in conclusions

## Tips for Success

### Writing for Public Audiences
- **Avoid jargon** - Explain technical terms
- **Tell a story** - Guide readers through your process
- **Be honest** - Discuss limitations and uncertainties
- **Show evolution** - Explain how your thinking changed

### Technical Best Practices
- **Alt text for images** - Describe what data visualizations show
- **Descriptive captions** - Help readers interpret charts
- **Code comments** - Explain what your code does
- **TODO markers** - Use `<!-- TODO: ... -->` for incomplete sections

### Accessibility
- Use semantic HTML tags (already done in template)
- Write descriptive alt text for images
- Ensure sufficient color contrast (template already handles this)
- Test with keyboard navigation (Tab key should work)

## Troubleshooting

**Images not showing?**
- Check that PNG files are in the `images/` folder
- Verify image filenames match exactly (case-sensitive!)
- Make sure paths in HTML start with `images/` not `/images/`

**CSS not loading?**
- Verify `styles.css` is in the `css/` folder
- Check that `<link>` tag in HTML points to `css/styles.css`

**Navigation not sticky?**
- Make sure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Check that CSS file is loading properly

**Need help?**
- Review Session 1-3 of the HTML/CSS Workshop
- Check the Resources section in the workshop
- Ask in class or office hours!

## Project Checklist

Use this checklist to track your progress:

- [ ] Downloaded and renamed template folder
- [ ] Replaced placeholder text with project title and name
- [ ] Completed Research Question section
- [ ] Added dataset documentation and methods
- [ ] Exported visualizations from Jupyter notebooks
- [ ] Added visualizations to `images/` folder
- [ ] Updated image paths in HTML
- [ ] Included code examples with explanations
- [ ] Created data tables with results
- [ ] Wrote critical reflection section
- [ ] Connected findings to course frameworks
- [ ] Added GitHub repository link to footer
- [ ] Tested portfolio in web browser
- [ ] Checked mobile responsiveness
- [ ] Verified all links work
- [ ] Proofread all content
- [ ] (Optional) Deployed to GitHub Pages

## Final Project Requirements Alignment

This template directly supports all four deliverables:

1. ✅ **Research Essay** - Content mirrors essay sections
2. ✅ **Python Notebooks** - Link to GitHub, show code examples
3. ✅ **Dataset Documentation** - Data & Methods section
4. ✅ **Web Portfolio** - This entire template!

## Questions?

- Review the Semantic HTML & CSS Workshop materials
- Consult the Additional Resources section
- Attend office hours
- Ask on Canvas discussion board

---

**Good luck with your project!** Remember: being "wrong" in your initial assumptions is evidence of genuine learning. Focus on showing how your thinking evolved through engagement with your data.

*Template created for WRIT 20833: Introduction to Coding in the Humanities*
*Fall 2025*
