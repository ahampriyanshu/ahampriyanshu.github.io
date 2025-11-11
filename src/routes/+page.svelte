<script lang="ts">
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import BlogList from '$lib/components/BlogList.svelte';

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

<div class="homepage">
  <div class="hero-section">
    <div class="profile-image-wrapper">
      <img src="{base}/user.jpg" alt={data.siteConfig.author} class="profile-image" />
    </div>

    <div class="hero-content">
      <h1 class="hero-title">Hi, I'm Priyanshu 👋</h1>

      <div class="bio-section">
        <p class="bio-text">
          I'm a backend heavy full-stack developer and history buff, currently working as a Senior
          Software Engineer at HackerRank. My team recently built <a
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
          exploring at the moment. If you want to collaborate on something cool, feel free to <a
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

  .profile-image-wrapper {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 24px;
    box-shadow: var(--card-shadow);
    aspect-ratio: 1;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    width: 100%;
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

    .profile-image-wrapper {
      margin-top: 90px;
      width: 250px;
      height: 250px;
      aspect-ratio: 1;
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
    }

    .profile-image-wrapper {
      order: 2;
      flex-shrink: 0;
    }

    .hero-content {
      order: 1;
      flex: 1;
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
