import { getPosts } from '$lib/utils/posts';
import { siteConfig } from '$lib/config';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const posts = await getPosts();

  return {
    posts,
    siteConfig
  };
};

export const prerender = true;
