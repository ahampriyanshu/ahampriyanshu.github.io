import { visit } from 'unist-util-visit';

/**
 * Custom rehype plugin to wrap tables in a scrollable container
 * This ensures tables don't overflow the viewport on mobile
 * @returns {(tree: any) => void}
 */
export function rehypeWrapTable() {
  return (/** @type {any} */ tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'table' && parent && typeof index === 'number') {
        // Create a wrapper div with class 'table-wrapper'
        const wrapper = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-wrapper'] },
          children: [node]
        };

        // Replace the table with the wrapped version
        parent.children[index] = wrapper;
      }
    });
  };
}
