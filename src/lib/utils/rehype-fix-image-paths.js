import { visit } from 'unist-util-visit';

export function rehypeFixImagePaths(basePath = '') {
  return (/** @type {any} */ tree) => {
    const base = process.env.NODE_ENV === 'production' ? basePath : '';
    if (!base || !tree) return;

    visit(tree, 'element', (node) => {
      if (node.tagName === 'img' && node.properties?.src) {
        const src = node.properties.src;
        if (typeof src === 'string' && src.startsWith('/') && !src.startsWith('//')) {
          node.properties.src = `${base}${src}`;
        }
      }
    });
  };
}
