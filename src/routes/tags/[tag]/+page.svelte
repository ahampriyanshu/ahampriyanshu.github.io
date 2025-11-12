<script lang="ts">
  import type { PageData } from './$types';
  import BlogList from '$lib/components/BlogList.svelte';
  import { fly } from 'svelte/transition';

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.tag} | {data.siteConfig.title}</title>
  <meta name="description" content="Articles tagged with {data.tag} on {data.siteConfig.title}" />

  <!-- Canonical URL -->
  <link
    rel="canonical"
    href="{data.siteConfig.baseURL}{data.siteConfig.subPath}/tags/{data.tag.toLowerCase()}"
  />

  <!-- OpenGraph meta tags -->
  <meta property="og:site_name" content={data.siteConfig.title} />
  <meta property="og:title" content="{data.tag} | {data.siteConfig.title}" />
  <meta
    property="og:description"
    content="Articles tagged with {data.tag} on {data.siteConfig.title}"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/tags/{data.tag.toLowerCase()}"
  />
  <meta
    property="og:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/hero.jpeg"
  />

  <!-- Twitter Card meta tags -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="{data.tag} | {data.siteConfig.title}" />
  <meta
    name="twitter:description"
    content="Articles tagged with {data.tag} on {data.siteConfig.title}"
  />
  <meta
    name="twitter:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/images/hero.jpeg"
  />
  {#if data.siteConfig.twitterHandle}
    <meta name="twitter:site" content="@{data.siteConfig.twitterHandle}" />
  {/if}
</svelte:head>

<div class="tags-page" in:fly={{ y: 30, duration: 500 }}>
  <h1 class="page-title">Tag: {data.tag}</h1>
  <p class="tag-count">{data.posts.length} post{data.posts.length !== 1 ? 's' : ''}</p>

  <BlogList posts={data.posts} />
</div>

<style lang="scss">
  .tags-page {
    .page-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .tag-count {
      font-size: 1rem;
      color: var(--color-muted);
      margin-bottom: 2rem;
    }
  }
</style>
