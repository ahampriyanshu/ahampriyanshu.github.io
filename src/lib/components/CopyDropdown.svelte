<script context="module" lang="ts">
  export type DropdownAction = {
    label: string;
    icon?: string;
    ariaLabel?: string;
    onClick?: () => void | Promise<void>;
    href?: string;
    target?: string;
    rel?: string;
  };
</script>

<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { onMount } from 'svelte';

  export let primaryAction: DropdownAction;
  export let dropdownItems: DropdownAction[] = [];
  export let dropdownAriaLabel = 'More options';

  let dropdownOpen = false;
  let dropdownButton: HTMLDivElement | null = null;

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  async function handleAction(action: DropdownAction, closeAfter = false) {
    if (action.onClick) {
      await action.onClick();
    }

    if (closeAfter) {
      dropdownOpen = false;
    }
  }

  onMount(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownOpen && dropdownButton && !dropdownButton.contains(event.target as Node)) {
        dropdownOpen = false;
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<div class="copy-dropdown-container" bind:this={dropdownButton}>
  <div class="copy-dropdown-wrapper">
    {#if primaryAction.href}
      <a
        class="action-btn copy-btn"
        href={primaryAction.href}
        target={primaryAction.target}
        rel={primaryAction.rel}
        aria-label={primaryAction.ariaLabel ?? primaryAction.label}
        on:click={() => handleAction(primaryAction)}
      >
        {#if primaryAction.icon}
          <Icon name={primaryAction.icon} size={16} />
        {/if}
        <span>{primaryAction.label}</span>
      </a>
    {:else}
      <button
        type="button"
        class="action-btn copy-btn"
        on:click={() => handleAction(primaryAction)}
        aria-label={primaryAction.ariaLabel ?? primaryAction.label}
      >
        {#if primaryAction.icon}
          <Icon name={primaryAction.icon} size={16} />
        {/if}
        <span>{primaryAction.label}</span>
      </button>
    {/if}
    {#if dropdownItems.length > 0}
      <button
        type="button"
        class="action-btn copy-dropdown-arrow"
        on:click={toggleDropdown}
        aria-label={dropdownAriaLabel}
      >
        <Icon name="chevron-down" size={16} />
      </button>
    {/if}
  </div>
  {#if dropdownOpen && dropdownItems.length > 0}
    <div
      class="dropdown-menu"
      role="menu"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      {#each dropdownItems as item (item.label)}
        {#if item.href}
          <a
            class="dropdown-item"
            href={item.href}
            target={item.target}
            rel={item.rel}
            aria-label={item.ariaLabel ?? item.label}
            on:click={() => handleAction(item, true)}
          >
            {#if item.icon}
              <Icon name={item.icon} size={14} />
            {/if}
            <span>{item.label}</span>
          </a>
        {:else}
          <button
            type="button"
            class="dropdown-item"
            on:click={() => handleAction(item, true)}
            aria-label={item.ariaLabel ?? item.label}
          >
            {#if item.icon}
              <Icon name={item.icon} size={14} />
            {/if}
            <span>{item.label}</span>
          </button>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .copy-dropdown-container {
    display: inline-flex;
    position: relative;
  }

  .copy-dropdown-wrapper {
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--color-border-primary);
    border-radius: var(--radius-md);
    background: var(--color-surface-secondary);
    overflow: hidden;
  }

  :global(:root[data-mode='dark']) .copy-dropdown-wrapper {
    background: var(--color-surface-hover);
    border: 1px solid var(--color-border-secondary);

    :global(.copy-btn) {
      border-right: 1px solid var(--color-border-secondary);
    }
  }

  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-2) var(--spacing-3);
    border: none;
    border-radius: 0;
    background: transparent;
    color: var(--color-text-primary);
    cursor: pointer;
    transition: background-color 0.2s ease;
    text-decoration: none;
    font-size: 0.875rem;
    gap: var(--spacing-2);
    white-space: nowrap;
    font-weight: 500;

    &:hover {
      background: var(--color-surface-hover);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;

      &:hover {
        background: transparent;
      }
    }

    :global(.icon) {
      flex-shrink: 0;
      color: inherit;
    }
  }

  .copy-btn {
    position: relative;
    border: none;
    border-radius: 0;
    border-right: 1px solid var(--color-border-primary);
    padding: var(--spacing-2) var(--spacing-3);
    display: flex;
    align-items: center;
    line-height: 1.2;
    text-decoration: none;
    color: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: background-color 0.2s ease;
    min-width: 110px;

    span {
      display: inline-block;
      margin-left: var(--spacing-2);
      font-weight: inherit;
      min-width: 70px;
    }

    &:hover {
      background: var(--color-surface-hover);
    }
  }

  .copy-dropdown-arrow {
    border: none;
    border-radius: 0;
    padding: var(--spacing-2);
    min-width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: inherit;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background: var(--color-surface-hover);
    }
  }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + var(--spacing-1));
    right: 0;
    background: var(--color-surface-primary);
    border: 1px solid var(--color-border-primary);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    min-width: 168px;
    z-index: 100;
    overflow: hidden;
    display: block;
  }

  :global(:root[data-mode='dark']) .dropdown-menu {
    background: var(--color-surface-hover);
    border: 1px solid var(--color-border-secondary);
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    width: 100%;
    padding: var(--spacing-3) var(--spacing-4);
    border: none;
    background: none;
    color: var(--color-text-primary);
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s ease;
    font-size: 0.875rem;
    text-align: left;
    font-weight: 500;

    &:hover {
      background: var(--color-surface-secondary);
    }

    :global(.icon) {
      color: var(--color-text-secondary);
    }
  }

  :global(:root[data-mode='dark']) .dropdown-item {
    color: var(--color-text-primary);

    &:hover {
      opacity: 0.9;
    }

    :global(.icon) {
      color: var(--color-text-tertiary);
    }
  }

  @media (max-width: 768px) {
    .copy-dropdown-wrapper {
      .action-btn,
      .copy-btn {
        padding: 0.4rem 0.65rem;
        font-size: 0.8125rem;
      }

      .copy-dropdown-arrow {
        padding: 0.4rem;
        min-width: 32px;
      }
    }
  }
</style>
