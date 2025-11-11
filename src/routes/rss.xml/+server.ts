import { getPosts } from '$lib/utils/posts';
import { siteConfig, getSiteUrl } from '$lib/config';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
  const posts = await getPosts();
  const url = getSiteUrl();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(siteConfig.title)}</title>
    <description>${escapeXml(siteConfig.description)}</description>
    <link>${url}</link>
    <atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml" />
    <language>${siteConfig.lang}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${escapeXml(siteConfig.contact.email)}</managingEditor>
    <webMaster>${escapeXml(siteConfig.contact.email)}</webMaster>
    <generator>SvelteKit</generator>
${posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.description)}</description>
      <link>${url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
${post.updated ? `      <atom:updated>${new Date(post.updated).toISOString()}</atom:updated>\n` : ''}${post.tags ? post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n') + '\n' : ''}      <author>${escapeXml(siteConfig.contact.email)} (${escapeXml(siteConfig.author)})</author>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
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
