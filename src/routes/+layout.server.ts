import type { LayoutServerLoad } from './$types';
import { getPosts } from '$lib/utils/posts';

export const load: LayoutServerLoad = async () => {
  const posts = await getPosts();

  return {
    recentPosts: posts.slice(0, 4)
  };
};
