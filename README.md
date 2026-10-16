# StackScout v4 — deployment-ready static site

## Publish to Cloudflare Pages (no build command)
1. Create or sign into your Cloudflare account and open **Workers & Pages**.
2. Create a **Pages** project using **Direct Upload** (upload the ZIP or the extracted folder, as the UI permits).
3. Use `stackscout-v4-deploy.zip` or the contents of this folder. Set no build command; publish the files at the site root.
4. Cloudflare assigns a project subdomain. Check that the homepage, search, categories, comparisons and vendor links work on iPhone and desktop.
5. Add a custom domain later if desired. Configure an email address and update `contact.html`, `privacy.html`, and `terms.html` BEFORE public promotion.

## Notes
- No live URL has been created, no Cloudflare account was accessed, and no domain was registered.
- The public build intentionally excludes `dashboard.html` and `dashboard.js`: localStorage events cannot measure site-wide traffic and this dashboard is not authenticated.
- No affiliate links are activated. Add only approved partner URLs to `monetization.js`.
- No server-side analytics, customer data storage, or commission tracking. Add privacy-conscious centralized analytics separately after appropriate notice/consent assessment.
- The policies are pre-launch drafts, not legal advice; update them before production promotion.
- Do not publish a sitemap with a fabricated hostname; create one after the final domain is known.
- All listings are editorial starter summaries; verify facts before actively promoting the site.
