import { visit } from 'unist-util-visit';

/**
 * Custom rehype plugin to render math content for MathJax
 * Processes inline and display math elements by wrapping them with appropriate delimiters
 * @returns {(tree: any) => void}
 */
export function rehypeEscapeMath() {
  return (/** @type {any} */ tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'span' && node.properties?.className?.includes('math-inline')) {
        if (node.children && node.children[0] && node.children[0].value) {
          const mathContent = node.children[0].value;
          const escaped = mathContent
            .replace(/\\/g, '\\\\') // Escape backslashes
            .replace(/`/g, '\\`') // Escape backticks
            .replace(/\$/g, '\\$'); // Escape dollar signs in content
          node.children = [
            {
              type: 'raw',
              value: `{@html \`$${escaped}$\`}`
            }
          ];
        }
      }
      if (node.tagName === 'div' && node.properties?.className?.includes('math-display')) {
        if (node.children && node.children[0] && node.children[0].value) {
          const mathContent = node.children[0].value;
          const escaped = mathContent
            .replace(/\\/g, '\\\\') // Escape backslashes
            .replace(/`/g, '\\`') // Escape backticks
            .replace(/\$/g, '\\$'); // Escape dollar signs in content
          node.children = [
            {
              type: 'raw',
              value: `{@html \`$$${escaped}$$\`}`
            }
          ];
        }
      }
    });
  };
}
