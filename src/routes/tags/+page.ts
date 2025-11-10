import { getTags } from '$lib/utils/posts';
import { siteConfig } from '$lib/config';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const tags = await getTags();

  return {
    tags,
    siteConfig
  };
};

export const prerender = true;
