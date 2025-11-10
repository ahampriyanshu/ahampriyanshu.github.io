import { getSiteUrl } from '$lib/config';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
  const url = getSiteUrl();
  const robots = `User-agent: *
Allow: /

Sitemap: ${url}/sitemap.xml
# RSS Feed: ${url}/rss.xml
# Atom Feed: ${url}/atom.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
