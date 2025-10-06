# Image Prompts for Lecture 7 Preamble Slides

## New Slide 1: Opening Discussion Question

**Filename:** `slide0a.jpg`

**Image Prompt:**
```
A split-scene educational illustration showing human communication. Left side: Two diverse college students having an animated conversation in a modern campus setting, with subtle visual indicators of tone (speech bubbles with varied emphasis). Right side: A person reading a book or tablet in natural lighting, with a thoughtful expression. The overall style should be warm, accessible, and contemporary—similar to modern educational materials. Color palette: soft purples, blues, and natural tones to match the existing NLP lecture aesthetic. Photorealistic but with slight illustration quality for clarity. The image should convey the natural, intuitive way humans process meaning from both conversation and reading.
```

**Alternative simplified approach:**
Since Slides 2 and 3 are text-heavy with existing CSS styling (challenge-box, two-column-layout), you could:
- **Option A**: Use the existing slide1.jpg temporarily for slide 0a (it has neural network imagery that works broadly)
- **Option B**: Generate a simple stock photo of people in conversation + someone reading
- **Option C**: Leave the image and just use the discussion question prominently

**Recommendation:** Start with **Option A** (reuse slide1.jpg temporarily) to get the lecture functional immediately, then generate a custom image later if needed.

---

## Notes on Slides 2 and 3

**Slide 2** (How Humans Understand Meaning): No image needed—uses `challenge-grid` CSS with 4 text boxes

**Slide 3** (The Computational Challenge): No image needed—uses `two-column-layout` with text-based comparison boxes

The preamble is designed to work with minimal visual overhead, focusing on discussion and text-based comparison to maximize classroom engagement before diving into the visual-heavy NLP content.

---

## Implementation Priority

1. **Immediate**: Copy `images/slide1.jpg` to `images/slide0a.jpg` to make the slide functional
2. **Optional**: Generate custom image for slide 0a using the prompt above if you want a more specific visual

**Terminal command to duplicate existing image:**
```bash
cp docs/lectures/mini-lectures/lecture-7-nlp-topic-modeling/images/slide1.jpg \
   docs/lectures/mini-lectures/lecture-7-nlp-topic-modeling/images/slide0a.jpg
```
