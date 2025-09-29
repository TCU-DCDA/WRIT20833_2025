# Development Setup

## Quick Start
```bash
# Open Jupyter Lab for notebooks
jupyter lab

# Or start specific notebook
jupyter notebook notebooks/codeAlongs/WRIT20833_Variables_DataTypes_F25.ipynb
```

## Project Structure
- `notebooks/` - Interactive Jupyter notebooks for course content
- `docs/` - HTML lectures and documentation 
- `datasets/` - Course data files (CSV, etc.)
- `textbook/` - Planning documents for textbook development
- `exercises/` - Practice coding exercises

## Analysis Ready
✅ Python 3.11.7 with Anaconda  
✅ Jupyter Lab/Notebook installed  
✅ Data science packages (pandas, numpy, matplotlib)  
✅ Git repository with clean tracking  

## Common Commands
```bash
# Start development server for docs
python -m http.server 8000

# Quick notebook check
jupyter nbconvert --to html notebooks/codeAlongs/*.ipynb

# View git status
git status
```