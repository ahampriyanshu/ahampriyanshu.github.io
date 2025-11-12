<script lang="ts">
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import IndexList from '$lib/components/IndexList.svelte';
  import { fly } from 'svelte/transition';

  export let data: PageData;

  // Sort tags alphabetically and format for IndexList
  $: indexItems = Array.from(data.tags)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([tag, count]) => ({
      name: tag,
      url: `${base}/tags/${tag.toLowerCase()}`,
      count
    }));
</script>

<svelte:head>
  <title>Tags | {data.siteConfig.title}</title>
  <meta name="description" content="Browse all tags on {data.siteConfig.title}" />

  <!-- Canonical URL -->
  <link rel="canonical" href="{data.siteConfig.baseURL}{data.siteConfig.subPath}/tags" />

  <!-- OpenGraph meta tags -->
  <meta property="og:site_name" content={data.siteConfig.title} />
  <meta property="og:title" content="Tags | {data.siteConfig.title}" />
  <meta property="og:description" content="Browse all tags on {data.siteConfig.title}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/tags" />
  <meta
    property="og:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/hero.jpeg"
  />

  <!-- Twitter Card meta tags -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Tags | {data.siteConfig.title}" />
  <meta name="twitter:description" content="Browse all tags on {data.siteConfig.title}" />
  <meta
    name="twitter:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/hero.jpeg"
  />
  {#if data.siteConfig.twitterHandle}
    <meta name="twitter:site" content="@{data.siteConfig.twitterHandle}" />
  {/if}
</svelte:head>

<div class="tags-page" in:fly={{ y: 30, duration: 500 }}>
  <h1 class="page-title">Tags</h1>

  <IndexList items={indexItems} />
</div>

<style lang="scss">
  .tags-page {
    .page-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
  }
</style>
