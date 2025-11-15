<script lang="ts">
  import type { PageData } from './$types';
  import BlogList from '$lib/components/BlogList.svelte';
  import { fly } from 'svelte/transition';

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.category} | {data.siteConfig.title}</title>
  <meta
    name="description"
    content="Articles in category {data.category} on {data.siteConfig.title}"
  />

  <!-- Canonical URL -->
  <link
    rel="canonical"
    href="{data.siteConfig.baseURL}{data.siteConfig
      .subPath}/categories/{data.category.toLowerCase()}"
  />

  <!-- OpenGraph meta tags -->
  <meta property="og:site_name" content={data.siteConfig.title} />
  <meta property="og:title" content="{data.category} | {data.siteConfig.title}" />
  <meta
    property="og:description"
    content="Articles in category {data.category} on {data.siteConfig.title}"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="{data.siteConfig.baseURL}{data.siteConfig
      .subPath}/categories/{data.category.toLowerCase()}"
  />
  <meta
    property="og:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/logo.png"
  />

  <!-- Twitter Card meta tags -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="{data.category} | {data.siteConfig.title}" />
  <meta
    name="twitter:description"
    content="Articles in category {data.category} on {data.siteConfig.title}"
  />
  <meta
    name="twitter:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/logo.png"
  />
  {#if data.siteConfig.twitterHandle}
    <meta name="twitter:site" content="@{data.siteConfig.twitterHandle}" />
  {/if}
</svelte:head>

<div class="category-page" in:fly={{ y: 30, duration: 500 }}>
  <h1 class="page-title">Category: {data.category}</h1>
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
</style>
