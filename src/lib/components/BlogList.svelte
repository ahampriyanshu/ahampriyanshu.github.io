<script lang="ts">
  import { base } from '$app/paths';
  import type { PostMetadata } from '$lib/utils/posts';
  import Icon from '$lib/components/Icon.svelte';

  export let posts: PostMetadata[];

  function formatDateSimple(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
</script>

<ul class="blog-list">
  {#each posts as post}
    <li class="blog-item">
      <time class="blog-date" datetime={post.date}>{formatDateSimple(post.date)}</time>
      <Icon name="arrow-right" size={16} className="blog-separator" />
      <a href="{base}/blog/{post.slug}" class="blog-link">
        {post.title}
      </a>
    </li>
  {/each}
</ul>

<style lang="scss">
  .blog-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .blog-item {
      display: flex;
      align-items: baseline;
      gap: 0.35rem;
      padding: 0.5rem 0;

      .blog-date {
        flex-shrink: 0;
        font-size: 0.9rem;
        color: var(--color-muted);
        min-width: 4.5rem;
      }

      :global(.blog-separator) {
        flex-shrink: 0;
        color: var(--color-muted);
        align-self: center;
      }

      .blog-link {
        flex-grow: 1;
        color: var(--color-link);
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.2s ease;

        &:hover {
          color: var(--color-link-hover);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .blog-list {
      .blog-item {
        gap: 0.35rem;

        .blog-date {
          min-width: 4.5rem;
          font-size: 0.8rem;
        }

        .blog-link {
          font-size: 0.95rem;
        }
      }
    }
  }
</style>
