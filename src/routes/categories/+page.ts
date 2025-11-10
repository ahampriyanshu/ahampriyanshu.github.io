import { getCategories } from '$lib/utils/posts';
import { siteConfig } from '$lib/config';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const categories = await getCategories();

  return {
    categories,
    siteConfig
  };
};

export const prerender = true;
