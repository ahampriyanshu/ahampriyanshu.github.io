import { error } from '@sveltejs/kit';
import { getPostsBySubcategory } from '$lib/utils/posts';
import { siteConfig } from '$lib/config';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const posts = await getPostsBySubcategory(params.category, params.subcategory);

  if (posts.length === 0) {
    throw error(404, 'Subcategory not found');
  }

  return {
    category: params.category,
    subcategory: params.subcategory,
    posts,
    siteConfig
  };
};
