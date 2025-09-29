# Next Steps: Sentiment Analysis CodeAlong

## Overview
The next codeAlong should focus on **sentiment analysis with VADER** to prepare students for HW4-1. This will build directly on the data collection skills from the Instant Data Scraper lesson.

## Reference Material
Base the new codeAlong on this existing notebook structure: https://colab.research.google.com/drive/1UCMHWxmlkWQqyAzrbVpHiQFsFwa8dWE-?usp=sharing

## Term Frequency (TF) Skills Refresher from HW1

### **Core TF Concepts Students Already Know:**
From `WRIT20833_HW1_Fall2025.ipynb`, students have experience with:

#### **1. Text Processing Pipeline:**
```python
# Students understand this workflow:
full_text = open(filepath_of_text, encoding="utf-8").read()
all_the_words = split_into_words(full_text)
meaningful_words = [word for word in all_the_words if word and word not in stopwords]
meaningful_words_tally = Counter(meaningful_words)
most_frequent_meaningful_words = meaningful_words_tally.most_common(number_of_desired_words)
```

#### **2. Key Technical Skills:**
- **File reading**: `open(filepath, encoding="utf-8").read()`
- **Text splitting**: Using regex to split text into words with `re.split("\\W+", lowercase_text)`
- **Case normalization**: `.lower()` for consistent analysis
- **Stopword filtering**: Removing common words that don't carry meaning
- **Frequency counting**: Using `Counter()` from collections
- **Ranking results**: `.most_common(n)` to get top frequent words

#### **3. Critical Thinking Skills:**
- **Manual verification**: Comparing automated results to manual searching (Command-F/Ctrl-F)
- **Genre awareness**: Understanding how different text types (nonfiction, novels, political documents) have different word patterns
- **Parameter experimentation**: Adjusting `number_of_desired_words` and custom stopwords
- **Limitation recognition**: Understanding what word counting can and cannot reveal

#### **4. Analytical Patterns:**
Students learned to ask:
- Which words appear often but are missing from the list?
- Which words in the list were unexpected?
- How do different genres show different word frequency patterns?
- What do computational methods reveal that close reading might miss?
- What are the limitations of word-counting approaches?

### **Building from HW1 to Sentiment Analysis:**
The sentiment analysis codeAlong should:
- **Leverage existing TF skills**: Use similar text processing workflows
- **Extend analysis**: Move from "what words appear" to "what emotions do they convey"
- **Maintain critical perspective**: Question automated sentiment just as they questioned word counts
- **Use familiar data structure**: Continue with file reading and text processing patterns

## Key Modifications Needed

### 1. **Cultural/Humanities Text Examples**
**Instead of generic examples, use:**
- **Book reviews** from cultural sources (building on HW1's literary focus)
- **Museum exhibition descriptions**
- **Arts criticism and cultural commentary**
- **Historical document excerpts** (connecting to HW1's political documents)
- **Social media posts about cultural events**

### 2. **Integration with Course Sequence**
- **Connect directly to Instant Data Scraper lesson**: Use scraped data as primary examples
- **Build on HW1 TF skills**: Reference text processing patterns students know
- **Prepare for HW4-1**: Mirror assignment requirements and workflow
- **Lead to HW4-2**: Set up text preprocessing that will work for topic modeling

### 3. **VADER Focus for Informal Text**
- **Emphasize VADER's strengths**: Social media, reviews, informal language
- **Compare to TextBlob briefly**: Show when each tool is appropriate
- **Cultural context examples**: How sentiment analysis applies to humanities research
- **Connection to TF analysis**: "We counted words, now we analyze their emotional tone"

### 4. **Practical Workflow Integration**
- **pandas integration**: Use DataFrames throughout (building on existing skills)
- **Text cleaning pipeline**: Prepare for topic modeling preprocessing
- **Visualization techniques**: Connect to students' visualization experience
- **Error handling**: Common issues with scraped cultural data

## Suggested Structure

### **Part 1: From Word Counting to Emotion Analysis**
- Review: What HW1 taught us about text analysis
- New question: Beyond "what words appear," what emotions do they convey?
- VADER vs. traditional sentiment tools
- Applications in digital humanities research

### **Part 2: Setting Up VADER with Cultural Data**
- Installation and basic usage
- Testing with cultural text examples (similar to HW1's manual verification)
- Understanding VADER's scoring system vs. simple word counts

### **Part 3: Applying VADER to Scraped Cultural Data**
- Loading data from Instant Data Scraper lesson
- Batch processing with pandas (scaling up from HW1's single-file approach)
- Handling common text cleaning issues

### **Part 4: Interpreting and Visualizing Sentiment Results**
- Understanding compound scores vs. individual metrics
- Creating meaningful visualizations for cultural analysis
- Comparing sentiment across categories/time periods (like HW1's genre comparison)

### **Part 5: Critical Analysis of Automated Sentiment**
- Where VADER succeeds and fails with cultural texts (echoing HW1's limitation questions)
- Human vs. automated sentiment assessment (like HW1's manual verification)
- Bias and limitations in sentiment analysis tools

### **Part 6: Preparing for HW4-1**
- Complete workflow walkthrough
- Common troubleshooting issues
- Quality checks and validation techniques

## Learning Objectives
Students will be able to:
- Apply VADER sentiment analysis to cultural text data
- Interpret sentiment scores in cultural research contexts
- Create visualizations showing sentiment patterns
- Critically evaluate automated sentiment analysis results
- Prepare text data for both sentiment analysis and topic modeling

## Connection to Assignments
- **Direct preparation for HW4-1**: Term frequency and sentiment analysis
- **Foundation for HW4-2**: Text preprocessing and pandas workflows
- **Research skills building**: Critical evaluation of computational tools
- **Builds on HW1**: Extends word counting to emotion analysis

## Pedagogical Approach
- **Hands-on practice** with real cultural data
- **Critical digital humanities perspective** on tool limitations
- **Technical skill building** in pandas and visualization
- **Ethics consideration** of algorithmic bias in sentiment analysis
- **Scaffolded learning**: Build explicitly on HW1 term frequency foundations

## Files to Create
1. `WRIT20833_VADER_Sentiment_Analysis_Cultural_Texts_F25.ipynb`
2. Sample cultural datasets for in-class practice
3. Troubleshooting guide for common VADER issues with scraped data

## Timeline
- **Week 8**: Sentiment Analysis CodeAlong
- **Week 9**: HW4-1 work sessions and troubleshooting
- **Week 10**: Topic Modeling CodeAlong (leading to HW4-2)

## Notes for Development
- Ensure cultural examples span different domains (literature, arts, media, history)
- Include both positive and negative sentiment examples
- Address challenges with irony, sarcasm, and cultural context
- Connect to broader questions about algorithmic interpretation of human expression
- Maintain ethical focus on responsible use of sentiment analysis tools
- **Explicitly reference HW1**: "Remember when we counted words in novels vs. political documents? Now we'll analyze the emotions in those same types of texts."

---

**Status**: Ready for development
**Priority**: High (needed for Week 8)
**Dependencies**: Instant Data Scraper lesson completion, HW1 term frequency foundation