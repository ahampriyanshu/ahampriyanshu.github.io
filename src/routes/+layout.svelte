<script lang="ts">
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';
  import { siteConfig } from '$lib/config';
  import Topbar from '$lib/components/Topbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import TOC from '$lib/components/TOC.svelte';
  import RecentlyUpdated from '$lib/components/RecentlyUpdated.svelte';
  import '$lib/styles/louie.scss';
  import { onMount } from 'svelte';

  export let data: LayoutData;
  let theme = 'light';
  let recentPosts = data.recentPosts ?? [];

  onMount(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    theme = savedTheme;
    document.documentElement.setAttribute('data-mode', theme);
  });

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-mode', theme);
    localStorage.setItem('theme', theme);
  }

  $: isPostPage = $page.url.pathname.includes('/blog/');
  $: currentSlug = $page.data?.metadata?.slug;
  // Filter out current post from recent posts and limit to 3
  $: recentPosts = (data.recentPosts ?? []).filter((post) => post.slug !== currentSlug).slice(0, 3);
  $: headings = $page.data?.headings ?? [];
</script>

<svelte:head>
  <!-- Global meta tags that don't conflict with page-specific ones -->
  <meta name="author" content={siteConfig.author} />

  {#if siteConfig.analytics?.ga_id}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id={siteConfig.analytics.ga_id}"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', '{siteConfig.analytics.ga_id}');
    </script>
  {/if}

  {#if siteConfig.analytics?.gtag_id}
    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', '{siteConfig.analytics.gtag_id}');
    </script>
  {/if}
</svelte:head>

<div class="app-container">
  {#if siteConfig.analytics?.gtag_id}
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id={siteConfig.analytics.gtag_id}"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
        title="Google Tag Manager"
      ></iframe>
    </noscript>
  {/if}

  <div class="main-wrapper">
    <div class="content-area">
      <Topbar />

      <div class="content-wrapper" class:has-sidebar={isPostPage}>
        {#if isPostPage}
          <aside aria-label="Panel" class="sidebar-panel">
            <div class="panel-recent">
              <RecentlyUpdated {recentPosts} />
            </div>

            <div class="panel-toc-sticky">
              <TOC {headings} />
            </div>
          </aside>
        {/if}

        <main aria-label="Main Content" class="main-content" class:full-width={!isPostPage}>
          <slot />
        </main>
      </div>

      <Footer {theme} {toggleTheme} />
    </div>
  </div>
</div>
