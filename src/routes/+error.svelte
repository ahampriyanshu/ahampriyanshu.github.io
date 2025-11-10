<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Error | Page Not Found</title>
</svelte:head>

<div class="error-page">
  <div class="error-content">
    <h1>{$page.status}</h1>
    <h2>{$page.error?.message || 'Page Not Found'}</h2>
    <p>
      {#if $page.status === 404}
        The page you're looking for doesn't exist.
      {:else}
        An error occurred while processing your request.
      {/if}
    </p>
    <a href={base || '/'} class="btn btn-primary"> Go Home </a>
  </div>
</div>

<style lang="scss">
  .error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    text-align: center;

    .error-content {
      max-width: 600px;

      h1 {
        font-size: 8rem;
        font-weight: 700;
        margin: 0;
        color: var(--color-text-primary);
      }

      h2 {
        font-size: 2rem;
        margin: 1rem 0;
      }

      p {
        font-size: 1.125rem;
        color: var(--color-muted);
        margin-bottom: 2rem;
      }

      :global(.btn-primary) {
        display: inline-flex;
        align-items: center;
        padding: 0.75rem 1.5rem;
        background-color: var(--color-link);
        color: white;
        border: none;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: 500;
        transition: background-color 0.2s ease;

        &:hover {
          background-color: var(--color-link-hover);
        }
      }
    }
  }
</style>
