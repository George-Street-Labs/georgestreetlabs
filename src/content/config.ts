import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    fileNo: z.string(),
    status: z.enum(['Production', 'Beta', 'In development', 'Prototype', 'Concept']),
    // "live" products get the full featured card; non-live appear in the
    // low-key "On the bench" section. "visible: false" hides them entirely.
    live: z.boolean().default(false),
    visible: z.boolean().default(true),
    order: z.number().default(99),
    features: z.array(z.string()).default([]),
    // Optional product mark, shown next to the name if present.
    logo: z.string().optional(),
    // Optional store links. A CTA button (with the right platform icon)
    // renders automatically for whichever of these is filled in.
    appStoreUrl: z.string().url().optional(),
    playStoreUrl: z.string().url().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Short label used in the navigation bar (falls back to title).
    navLabel: z.string().optional(),
    // Whether a link to this page appears in the site navigation.
    showInNav: z.boolean().default(true),
    // Position among nav links (lower = earlier).
    order: z.number().default(99),
    // Optional subtitle shown under the page title.
    description: z.string().optional(),
    visible: z.boolean().default(true),

    // "standard" renders the markdown body inside the styled prose card.
    // "html" renders the raw `html` field instead — for landing pages,
    // embeds, or anything the rich-text editor can't express.
    pageType: z.enum(['standard', 'html']).default('standard'),
    html: z.string().optional(),

    layoutOptions: z
      .object({
        // Custom-HTML pages can keep the site header/footer or own the whole page.
        chrome: z.enum(['site', 'standalone']).default('site'),
        // Show the title/subtitle block above the content.
        showHeader: z.boolean().default(true),
        // Small uppercase label above the title (defaults to the brand name).
        eyebrow: z.string().optional(),
        // Span the full viewport width instead of the 1080px column.
        wide: z.boolean().default(false),
      })
      .default({}),

    seoOptions: z
      .object({
        // Override the <title> tag entirely (otherwise title + site suffix).
        metaTitle: z.string().optional(),
        // Raw markup appended to <head> — OG tags, structured data, analytics.
        headHtml: z.string().optional(),
        noindex: z.boolean().default(false),
      })
      .default({}),
  }),
});

export const collections = { products, pages };
