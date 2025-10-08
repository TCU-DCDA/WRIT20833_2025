# Next Steps: Topic Modeling CodeAlong and HW4-2

## Overview
The next development phase should focus on **topic modeling with Gensim LDA** to complete the text analysis sequence. This will build on the data collection (Instant Data Scraper) and sentiment analysis (VADER) skills, culminating in HW4-2.

## Completed Foundation (Week 7-8)
✅ **Instant Data Scraper CodeAlong** - Ethical data collection with topic modeling preparation
✅ **VADER Sentiment Analysis CodeAlong** - Emotional tone analysis of cultural texts
✅ **HW4-1** - Term frequency and sentiment analysis assignment

## Next Development Priority: Topic Modeling CodeAlong

### **Building on Existing Skills**
Students now have experience with:
- **Text preprocessing**: Cleaning, stopword removal, word splitting (HW1, HW4-1)
- **Pandas workflows**: DataFrame manipulation, apply functions, data analysis
- **Cultural dataset analysis**: Working with scraped data, making predictions, testing hypotheses
- **Visualization**: Creating meaningful charts for text analysis results
- **Critical reflection**: Questioning automated analysis tools and their limitations

### **Topic Modeling CodeAlong Objectives**
1. **Introduce Gensim LDA** for discovering hidden themes in text collections
2. **Advanced text preprocessing** for topic modeling (building on sentiment analysis prep)
3. **Parameter tuning** - number of topics, alpha, beta (keeping beginner-friendly)
4. **Topic interpretation** - moving from statistical output to meaningful themes
5. **Visualization** - pyLDAvis for interactive topic exploration
6. **Critical analysis** - when topic modeling works/fails, bias in topic assignments

### **Key Technical Integration Points**
- **Text preprocessing pipeline**: Build on HW4-1 cleaning functions but adapt for topic modeling requirements
- **Dataset continuity**: Use same datasets from Instant Data Scraper → HW4-1 → Topic Modeling
- **Pandas integration**: Seamless workflow from sentiment analysis to topic modeling
- **Prediction-testing framework**: Students predict topics, then test with actual LDA results

### **Cultural/Humanities Focus**
- **Digital humanities applications**: How topic modeling reveals cultural patterns
- **Examples from cultural domains**: Literature, social media, historical documents, reviews
- **Critical perspective**: Algorithmic interpretation of cultural themes, researcher bias in topic labeling
- **Connection to traditional humanities methods**: Close reading vs. distant reading approaches

## HW4-2 Assignment Structure

### **Assignment Workflow**
1. **Dataset Continuity**: Students use their HW4-1 dataset for topic modeling
2. **Prediction Phase**: Based on HW4-1 term frequency/sentiment findings, predict topics that will emerge
3. **Topic Modeling Implementation**: Apply Gensim LDA with appropriate preprocessing
4. **Topic Interpretation**: Label and analyze discovered topics
5. **Integration Analysis**: Connect topic modeling results with HW4-1 term frequency and sentiment findings
6. **Critical Reflection**: Evaluate the complete text analysis journey from word counting → sentiment → topics

### **Technical Requirements**
- **Gensim LDA implementation** with proper text preprocessing
- **Topic visualization** using pyLDAvis or similar
- **Parameter exploration** - testing different numbers of topics
- **Topic-document analysis** - which documents belong to which topics
- **Integration with HW4-1 results** - connecting sentiment patterns to discovered topics

### **Pedagogical Approach**
- **Scaffolded learning**: Build explicitly on HW4-1 preprocessing and analysis skills
- **Fill-in-the-blank coding**: Strategic gaps to encourage active learning
- **Prediction-testing methodology**: Continue the "form hypothesis, test with data" approach
- **Critical digital humanities perspective**: Question what topic modeling can/cannot reveal about culture

## Technical Considerations

### **Preprocessing Pipeline Evolution**
HW4-1 prepared text for sentiment analysis (keeping punctuation), but topic modeling requires:
- **More aggressive cleaning**: Remove punctuation, numbers, short words
- **Lemmatization/Stemming**: Reduce words to root forms
- **Bigram detection**: Identify meaningful word pairs
- **Custom stopwords**: Remove domain-specific common words that don't indicate topics

### **Gensim Integration**
- **Dictionary creation**: Convert processed text to Gensim format
- **Corpus preparation**: Transform documents to bag-of-words representation
- **LDA model training**: Appropriate parameters for beginner datasets
- **Model evaluation**: Coherence scores and human interpretability

### **Common Student Challenges**
- **Topic number selection**: How many topics to choose?
- **Topic interpretation**: Moving from word lists to meaningful theme labels
- **Empty/nonsense topics**: When topic modeling fails and why
- **Computational time**: Managing processing time for larger datasets
- **Integration complexity**: Connecting multiple analysis methods coherently

## Development Timeline

### **Week 9-10**: Topic Modeling CodeAlong Development
- Create `WRIT20833_Topic_Modeling_Gensim_F25.ipynb`
- Test with cultural datasets from Instant Data Scraper lesson
- Ensure smooth integration with HW4-1 preprocessing workflows
- Develop troubleshooting guide for common Gensim issues

### **Week 10-11**: HW4-2 Development and Testing
- Create `WRIT20833_HW4-2_Topic_Modeling_F25.ipynb`
- Design assignment to build on HW4-1 datasets and findings
- Include integration analysis connecting all three methods
- Test complete workflow: data collection → term frequency → sentiment → topic modeling

### **Week 11-12**: Assignment Implementation and Support
- Deploy HW4-2 assignment
- Provide technical support for Gensim installation and common issues
- Support students in interpreting and integrating their complete text analysis

## Learning Objectives Integration

### **Technical Skills**
- Install and use Gensim for topic modeling
- Preprocess text appropriately for different analysis types
- Interpret LDA output and assign meaningful topic labels
- Create visualizations for topic modeling results
- Integrate multiple text analysis methods in a single research workflow

### **Critical Thinking Skills**
- Evaluate the strengths and limitations of topic modeling
- Compare distant reading (computational) vs. close reading (traditional) approaches
- Recognize bias in algorithmic topic assignment and researcher interpretation
- Synthesize insights from multiple computational text analysis methods

### **Research Skills**
- Design comprehensive text analysis research projects
- Form and test hypotheses across multiple analytical approaches
- Document and reflect on the evolution of understanding through data analysis
- Connect computational findings to broader cultural and humanities research questions

## Course Sequence Integration

### **Complete Text Analysis Arc**
1. **HW1**: Term frequency analysis (word counting fundamentals)
2. **Instant Data Scraper**: Ethical data collection for cultural research
3. **HW4-1**: Term frequency + sentiment analysis
4. **Topic Modeling CodeAlong**: Discovering hidden themes
5. **HW4-2**: Complete text analysis integration (frequency + sentiment + topics)

### **Critical Framework Connections**
- **Classification Logic**: How algorithms categorize cultural themes
- **AI Agency**: The role of automated topic assignment in cultural interpretation
- **Sacred Boundaries**: Privacy and ethics in large-scale text analysis
- **Collective Memory**: Digital archives and computational cultural analysis

## Files to Create

### **CodeAlong**
- `notebooks/codeAlongs/WRIT20833_Topic_Modeling_Gensim_F25.ipynb`
- Sample cultural datasets optimized for topic modeling
- Troubleshooting guide for Gensim installation and common errors

### **Assignment**
- `notebooks/homework/WRIT20833_HW4-2_Topic_Modeling_F25.ipynb`
- Integration analysis framework connecting HW4-1 and HW4-2 results
- Reflection prompts for complete text analysis journey

### **Documentation**
- Update `docs/index.html` with new CodeAlong and assignment links
- Create troubleshooting documentation for topic modeling technical issues

## Success Metrics

### **Student Learning Outcomes**
- Students can implement topic modeling on their own cultural datasets
- Students can interpret and critically evaluate topic modeling results
- Students can integrate topic modeling with sentiment analysis and term frequency
- Students demonstrate critical thinking about computational approaches to cultural analysis

### **Technical Competencies**
- Successful Gensim installation and LDA implementation
- Appropriate text preprocessing for topic modeling
- Meaningful topic interpretation and labeling
- Effective visualization of topic modeling results

### **Course Integration**
- Smooth progression from HW4-1 to HW4-2
- Clear connection between data collection, sentiment analysis, and topic modeling
- Strong critical reflection on the complete text analysis process

---

**Status**: Ready for development
**Priority**: High (needed for Week 9-10)
**Dependencies**: HW4-1 completion, Gensim installation testing, cultural dataset preparation

**Development Notes**: Focus on maintaining the prediction-testing pedagogical approach while introducing more complex preprocessing and analysis. Ensure topic modeling remains accessible to beginners while providing meaningful insights into cultural data analysis.