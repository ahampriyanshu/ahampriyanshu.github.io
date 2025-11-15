<script lang="ts">
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import IndexList from '$lib/components/IndexList.svelte';
  import { fly } from 'svelte/transition';

  export let data: PageData;

  // Sort categories alphabetically and format for IndexList
  $: indexItems = Array.from(data.categories)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([category, subcategories]) => ({
      name: category,
      url: `${base}/categories/${category.toLowerCase()}`,
      count: Array.from(subcategories.values()).reduce((sum, count) => sum + count, 0)
    }));
</script>

<svelte:head>
  <title>Categories | {data.siteConfig.title}</title>
  <meta name="description" content="Browse all categories on {data.siteConfig.title}" />

  <!-- Canonical URL -->
  <link rel="canonical" href="{data.siteConfig.baseURL}{data.siteConfig.subPath}/categories" />

  <!-- OpenGraph meta tags -->
  <meta property="og:site_name" content={data.siteConfig.title} />
  <meta property="og:title" content="Categories | {data.siteConfig.title}" />
  <meta property="og:description" content="Browse all categories on {data.siteConfig.title}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/categories" />
  <meta
    property="og:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/logo.png"
  />

  <!-- Twitter Card meta tags -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Categories | {data.siteConfig.title}" />
  <meta name="twitter:description" content="Browse all categories on {data.siteConfig.title}" />
  <meta
    name="twitter:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/logo.png"
  />
  {#if data.siteConfig.twitterHandle}
    <meta name="twitter:site" content="@{data.siteConfig.twitterHandle}" />
  {/if}
</svelte:head>

<div class="categories-page" in:fly={{ y: 30, duration: 500 }}>
  <h1 class="page-title">Categories</h1>

  <IndexList items={indexItems} />
</div>

<style lang="scss">
  .categories-page {
    .page-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
  }
</style>
