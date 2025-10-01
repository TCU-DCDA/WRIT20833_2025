# Image Preparation Guide for Mini-Lectures

**For WRIT20833-2025 Mini-Lecture Series**
*Optimizing image sizing and orientation for balanced side-by-side layouts*

---

## Quick Reference Chart

| Layout Type | Orientation | Aspect Ratio | Recommended Size | Use Case |
|-------------|-------------|--------------|------------------|----------|
| **Side-by-side** | Portrait | 3:4 | 800x1200px | 2-3 text sections |
| **Side-by-side** | Portrait | 2:3 | 600x900px | 2-3 text sections |
| **Side-by-side** | Square | 1:1 | 800x800px | 1-2 text sections |
| **Title slide** | Landscape | 16:9 | 1200x675px | Full-width hero |
| **Title slide** | Landscape | 4:3 | 1000x750px | Full-width hero |

---

## Layout-Specific Guidelines

### 1. Side-by-Side Layouts (`.layout-image-left` / `.layout-image-right`)

**Image column width:** 40% of screen
**Text column width:** 60% of screen

#### Portrait Images (RECOMMENDED)

**Best for:** Slides with 2-3 text-sections or multiple bullet points

```
Dimensions:
├── Preferred: 800x1200px (3:4 ratio)
├── Alternative: 600x900px (2:3 ratio)
└── Alternative: 900x1350px (2:3 ratio)

File size target: < 200KB
Format: JPG for photos, PNG for graphics
```

**Why portrait works:**
- Fills vertical space naturally
- Balances with multi-paragraph text
- Creates visual harmony between columns
- No awkward whitespace

#### Square Images (ACCEPTABLE)

**Best for:** Slides with 1-2 short text-sections

```
Dimensions:
├── Preferred: 800x800px (1:1 ratio)
└── Alternative: 700x700px (1:1 ratio)

File size target: < 150KB
Format: JPG for photos, PNG for graphics
```

**When to use square:**
- Minimal text content
- Icon-like images
- Diagrams or charts

#### Landscape Images (AVOID)

**Problem:** Creates imbalance
- Image appears tiny in 40% column
- Text column towers over image
- Wasted vertical space

**Exception:** Only use landscape if you can crop to portrait/square

---

### 2. Full-Width Images (Title Slides)

**Classes:** `.slide-image`, `.slide-image-small`

#### Landscape Images (RECOMMENDED)

```
For .slide-image (large):
├── Preferred: 1200x675px (16:9 ratio)
├── Alternative: 1000x750px (4:3 ratio)
└── Max width: 1200px

For .slide-image-small:
├── Preferred: 800x450px (16:9 ratio)
├── Alternative: 700x525px (4:3 ratio)
└── Max width: 800px

File size target: < 300KB (large), < 200KB (small)
Format: JPG for photos, PNG for graphics
```

---

## Image Preparation Workflow

### Step 1: Determine Layout Type

```
Is this a side-by-side slide?
├── YES → Use portrait (3:4 or 2:3)
└── NO (title slide) → Use landscape (16:9 or 4:3)
```

### Step 2: Check Current Image Orientation

```bash
# macOS/Linux - get image dimensions
sips -g pixelWidth -g pixelHeight image.jpg

# Calculate aspect ratio
# Width / Height:
#   < 1.0 = Portrait ✓
#   = 1.0 = Square ✓
#   > 1.0 = Landscape (needs cropping)
```

### Step 3: Resize/Crop Image

#### Option A: Using ImageMagick (Command Line)

```bash
# Resize portrait image to 800x1200px (maintains aspect ratio)
convert input.jpg -resize 800x1200^ -gravity center -extent 800x1200 output.jpg

# Resize square image to 800x800px
convert input.jpg -resize 800x800^ -gravity center -extent 800x800 output.jpg

# Resize landscape for title slide
convert input.jpg -resize 1200x675^ -gravity center -extent 1200x675 output.jpg
```

#### Option B: Using Preview (macOS)

1. Open image in Preview
2. Tools → Adjust Size...
3. Enter target dimensions (e.g., 800 x 1200)
4. Uncheck "Scale proportionally" if cropping needed
5. Save

#### Option C: Using Photoshop/GIMP

1. Image → Canvas Size OR Image → Image Size
2. Set dimensions based on layout type
3. Use "Content-Aware Scale" or crop tool
4. Export for Web (JPG quality: 80%)

### Step 4: Optimize File Size

**Target file sizes:**
- Side-by-side images: < 200KB
- Title slide images: < 300KB

**Optimization tools:**
- [TinyPNG](https://tinypng.com/) - Drag and drop
- [ImageOptim](https://imageoptim.com/) - macOS app
- [Squoosh](https://squoosh.app/) - Web-based

**Command line:**
```bash
# Compress JPG to ~200KB (adjust quality as needed)
convert input.jpg -quality 80 -resize 800x1200 output.jpg
```

---

## Cropping Guidelines

### When Your Image is the Wrong Orientation

#### Landscape → Portrait

**Problem:** Need portrait (3:4) but have landscape (16:9)

**Solution:** Crop to focus on key subject

```
Original: 1600x900px (landscape)
Target: 800x1200px (portrait)

1. Identify focal point (face, object, text)
2. Crop 900px width from center
3. Resize to 800x1200px
```

**Tools:**
- **Smart crop:** Photoshop "Content-Aware Crop"
- **Manual crop:** Select 3:4 aspect ratio, position over key area

#### Portrait → Square

**Problem:** Need square (1:1) but have tall portrait (2:3)

**Solution:** Crop top or bottom

```
Original: 600x900px (portrait)
Target: 800x800px (square)

1. Decide which end to crop (usually top or bottom 150px)
2. Resize to 800x800px
```

---

## Image Quality Standards

### Resolution

**Minimum:**
- 72 DPI for web display (standard)
- No pixelation when viewed at actual size

**Test:**
- Open image at 100% zoom
- Should appear sharp on standard monitor (1920x1080)

### Color Space

- **sRGB** for web (not Adobe RGB or CMYK)
- Convert before saving: Edit → Convert to Profile → sRGB

### File Format

**JPG** - Best for:
- Photographs
- Complex images with gradients
- Real-world scenes

**PNG** - Best for:
- Graphics with text overlays
- Diagrams or illustrations
- Images requiring transparency
- Logos or icons

**AVOID:**
- TIFF (too large)
- BMP (too large)
- GIF (low quality)

---

## Current CSS Constraints

Images are constrained by these CSS rules:

```css
/* Side-by-side layouts */
.layout-image img {
    max-width: 100%;      /* Never wider than 40% column */
    max-height: 550px;    /* Prevents excessive height */
    width: auto;          /* Maintains aspect ratio */
    height: auto;         /* Maintains aspect ratio */
    object-fit: contain;  /* Scales down if needed */
}

/* Title slides */
.slide-image {
    max-width: 500px;     /* Centered, medium size */
    height: auto;
}

.slide-image-small {
    max-width: 350px;     /* Centered, smaller */
    height: auto;
}
```

**What this means:**
- Images scale DOWN if too large (never pixelate up)
- Aspect ratio always preserved
- Portrait images naturally fill vertical space
- Landscape images leave whitespace (why we avoid them)

---

## Visual Balance Examples

### ✅ GOOD: Portrait Image + 3 Text Sections

```
+----------------+------------------------+
|                |  Heading               |
|   Portrait     |  • Text section 1      |
|   Image        |  • Text section 2      |
|   800x1200     |  • Text section 3      |
|                |  Key insight box       |
+----------------+------------------------+
     40%                  60%
```
**Result:** Balanced heights, no scrolling needed

### ✅ GOOD: Square Image + 2 Text Sections

```
+----------------+------------------------+
|                |  Heading               |
|   Square       |  • Text section 1      |
|   Image        |  • Text section 2      |
|   800x800      |                        |
+----------------+------------------------+
     40%                  60%
```
**Result:** Image and text align well

### ❌ BAD: Landscape Image + 3 Text Sections

```
+----------------+------------------------+
| Landscape img  |  Heading               |
| (tiny)         |  • Text section 1      |
+----------------+  • Text section 2      |
                 |  • Text section 3      |
                 |  Key insight box       |
                 |  [lots of whitespace]  |
                 +------------------------+
     40%                  60%
```
**Result:** Image looks tiny, text column too tall

---

## Filename Conventions

**Recommended naming:**
```
lecture-6-slide-2-archaeology.jpg
lecture-6-slide-3-dataTypes.jpg
lecture-6-slide-4-sources-part1.jpg
```

**Pattern:** `lecture-[N]-slide-[X]-[description].jpg`

**Benefits:**
- Easy to identify which slide
- Descriptive for maintenance
- Sorts naturally in file browser

---

## Common Issues & Solutions

### Issue 1: Image Too Small (Pixelated)

**Problem:** Source image is 400x300px, trying to use in side-by-side layout

**Solution:**
- Find higher resolution source (min 800px on longest side)
- Or use on title slide where smaller size is acceptable

### Issue 2: Image File Size Too Large (>500KB)

**Problem:** Slows page load, bad UX

**Solution:**
- Compress with TinyPNG or ImageOptim
- Reduce JPG quality to 75-80%
- Resize to exact dimensions needed (don't use 3000px images for 800px display)

### Issue 3: Portrait Image Has Wrong Subject Focus

**Problem:** Portrait crop cuts off important part of image

**Solution:**
- Manually crop focusing on key element
- Or find alternative image with better composition
- Or use landscape version on title slide instead

### Issue 4: Image Doesn't Match Content

**Problem:** Generic stock photo doesn't support the specific point

**Solution:**
- Look for more specific imagery
- Create simple diagram/graphic with Canva or similar
- Use abstract patterns that match theme color palette

---

## Image Sources & Alternatives

### Free Stock Photo Sites (Hi-Res)
- [Unsplash](https://unsplash.com/) - High quality, free license
- [Pexels](https://pexels.com/) - Curated free photos
- [Pixabay](https://pixabay.com/) - Free images and graphics

### AI-Generated Images
- [Midjourney](https://midjourney.com/) - Can specify aspect ratios
- [DALL-E 3](https://openai.com/dall-e-3) - Portrait/square generation
- [Stable Diffusion](https://stability.ai/) - Open source option

**Prompt tips for portrait images:**
```
"portrait orientation, 3:4 aspect ratio, [your description]"
"vertical composition, cultural artifacts, museum lighting"
```

### Custom Graphics
- [Canva](https://canva.com/) - Templates with correct dimensions
- [Figma](https://figma.com/) - Design tool, export exact sizes
- [Excalidraw](https://excalidraw.com/) - Simple diagrams

---

## Pre-Flight Checklist

Before adding an image to a slide:

- [ ] Image orientation matches layout type (portrait for side-by-side)
- [ ] Dimensions are optimal (800x1200 for side-by-side)
- [ ] File size is under target (< 200KB)
- [ ] Format is appropriate (JPG for photos, PNG for graphics)
- [ ] Image is sharp at 100% zoom
- [ ] Color space is sRGB
- [ ] Filename follows naming convention
- [ ] Image directly supports slide content (not generic)

---

## Quick Command Reference

```bash
# Check image dimensions
sips -g pixelWidth -g pixelHeight image.jpg

# Resize to portrait 800x1200
convert image.jpg -resize 800x1200^ -gravity center -extent 800x1200 output.jpg

# Resize to square 800x800
convert image.jpg -resize 800x800^ -gravity center -extent 800x800 output.jpg

# Resize to landscape 1200x675
convert image.jpg -resize 1200x675^ -gravity center -extent 1200x675 output.jpg

# Compress JPG (quality 80%)
convert image.jpg -quality 80 output.jpg

# Batch resize all images in folder to portrait
for img in *.jpg; do
    convert "$img" -resize 800x1200^ -gravity center -extent 800x1200 "resized-$img"
done
```

---

## Summary

**Golden Rules:**
1. **Side-by-side slides = Portrait images** (3:4 or 2:3)
2. **Title slides = Landscape images** (16:9 or 4:3)
3. **Target 800x1200px** for most side-by-side layouts
4. **Keep files under 200KB** for performance
5. **Test visual balance** - image and text should feel equal

**When in doubt:**
- Use portrait orientation
- Size to 800x1200px
- Compress to ~150-200KB
- Test in browser at 1920x1080 resolution

---

*Last Updated: October 2025*
*For questions: Refer to CSS constraints in `shared-style.css`*
