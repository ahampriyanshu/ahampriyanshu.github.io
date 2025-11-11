import { error } from '@sveltejs/kit';
import { getPostsByCategory } from '$lib/utils/posts';
import { siteConfig } from '$lib/config';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const posts = await getPostsByCategory(params.category);

  if (posts.length === 0) {
    throw error(404, 'Category not found');
  }

  return {
    category: params.category,
    posts,
    siteConfig
  };
};
