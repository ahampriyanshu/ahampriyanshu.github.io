import { getArchives } from '$lib/utils/posts';
import { siteConfig } from '$lib/config';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const archives = await getArchives();

  return {
    archives,
    siteConfig
  };
};

export const prerender = true;
