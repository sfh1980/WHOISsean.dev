# WHOISsean.dev - Tech Education Blog

A hackathon project for the Tech Education Blog Challenge (Deadline: October 31, 2025)

## 🚀 Project Overview

This is a Jekyll-based tech blog built for a hackathon challenge. The blog focuses on development, AI tools, and personal projects, with a particular emphasis on agentic CLI tools and MCP servers.

## 🌐 Live Site

**URL**: [https://whoissean.dev](https://whoissean.dev)

## 📋 Hackathon Requirements

- ✅ **Domain**: `whoissean.dev` (purchased from Porkbun) with HTTPS
- ✅ **Deployment**: GitHub Pages (live and accessible)
- ✅ **Tech Stack**: Jekyll (static site generator)
- ✅ **Basic Structure**: Responsive design, dark theme, accessible
- ✅ **Content**: All posts published (Welcome, Build Journey, **Required Agentic CLI Tools + MCP post**)
- ✅ **Features**: SEO (robots.txt, sitemap.xml, meta tags), Analytics (GA4), Comments (Giscus)

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

### ✅ Completed (Days 1-2 - Foundation & Content)
- [x] Domain purchased and configured (`whoissean.dev` with HTTPS)
- [x] GitHub repository created and public
- [x] Jekyll site initialized and deployed
- [x] GitHub Pages deployment working (auto-deploy on push)
- [x] Custom domain active and verified
- [x] Complete site structure (layouts, includes, assets)
- [x] Dark theme customization (typography, code blocks, tables, blockquotes, responsive grid)
- [x] Mobile responsiveness (tested on multiple devices)
- [x] Accessibility features (skip links, ARIA labels, semantic HTML, keyboard navigation)
- [x] **All blog posts published**:
  - Welcome post (with welcome image)
  - Build Journey post (step-by-step documentation)
  - **Required Agentic CLI Tools + MCP post** (complete with images, videos, examples, personal experience)
- [x] SEO implementation (robots.txt, sitemap.xml, jekyll-seo-tag meta tags)
- [x] Analytics setup (Google Analytics G-3PF44HG20G)
- [x] Interactive features (Giscus comments, post action buttons, video thumbnail modals)
- [x] Assets optimized (unused files removed, only active media retained)

### 📋 Final Steps (Optional/Recommended)
- [ ] Run Lighthouse performance check (recommended before submission)
- [ ] Optional: Add mobile menu toggle (not required, site is functional)
- [ ] Final end-to-end testing on live site

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
- **Video Modal System**: Clickable video thumbnails that open fullscreen modals (reduces page load, improves UX)
- **Accessibility**: Skip links, semantic HTML, ARIA labels, keyboard navigation, focus management
- **SEO**: Automatic meta tags (jekyll-seo-tag), sitemap.xml (auto-generated), robots.txt
- **Analytics**: Google Analytics (GA4) tracking with ID G-3PF44HG20G
- **Responsive Design**: Mobile-first approach, tested on multiple devices, images/videos responsive
- **Asset Optimization**: Only actively used media files retained, unused assets removed

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
- **Day 2**: ✅ Content Creation & Advanced Features (Completed)
- **Day 3**: ⚠️ Final Testing & Performance Check (Recommended)

---

**Built with ❤️ for the Tech Education Blog Hackathon Challenge**