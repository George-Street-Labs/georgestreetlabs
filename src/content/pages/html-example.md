---
title: "HTML page example"
pageType: "html"
navLabel: "HTML example"
showInNav: false
order: 99
description: "A template showing what a Custom HTML page can do."
visible: true
html: |-
  <div style="background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);padding:40px 44px;margin-top:34px">
    <h2 style="font-family:var(--font-display);font-size:24px;margin-bottom:12px">You control everything below the title</h2>
    <p style="color:var(--ink-soft);margin-bottom:18px">
      This page's content is raw HTML typed into the CMS under
      <strong>Pages → HTML</strong>. The site fonts, colour variables and helper
      classes are all available, so custom pages still look like the rest of the site.
    </p>
    <p style="color:var(--ink-soft);margin-bottom:22px">
      Useful variables: <code>var(--ink)</code>, <code>var(--ink-soft)</code>,
      <code>var(--sign-green)</code>, <code>var(--tape-amber)</code>,
      <code>var(--line)</code>, <code>var(--paper)</code>, <code>var(--radius)</code>.
      Useful classes: <code>.wrap</code>, <code>.btn .btn-primary</code>,
      <code>.btn .btn-ghost</code>, <code>.eyebrow</code>, <code>.section-title</code>.
    </p>
    <a class="btn btn-primary" href="/">Back to the home page</a>
  </div>
layoutOptions:
  chrome: "site"
  showHeader: true
  wide: false
seoOptions:
  noindex: true
---

This body is ignored while **Page type** is set to Custom HTML. Switch the page
type back to "Rich text" and this markdown renders instead.
