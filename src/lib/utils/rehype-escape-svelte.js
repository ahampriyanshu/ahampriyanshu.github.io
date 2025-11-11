import { visit } from 'unist-util-visit';

/**
 * Custom rehype plugin to escape Svelte template syntax and special characters
 * This prevents Svelte from interpreting curly braces, angle brackets as template syntax
 * @returns {(tree: any) => void}
 */
export function rehypeEscapeSvelte() {
  return (/** @type {any} */ tree) => {
    // Handle Jekyll/Liquid template syntax in img src attributes
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img' && node.properties?.src) {
        const src = node.properties.src;
        if (typeof src === 'string') {
          // Convert Jekyll/Liquid template syntax to plain paths
          // Pattern: {{ '/path/to/file' | absolute_url }} -> /path/to/file
          const liquidMatch = src.match(/\{\{\s*['"]([^'"]+)['"]\s*\|\s*absolute_url\s*\}\}/);
          if (liquidMatch) {
            node.properties.src = liquidMatch[1];
          }
        }
      }
    });

    // Visit ALL text nodes in the entire tree (including those nested in elements)
    visit(tree, 'text', (node, index, parent) => {
      if (node.value && typeof node.value === 'string') {
        // Skip if this is inside a code block or pre tag (already handled by syntax highlighter)
        if (
          parent &&
          parent.type === 'element' &&
          (parent.tagName === 'code' || parent.tagName === 'pre')
        ) {
          return;
        }

        // Escape double curly braces (Svelte/Liquid template syntax) in text nodes
        node.value = node.value.replace(/\{\{/g, '&#123;&#123;').replace(/\}\}/g, '&#125;&#125;');

        // Escape < and > to prevent them from being interpreted as HTML tags or Svelte syntax
        // This is crucial to prevent the app from breaking when these characters are used in markdown
        node.value = node.value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
    });

    // Also handle raw HTML nodes that might contain unescaped < and >
    visit(tree, 'raw', (node) => {
      if (node.value && typeof node.value === 'string') {
        // Escape < and > in text content within raw HTML/SVG elements
        // This regex finds text content between > and < (i.e., element content)
        node.value = node.value.replace(
          />([^<>]*)</g,
          (/** @type {string} */ match, /** @type {string} */ content) => {
            // Only escape if the content contains < or > (comparison operators, not tags)
            if (content.includes('<') || content.includes('>')) {
              const escaped = content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
              return `>${escaped}<`;
            }
            return match;
          }
        );
      }
    });
  };
}
