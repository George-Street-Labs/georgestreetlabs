# George Street Labs — georgestreetlabs.com

Astro static site + Decap CMS. Products live in `src/content/products/` as
markdown files; the admin panel at `/admin` edits them through your Git repo.

## Each product has three controls
- **Status** — the stamp shown (Production / Beta / In development / Prototype / Concept)
- **Live product?** — ON = full featured card; OFF = small "On the bench" teaser
- **Visible on site?** — OFF hides it completely

## One-time setup (~30 minutes)
1. Push this folder to a GitHub repo.
2. On netlify.com (free): "Add new site" → "Import an existing project" → pick the repo.
   Build command and publish dir are read from netlify.toml automatically.
3. In Netlify: Site configuration → Identity → Enable Identity, then
   Identity → Services → Enable Git Gateway. Invite yourself as a user
   (Identity → Invite users). This is the login for /admin.
4. In Netlify: Domain management → Add custom domain → georgestreetlabs.com.
   Netlify shows you the DNS records.
5. In GoDaddy: My Products → georgestreetlabs.com → DNS → add/replace:
   - A record:    @    →  75.2.60.5        (Netlify's load balancer)
   - CNAME:       www  →  <your-site>.netlify.app
   Wait for DNS to propagate (minutes to a few hours); Netlify then issues
   free HTTPS automatically.

## Day-to-day editing
Go to georgestreetlabs.com/admin, log in, edit/add products, hit Publish.
Netlify rebuilds and the site updates in ~1 minute.

## Local development
npm install
npm run dev      # local preview at localhost:4321
npm run build    # output in dist/
