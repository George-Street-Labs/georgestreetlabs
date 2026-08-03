import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: false });

/** Render a markdown string coming from the CMS to HTML (block-level). */
export function md(source?: string | null): string {
  if (!source) return '';
  return marked.parse(source, { async: false }) as string;
}

/** Render markdown without wrapping it in a <p> — for headlines and one-liners. */
export function mdInline(source?: string | null): string {
  if (!source) return '';
  return marked.parseInline(source, { async: false }) as string;
}
