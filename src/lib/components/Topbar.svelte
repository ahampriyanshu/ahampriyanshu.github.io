<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { siteConfig } from '$lib/config';
  import { onMount } from 'svelte';
  import type { PostMetadata } from '$lib/utils/posts';
  import Icon from '$lib/components/Icon.svelte';

  let searchVisible = false;
  let searchQuery = '';
  let allPosts: PostMetadata[] = [];
  let searchResults: PostMetadata[] = [];
  let searchInputElement: HTMLInputElement;

  const navItems = siteConfig.navItems;

  function getNavUrl(url: string): string {
    if (url.startsWith('http')) {
      return url;
    }
    return url === '/' ? base || '/' : `${base}${url}`;
  }

  onMount(() => {
    (async () => {
      try {
        const response = await fetch(`${base}/api/blog.json`);
        if (response.ok) {
          allPosts = await response.json();
        }
      } catch (error) {
        console.error('Failed to load blog for search:', error);
      }
    })();

    const handleKeyboard = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  });

  function toggleSearch() {
    searchVisible = !searchVisible;
    if (searchVisible) {
      searchQuery = '';
      searchResults = [];
      setTimeout(() => searchInputElement?.focus(), 100);
    }
  }

  function performSearch() {
    if (!searchQuery.trim()) {
      searchResults = [];
      return;
    }

    const query = searchQuery.toLowerCase();
    searchResults = allPosts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const descMatch = post.description?.toLowerCase().includes(query);
      const tagMatch = post.tags?.some((tag) => tag.toLowerCase().includes(query));

      return titleMatch || descMatch || tagMatch;
    });
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      toggleSearch();
    }
  }

  function handleOverlayKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSearch();
    }
  }

  $: currentPath = $page.url.pathname;
  $: if (searchQuery !== undefined) {
    performSearch();
  }
</script>

<header class="site-header">
  <div class="header-container">
    <nav class="main-nav">
      {#each navItems as item}
        <a
          href={getNavUrl(item.url)}
          class="nav-link"
          class:active={currentPath === getNavUrl(item.url) ||
            (item.url !== '/' && currentPath.startsWith(getNavUrl(item.url)))}
        >
          {item.name}
        </a>
      {/each}
    </nav>

    <div class="header-actions">
      <button
        type="button"
        class="search-trigger"
        aria-label="Search"
        title="Search (Ctrl/Cmd + K)"
        on:click={toggleSearch}
      >
        <Icon name="search" size={16} className="search-trigger-icon" />
      </button>
    </div>
  </div>
</header>

{#if searchVisible}
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="search-overlay"
    on:click={toggleSearch}
    on:keydown={handleOverlayKeydown}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <div class="search-modal" on:click|stopPropagation on:keydown={handleKeydown} role="document">
      <div class="search-header">
        <div class="search-input-wrapper">
          <Icon name="search" size={16} className="search-icon" />
          <input
            type="text"
            bind:this={searchInputElement}
            bind:value={searchQuery}
            placeholder="Search posts..."
            class="search-input"
          />
          <button on:click={toggleSearch} class="search-close" aria-label="Close search">
            <Icon name="close" size={16} />
          </button>
        </div>
      </div>

      <div class="search-results">
        {#if searchQuery.trim()}
          {#if searchResults.length > 0}
            <div class="results-list">
              {#each searchResults as post}
                <a href="{base}/blog/{post.slug}" class="result-item" on:click={toggleSearch}>
                  <div class="result-content">
                    <h3 class="result-title">{post.title}</h3>
                    {#if post.description}
                      <p class="result-description">{post.description}</p>
                    {/if}
                  </div>
                </a>
              {/each}
            </div>
          {:else}
            <div class="no-results">
              <p>No articles found for "{searchQuery}"</p>
            </div>
          {/if}
        {:else}
          <div class="search-empty-state">
            <p class="empty-message">Type something to search..</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .site-header {
    padding: var(--spacing-5) 0;
    margin-bottom: var(--spacing-7);
    border-bottom: 1px solid var(--color-border-primary);
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 var(--spacing-2);

    @media (max-width: 768px) {
      padding: 0 var(--spacing-4);
    }
  }

  .header-container .main-nav {
    display: flex;
    gap: var(--spacing-7);
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }

  .header-container .nav-link {
    color: var(--color-text-primary);
    text-decoration: none;
    font-size: 1.0625rem;
    font-weight: 500;
    letter-spacing: 0.3px;
    text-transform: capitalize;
    transition: color 0.2s ease;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-2) 0;
    font-family:
      'Lato',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;

    &:hover {
      color: var(--color-link);
    }

    &.active {
      color: var(--color-link);
      font-weight: 600;
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    margin-left: var(--spacing-4);
  }

  .search-trigger {
    background: none;
    border: none;
    color: var(--color-text-primary);
    cursor: pointer;
    padding: var(--spacing-2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    :global(.search-trigger-icon) {
      color: currentColor;
    }

    &:hover {
      color: var(--color-link);
    }
  }

  .search-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-overlay-primary);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    overflow-y: auto;
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .search-modal {
    width: 90%;
    max-width: 700px;
    background: var(--color-surface-primary);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    display: flex;
    flex-direction: column;
    animation: slideUp 0.3s ease-out;
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .search-header {
    padding: var(--spacing-3) var(--spacing-4);
    border-bottom: 1px solid var(--color-border-primary);
  }

  .search-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
  }

  :global(.search-icon) {
    color: var(--color-muted);
    font-size: 1.25rem;
  }

  .search-input {
    flex: 1;
    padding: var(--spacing-2);
    font-size: 1rem;
    border: none;
    background: transparent;
    color: var(--color-text-primary);

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--color-muted);
    }
  }

  .search-close {
    background: none;
    border: none;
    color: var(--color-muted);
    font-size: 1.5rem;
    cursor: pointer;
    padding: var(--spacing-2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-link);
    }
  }

  .search-results {
    overflow-y: auto;
    height: 350px;
    flex-shrink: 0;
  }

  .results-list {
    overflow: hidden;
    padding: 0;
  }

  .result-item {
    display: block;
    padding: var(--spacing-3) var(--spacing-4);
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid var(--color-border-primary);
    transition: background-color 0.2s ease;
    overflow: hidden;

    &:hover {
      background: var(--color-surface-hover);
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .result-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
  }

  .result-title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    color: var(--color-heading);
    transition: color 0.2s ease;

    .result-item:hover & {
      color: var(--color-link);
    }
  }

  .result-description {
    margin: 0;
    font-size: 0.875rem;
    color: var(--color-muted);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .no-results {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    text-align: center;
    color: var(--color-muted);
    height: 100%;

    p {
      margin: 0;
      font-size: 0.875rem;
    }
  }

  .search-empty-state {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    height: 100%;
  }

  .empty-message {
    color: var(--color-muted);
    font-size: 0.9rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    .site-header {
      padding: 1rem 0;
      margin-bottom: 1rem;
    }

    .header-container {
      flex-wrap: nowrap;
      gap: 0.5rem;
    }

    .header-container .main-nav {
      gap: 1rem;
      flex-shrink: 1;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .header-container .nav-link {
      font-size: 0.9375rem;
      text-transform: capitalize;
      white-space: nowrap;
      padding: 0.4rem 0;
    }

    .header-actions {
      flex-shrink: 0;
    }

    .search-modal {
      width: 95%;
    }

    .search-header {
      padding: 0.75rem;
    }

    .search-input {
      font-size: 0.875rem;
    }

    .result-item {
      padding: 0.75rem;
    }

    .result-title {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 576px) {
    .site-header {
      padding: 0.875rem 0;
      margin-bottom: 0.75rem;
    }

    .header-container {
      flex-wrap: nowrap;
      gap: 0.5rem;
    }

    .header-container .main-nav {
      gap: 0.75rem;
      flex-shrink: 1;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .header-container .nav-link {
      font-size: 0.875rem;
      text-transform: capitalize;
      white-space: nowrap;
      padding: 0.35rem 0;
    }

    .header-actions {
      flex-shrink: 0;
      margin-left: 0;
    }

    .search-trigger {
      padding: 0.4rem;
    }

    .search-overlay {
      padding-top: 15vh;
      align-items: flex-start;
    }

    .search-modal {
      width: 90%;
      max-width: 90%;
      border-radius: 0.25rem;
    }
  }
</style>
