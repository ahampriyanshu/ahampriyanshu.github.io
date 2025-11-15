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

export async function createCodeHighlighter() {
  await getHighlighter();

  return async (/** @type {string} */ code, /** @type {string} */ lang = 'text') => {
    const highlighter = await getHighlighter();

    // Normalize lang - handle empty string, undefined, null
    const originalLang = (lang && lang.trim()) || '';

    let validLang = 'text';
    let filename = '';

    // Only process if lang was actually provided and not empty
    if (originalLang) {
      const colonMatch = originalLang.match(/^(\w+):(.+)$/);
      const braceMatch = originalLang.match(/^(\w+)\s*\{(.+)\}$/);

      if (colonMatch) {
        validLang = colonMatch[1];
        filename = colonMatch[2].trim();
      } else if (braceMatch) {
        validLang = braceMatch[1];
        filename = braceMatch[2].trim();
      } else {
        // Just a language, no filename
        validLang = originalLang;
      }
    }

    const loadedLanguages = highlighter.getLoadedLanguages();
    if (!loadedLanguages.includes(validLang)) {
      validLang = 'text';
    }

    let html = highlighter.codeToHtml(code, {
      lang: validLang,
      themes: {
        light: 'gruvbox-dark-hard',
        dark: 'gruvbox-dark-hard'
      }
    });

    const escapedCode = code.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

    // Only show header if there's a filename OR a valid language was explicitly provided (not 'text' or empty)
    const shouldShowHeader =
      filename || (originalLang && originalLang !== 'text' && validLang !== 'text');

    let finalHtml;
    if (shouldShowHeader) {
      let headerText = '';
      if (filename) {
        headerText = filename;
      } else if (validLang && validLang !== 'text') {
        headerText = validLang;
      }

      finalHtml = `<div class="code-block-wrapper"><div class="code-filename"><div class="filename-left"><span class="code-filename-text">${headerText}</span></div><button class="copy-code-btn" onclick="
        const code = this.getAttribute('data-code');
        navigator.clipboard.writeText(code).then(() => {
          const btn = this;
          btn.classList.add('copied');
          setTimeout(() => {
            btn.classList.remove('copied');
          }, 2000);
        });
      " data-code="${escapedCode}" title="Copy code"><svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg></button></div>${html}</div>`;
    } else {
      // Plain code block without header - add shiki-plain class to the existing pre tag
      // Handle different possible pre tag formats from shiki
      if (html.includes('<pre class="shiki')) {
        finalHtml = html.replace('<pre class="shiki', '<pre class="shiki shiki-plain');
      } else if (html.includes("<pre class='shiki")) {
        finalHtml = html.replace("<pre class='shiki", "<pre class='shiki shiki-plain");
      } else if (html.startsWith('<pre>')) {
        finalHtml = html.replace('<pre>', '<pre class="shiki shiki-plain">');
      } else {
        // Fallback: wrap in a div if we can't find the pre tag
        finalHtml = html;
      }
    }

    return `{@html \`${escapeSvelte(finalHtml)}\` }`;
  };
}
