<script lang="ts">
  import type { PageData } from './$types';
  import BlogList from '$lib/components/BlogList.svelte';
  import { fly } from 'svelte/transition';

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.siteConfig.author}</title>
  <meta name="description" content={data.siteConfig.description} />

  <!-- Canonical URL -->
  <link rel="canonical" href="{data.siteConfig.baseURL}{data.siteConfig.subPath}/" />

  <!-- OpenGraph meta tags for homepage -->
  <meta property="og:site_name" content={data.siteConfig.title} />
  <meta property="og:title" content={data.siteConfig.author} />
  <meta property="og:description" content={data.siteConfig.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/" />
  <meta property="og:image" content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/user.jpg" />
  <meta property="og:image:alt" content={data.siteConfig.author} />
  <meta property="og:locale" content={data.siteConfig.lang} />

  <!-- Twitter Card meta tags for homepage -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.siteConfig.author} />
  <meta name="twitter:description" content={data.siteConfig.description} />
  <meta
    name="twitter:image"
    content="{data.siteConfig.baseURL}{data.siteConfig.subPath}/user.jpg"
  />
  {#if data.siteConfig.twitterHandle}
    <meta name="twitter:site" content="@{data.siteConfig.twitterHandle}" />
    <meta name="twitter:creator" content="@{data.siteConfig.twitterHandle}" />
  {/if}
</svelte:head>

<div class="homepage" in:fly={{ y: 30, duration: 500 }}>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Hi, I'm Priyanshu 👋</h1>

      <div class="bio-section">
        <p class="bio-text">
          I'm a backend heavy full-stack developer currently working as a Senior Software Engineer
          at HackerRank. My team recently built <a
            href="https://www.hackerrank.com/products/skillup"
            rel="noopener noreferrer"
            target="_blank">SkillUp</a
          > from 0 to 1, about to cross $1 million in ARR, and is now focused on scaling it to the next
          level.
        </p>
        <p class="bio-text">
          Beyond programming, I'm fascinated by history; a field I've attempted to pursue
          academically, both before and after my engineering degree. Though I dropped out both
          times, I plan to give it another shot down the road.
        </p>
        <p class="bio-text">
          I spent the last three years living as a nomad, working remotely from <a
            href="https://supertrip.ahampriyanshu.com"
            rel="noopener noreferrer"
            target="_blank">100+</a
          > cities across India. It's something I'd love to do internationally over the next decade.
        </p>
        <p class="bio-text">
          This blog is where I share notes on programming, personal finance, and anything else I'm
          exploring at the moment. If you want to collaborate with me, feel free to <a
            href="mailto:vayampriyanshu@gmail.com&subject=Hey"
            rel="noopener noreferrer"
            target="_blank">reach out</a
          >.
        </p>
      </div>
    </div>
  </div>

  {#if data?.pinnedPosts?.length > 0}
    <div class="featured-section blog-page">
      <h2 class="featured-heading">Featured Posts</h2>
      <BlogList posts={data.pinnedPosts} />
    </div>
  {/if}
</div>

<style lang="scss">
  .homepage {
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
  }

  .hero-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-heading);
  }

  .bio-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .bio-text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-text-primary);
    margin: 0;
    text-align: left;
  }

  @media (min-width: 768px) {
    .homepage {
      padding: 0rem 0rem 4rem;
    }

    .hero-section {
      gap: 3rem;
    }

    .hero-title {
      font-size: 3rem;
    }
  }

  @media (min-width: 1024px) {
    .hero-section {
      flex-direction: row;
      text-align: left;
      align-items: flex-start;

      .hero-content {
        padding-right: 1rem;
      }
    }
  }

  .featured-section {
    margin-top: 2.5rem;
  }

  .featured-heading {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    color: var(--color-heading);
  }

  @media (max-width: 768px) {
    .featured-section {
      margin-top: 2rem;
    }

    .featured-heading {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 576px) {
    .featured-section {
      margin-top: 1.5rem;
    }

    .featured-heading {
      font-size: 1.5rem;
    }
  }
</style>
