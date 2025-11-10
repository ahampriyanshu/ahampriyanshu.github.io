<script lang="ts">
  export let items: Array<{ name: string; url: string; count: number }>;
</script>

<div class="index-list">
  {#each items as item}
    <a href={item.url} class="index-item">
      <span class="item-name">{item.name}</span>
      <span class="dots"></span>
      <span class="count">{item.count}</span>
    </a>
  {/each}
</div>

<style lang="scss">
  .index-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .index-item {
      display: flex;
      align-items: baseline;
      text-decoration: none;
      color: var(--color-text-primary);
      padding: 0.5rem 0;

      &:hover {
        .item-name {
          color: var(--color-link);
        }
        .count {
          color: var(--color-link);
        }
      }

      .item-name {
        flex-shrink: 0;
        font-weight: 500;
      }

      .dots {
        flex-grow: 1;
        background-image: radial-gradient(
          circle,
          var(--color-border-primary) 1.5px,
          transparent 1.5px
        );
        background-size: 8px 4px;
        background-position: 0 bottom;
        background-repeat: repeat-x;
        margin: 0 var(--spacing-4);
        min-width: 2rem;
        height: 0.8em;
      }

      .count {
        flex-shrink: 0;
        font-weight: 500;
        color: var(--color-text-secondary);
      }
    }
  }
</style>
