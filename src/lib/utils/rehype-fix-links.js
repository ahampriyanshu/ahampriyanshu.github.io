import { visit } from 'unist-util-visit';

export function rehypeFixLinks(basePath = '') {
  return (/** @type {any} */ tree) => {
    if (!tree) return;
    const base = process.env.NODE_ENV === 'production' ? basePath : '';

    visit(tree, 'element', (node) => {
      if (node.tagName === 'a' && node.properties?.href) {
        const href = node.properties.href;

        if (typeof href !== 'string') return;

        const className = node.properties.className || node.properties.class;
        const isHeadingAnchor =
          className === 'heading-anchor' ||
          (Array.isArray(className) && className.includes('heading-anchor'));

        if (isHeadingAnchor) return;

        if (href.startsWith('http://') || href.startsWith('https://')) {
          node.properties.href = href;
          node.properties.target = '_blank';
          node.properties.rel = 'noopener noreferrer';
        } else if (href.startsWith('/') && !href.startsWith('//')) {
          node.properties.href = base ? `${base}${href}` : href;
        }
      }
    });
  };
}
