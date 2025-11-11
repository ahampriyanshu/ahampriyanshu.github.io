import { bundledLanguages, createHighlighter } from 'shiki';
import { escapeSvelte } from 'mdsvex';

/** @type {import('shiki').Highlighter | undefined} */
let highlighter;

/** @type {Promise<import('shiki').Highlighter> | undefined} */
let highlighterPromise;

/**
 * Get or create the singleton Shiki highlighter instance
 * @returns {Promise<import('shiki').Highlighter>}
 */
async function getHighlighter() {
  if (highlighter) {
    return highlighter;
  }

  // If we're already creating the highlighter, wait for that promise
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['gruvbox-dark-hard'],
      langs: Object.keys(bundledLanguages)
    }).then((h) => {
      highlighter = h;
      return h;
    });
  }

  return highlighterPromise;
}

/**
 * Creates a custom code highlighter function for mdsvex
 * Uses Shiki for syntax highlighting with gruvbox-dark-hard theme
 * Supports filename annotations and copy-to-clipboard functionality
 * @returns {Promise<(code: string, lang?: string) => Promise<string>>}
 */
export async function createCodeHighlighter() {
  // Pre-initialize the highlighter to avoid creating multiple instances
  await getHighlighter();

  return async (/** @type {string} */ code, /** @type {string} */ lang = 'text') => {
    const highlighter = await getHighlighter();

    let validLang = lang || 'text';
    let filename = '';

    // Parse language and filename from the lang string
    // Supports formats: "lang:filename" or "lang {filename}"
    if (lang) {
      const colonMatch = lang.match(/^(\w+):(.+)$/);
      const braceMatch = lang.match(/^(\w+)\s*\{(.+)\}$/);

      if (colonMatch) {
        validLang = colonMatch[1];
        filename = colonMatch[2].trim();
      } else if (braceMatch) {
        validLang = braceMatch[1];
        filename = braceMatch[2].trim();
      }
    }

    // Fallback to 'text' if language is not loaded
    const loadedLanguages = highlighter.getLoadedLanguages();
    if (!loadedLanguages.includes(validLang)) {
      validLang = 'text';
    }

    // Generate highlighted HTML
    let html = highlighter.codeToHtml(code, {
      lang: validLang,
      themes: {
        light: 'gruvbox-dark-hard',
        dark: 'gruvbox-dark-hard'
      }
    });

    // Escape code for the data attribute
    const escapedCode = code.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

    // Determine header text
    let headerText = '';
    if (filename) {
      headerText = filename;
    } else if (validLang && validLang !== 'text') {
      headerText = validLang;
    } else {
      headerText = 'text file';
    }

    // Wrap with custom code block wrapper and copy button
    const finalHtml = `<div class="code-block-wrapper"><div class="code-filename"><div class="filename-left"><span class="code-filename-text">${headerText}</span></div><button class="copy-code-btn" onclick="
        const code = this.getAttribute('data-code');
        navigator.clipboard.writeText(code).then(() => {
          const btn = this;
          btn.classList.add('copied');
          setTimeout(() => {
            btn.classList.remove('copied');
          }, 2000);
        });
      " data-code="${escapedCode}" title="Copy code"><svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg></button></div>${html}</div>`;

    return `{@html \`${escapeSvelte(finalHtml)}\` }`;
  };
}
