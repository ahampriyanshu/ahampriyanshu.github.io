import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkMath from 'remark-math';
import { rehypeEscapeMath } from './src/lib/utils/rehype-escape-math.js';
import { rehypeEscapeSvelte } from './src/lib/utils/rehype-escape-svelte.js';
import { rehypeWrapTable } from './src/lib/utils/rehype-wrap-table.js';
import { createCodeHighlighter } from './src/lib/utils/code-highlighter.js';
import { visit } from 'unist-util-visit';

const basePath = '';

// Simple inline rehype plugin to fix image paths
const rehypeFixImagePaths = () => (tree) => {
  const base = process.env.NODE_ENV === 'production' ? basePath : '';
  if (!base) return;

  visit(tree, 'element', (node) => {
    if (node.tagName === 'img' && node.properties?.src) {
      const src = node.properties.src;
      if (typeof src === 'string' && src.startsWith('/') && !src.startsWith('//')) {
        node.properties.src = `${base}${src}`;
      }
    }
  });
};

const mdsvexOptions = {
  extensions: ['.md'],
  remarkPlugins: [remarkGfm, remarkToc, remarkMath],
  rehypePlugins: [
    rehypeSlug,
    rehypeAutolinkHeadings,
    rehypeEscapeMath,
    rehypeWrapTable,
    rehypeEscapeSvelte,
    rehypeFixImagePaths
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
        // Ignore 404 errors for missing images during prerender
        if (path.startsWith('/images/') || path.includes('/images/')) {
          console.warn(`Warning: Missing image ${path} referenced from ${referrer}`);
          return;
        }
        throw new Error(message);
      },
      entries: ['*']
    }
  }
};

export default config;
