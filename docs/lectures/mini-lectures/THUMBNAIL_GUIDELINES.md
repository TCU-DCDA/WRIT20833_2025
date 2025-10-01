# Thumbnail Guidelines for Mini-Lecture Series Index

## Technical Specifications for Thumbnails
- **Optimal Size**: 400x300px (4:3 aspect ratio)
- **Format**: JPEG for consistency and small file size
- **File Size**: Keep under 150KB for fast loading
- **Naming Convention**: `lecture[X]_thumb.jpg` (e.g., `lecture0_thumb.jpg`)
- **Style**: Should work as small preview images while maintaining visual impact

## Current Thumbnail Status

### ✅ **Working Well (Keep These)**
- **Lecture 0**: `human_mess.gif` - Perfect animated thumbnail showing complexity
- **Lecture 1**: `images/JPEG/chief+taboo+privacy.jpg` - Good conceptual connection
- **Lecture 2**: `images/JPEG/data_as_categorization.jpg` - Appropriate for classification theme
- **Lecture 3**: `images/JPEG/AI-Box_Pulling_HandsofCoder.jpg` - Strong agency metaphor
- **Lecture 5**: `images/JPEG/data_visualization_bias.jpg` - Good for connotations theme

### 📁 **Existing Generic Thumbnails (Need Replacement)**
- **Lecture 4**: `lecture4_thumb.jpg` - Generic, needs thematic connection
- **Lecture 6**: `lecture6_thumb.jpg` - Generic, needs archaeological metaphor

## Thumbnail Design Prompts

### Lecture 0: The Humanities ✅ **KEEP CURRENT**
**Current**: `human_mess.gif`
- Animation perfectly captures "mess of human condition"
- Unique animated element draws attention on index page

### Lecture 1: Sacred Boundaries ✅ **KEEP CURRENT**  
**Current**: `chief+taboo+privacy.jpg`
- Works well for taboo → privacy connection

### Lecture 2: Coding Taboo Logic ✅ **KEEP CURRENT**
**Current**: `data_as_categorization.jpg`
- Appropriate for classification/categorization theme

### Lecture 3: Agentic Coding ✅ **KEEP CURRENT**
**Current**: `AI-Box_Pulling_HandsofCoder.jpg`
- Strong visual metaphor for power/agency themes

### Lecture 4: Collective Digital Memory 🔄 **NEEDS NEW IMAGE**
**Theme**: "How Code Remembers What Communities Used to Forget"

**Thumbnail Prompt**: 
- Split composition: ancient scroll/tablet (left) transitioning to digital server/database (right)
- Flowing light streams connecting old to new
- Memory fragments floating between: faces, places, cultural symbols
- Color palette: Warm sepia (ancient) flowing to cool blue (digital)
- Style: Clean, iconic representation that reads well at small size
- **Filename**: `lecture4_thumb.jpg`

### Lecture 5: Data Has Connotations ✅ **KEEP CURRENT**
**Current**: `data_visualization_bias.jpg`
- Good connection to data storytelling theme

### Lecture 6: Digital Archaeology 🔄 **NEEDS NEW IMAGE**
**Theme**: "Finding Stories in Found Data"

**Thumbnail Prompt**:
- Archaeological dig site aesthetic meets digital interface
- Layered data visualization resembling archaeological strata
- Ancient pottery shards morphing into data points/code fragments
- Small brush/tool icons suggesting careful excavation
- Earth tones (browns, oranges) with glowing digital highlights
- Style: Should suggest both ancient discovery and modern analysis
- **Filename**: `lecture6_thumb.jpg`

## Design Guidelines for New Thumbnails

### Visual Hierarchy
- **Bold, simple compositions** that read clearly at small sizes
- **High contrast** between subject and background
- **Minimal text** - let the index page text carry the message
- **One clear focal point** per thumbnail

### Color Strategy
- **Consistent palette** across series while allowing individual character
- **Primary**: Deep purples (#4d1979) as accent color
- **Secondary**: Warm neutrals, blues, earth tones as appropriate to theme
- **Avoid**: Harsh reds, bright yellows that might clash with series design

### Style Consistency
- **Metaphorical over literal** - concepts over stock photos
- **Classical meets digital** aesthetic throughout series
- **Professional academic tone** - sophisticated but accessible
- **Cohesive but distinct** - family resemblance with individual personality

### Thumbnail Grid Composition
When viewed together on index page, thumbnails should:
- Create visual rhythm without being identical
- Balance warm and cool tones across the grid
- Maintain consistent level of visual complexity
- Guide eye naturally through the lecture sequence

## Implementation Checklist

### For New Thumbnails (Lectures 4 & 6):
- [ ] Create at 400x300px resolution
- [ ] Test visibility at thumbnail size (compress and view small)
- [ ] Ensure sufficient contrast with overlay text
- [ ] Save as JPEG under 150KB
- [ ] Use correct naming convention
- [ ] Update index.html to reference new files

### Quality Check:
- [ ] All thumbnails load quickly
- [ ] Visual consistency across the series
- [ ] Each thumbnail clearly represents its lecture theme
- [ ] Good contrast with the dark background of index page
- [ ] Professional appearance appropriate for academic context

## File Locations
- **Source Images**: `/docs/lectures/mini-lectures/images/`
- **Current Index**: `/docs/lectures/mini-lectures/index.html`
- **Update Required**: Lines 249 (Lecture 4) and 281 (Lecture 6) in index.html