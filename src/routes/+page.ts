import { getPosts } from '$lib/utils/posts';
import { siteConfig } from '$lib/config';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const posts = await getPosts();
  const pinnedPosts = posts.filter((post) => post.pin);

  return {
    siteConfig,
    pinnedPosts
  };
};

export const prerender = true;
