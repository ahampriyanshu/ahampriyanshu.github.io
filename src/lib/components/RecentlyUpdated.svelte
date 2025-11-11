<script lang="ts">
  import { base } from '$app/paths';
  import type { PostMetadata } from '$lib/utils/posts';

  export let recentPosts: PostMetadata[] = [];
</script>

{#if recentPosts.length > 0}
  <div class="recently-updated">
    <h3 class="panel-heading">Recent Articles</h3>
    <ul class="post-list">
      {#each recentPosts as post}
        <li>
          <a href="{base}/blog/{post.slug}" class="post-link">
            {post.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style lang="scss">
  .recently-updated {
    .panel-heading {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      padding-bottom: 0.5rem;
      color: var(--color-heading);
    }

    .post-list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.75rem;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .post-link {
        display: block;
        color: var(--color-muted);
        text-decoration: none;
        font-size: 0.875rem;
        line-height: 1.5;
        padding: 0.25rem 0;
        transition: color 0.2s ease;

        &:hover {
          color: var(--color-link);
        }
      }
    }
  }
</style>
