# Datasets Needed for WRIT20833

## Recent Progress (Week 7-8, Fall 2025)

### **✅ Implemented Data Collection Methods:**
- **Instant Data Scraper CodeAlong**: Students now collect their own cultural datasets using browser extension
- **Ethical Framework**: robots.txt compliance and consent-based collection established
- **Student Choice**: Rather than pre-selected datasets, students choose culturally meaningful data
- **HW4-1 Integration**: Students use self-collected data for term frequency and sentiment analysis

### **📊 Current Student Dataset Examples:**
Based on Instant Data Scraper lesson, students are collecting:
- Broadway show reviews and ratings
- Museum exhibition descriptions and visitor comments
- Book reviews from cultural sources
- Arts criticism and cultural commentary
- Social media posts about cultural events (with privacy compliance)

## Core Dataset Requirements

### Week 2-3: Basic Text Processing
**Need**: Simple, clean text files for initial practice
- [ ] Collection of song lyrics from recent popular songs (50-100 songs)
- [ ] Short news headlines from major events (2020-2025)
- [ ] Product reviews from Amazon/Yelp (curated, appropriate content)

### Week 4: First Data Visualizations
**Need**: Structured text data with metadata
- [ ] Movie descriptions with genres, ratings, release years (IMDB subset)
- [ ] Book descriptions with publication info (Goodreads-style data)
- [ ] Podcast episode descriptions with categories and duration

### Week 5-6: Social Media Text Analysis
**Need**: Real social media data (cleaned and anonymized)
- [ ] Twitter/X posts around major events (election coverage, award shows, etc.)
- [ ] TikTok comments (if accessible) or YouTube comments
- [ ] Reddit post titles and comments from popular subreddits
- [ ] Instagram captions from public accounts (fashion, food, travel)

### Week 7: Sentiment Analysis Practice
**Need**: Text with clear sentiment patterns
- [ ] Restaurant reviews (mix of positive/negative, clear sentiment)
- [ ] Movie reviews with star ratings
- [ ] News coverage of same event from different outlets
- [ ] Social media reactions to major announcements/events

### Week 8: Topic Modeling
**Need**: Larger collections with distinct themes
- [ ] Reddit posts from 3-4 different communities (gaming, cooking, politics, etc.)
- [ ] News articles from multiple categories (sports, tech, entertainment, politics)
- [ ] Customer service chat logs (if available/appropriate)

### Weeks 13-16: Student Project Options
**Need**: Rich datasets for independent analysis
- [ ] Spotify song data with lyrics and audio features
- [ ] News headlines across multiple years showing trend evolution
- [ ] Social media data around specific hashtags/movements
- [ ] TV show/movie scripts or subtitles
- [ ] Political speech transcripts
- [ ] Academic paper abstracts by field

## Data Collection Strategy

### Sources to Explore
- **Academic APIs**: Twitter Academic Research, Reddit Academic API
- **Public Datasets**: Kaggle, Google Dataset Search, government data
- **Web Scraping**: News sites, public forums (with appropriate permissions)
- **Student-Generated**: Class surveys, social media exports (with consent)

### Data Cleaning Requirements
- [ ] Remove personal identifying information
- [ ] Filter for appropriate content (no hate speech, explicit content)
- [ ] Standardize formats (CSV, JSON)
- [ ] Create metadata files explaining each dataset
- [ ] Ensure datasets are appropriately sized for classroom use (not too large/small)

### Legal/Ethical Considerations
- [ ] Verify terms of service for all data sources
- [ ] Create data use agreements template for students
- [ ] Document attribution requirements for each dataset
- [ ] Plan for data refresh/updates between semesters

## Dataset Specifications

### File Format Standards
- **Text Collections**: CSV with columns for text, metadata, date
- **Social Media**: JSON or CSV with post_id, text, timestamp, platform
- **Reviews**: CSV with rating, text, category, date
- **News**: CSV with headline, body, source, date, category

### Size Guidelines
- **Practice datasets**: 100-500 items
- **Weekly exercises**: 1,000-5,000 items
- **Project datasets**: 5,000-50,000 items (depending on complexity)

### Metadata Requirements
Each dataset should include:
- Source and collection date
- Licensing/usage restrictions
- Data cleaning steps performed
- Known limitations or biases
- Suggested use cases

## Priority Order for Collection
1. **High Priority (Fall 2025)**: Weeks 1-8 datasets
2. **Medium Priority (Spring 2026)**: Student project options
3. **Low Priority (Summer 2026)**: Additional examples and backup datasets

**Status Update (September 2025)**: Collection strategy refined based on content assessment
- Existing homework notebook demonstrates effective use of text files (novels, nonfiction, political documents)
- Tutorial notebooks show successful integration of contemporary examples (passwords, social media, classification systems)
- Mini-lecture themes provide clear guidance for culturally relevant dataset selection

## Tools for Data Collection
- **APIs**: tweepy, praw (Reddit), requests
- **Scraping**: beautifulsoup4, scrapy
- **Cleaning**: pandas, nltk, spacy
- **Storage**: GitHub LFS for larger files, regular Git for smaller datasets

---
*Status: Planning phase - no datasets collected yet*  
*Last Updated: September 6, 2025 - Strategy refined based on existing content assessment*

**Key Insights from Content Review**:
- Existing notebooks demonstrate effective text analysis workflows ready for dataset integration
- Tutorial series provides model for connecting technical skills to cultural analysis
- Mini-lecture themes offer clear framework for dataset selection that supports critical thinking goals  
*Target: Have Weeks 1-8 datasets ready by December 2025*