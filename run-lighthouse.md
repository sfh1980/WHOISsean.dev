# Running Lighthouse Audits

This guide explains how to run Lighthouse audits and update the results on your site.

## Quick Method: Online Tool

1. Visit [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter: `https://whoissean.dev`
3. Click "Analyze"
4. View performance scores and recommendations
5. Update `/lighthouse-results.markdown` with the scores

## Chrome DevTools Method

1. Open `https://whoissean.dev` in Chrome
2. Press `F12` (or Right-click → Inspect)
3. Go to the "Lighthouse" tab (or press `Ctrl+Shift+P` → type "Lighthouse")
4. Select categories:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
5. Click "Analyze page load"
6. Wait for results (~30-60 seconds)
7. Screenshot the results or note the scores
8. Update the `/lighthouse-results.markdown` file

## Command Line Method (Advanced)

If you have Node.js installed:

```bash
# Install Lighthouse globally
npm install -g lighthouse

# Run audit
lighthouse https://whoissean.dev --view

# Save as HTML report
lighthouse https://whoissean.dev --output html --output-path ./lighthouse-report.html

# Save as JSON (for parsing)
lighthouse https://whoissean.dev --output json --output-path ./lighthouse-report.json
```

## What Scores to Record

For each page you audit, record:
- Performance score (0-100)
- Accessibility score (0-100)
- Best Practices score (0-100)
- SEO score (0-100)
- Core Web Vitals:
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay) / TBT (Total Blocking Time)
  - CLS (Cumulative Layout Shift)

## Updating the Lighthouse Results Page

1. Open `whoissean-blog/lighthouse-results.markdown`
2. Replace placeholder text with actual scores
3. Add date: `Last audit date: [Your Date]`
4. Commit and push to GitHub
5. Site will update automatically

## Expected Scores for This Site

Given the optimizations:
- **Performance**: Should be 70-90+ (good static site performance)
- **Accessibility**: Should be 90-100 (semantic HTML, ARIA labels)
- **Best Practices**: Should be 90-100 (HTTPS, modern standards)
- **SEO**: Should be 90-100 (meta tags, sitemap, robots.txt)

## Tips for Better Scores

If scores are lower than expected:
1. **Images**: Ensure all images are optimized (already done with 50% width)
2. **Fonts**: Use system fonts or preload web fonts
3. **JavaScript**: Minimize inline scripts (already using external JS)
4. **CSS**: Minify CSS (Jekyll handles this)
5. **Caching**: GitHub Pages handles HTTP headers automatically

---

*This file is for reference only and won't be published on the site.*

