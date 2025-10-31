---
layout: post
title: "Build Journey: Step-by-Step to whoissean.dev"
description: "An ordered log of every step taken to stand up this Jekyll + GitHub Pages blog with a minimalist dark theme and comments."
tags: [journey, jekyll, github-pages, workflow, cursor]
---

Below is a concise, ordered list of the key steps I took to get the site to its current state.

1. Chose the project scope (Tech Education Blog Hackathon) and purchased the domain `whoissean.dev` (Porkbun) with HTTPS.
2. Created a GitHub repository and selected Jekyll as the tech stack (GitHub Pages friendly).
3. Installed Ruby, Jekyll, and Bundler locally; scaffolded a new Jekyll site.
4. Set initial configuration in `_config.yml` (title, url, plugins, description, GitHub repo info).
5. Ran the dev server locally (`bundle exec jekyll serve`) to verify the baseline theme (Minima).
6. Overrode the theme with custom templates:
   - `_layouts/default.html`, `_layouts/home.html`, `_layouts/post.html`
   - `_includes/header.html`, `_includes/footer.html`
7. Implemented accessibility-first structure: semantic landmarks, skip-link to `#content`, single `<h1>` per page.
8. Built a minimalist dark theme in `assets/main.scss` (CSS variables, typography scale, code/blockquote/table styles).
9. Added responsive helpers (container/grid), centered the site title, and centered the nav links.
10. Added `assets/main.js` for smooth scrolling and reserved hooks for a mobile menu toggle.
11. Ensured the footer sticks to the bottom on short pages via flex layout.
12. Deployed to GitHub Pages (main branch, root) with custom domain and HTTPS enforced.
13. Debugged a GitHub Pages Sass build error by wrapping mixed units with `calc()` in `clamp()` (rem + vw).
14. Verified Pages build logs via Actions; hard-refreshed the live site to bypass CDN/browser cache.
15. Standardized the About page to inherit site chrome by adding `_layouts/page.html` (extends `default`).
16. Surfaced `site.description` in both header (tagline) and footer; kept `(% seo %)` for meta.
17. Added post-level action buttons (Back, Prev/Next, Share on X) under each post.
18. Enabled comments on all posts with Giscus (GitHub Discussions); embedded widget in `post.html`.
19. Created and published a personalized welcome post (replacing the default Jekyll welcome).
20. Drafted the required "Agentic CLI Tools + MCP" post with outline and sections to fill.
21. Added documentation updates across repo files (README, workflow, strategy, hackathon progress).
22. Planned media (screenshots and short clips) under `assets/images` and `assets/videos` with responsive embeds.
23. Confirmed initial mobile responsiveness (tested on phone) and basic JS behavior.
24. Set up header/footer/domain links and repo metadata for easier navigation and maintenance.

Next targets
1. Finish the Agentic CLI + MCP article with screenshots/diffs and a short demo clip.
2. Add Google Analytics (gtag.js) and SEO defaults (OG/Twitter image, robots.txt).
3. Optional: implement a visible mobile menu toggle for small screens.

Notes / reproducibility
- Edit only source files (`_layouts`, `_includes`, `_posts`, `assets`); `_site/` is generated.
- Pushing to `main` triggers a GitHub Pages rebuild; allow ~1–3 minutes and hard-refresh.
- Media usage: images as WebP/PNG; videos as MP4/WebM, embedded via `<video>`.


