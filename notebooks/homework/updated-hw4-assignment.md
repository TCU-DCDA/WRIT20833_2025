# Pre-Project Prep 4.1: Term Frequency and Sentiment Analysis
**Due: October 5th**  
**Intro to Coding in the Humanities - Midterm Assignment Part 1**

## Assignment Overview

[INSERT IMAGES: "Ideal" vs "Real World" paths to knowledge here]

This assignment marks your first extensive analysis of a text-heavy dataset of your choosing. The goal is not just to run analytical tools, but to experience the process of moving from assumptions to data-driven insights. You'll practice forming hypotheses, testing them against actual data, and allowing your understanding to evolve based on what you discover.

In our digital age, we're constantly exposed to two very different paths to forming opinions and understanding the world. One path leads from genuine phenomena through careful data collection and analysis toward real insight, knowledge, and wisdom. The other path starts with social media impressions and moves through cherry-picked evidence and narrative scaffolding toward rigid ideological positions. Through this assignment, you'll experience the first path—the harder but more rewarding journey of letting data challenge and refine your thinking.

**Important Philosophy**: Being "wrong" in your initial predictions is not a failure—it's a sign of genuine learning and intellectual growth. The best insights often come from discovering that reality differs from our assumptions. When your data surprises you, that's when real learning happens.

**Collaboration Policy**: You may work together with classmates to solve technical challenges and discuss methods, but each student must choose their own unique dataset and complete their own analysis.

---

## Step 1: Dataset Selection and Exploration
*Moving from Phenomena to Raw Data*

### Finding Your Dataset

Choose a dataset rich in string/text data that genuinely interests you. Here are types that work well for beginners:

**Recommended for first-time analysis:**
- **Product reviews** (Amazon, Yelp, app reviews) - clear sentiment, good size
- **Reddit comments** from specific subreddits - focused topics, varied opinions
- **News headlines** - timely content, easy to collect

**Good alternatives if you're feeling confident:**
- **Survey responses** with open-ended questions
- **Forum discussions** on topics you know well
- **Social media posts** about specific events or topics

**Dataset Repositories:**
[Links to repositories will be provided in class - check D2L for specific URLs]

### Dataset Feasibility Check

Before diving into full analysis, complete this quick evaluation:

**Size Requirements:**
- [ ] At least 500 text entries
- [ ] Each entry contains meaningful text (not just single words)
- [ ] Data is legally accessible to you

**Content Requirements:**
- [ ] Text is in a language you can analyze
- [ ] You have genuine curiosity about this topic
- [ ] The content varies enough to show different patterns

**Technical Requirements:**
- [ ] You can load the data into pandas
- [ ] The text column is clearly identified
- [ ] Basic cleaning is manageable

### Initial Predictions

Before analyzing your data, record your predictions. Here are examples to model your thinking:

*Example for restaurant reviews:* "I predict negative reviews will focus on 'slow,' 'cold,' and 'rude' while positive reviews will emphasize 'fresh,' 'friendly,' and 'delicious.' I expect about 60% positive sentiment overall."

*Example for political forum posts:* "I predict discussions will center on 'economy,' 'healthcare,' and 'election' with highly polarized sentiment—mostly very positive or very negative, not much middle ground."

### Deliverable for Step 1

**Write 1-2 paragraphs:**

1. **Dataset Description**: What did you choose and why? Complete your feasibility checklist above.

2. **Your Predictions**: Based on your knowledge of this topic, what specific words or themes do you expect to dominate? What sentiment patterns do you predict? Be specific—you'll test these predictions soon.

---

## Step 2: Data Collection and Cleaning
*Raw Data to Structured Data*

### Technical Work

- Load your data using pandas
- Identify and clean your main text column
- Handle basic issues (missing values, encoding problems)
- Create a clean dataset ready for analysis

### Technical Checkpoint 1: Data Loading Reality Check
After loading your data, run:
```python
# Checkpoint 1: Verify your data loaded correctly
print(f"Dataset shape: {df.shape}")
print(f"Columns: {df.columns.tolist()}")
print(f"Text column has {df['YOUR_TEXT_COLUMN'].isna().sum()} missing values")
print(f"Sample text: {df['YOUR_TEXT_COLUMN'].iloc[0][:200]}")
```

### Deliverable for Step 2

**Brief technical summary**: What challenges did you encounter in collecting and cleaning your data? What decisions did you make about handling missing or problematic entries?

---

## Step 3: Term Frequency Analysis
*Structured Data to Analyzed Data*

### Technical Requirements

- Use pandas for data manipulation
- Implement basic term frequency analysis (count word occurrences)
- Clean text appropriately (remove punctuation, convert to lowercase, handle common stop words)
- Create a simple visualization (bar chart of top 15-20 words)

### Technical Checkpoint 2: Text Cleaning Verification
Before term frequency analysis:
```python
# Checkpoint 2: Check your cleaning worked
sample_text = df['YOUR_TEXT_COLUMN'].iloc[0]
print(f"Original: {sample_text[:100]}")
print(f"Cleaned: {your_clean_function(sample_text)[:100]}")
# Should show: lowercase, no punctuation, no extra spaces
```

### Deliverable for Step 3

**Write 1-2 paragraphs:**

1. **Prediction Check**: Which of your predicted words actually appeared in the top frequencies? What surprised you most?

2. **New Questions**: Based on these word frequencies, what new patterns are you noticing? What questions do you now want to explore with sentiment analysis?

---

## Step 4: Sentiment Analysis
*Continuing Analyzed Data Phase*

### Technical Requirements

**Primary Tool: VADER Sentiment Analysis**
- We'll demonstrate VADER in class—it handles social media text and informal language well
- Produces sentiment scores you can analyze and visualize
- *Alternative: TextBlob is available if VADER doesn't suit your data type*

### Technical Checkpoint 3: VADER Installation/Import
```python
# Checkpoint 3: VADER setup
# If not installed: !pip install vaderSentiment
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
analyzer = SentimentIntensityAnalyzer()
test_text = "This assignment is surprisingly interesting!"
print(analyzer.polarity_scores(test_text))
# Should see: {'neg': 0.0, 'neu': 0.323, 'pos': 0.677, 'compound': 0.6588}
```

### Deliverable for Step 4

**Write 2 paragraphs:**

1. **Sentiment Patterns**: What did sentiment analysis reveal? How did these results compare to your expectations? Were there more positive, negative, or neutral entries than you predicted?

2. **Accuracy Check**: Read 5-6 full text entries and compare your human judgment to the automated sentiment scores. Where do you agree or disagree with the tool's assessment?

### Bridge to Part 2

**Final Prediction**: Based on your term frequency and sentiment findings, what deeper topics or themes do you predict topic modeling will reveal in your data? What specific topics do you expect to emerge?

---

## Common Troubleshooting Tips

**If you see this error...**
- `UnicodeDecodeError` → Add `encoding='utf-8'` or try `'latin-1'` when reading file
- `KeyError` → Check column name spelling, use `df.columns` to see exact names
- VADER returns all neutral → Check if you're analyzing very short text or single words
- Topic modeling shows random words → You may need to remove more stop words or increase minimum document frequency

---

## Submission Requirements

Submit to your Pre-Project Practice Files dropbox:
1. **Jupyter Notebook** (`LASTNAME_HW4-1_F25.ipynb`) with all code and markdown responses
2. **Clean dataset CSV**
3. **Visualization PNG files** (if not embedded in notebook)

**Due Date**: October 5th

---

# Pre-Project Prep 4.2: Topic Modeling and Reflection
**Due: October 13th**  
**Intro to Coding in the Humanities - Midterm Assignment Part 2**

## Assignment Overview

You'll now use topic modeling to uncover hidden patterns in your dataset and reflect on your complete analytical journey. This assignment builds directly on your Pre-Project Prep 4.1 work.

---

## Step 5: Reconnecting with Your Predictions

### Before You Begin

**Review your predictions from 4.1**: Look back at what you predicted about deeper topics and themes. Write down 2-3 specific topic predictions you made.

**Current state of knowledge**: After term frequency and sentiment analysis, how has your understanding of your dataset evolved? What do you now think topic modeling might reveal?

---

## Step 6: Topic Modeling
*Analyzed Data to Insight*

### Technical Requirements

**Primary Tool: Gensim LDA**
- We'll demonstrate this Python-native tool in class
- Integrates well with pandas and produces interpretable results
- *Alternatives: scikit-learn's LatentDirichletAllocation or MALLET (if you're comfortable with additional setup)*

### Technical Checkpoint 4: Gensim Data Prep
Before topic modeling:
```python
# Checkpoint 4: Prepare for topic modeling
print(f"Number of documents: {len(your_texts)}")
print(f"Vocabulary size: {len(your_dictionary)}")
print(f"Average document length: {np.mean([len(doc) for doc in your_tokenized_docs])}")
# If avg length < 10 words or vocab < 100, may need to reconsider preprocessing
```

### Deliverable for Step 6

**Write 2 paragraphs:**

1. **Prediction vs. Reality**: How did your topic modeling results compare to your specific predictions from Step 4? What topics emerged that you hadn't expected?

2. **Model Assessment**: Look at 4-5 documents and their topic assignments. Do the assigned topics make sense when you read the full text? Where would you disagree with the model?

---

## Step 7: Integration and Reflection
*Insight to Knowledge (and glimpsing Wisdom)*

### Part A: Method and Tool Assessment (2 paragraphs)

**Evolution of Understanding**: How did your understanding change from your initial predictions through term frequency, sentiment analysis, and topic modeling? Where were you most wrong, and what did those surprises teach you?

**Analytical Methods**: Which analytical method (term frequency, sentiment analysis, or topic modeling) was most revealing for your dataset? What did you learn about what these tools can and cannot tell you?

### Part B: Humanities Perspective (1-2 paragraphs)

**Computational vs. Traditional Analysis**: How does this data-driven approach compare to how you might traditionally analyze texts in humanities courses? Consider how this process helps you avoid the trap of cherry-picking evidence to support predetermined conclusions. What are the advantages and limitations of automated analysis?

### Part C: Personal Learning (1 paragraph)

**Your Analytical Growth**: What did this process teach you about forming and testing hypotheses? How has your relationship to evidence and conclusions evolved?

---

## Submission Requirements

Submit to your Pre-Project Practice Files dropbox:
1. **Updated Jupyter Notebook** (`LASTNAME_HW4-2_F25.ipynb`) containing Steps 1-7
2. **Any new visualization PNG files** (if not embedded in notebook)

**Due Date**: October 13th

---

## Grading Philosophy

This assignment prioritizes **earned insight over clean code**. You'll be evaluated on:

- **Depth of reflection** and willingness to be surprised by your data
- **Evolution of thinking** from initial predictions through final analysis  
- **Critical assessment** of both your results and your analytical tools
- **Integration** of technical analysis with humanistic interpretation

Technical execution matters, but intellectual growth and genuine insight are the primary goals. The best submissions will show students whose understanding deepened and changed through engagement with their data.