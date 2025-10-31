---
layout: page
title: Analytics & Performance
permalink: /analytics/
---

## Google Analytics

This site uses Google Analytics (GA4) to track visitor behavior and site performance.

**Tracking ID**: `{{ site.google_analytics }}`

### How to View Analytics Data

1. **Google Analytics Dashboard**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Sign in with your Google account
   - Select the property for `whoissean.dev`
   - View real-time and historical data

2. **What's Being Tracked**:
   - Page views
   - User sessions
   - Traffic sources
   - Device types (desktop, mobile, tablet)
   - Geographic location
   - User engagement metrics

3. **Privacy**:
   - Analytics respects user privacy settings
   - IP addresses are anonymized
   - No personally identifiable information is collected

---

## Lighthouse Performance

Lighthouse is a Google tool that audits website performance, accessibility, best practices, and SEO.

### Latest Audit Results

*To view current Lighthouse scores, run Lighthouse on the live site:*

**Quick Check**: Visit [PageSpeed Insights](https://pagespeed.web.dev/) and enter: `https://whoissean.dev`

### How to Run Lighthouse Locally

1. **Chrome DevTools Method**:
   - Open `https://whoissean.dev` in Chrome
   - Press `F12` to open DevTools
   - Go to the "Lighthouse" tab
   - Select categories (Performance, Accessibility, Best Practices, SEO)
   - Click "Analyze page load"
   - Wait for results (~30-60 seconds)

2. **Command Line Method** (requires Node.js):
   ```bash
   npm install -g lighthouse
   lighthouse https://whoissean.dev --view
   ```

3. **Online Tool**:
   - Visit [PageSpeed Insights](https://pagespeed.web.dev/)
   - Enter your site URL
   - View performance metrics and recommendations

### Performance Targets

For a static Jekyll site:
- **Performance**: 80-100 (good)
- **Accessibility**: 90-100 (should be high)
- **Best Practices**: 90-100 (should be high)
- **SEO**: 90-100 (should be high)

---

## Performance Optimizations Implemented

- ✅ Static site generator (Jekyll) for fast load times
- ✅ Optimized images (50% width, responsive)
- ✅ Video thumbnails with lazy loading (modals load on demand)
- ✅ Minified CSS/JS where possible
- ✅ SEO meta tags and sitemap
- ✅ HTTPS enabled (automatic with .dev domain)

---

*Last updated: {{ "now" | date: "%B %-d, %Y" }}*

