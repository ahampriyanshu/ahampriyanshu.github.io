import { getPosts, getTags } from '$lib/utils/posts';
import { getSiteUrl } from '$lib/config';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
  const posts = await getPosts();
  const tags = await getTags();

  const url = getSiteUrl();

  const staticPages = [
    { url: '', priority: '0.9', changefreq: 'weekly' },
    { url: '/categories', priority: '0.8', changefreq: 'monthly' },
    { url: '/archives', priority: '0.7', changefreq: 'weekly' },
    { url: '/tags', priority: '0.7', changefreq: 'weekly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${url}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
${posts
  .map(
    (post) => `  <url>
    <loc>${url}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.updated || post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
  </url>`
  )
  .join('\n')}
${Array.from(tags.keys())
  .map(
    (tag) => `  <url>
    <loc>${url}/tags/${encodeURIComponent(tag)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
