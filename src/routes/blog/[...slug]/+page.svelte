<script lang="ts">
  import type { ComponentType } from 'svelte';
  import type { PageData } from './$types';
  import { formatDate } from '$lib/utils/posts';
  import CopyDropdown, { type DropdownAction } from '$lib/components/CopyDropdown.svelte';
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { fade, fly } from 'svelte/transition';

  export let data: PageData;

  const blogModules = import.meta.glob('../../../blog/**/*.md', { eager: true }) as Record<
    string,
    { default: ComponentType }
  >;

  // Make these reactive so they update when data changes
  $: metadata = data.metadata;
  $: previousPost = data.previousPost;
  $: nextPost = data.nextPost;
  $: siteConfig = data.siteConfig;

  $: contentEntry = Object.entries(blogModules).find(([path]) =>
    path.endsWith(`/${metadata.slug}.md`)
  );
  $: Content = contentEntry?.[1]?.default;

  let copied = false;
  let copyTimeout: ReturnType<typeof setTimeout> | null = null;

  function resetCopiedState() {
    if (copyTimeout) {
      clearTimeout(copyTimeout);
    }
    copyTimeout = setTimeout(() => {
      copied = false;
    }, 2000);
  }

  function getPostUrl(): string {
    if (browser) {
      return window.location.href;
    }
    return '';
  }

  async function copyPostContent() {
    if (!browser) return;
    const articleElement = document.querySelector('.post-article .content');

    if (articleElement) {
      const text = articleElement.textContent?.trim() ?? '';
      await navigator.clipboard.writeText(text);
      copied = true;
      resetCopiedState();
    }
  }

  async function copyUrl() {
    if (!browser) return;
    await navigator.clipboard.writeText(getPostUrl());
    copied = true;
    resetCopiedState();
  }

  function viewAsMarkdown() {
    if (!browser) return;
    const url = `https://raw.githubusercontent.com/${siteConfig.githubUsername}/${siteConfig.githubRepo}/refs/heads/main/src/blog/${metadata.slug}.md`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  $: repoBaseUrl = `https://github.com/${siteConfig.githubUsername}/${siteConfig.githubRepo}`;

  $: copyPrimaryAction = {
    label: copied ? 'Copied' : 'Copy Page',
    icon: copied ? 'check' : 'copy',
    ariaLabel: 'Copy post content',
    onClick: copyPostContent
  } satisfies DropdownAction;

  $: copyDropdownItems = [
    { label: 'Copy URL', icon: 'link', onClick: copyUrl },
    { label: 'Raw Markdown', icon: 'code', onClick: viewAsMarkdown }
  ] satisfies DropdownAction[];
</script>

<svelte:head>
  <title>{metadata.title} | {data.siteConfig.title}</title>
  {#if metadata.description}
    <meta name="description" content={metadata.description} />
  {/if}

  <!-- Canonical URL -->
  <link
    rel="canonical"
    href="{data.siteConfig.baseURL}{data.siteConfig.subPath}/blog/{metadata.slug}"
  />

  <!-- OpenGraph meta tags for articles -->
  <meta property="og:site_name" content={data.siteConfig.title} />
  <meta property="og:title" content={metadata.title} />
  {#if metadata.description}
    <meta property="og:description" content={metadata.description} />
  {/if}
  <meta property="og:type" content="article" />
  <meta
    property="og:url"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/blog/{metadata.slug}"
  />
  {#if metadata.image}
    <meta
      property="og:image"
      content="{data.siteConfig.baseURL}{data.siteConfig.subPath}{metadata.image}"
    />
    <meta property="og:image:alt" content={metadata.title} />
  {:else}
    <meta
      property="og:image"
      content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/hero.jpeg"
    />
    <meta property="og:image:alt" content={metadata.title} />
  {/if}
  <meta property="og:locale" content={data.siteConfig.lang} />
  <meta property="article:published_time" content={metadata.date} />
  {#if metadata.updated}
    <meta property="article:modified_time" content={metadata.updated} />
  {/if}
  <meta property="article:author" content={data.siteConfig.author} />
  {#if metadata.tags && metadata.tags.length > 0}
    {#each metadata.tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}

  <!-- Twitter Card meta tags for articles -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={metadata.title} />
  {#if metadata.description}
    <meta name="twitter:description" content={metadata.description} />
  {/if}
  {#if metadata.image}
    <meta
      name="twitter:image"
      content="{data.siteConfig.baseURL}{data.siteConfig.subPath}{metadata.image}"
    />
  {:else}
    <meta
      name="twitter:image"
      content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/hero.jpeg"
    />
  {/if}
  {#if data.siteConfig.twitterHandle}
    <meta name="twitter:site" content="@{data.siteConfig.twitterHandle}" />
    <meta name="twitter:creator" content="@{data.siteConfig.twitterHandle}" />
  {/if}
  <meta name="twitter:label1" content="Reading time" />
  <meta name="twitter:data1" content={metadata.readingTime} />
  {#if metadata.tags && metadata.tags.length > 0}
    <meta name="twitter:label2" content="Tags" />
    <meta name="twitter:data2" content={metadata.tags.join(', ')} />
  {/if}
  {#if data.metadata.math}
    <script>
      window.MathJax = {
        tex: {
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
          ],
          displayMath: [
            ['$$', '$$'],
            ['\\[', '\\]']
          ],
          processEscapes: true,
          processEnvironments: true
        },
        options: {
          skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
          ignoreHtmlClass: 'tex2jax_ignore',
          processHtmlClass: 'tex2jax_process'
        },
        svg: {
          fontCache: 'global'
        }
      };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
  {/if}
</svelte:head>

<div class="post-header-section" in:fly={{ y: -20, duration: 400, delay: 50 }}>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li><a href="{base}/">Home</a></li>
      <li><span class="separator">></span></li>
      <li><a href="{base}/blog">Blog</a></li>
      {#if metadata.categories && metadata.categories.length > 0}
        {@const category = metadata.categories[0]}
        {@const parentCategory = category.split('/')[0]}
        <li><span class="separator">></span></li>
        <li><a href="{base}/categories/{parentCategory.toLowerCase()}">{parentCategory}</a></li>
      {/if}
    </ol>
  </nav>

  <div class="post-title-wrapper">
    <h1 class="post-title-main">{metadata.title}</h1>
  </div>

  <div class="post-meta-inline">
    <span class="meta-item">
      <time datetime={metadata.date}>Posted on {formatDate(metadata.date)}</time>
    </span>
    {#if metadata.commitInfo}
      <span class="meta-separator">•</span>
      <span class="meta-item">
        Updated on {formatDate(metadata.commitInfo.date)}
        <a
          href={metadata.commitInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          class="commit-link"
        >
          #{metadata.commitInfo.hash}
        </a>
      </span>
    {/if}
  </div>

  <div class="post-actions-widget">
    <CopyDropdown primaryAction={copyPrimaryAction} dropdownItems={copyDropdownItems} />
  </div>
</div>

<article class="post-article" in:fade={{ duration: 300 }}>
  <div class="content prose" in:fly={{ y: 20, duration: 400, delay: 100 }}>
    {#if Content}
      <svelte:component this={Content} />
    {/if}
  </div>

  <nav class="post-navigation" aria-label="Post navigation" in:fade={{ duration: 300, delay: 200 }}>
    <a
      href="{base}/blog/{previousPost.slug}"
      class="nav-item nav-previous"
      in:fly={{ x: -20, duration: 300 }}
    >
      <span class="nav-label">PREVIOUS</span>
      <span class="nav-title">{previousPost.title}</span>
    </a>
    <a
      href="{base}/blog/{nextPost.slug}"
      class="nav-item nav-next"
      in:fly={{ x: 20, duration: 300 }}
    >
      <span class="nav-label">NEXT</span>
      <span class="nav-title">{nextPost.title}</span>
    </a>
  </nav>

  {#if metadata.tags && metadata.tags.length > 0}
    <div class="post-tail-wrapper" in:fade={{ duration: 300, delay: 300 }}>
      <div class="post-tags-inline">
        {#each metadata.tags as tag, index (tag)}
          <a
            href="{base}/tags/{tag.toLowerCase()}"
            in:fly={{ y: 10, duration: 300, delay: index * 50 }}
          >
            #{tag}
          </a>
        {/each}
      </div>
      <div in:fly={{ x: 20, duration: 300 }} class="post-license">
        <span class="license-text">
          This post is licensed under
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer">CC BY 4.0</a
          >
        </span>
        <span class="license-actions">
          <a
            href="{repoBaseUrl}/edit/main/src/blog/{metadata.slug}.md"
            target="_blank"
            rel="noopener noreferrer">Edit this page</a
          >
          <span class="separator">|</span>
          <a href="{repoBaseUrl}/issues/new" target="_blank" rel="noopener noreferrer"
            >Report an issue</a
          >
        </span>
      </div>
    </div>
  {/if}
</article>

<style lang="scss">
  .post-header-section {
    margin-bottom: var(--spacing-7);
    padding-bottom: var(--spacing-6);
    border-bottom: 1px solid var(--color-border-primary);
  }

  .post-header-section :global(.breadcrumb) {
    margin-bottom: var(--spacing-6);
  }

  .post-header-section :global(.breadcrumb-list) {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    font-size: 1rem;
    color: var(--color-muted);
  }

  .post-header-section :global(.breadcrumb-list li) {
    display: flex;
    align-items: center;
  }

  .post-header-section :global(.breadcrumb-list a) {
    color: var(--color-text-primary);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-link);
    }
  }

  .post-header-section :global(.breadcrumb-list .separator) {
    color: var(--color-muted);
    opacity: 0.5;
  }

  .post-header-section :global(.breadcrumb-list .current) {
    color: var(--color-muted);
    font-weight: 500;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .post-header-section .post-title-wrapper {
    margin-bottom: var(--spacing-6);
  }

  .post-header-section .post-title-main {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-heading);
    line-height: 1.2;
  }

  .post-header-section .post-actions-widget {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    flex-shrink: 0;
    margin-top: var(--spacing-4);
  }

  .post-header-section .post-meta-inline {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    font-size: 0.9rem;
    margin-bottom: var(--spacing-6);
    color: var(--color-muted);
  }

  .post-header-section .post-meta-inline .meta-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);

    :global(.icon) {
      color: var(--color-muted);
    }
  }

  .post-header-section .post-meta-inline .meta-separator {
    color: var(--color-muted);
    opacity: 0.5;
  }

  .post-header-section .post-meta-inline .commit-link {
    color: var(--color-link);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;

    &:hover {
      border-bottom-color: var(--color-link);
    }
  }

  .post-header-section .post-meta-inline time {
    font-weight: 400;
  }

  @media (max-width: 768px) {
    .post-header-section {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
    }

    .post-header-section :global(.breadcrumb) {
      margin-bottom: 0.75rem;
    }

    .post-header-section :global(.breadcrumb-list) {
      font-size: 0.75rem;
    }

    .post-header-section :global(.breadcrumb-list .current) {
      max-width: 200px;
    }

    .post-header-section .post-title-wrapper {
      margin-bottom: 0.75rem;
    }

    .post-header-section .post-title-main {
      font-size: 1.75rem;
      width: 100%;
    }

    .post-header-section .post-actions-widget {
      width: 100%;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .post-header-section .post-meta-inline {
      font-size: 0.85rem;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 0.75rem;
    }
  }

  @media (max-width: 576px) {
    .post-header-section .post-title-main {
      font-size: 1.5rem;
    }

    .post-header-section .post-meta-inline {
      margin-bottom: 0.5rem;
    }
  }

  .post-article :global(.content) {
    margin-bottom: 3rem;
    line-height: 1.8;
  }

  // Global Prose Styles
  :global(.content.prose) {
    :global(h2),
    :global(h3),
    :global(h4),
    :global(h5),
    :global(h6) {
      line-height: 1.3;
      margin-bottom: 0.75rem;
      font-weight: 700;
    }

    :global(h2) {
      margin-top: 2.5rem;
      font-size: 2rem;
    }

    :global(h3) {
      margin-top: 2rem;
      font-size: 1.625rem;
    }

    :global(h4) {
      margin-top: 1.75rem;
      font-size: 1.25rem;
    }

    :global(h5) {
      margin-top: 1.5rem;
      font-size: 1.125rem;
      letter-spacing: 0.01em;
    }

    :global(h6) {
      margin-top: 1.25rem;
      font-size: 1rem;
      letter-spacing: 0.03em;
    }

    @media (max-width: 768px) {
      :global(h2) {
        font-size: 1.75rem;
      }

      :global(h3) {
        font-size: 1.5rem;
      }

      :global(h4) {
        font-size: 1.125rem;
      }

      :global(h5) {
        font-size: 1rem;
      }

      :global(h6) {
        font-size: 0.9375rem;
      }
    }

    @media (max-width: 576px) {
      :global(h2) {
        font-size: 1.5rem;
      }

      :global(h3) {
        font-size: 1.25rem;
      }

      :global(h4) {
        font-size: 1.125rem;
      }

      :global(h5) {
        font-size: 1rem;
      }

      :global(h6) {
        font-size: 0.875rem;
      }
    }
  }

  .post-article .post-navigation {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    margin: var(--spacing-7) 0 var(--spacing-6);
    border: 1px solid var(--color-border-primary);
    border-radius: var(--radius-md);
    overflow: hidden;
    background: var(--color-border-primary);

    .nav-item {
      display: flex;
      flex-direction: column;
      padding: var(--spacing-6) var(--spacing-5);
      background: var(--color-surface-primary);
      text-decoration: none;
      transition: all 0.2s ease;
      min-height: 100px;

      &:hover {
        background: var(--color-surface-secondary);
      }

      .nav-label {
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: var(--color-muted);
        margin-bottom: var(--spacing-2);
        text-transform: uppercase;
      }

      .nav-title {
        font-size: 1.125rem;
        font-weight: 500;
        color: var(--color-link);
        line-height: 1.4;
      }
    }

    .nav-previous {
      .nav-label {
        text-align: left;
      }
      .nav-title {
        text-align: left;
      }
    }

    .nav-next {
      .nav-label {
        text-align: right;
      }
      .nav-title {
        text-align: right;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      margin: 1.5rem 0 1rem;

      .nav-item {
        padding: 1.25rem 1rem;
        min-height: 80px;

        .nav-label {
          font-size: 0.7rem;
        }

        .nav-title {
          font-size: 1rem;
        }
      }

      .nav-previous,
      .nav-next {
        .nav-label,
        .nav-title {
          text-align: left;
        }
      }
    }
  }

  :global(.post-tags) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2);

    :global(a) {
      text-decoration: none;
    }
  }

  :global(.post-tags-inline) {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--spacing-2);
    font-size: 1rem;

    :global(a) {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }

    :global(.tags-heading) {
      font-size: 1rem;
      font-weight: normal;
      margin: 0;
    }
  }

  :global(.post-tag) {
    display: inline-block;
    padding: var(--spacing-2) var(--spacing-4);
    background: var(--color-surface-primary);
    border: 1px solid var(--color-border-primary);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    color: var(--color-text-primary);

    &:hover {
      border-color: var(--color-link);
      background: var(--color-surface-secondary);
    }
  }

  .post-article :global(.post-tail-wrapper) {
    margin-top: 2rem;
  }

  .post-article .post-license {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-4);
    margin-top: var(--spacing-6);
    margin-bottom: var(--spacing-7);
    font-size: 0.9rem;
    color: var(--color-muted);

    a {
      color: var(--color-link);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }

    .license-actions {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);

      .separator {
        color: var(--color-muted);
      }
    }
  }
</style>
