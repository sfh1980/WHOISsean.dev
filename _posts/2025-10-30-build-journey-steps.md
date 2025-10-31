---
layout: post
title: "Build Journey: Step-by-Step to whoissean.dev"
description: "An ordered log of every step taken to stand up this Jekyll + GitHub Pages blog with a minimalist dark theme and comments."
tags: [journey, jekyll, github-pages, workflow, cursor]
---

Below is a concise, ordered list of the key steps I took to get the site to its current state.

1. Chose the project scope (Tech Education Blog Hackathon) and purchased the domain `whoissean.dev` (Porkbun) with HTTPS.
2. Created a GitHub repository and selected Jekyll as the tech stack (GitHub Pages friendly).
3. Installed Ruby, Jekyll (a Ruby Gem), and Bundler (Ruby package manager) locally; scaffolded a new Jekyll site.
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
25. Integrated Google Analytics (GA4) with tracking ID `G-3PF44HG20G` in `_config.yml` and `default.html`.
26. Created `robots.txt` and verified `jekyll-sitemap` generates `sitemap.xml` automatically.
27. Added images and videos to the Agentic CLI Tools + MCP post (Jekyll structure screenshot, code diff example, terminal output video).
28. Proofread and refined the mandatory post content for grammar, clarity, and logical flow.
29. Resized images to 50% width and left-aligned them with smaller, italicized captions.
30. Replaced large video embeds with clickable thumbnail placeholders (35% width) that open videos in fullscreen modals on click.
31. Added video thumbnail modal system with JavaScript: clickable thumbnails, fullscreen overlay, close button, Escape key support.
32. Added section header "Here is an example of the Cursor chat agent in action" above video thumbnail.

Next targets
1. Optional: implement a visible mobile menu toggle for small screens.
2. Final Lighthouse performance check and optimization.

Notes / reproducibility
- Edit only source files (`_layouts`, `_includes`, `_posts`, `assets`); `_site/` is generated.
- Pushing to `main` triggers a GitHub Pages rebuild; allow ~1–3 minutes and hard-refresh.
- Media usage: images as PNG/WebP (resized to 50% width, left-aligned); videos as MP4 (embedded as clickable thumbnails that open in fullscreen modals).
- Video thumbnails: Use `.video-thumbnail-container` div with `data-video-src` attribute; JavaScript handles modal display on click.


