import { error } from '@sveltejs/kit';
import { getPostsByTag } from '$lib/utils/posts';
import { siteConfig } from '$lib/config';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const posts = await getPostsByTag(params.tag);

  if (posts.length === 0) {
    throw error(404, 'Tag not found');
  }

  return {
    tag: params.tag,
    posts,
    siteConfig
  };
};
