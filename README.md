# WHOISsean.dev - Tech Education Blog

A hackathon project for the Tech Education Blog Challenge (Deadline: October 31, 2025)

## 🚀 Project Overview

This is a Jekyll-based tech blog built for a hackathon challenge. The blog focuses on development, AI tools, and personal projects, with a particular emphasis on agentic CLI tools and MCP servers.

## 🌐 Live Site

**URL**: [https://whoissean.dev](https://whoissean.dev)

## 📋 Hackathon Requirements

- ✅ **Domain**: `whoissean.dev` (purchased from Porkbun)
- ✅ **Deployment**: GitHub Pages
- ✅ **Tech Stack**: Jekyll (static site generator)
- ✅ **Basic Structure**: Responsive design, dark theme
- 🔄 **Content**: Mandatory agentic CLI tools post + additional posts
- 🔄 **Features**: SEO, analytics, comments system

## 🛠️ Technology Stack

- **Framework**: Jekyll (Ruby-based static site generator)
- **Hosting**: GitHub Pages
- **Domain**: whoissean.dev (.dev domain with HTTPS)
- **Theme**: Minima (customized for dark theme)
- **Plugins**: jekyll-feed, jekyll-seo-tag, jekyll-sitemap

## 📁 Project Structure

```
whoissean-blog/
├── _config.yml          # Jekyll configuration
├── _posts/              # Blog posts directory
├── _site/               # Generated site (deployed)
├── assets/              # CSS, images, etc.
├── index.markdown       # Homepage
├── about.markdown       # About page
└── README.md           # This file
```

## 🎯 Current Progress

### ✅ Completed (Day 1 - Foundation)
- [x] Domain purchased and configured
- [x] GitHub repository created
- [x] Jekyll site initialized
- [x] GitHub Pages deployment working
- [x] Custom domain (whoissean.dev) active
- [x] Basic site structure in place
- [x] HTTPS enabled (automatic with .dev domains)

### 🔄 In Progress
- [x] Content creation (mandatory agentic CLI tools post - draft created, needs media)
- [x] Dark theme customization (typography, code blocks, tables, blockquotes)
- [x] Mobile responsiveness (tested and working)
- [x] SEO implementation (robots.txt, sitemap.xml, jekyll-seo-tag)
- [x] Analytics setup (Google Analytics G-3PF44HG20G)

### 📋 Next Steps
- [ ] **PRIORITY**: Finish mandatory agentic CLI tools post with screenshots and examples
- [x] Create additional blog posts (Welcome, Build Journey published)
- [ ] Optional: Add mobile menu toggle for enhanced UX
- [x] Add comment system (Giscus)
- [x] Set up Google Analytics
- [x] SEO: robots.txt added, meta tags via jekyll-seo-tag
- [ ] Final Lighthouse performance check and optimization

## 🚀 Development Commands

```bash
# Start local development server
bundle exec jekyll serve

# Build site for production
bundle exec jekyll build

# Serve built site
bundle exec jekyll serve --detach
```

## 📝 Content Strategy

### Mandatory Post (Required)
- **Topic**: Agentic CLI Tools and MCP Servers
- **Focus**: Personal experience with Cursor over 1+ year
- **Include**: Code examples, screenshots, practical use cases
- **Tone**: Personal experience + technical insights

### Additional Posts
- Life app project (accessibility focus)
- Blog development journey
- Tech tips and tool reviews

## 🎨 Design Philosophy

- **Theme**: Minimalist, dark theme
- **Target**: Anyone interested in tech content
- **Style**: Personal experience with humor and wit
- **Accessibility**: Easy on the eyes, easy navigation

## 📊 Hackathon Evaluation Criteria

- **Content Quality (40%)**: Technical accuracy, engagement, practical value
- **Design & UX (30%)**: Visual appeal, responsiveness, performance
- **Technical Implementation (20%)**: Code quality, deployment, SEO
- **Innovation & Creativity (10%)**: Unique features, creative approaches

## 🎨 Special Features Implemented

- **Dark Theme**: Custom CSS variables system with minimalist design
- **Comments System**: Giscus integration using GitHub Discussions for authenticated commenting
- **Post Navigation**: Per-post action buttons (Back to Home, Previous/Next post, Share on X)
- **Accessibility**: Skip links, semantic HTML, ARIA labels, keyboard navigation
- **SEO**: Automatic meta tags, sitemap.xml, robots.txt
- **Analytics**: Google Analytics (GA4) tracking
- **Responsive Design**: Mobile-first approach, tested on multiple devices

## 🚀 Deployment Process

1. **Local Development**: 
   - Run `bundle exec jekyll serve` to preview locally
   - Site generates to `_site/` directory (auto-generated, not committed)

2. **GitHub Pages Deployment**:
   - Push source files to `main` branch
   - GitHub Pages automatically builds from Jekyll source
   - Custom domain configured: `whoissean.dev`
   - HTTPS enforced (automatic with .dev domains)

3. **File Structure**:
   - Source files: `_layouts/`, `_includes/`, `_posts/`, `assets/`, `_config.yml`
   - Never commit `_site/` (already in .gitignore)
   - Changes deploy within 1-3 minutes after push

## 🔗 Links

- **Live Site**: [https://whoissean.dev](https://whoissean.dev)
- **GitHub Repository**: [https://github.com/sfh1980/whoissean.dev](https://github.com/sfh1980/whoissean.dev)
- **Hackathon Requirements**: See `hackathon_1.md`

## 📅 Timeline

- **Day 1**: ✅ Foundation & Setup (Completed)
- **Day 2**: 🔄 Content Creation & Advanced Features
- **Day 3**: 📋 Deployment & Final Polish

---

**Built with ❤️ for the Tech Education Blog Hackathon Challenge**