<script lang="ts">
  import { base } from '$app/paths';
  import { siteConfig } from '$lib/config';
  import Icon from '$lib/components/Icon.svelte';

  export let theme: string = 'light';
  export let toggleTheme: () => void;

  let themeToggleIcon: 'sun' | 'moon' = 'moon';
  $: themeToggleIcon = theme === 'dark' ? 'sun' : 'moon';

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer class="site-footer">
  <div class="footer-enhanced">
    <div class="footer-main">
      <div class="footer-left">
        <div class="profile-image-wrapper">
          <a
            href={siteConfig.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            class="profile-link-image"
          >
            <div class="profile-image">
              <img src="{base}/logo.png" alt={siteConfig.author} />
            </div>
          </a>
        </div>

        <div class="profile-info">
          <a
            href={siteConfig.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            class="profile-link-text"
          >
            <h3 class="profile-name">{siteConfig.author}</h3>
            <p class="profile-title">{siteConfig.designation}</p>
          </a>

          <div class="social-icons">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="GitHub"
            >
              <Icon name="github" size={18} />
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" size={18} />
            </a>
            <a
              href={siteConfig.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="Resume"
            >
              <Icon name="file-text" size={18} />
            </a>

            <a
              href={siteConfig.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="X (Twitter)"
            >
              <Icon name="x" size={18} />
            </a>
          </div>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-section">
          <h4 class="footer-section-title">Projects</h4>
          <ul class="footer-links">
            {#each siteConfig.footerLinks.projects as link}
              <li>
                <a href={link.url} class="footer-link">
                  {link.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-section-title">Posts</h4>
          <ul class="footer-links">
            {#each siteConfig.footerLinks.blogs as link}
              <li>
                <a href={link.url} class="footer-link">
                  {link.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-section-title">Personal</h4>
          <ul class="footer-links">
            {#each siteConfig.footerLinks.personal as link}
              <li>
                <a
                  href={link.url}
                  class="footer-link"
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-divider" aria-hidden="true"></div>
  <div class="footer-content">
    <div class="footer-credits">
      <p class="footer-credits-norm">
        Made with
        <a href="https://github.com/ahampriyanshu/norm-has-a-blog" target="_blank" rel="noopener">
          <strong>norm-has-a-blog</strong>
        </a>
      </p>
    </div>
    <div class="footer-actions">
      <a href="{base}/rss.xml" class="subscribe-link" aria-label="Subscribe to RSS feed">
        <Icon name="rss" size={16} />
        <span>Subscribe</span>
      </a>
      <button
        type="button"
        class="theme-toggle"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        on:click={toggleTheme}
      >
        <Icon name={themeToggleIcon} size={16} />
      </button>
      <button class="scroll-to-top" on:click={scrollToTop} aria-label="Scroll to top">
        <Icon name="arrow-up" size={16} />
      </button>
    </div>
  </div>
</footer>

<style lang="scss">
  .site-footer {
    margin-top: auto;
    padding-top: var(--spacing-4);
    margin-bottom: var(--spacing-4);
    border-top: 1px solid var(--color-border-primary);
  }

  .footer-divider {
    height: 1px;
    background: var(--color-border-primary);
    opacity: 0.6;
    margin-bottom: var(--spacing-6);
  }

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-4);
    flex-wrap: wrap;
    color: var(--color-muted);
    font-size: 0.9rem;

    p {
      margin: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s ease;
      font-weight: 600;

      &:hover {
        color: var(--color-link);
      }
    }

    strong {
      font-weight: 600;
      color: var(--color-text-primary);
      font-size: 0.85rem;
    }
  }

  .footer-credits {
    text-align: right;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
  }

  .subscribe-link {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-1);
    padding: var(--spacing-2);
    background: transparent;
    font-size: 0.875rem;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      color: var(--color-link);
    }

    span {
      font-weight: 400;
    }
  }

  .theme-toggle {
    background: none;
    border: none;
    color: var(--color-muted);
    cursor: pointer;
    padding: var(--spacing-2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-link);
    }
  }

  .scroll-to-top {
    background: none;
    border: none;
    color: var(--color-muted);
    cursor: pointer;
    padding: var(--spacing-2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-link);
    }
  }

  .footer-enhanced {
    padding: 0 0 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4rem;
    padding: 0 1rem;
    margin-top: 2rem;

    @media (max-width: 968px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  .footer-left {
    flex: 0 0 auto;
    max-width: 500px;
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .profile-link-image,
  .profile-link-text {
    text-decoration: none;
    color: inherit;
  }

  .profile-image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }

  .profile-image {
    flex-shrink: 0;

    img {
      width: 120px;
      height: 120px;
      border-radius: 12px;
      object-fit: cover;
      display: block;
      transition: box-shadow 0.2s ease-in-out;

      &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      }
    }
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 0.25rem;
  }

  .profile-name {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-heading);
    line-height: 1.2;
    font-family:
      'Lato',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;
  }

  .profile-title {
    font-size: 0.95rem;
    color: var(--color-muted);
    margin: 0 0 var(--spacing-1) 0;
    line-height: 1.4;
  }

  .social-icons {
    display: flex;
    gap: var(--spacing-3);
    flex-wrap: wrap;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-muted);
    transition: color 0.2s ease;

    :global(.icon) {
      color: currentColor;
    }

    &:hover {
      color: var(--color-link);
    }
  }

  .footer-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 4rem;

    @media (max-width: 968px) {
      justify-content: flex-start;
      gap: 2rem;
    }

    @media (max-width: 640px) {
      flex-wrap: wrap;
      gap: 2rem 0.5rem;
    }
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 150px;
    flex: 0 1 auto;

    @media (max-width: 640px) {
      flex: 0 1 calc(50% - 0.75rem);
      min-width: 120px;
    }

    @media (max-width: 400px) {
      flex: 0 1 100%;
    }
  }

  .footer-section-title {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: var(--color-text);
    margin: 0 0 0.5rem 0;
    font-family:
      'Lato',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li {
      margin: 0;
    }
  }

  .footer-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    font-size: 0.875rem;
    color: var(--color-text-primary);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-link);
    }

    :global(.icon) {
      color: var(--color-muted);
      flex-shrink: 0;
    }
  }

  @media (max-width: 768px) {
    .footer-enhanced {
      padding: 0rem 0 1.5rem;
    }

    .footer-main {
      gap: 2rem;
      padding: 0;
    }
  }

  @media (max-width: 640px) {
    .footer-content {
      gap: 0.5rem;
      font-size: 0.8rem;

      strong {
        font-size: 0.75rem;
      }
    }

    .footer-credits {
      text-align: left;
    }

    .subscribe-link span {
      display: none;
    }

    .footer-main {
      gap: 1.5rem;
    }
  }

  @media (max-width: 576px) {
    .footer-content {
      gap: 0.5rem;
      font-size: 0.75rem;

      strong {
        font-size: 0.7rem;
      }
    }

    .subscribe-link span {
      display: none;
    }

    .theme-toggle {
      padding: 0.375rem;
    }
  }
</style>
