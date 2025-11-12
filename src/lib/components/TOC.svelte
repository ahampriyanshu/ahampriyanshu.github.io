<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  interface Heading {
    id: string;
    text: string;
    level: number;
  }

  interface HeadingGroup {
    h2: Heading;
    h2Index: number;
    children: Heading[];
    childIndices: number[];
  }

  export let headings: Heading[] = [];

  let activeId: string = '';
  let activeH2Id: string = '';
  let observer: IntersectionObserver | null = null;
  let visibleHeadings = new Set<string>();
  let scrollCleanup: (() => void) | null = null;

  function groupHeadingsByH2(allHeadings: Heading[]): HeadingGroup[] {
    const groups: HeadingGroup[] = [];
    let currentGroup: HeadingGroup | null = null;

    allHeadings.forEach((heading, index) => {
      if (heading.level === 2) {
        if (currentGroup) {
          groups.push(currentGroup);
        }
        currentGroup = {
          h2: heading,
          h2Index: index,
          children: [],
          childIndices: []
        };
      } else if (currentGroup && (heading.level === 3 || heading.level === 4)) {
        currentGroup.children.push(heading);
        currentGroup.childIndices.push(index);
      }
    });

    if (currentGroup) {
      groups.push(currentGroup);
    }

    return groups;
  }

  $: groupedHeadings = groupHeadingsByH2(headings);

  function findParentH2(headingId: string): string {
    if (groupedHeadings.length === 0) return '';

    for (const group of groupedHeadings) {
      if (group.h2.id === headingId) {
        return headingId;
      }
      if (group.children.some((child) => child.id === headingId)) {
        return group.h2.id;
      }
    }
    return '';
  }

  function updateActiveH2(headingId: string) {
    if (!headingId || groupedHeadings.length === 0) return;

    const parentH2 = findParentH2(headingId);
    if (parentH2 && parentH2 !== activeH2Id) {
      activeH2Id = parentH2;
    }
  }

  function setupObserver() {
    if (!browser || headings.length === 0) return;

    // Cleanup existing observer
    if (observer) {
      observer.disconnect();
      observer = null;
    }

    // Cleanup existing scroll listener
    if (scrollCleanup) {
      scrollCleanup();
      scrollCleanup = null;
    }

    // Reset state
    visibleHeadings.clear();
    activeId = '';
    activeH2Id = '';

    const observerOptions = {
      rootMargin: '-60% 0px 0px 0px',
      threshold: 0
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleHeadings.add(entry.target.id);
        } else {
          visibleHeadings.delete(entry.target.id);
        }
      });

      if (visibleHeadings.size > 0) {
        for (const heading of headings) {
          if (visibleHeadings.has(heading.id)) {
            activeId = heading.id;
            updateActiveH2(heading.id);
            break;
          }
        }
      }
    }, observerOptions);

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer?.observe(element);
      }
    });

    const handleScroll = () => {
      if (headings.length === 0 || groupedHeadings.length === 0) return;

      const scrollPosition = window.scrollY + window.innerHeight * 0.4;
      let foundHeading = false;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const element = document.getElementById(heading.id);
        if (element && element.offsetTop <= scrollPosition) {
          if (activeId !== heading.id) {
            activeId = heading.id;
            updateActiveH2(heading.id);
          }
          foundHeading = true;
          return;
        }
      }

      if (!foundHeading && headings.length > 0) {
        activeId = headings[0].id;
        updateActiveH2(headings[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    setTimeout(() => {
      handleScroll();
    }, 50);

    scrollCleanup = () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }

  // Re-setup observer when headings change
  $: if (browser && headings) {
    setTimeout(() => setupObserver(), 50);
  }

  onMount(() => {
    setupObserver();

    return () => {
      scrollCleanup?.();
    };
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  function scrollToHeading(id: string, event: MouseEvent) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      activeId = id;
      updateActiveH2(id);
    }
  }

  function getIndentClass(level: number): string {
    return `toc-h${level}`;
  }
</script>

<div class="toc-wrapper">
  <h3 class="panel-heading">On this page</h3>
  <nav id="toc" class="toc">
    {#if groupedHeadings.length > 0}
      <ul class="toc-list">
        {#each groupedHeadings as group (group.h2Index)}
          <li class="toc-item toc-h2" class:active={activeId === group.h2.id}>
            <a
              href="#{group.h2.id}"
              class="toc-link"
              class:active={activeId === group.h2.id}
              on:click={(e) => scrollToHeading(group.h2.id, e)}
            >
              {group.h2.text}
            </a>

            {#if group.children.length > 0}
              <ul class="toc-sublist" class:expanded={group.h2.id === activeH2Id}>
                {#each group.children as child, childIdx (group.childIndices[childIdx])}
                  <li
                    class="toc-item {getIndentClass(child.level)}"
                    class:active={activeId === child.id}
                  >
                    <a
                      href="#{child.id}"
                      class="toc-link"
                      class:active={activeId === child.id}
                      on:click={(e) => scrollToHeading(child.id, e)}
                    >
                      {child.text}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </nav>
</div>

<style lang="scss">
  .toc-wrapper {
    padding: 0;
    margin-bottom: 0;
  }

  .panel-heading {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    padding-bottom: 0.5rem;
    color: var(--color-heading);
  }

  .toc {
    :global(.toc-list) {
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 0.875rem;
      line-height: 1.6;
    }

    :global(.toc-item) {
      margin: 0;
      padding: 0;
      position: relative;

      &:global(.toc-h2) {
        margin-top: var(--spacing-3);

        &:first-child {
          margin-top: 0;
        }
      }

      &:global(.toc-h3) {
        padding-left: var(--spacing-4);
        margin-top: var(--spacing-1);
      }

      &:global(.toc-h4) {
        padding-left: var(--spacing-7);
        margin-top: var(--spacing-1);
        font-size: 0.8125rem;
      }
    }

    :global(.toc-item.active) {
      > :global(.toc-link) {
        color: var(--color-link);
        font-weight: 500;

        &::before {
          opacity: 1;
          transform: scaleY(1);
        }
      }
    }

    :global(.toc-link) {
      display: block;
      padding: var(--spacing-1) 0;
      padding-left: var(--spacing-3);
      color: var(--color-muted);
      text-decoration: none;
      transition: all 0.2s ease;
      position: relative;

      &:hover {
        color: var(--color-link);
      }
    }

    :global(.toc-link.active) {
      color: var(--color-link);
      background: var(--color-surface-hover);
      border-radius: var(--radius-sm);
    }

    :global(.toc-sublist) {
      list-style: none;
      padding: 0;
      margin: 0;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition:
        max-height 0.3s ease,
        opacity 0.3s ease,
        margin-top 0.3s ease;
    }

    :global(.toc-sublist.expanded) {
      max-height: 1000px;
      opacity: 1;
      margin-top: 0.25rem;
    }

    :global(.toc-sublist .toc-item.toc-h3) {
      padding-left: 1rem;
      margin-top: 0.25rem;
    }

    :global(.toc-sublist .toc-item.toc-h4) {
      padding-left: 2rem;
      margin-top: 0.25rem;
      font-size: 0.8125rem;
    }
  }
</style>
