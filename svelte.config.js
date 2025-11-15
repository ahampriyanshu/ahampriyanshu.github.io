import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkMath from 'remark-math';
import { siteConfig } from './src/lib/config.ts';
import { rehypeEscapeMath } from './src/lib/utils/rehype-escape-math.js';
import { rehypeEscapeSvelte } from './src/lib/utils/rehype-escape-svelte.js';
import { rehypeWrapTable } from './src/lib/utils/rehype-wrap-table.js';
import { rehypeFixImagePaths } from './src/lib/utils/rehype-fix-image-paths.js';
import { rehypeFixLinks } from './src/lib/utils/rehype-fix-links.js';
import { createCodeHighlighter } from './src/lib/utils/code-highlighter.js';

const basePath = siteConfig.subPath ?? '';

const mdsvexOptions = {
  extensions: ['.md'],
  remarkPlugins: [remarkGfm, remarkToc, remarkMath],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'append',
        properties: {
          className: ['heading-anchor'],
          ariaHidden: 'true'
        },
        content: [
          {
            type: 'text',
            value: '#'
          }
        ]
      }
    ],
    rehypeEscapeMath,
    rehypeWrapTable,
    rehypeEscapeSvelte,
    rehypeFixImagePaths(basePath),
    rehypeFixLinks(basePath)
  ],
  layout: {
    post: './src/lib/layouts/PostLayout.svelte',
    _: './src/lib/layouts/DefaultLayout.svelte'
  },
  highlight: {
    highlighter: await createCodeHighlighter()
  }
};

const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? basePath : ''
    },
    prerender: {
      handleMissingId: 'warn',
      handleHttpError: ({ path, referrer, message }) => {
        console.warn(`Warning: ${path} referenced from ${referrer}`);
        if (path.startsWith('/images/') || path.includes('/images/')) {
          console.warn(`Warning: Missing image ${path} referenced from ${referrer}`);
          return;
        }
        if (path.startsWith('/')) {
          console.warn(`Warning: Missing href ${path} referenced from ${referrer}`);
          return;
        }
        throw new Error(message);
      },
      entries: ['*']
    }
  }
};

export default config;
