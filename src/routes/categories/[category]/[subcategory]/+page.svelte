<script lang="ts">
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import BlogList from '$lib/components/BlogList.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.category} / {data.subcategory} | {data.siteConfig.title}</title>
  <meta
    name="description"
    content="Articles in {data.category} / {data.subcategory} on {data.siteConfig.title}"
  />

  <!-- Canonical URL -->
  <link
    rel="canonical"
    href="{data.siteConfig.baseURL}{data.siteConfig
      .subPath}/categories/{data.category.toLowerCase()}/{data.subcategory.toLowerCase()}"
  />

  <!-- OpenGraph meta tags -->
  <meta property="og:site_name" content={data.siteConfig.title} />
  <meta
    property="og:title"
    content="{data.category} / {data.subcategory} | {data.siteConfig.title}"
  />
  <meta
    property="og:description"
    content="Articles in {data.category} / {data.subcategory} on {data.siteConfig.title}"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="{data.siteConfig.baseURL}{data.siteConfig
      .subPath}/categories/{data.category.toLowerCase()}/{data.subcategory.toLowerCase()}"
  />
  <meta
    property="og:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/hero.jpeg"
  />

  <!-- Twitter Card meta tags -->
  <meta name="twitter:card" content="summary" />
  <meta
    name="twitter:title"
    content="{data.category} / {data.subcategory} | {data.siteConfig.title}"
  />
  <meta
    name="twitter:description"
    content="Articles in {data.category} / {data.subcategory} on {data.siteConfig.title}"
  />
  <meta
    name="twitter:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/hero.jpeg"
  />
  {#if data.siteConfig.twitterHandle}
    <meta name="twitter:site" content="@{data.siteConfig.twitterHandle}" />
  {/if}
</svelte:head>

<div class="category-page">
  <nav class="breadcrumb">
    <a href="{base}/categories">Categories</a>
    <span class="separator">/</span>
    <a href="{base}/categories/{data.category.toLowerCase()}">{data.category}</a>
    <span class="separator">/</span>
    <span class="current">{data.subcategory}</span>
  </nav>

  <h1 class="page-title">
    {data.category} / {data.subcategory}
  </h1>
  <p class="category-count">{data.posts.length} post{data.posts.length !== 1 ? 's' : ''}</p>

  <BlogList posts={data.posts} />
</div>

<style lang="scss">
  .category-page {
    .page-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .category-count {
      font-size: 1rem;
      color: var(--color-muted);
      margin-bottom: 2rem;
    }
  }

  .breadcrumb {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--color-muted);

    a {
      color: var(--color-link);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .separator {
      margin: 0 0.5rem;
    }

    .current {
      color: var(--color-text-primary);
      font-weight: 500;
    }
  }
</style>
