import { getPosts } from '$lib/utils/posts';
import { siteConfig, getSiteUrl } from '$lib/config';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
  const posts = await getPosts();
  const url = getSiteUrl();

  const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(siteConfig.title)}</title>
  <subtitle>${escapeXml(siteConfig.description)}</subtitle>
  <link href="${url}" rel="alternate" />
  <link href="${url}/atom.xml" rel="self" type="application/atom+xml" />
  <id>${url}/</id>
  <updated>${new Date(posts[0]?.updated || posts[0]?.date || new Date()).toISOString()}</updated>
  <author>
    <name>${escapeXml(siteConfig.author)}</name>
    <email>${escapeXml(siteConfig.contact.email)}</email>
  </author>
  <generator uri="https://kit.svelte.dev/" version="1.0">SvelteKit</generator>
${posts
  .map(
    (post) => `  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${url}/blog/${post.slug}" rel="alternate" />
    <id>${url}/blog/${post.slug}</id>
    <published>${new Date(post.date).toISOString()}</published>
    <updated>${new Date(post.updated || post.date).toISOString()}</updated>
    <summary>${escapeXml(post.description)}</summary>
    <author>
      <name>${escapeXml(siteConfig.author)}</name>
    </author>
${post.tags ? post.tags.map((tag) => `    <category term="${escapeXml(tag)}" />`).join('\n') + '\n' : ''}  </entry>`
  )
  .join('\n')}
</feed>`;

  return new Response(atom, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
