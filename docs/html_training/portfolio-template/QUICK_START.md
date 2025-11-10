# Quick Start Guide

## 5-Minute Setup

### 1. Get the Template
- Download the `portfolio-template` folder
- Rename it to your project name

### 2. Open in Text Editor
- Open `index.html` in VS Code (or any text editor)

### 3. Find & Replace
Use your text editor's Find & Replace (Ctrl+F / Cmd+F):
- Replace `Your Name` → Your actual name
- Replace `Your Project Title` → Your project title
- Replace `yourusername` → Your GitHub username (in footer link)

### 4. Fill in Content
Look for `<!-- TODO: ... -->` comments and replace with your content:

```html
<!-- TODO: Add your research question here -->
<p>What patterns of sentiment emerge in climate change discourse on Twitter?</p>
```

### 5. Add Images
1. Export visualizations from Jupyter as PNG
2. Save to `images/` folder
3. Update image filenames in HTML if needed

### 6. Preview
- Double-click `index.html` to open in browser
- Refresh after making changes

## Key Sections to Fill In

| Section | What to Add |
|---------|-------------|
| **Research Question** | Your question + background context |
| **Data & Methods** | Dataset details, collection method, tools used |
| **Analysis** | Visualizations + code examples + explanations |
| **Findings** | Key discoveries + data tables |
| **Reflection** | Framework connections + limitations + future work |

## Common Edits

### Change Colors
Edit `css/styles.css` at the top:
```css
:root {
    --primary-color: #4d1979;      /* Change this */
    --secondary-color: #7c3aed;    /* And this */
}
```

### Add More Sections
Copy an existing section and change the ID:
```html
<section id="newsection">
    <h2>New Section Title</h2>
    <p>Content here...</p>
</section>
```

Don't forget to add it to navigation!

### Add More Visualizations
Copy the figure block:
```html
<figure class="viz-container">
    <img src="images/your-chart.png" alt="Description of chart">
    <figcaption>Figure X: Your caption here</figcaption>
</figure>
```

## Checklist

- [ ] Personalized title and name
- [ ] Filled in all TODO sections
- [ ] Added visualizations to `images/`
- [ ] Updated image paths in HTML
- [ ] Added GitHub repo link
- [ ] Tested in browser
- [ ] Ready to deploy!

## Need Help?

- **Full documentation:** See `README.md`
- **CSS reference:** See workshop Session 2
- **HTML structure:** See workshop Session 1
- **Examples:** See workshop Session 3

---

**Remember:** The CSS is complete—you only need to edit `index.html` content!
