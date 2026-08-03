# George Street Labs — georgestreetlabs.com

Astro static site + Decap CMS. The admin panel at `/admin` edits everything
through your Git repo — no code changes needed for content.

## What the CMS controls

| Section in `/admin` | Edits | Stored in |
| --- | --- | --- |
| **Home page** | Hero, every section's copy, section order, extra sections | `src/data/home.json` |
| **Site settings** | Brand, navigation, footer, SEO defaults | `src/data/site.json` |
| **Products** | The product lineup and the bench | `src/content/products/*.md` |
| **Pages** | Top-level pages, rich text or raw HTML | `src/content/pages/*.md` |
| **Privacy** | The main privacy page and its footer link | `src/data/privacy.json` |
| **Privacy policies** | One policy per application | `src/content/privacy/*.md` |

### Home page
The hero is always at the top. Everything below it — Product lineup, On the
bench, The studio, Contact, plus any **Extra sections** you add — is sorted by
its **Position on the page** number, low to high. So an extra section with
position 15 lands between Products (10) and the bench (20). Each section also
has its own **Show this section?** switch.

Four kinds of extra section are available: **Text block**, **Card grid**,
**Call to action banner**, and **Custom HTML block**. Text and card sections
take a *Look* — plain, white card, or dark panel. Give a section an **Anchor
id** (say `pricing`) and you can point a nav link at `/#pricing`.

The hero headline supports `*asterisks*` around words to highlight them green.

### Navigation
Site settings → Navigation. Two things feed the nav bar and they interleave:

1. Links you type in the **Links** list (any URL — a `/#section`, a page, or an
   external site).
2. CMS pages with **Show in navigation** on, if **Also list CMS pages
   automatically** is on.

Both use the same **order** scale, lowest first. The stock links are Products
10, The bench 20, Studio 30, Contact 90 — so give a page order 40 to place it
between Studio and Contact. Turn off "Also list CMS pages automatically" to
drive the nav entirely from the Links list.

### Pages — rich text or custom HTML
Every page is published at `georgestreetlabs.com/<name>/`. **Page type** picks
which editor is used:

- **Rich text** — the "Page content" editor, rendered in the styled prose card.
- **Custom HTML** — the "HTML" box, pasted into the page verbatim.

Custom HTML pages get extra controls under **Layout options**:
*Header & footer* (keep the site chrome, or **Standalone** for a page that owns
the whole viewport), *Show the title block?*, *Eyebrow text*, and *Full browser
width?*. Under **Advanced / SEO** you can override the browser-tab title, inject
extra `<head>` code (Open Graph tags, analytics), and set noindex.

Your HTML inherits the site's fonts and CSS variables — `var(--ink)`,
`var(--ink-soft)`, `var(--sign-green)`, `var(--tape-amber)`, `var(--line)`,
`var(--paper)`, `var(--radius)` — and helper classes `.wrap`, `.btn.btn-primary`,
`.btn.btn-ghost`, `.eyebrow`, `.section-title`. `src/content/pages/html-example.md`
is a working template; delete it once you don't need it.

### Privacy policies
App stores require every application to publish a reachable privacy policy URL,
so the CMS has a section for exactly that. It is two pieces:

- **Privacy policies** — one entry per application, published at
  `georgestreetlabs.com/privacy/<name>/`. Each has a name, a one-line summary,
  platform chips, an effective date and an order number.
- **Privacy** — the primary page at `/privacy/`, which lists all of those
  policies and links to each one. A **Privacy** link is added to the footer
  automatically; turn it off (or rename/reorder it) under Privacy → Footer link.

**Policy type** works like it does on Pages, with one extra option:

- **Rich text** — the "Policy text" editor, in the styled prose card.
- **Custom HTML** — the "HTML" box, pasted in verbatim.
- **Link to a policy hosted elsewhere** — no page is built; the directory entry
  links straight out to the address you give.

The primary page can also carry the **company-wide policy** itself: fill in
"Company-wide policy" and it renders above or below the list, your choice. Its
**Intro** and the policies list both link out to the individual policies, and
**Extra links** in the directory covers anything that isn't a policy entry — a
cookie notice, a terms page, a partner's policy. Extra links and policy entries
share one order scale, lowest first, so they interleave.

**No-follow.** Every link to a policy on the primary page carries
`rel="nofollow"` by default, as does the footer's Privacy link — the usual
treatment for legal pages you don't want competing with product pages in search.
Each one has its own switch if you want to hand out the ranking credit after
all. Under Advanced / SEO, both the primary page and each individual policy can
also be set to noindex, or to no-follow every link they contain at once.

### Contact form
The Contact section shows a **contact form** (name, email, subject, message)
backed by [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) — no
server, no third-party service. Spam is filtered two ways: Netlify's built-in
**reCAPTCHA**, plus a hidden honeypot field bots fill in and people never see.

Successful submissions redirect to `/thanks/`, whose wording is editable under
Home page → Section — Contact → Thank-you page.

Home page → Section — Contact → **What to show** flips between the form and the
old plain email button. All field labels, the send-button text and the "Prefer
email?" line beneath it are editable there too.

**Two one-time steps in the Netlify dashboard** — the form will not collect
anything until these are done:

1. Site configuration → **Forms** → enable **Form detection**, then trigger a
   redeploy. Netlify only registers forms found in a build made *after*
   detection is on, so the first deploy with the form must come after this.
2. Forms → **Form notifications** → *Add notification* → *Email notification* →
   send to **info@georgestreetlabs.com**. This is the only place the recipient
   address is set; it is deliberately not in the page source, so spammers can't
   scrape it.

Submissions are also always browsable under Forms in the Netlify dashboard, and
free plans include 100 per month.

Note the CAPTCHA box is empty when you run the site locally — Netlify injects
the real widget at deploy time. That is expected; check it on the deployed site.

### Each product has three controls
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
4. In Netlify: Site configuration → Forms → enable Form detection and redeploy,
   then Forms → Form notifications → email notification to
   info@georgestreetlabs.com. See "Contact form" above.
5. In Netlify: Domain management → Add custom domain → georgestreetlabs.com.
   Netlify shows you the DNS records.
6. In GoDaddy: My Products → georgestreetlabs.com → DNS → add/replace:
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
