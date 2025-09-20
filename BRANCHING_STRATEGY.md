# Branching Strategy for Textbook Development

## Branch Overview
- **`main`** - Public, stable content for classroom use
- **`textbook-dev`** - Private development work for August 2026 textbook

## Workflow

### Daily Development
```bash
# Work on textbook development
git checkout textbook-dev
# Make changes, commit regularly
git add . && git commit -m "Working on Chapter X"
git push origin textbook-dev
```

### Publishing Classroom Content  
```bash
# When content is classroom-ready
git checkout main
git merge textbook-dev --no-ff  # Or create PR on GitHub
git push origin main
```

### Student/Colleague Access
- Direct them to: `https://github.com/TCU-DCDA/WRIT20833-2025` (main branch)
- Specific links: `docs/index.html`, stable notebooks in `notebooks/`

## Protection Strategy
- **Main branch**: Protected, requires PR reviews
- **Development branch**: Where all textbook work happens
- **Public visibility**: Maintained for course access
- **Content control**: Only tested materials reach main

## Current Status
✅ Development branch created (`textbook-dev`)  
⏳ Configure branch protection on GitHub  
⏳ Set development branch as your default workspace