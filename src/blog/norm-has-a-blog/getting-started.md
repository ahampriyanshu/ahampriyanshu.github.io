---
title: Getting Started
description: Learn how to install, configure, and deploy your SvelteKit blog in minutes. Complete setup guide with customization tips and deployment options.
date: '2025-11-02'
tags:
  - guide
  - setup
  - getting-started
  - tutorial
categories:
  - "Norm Has A Blog"
pin: true
---

**norm-has-a-blog** is a simple, static, and zero config blog built with SvelteKit. It's designed for developers who want to save and share the stuff they're discovering.(but can be used by anyone for anything)

## Features

This blog comes packed with powerful features out of the box:

- **Modern Stack**: Built with [SvelteKit 2.0](https://svelte.dev/) and [Vite](https://vite.dev/) for blazing-fast performance
- **Markdown Support**: Write posts in Markdown(GFM is also supported) with [MDSveX](https://mdsvex.pngwn.io/).
- **Syntax Highlighting**: Beautiful code blocks powered by [Shiki](https://shiki.matsu.io/).
- **Math Equations**: Full support for LaTeX/KaTeX mathematical expressions powered by [MathJax](https://www.mathjax.org/).
- **Static Site Generation**: Deploy anywhere with zero runtime dependencies(and zero cost).
- **Table of Contents**: Interactive table of contents for easy navigation.
- **Responsive Design**: Looks great on all devices.
- **Dark/Light Theme**: Built-in theme support.
- **SEO Friendly**: RSS/Atom feeds, sitemap, OG tags and canonical URLs.
- **Tags & Categories**: Organize posts with hierarchical categories and tags.
- **Featured Posts**: Pin important posts to the homepage.
- **Enhanced Footer**: Customizable footer with projects, blogs, and social links.
- **Archives**: Browse posts by date.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** or **pnpm** (or any other package manager)
- **Git** 
- A code editor.

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/ahampriyanshu/norm-has-a-blog.git
cd norm-has-a-blog
```

### 2. Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install all dependencies including SvelteKit, MDSveX, Shiki, and other required packages.

### 3. Start the Development Server

Launch the development server to see your blog in action:

```bash
npm run dev
```

Your blog should now be running at `http://localhost:5173`. The development server supports hot module replacement (HMR), so any changes you make will be reflected instantly.

## Project Structure

Understanding the project structure will help you customize and extend your blog:

```
norm-has-a-blog/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable Svelte components
│   │   ├── layouts/        # Page and post layouts
│   │   ├── styles/         # Global SCSS stylesheets
│   │   ├── utils/          # Utility functions
│   │   └── config.ts       # Blog configuration
│   ├── blog/               # Your markdown articles
│   ├── routes/             # SvelteKit routes
│   │   ├── +page.svelte    # Homepage
│   │   ├── blog/           # Blog post routes
│   │   ├── tags/           # Tag listing and filtering
│   │   ├── categories/     # Category pages
│   │   ├── archives/       # Archive page
│   │   └── api/            # API endpoints (RSS, sitemap)
│   └── app.html            # HTML template
├── static/                 # Static assets
│   ├── images/             # Images for blog posts
│   ├── user.jpg            # Your profile image
│   ├── logo.png            # Your logo for footer
│   └── assets/             # CSS, fonts, etc.
├── svelte.config.js        # Svelte/Kit configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## Configuration

### Basic Configuration

The main configuration file is located at `src/lib/config.ts`. This is where you'll customize your blog:

```typescript:src/lib/config.ts
export const siteConfig = {
  title: 'Your Blog Title',
  description: 'Your blog description',
  author: 'Your Name',
  designation: 'Your Role/Designation',
  bio: [
    'First paragraph of your bio...',
    'Second paragraph...',
    'Third paragraph...'
  ],
  baseURL: 'https://yourdomain.com',
  subPath: '',  // Leave empty for root domain, or '/blog' for subdirectory
  githubUsername: 'yourusername',
  githubRepo: 'your-repo',
  twitterHandle: 'yourhandle',
  lang: 'en',
  timezone: 'America/New_York',
  theme: 'dark',  // 'dark' or 'light'
  contact: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    resume: 'https://yourresume.com',
    twitter: 'https://twitter.com/yourhandle',
    email: 'mailto:your@email.com'
  },
  footerLinks: {
    projects: [
      { name: 'Project 1', url: 'https://github.com/...' }
    ],
    blogs: [
      { name: 'Blog 1', url: 'https://...' }
    ],
    personal: [
      { name: 'Bookshelf', url: 'https://...' }
    ]
  }
  // ... more configuration options
};
```

### Important Settings to Update

1. **Personal Information**
   - `title`: Your blog's title
   - `author`: Your name
   - `designation`: Your job title or role
   - `bio`: Array of paragraphs for the homepage bio section
   - `description`: A brief description of your blog

2. **URLs and Paths**
   - `baseURL`: Your production domain
   - `subPath`: Subdirectory path if not deploying to root

3. **Social Links**
   - Update `contact` object with your social media profiles (GitHub, LinkedIn, Resume, Twitter, Email)
   - Set your `githubUsername` and `twitterHandle`

4. **Footer Links**
   - `footerLinks.projects`: Add your projects with name and URL
   - `footerLinks.blogs`: Link to other blogs you maintain
   - `footerLinks.personal`: Personal links like playlists, bookshelf, etc.

5. **Navigation**
   - Customize `navItems` to add/remove navigation links

6. **Analytics** (Optional)
   - Add your Google Analytics tracking IDs

### Customizing the Base Path

If you're deploying to a subdirectory (like GitHub Pages at `username.github.io/blog`), update the `basePath` in `svelte.config.js`:

```javascript:svelte.config.js
const basePath = '/your-subdirectory';
```

And also update `subPath` in `src/lib/config.ts` to match.

## Writing Your First Post

Create a new markdown file in the `src/blog/` directory:

```bash
touch src/blog/my-first-post.md
```

Add frontmatter and content:

```markdown
---
title: My First Blog Post
description: This is my first post on my new blog
date: '2025-11-02'
tags:
  - introduction
  - first-post
categories:
  - General
pin: true
---

## Hello World!

This is my first blog post. I'm excited to start writing!
```

> **Tip**: Set `pin: true` to feature this post on your homepage!

For a detailed guide on writing posts, see the [Adding New Post](./adding-new-post) guide.

## Building for Production

When you're ready to deploy your blog, create a production build:

```bash
npm run build
```

This generates optimized static files in the `build/` directory. The build process:

1. Pre-renders all pages for optimal performance
2. Optimizes and minifies JavaScript and CSS
3. Generates sitemap, RSS, and Atom feeds
4. Creates optimized images and assets

### Preview the Build

Test your production build locally:

```bash
npm run preview
```

## Deployment

Your blog is a static site and can be deployed anywhere. Here are some popular options:

### GitHub Pages (Recommended)

1. Make sure [githup pages is configured](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) for your account.
2. Push the changes to origin.
3. Enable GitHub Pages in repository settings.
4. The [Deploy to GitHub Pages / build (push)](https://github.com/ahampriyanshu/norm-has-a-blog/actions/workflows/deploy.yml) workflow will automatically build and deploy your site to GitHub Pages.


### Netlify

1. **Connect Your Repository** on Netlify dashboard
2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `build`

3. Deploy!

### Cloudflare Pages

1. **Connect Your Repository** on Cloudflare Pages
2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Build output directory: `build`


## Customizing Your Blog

### Homepage

The homepage displays:
- **Profile Image**: Place your image at `static/user.jpg` (displayed as a 200x250px rounded image)
- **Hero Section**: Shows your bio from `config.ts`
- **Featured Posts**: Displays posts with `pin: true` in their frontmatter

### Footer

The footer is enhanced with:
- **Profile Section**: Shows your logo (`static/logo.png`), name, and designation
- **Social Icons**: Links to GitHub, LinkedIn, Resume, and Twitter
- **Three Sections**: Customizable links for Projects, Blogs, and Personal
- **Subscribe Button**: Links to your RSS feed
- **Scroll to Top**: Smooth scroll functionality

### Styles

The blog uses SCSS for styling. Main styles are located in:

- **Global Styles**: `src/lib/styles/louie.scss` contains design tokens (colors, spacing, borders), CSS resets, and global prose styles

#### Key Design Tokens

```scss
// Colors (automatically switch between light/dark themes)
--color-text-primary         // Primary text color
--color-text-secondary       // Secondary/muted text
--color-background-primary   // Page background
--color-surface-primary      // Card/surface backgrounds
--color-surface-secondary    // Hover states
--color-link                 // Link color
--color-border-primary       // Border colors
--color-heading              // Heading text color
```

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
npm run dev -- --port 3000
```

### Build Errors

1. Clear the build cache:

```bash
rm -rf build .svelte-kit
npm run build
```

2. Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Image Paths Not Working

Ensure images are in the `static/images/` directory and referenced with `/images/` in markdown:

```markdown
![My Image](/images/my-image.png)
```

## Advanced Customization

### Reusable Components

The blog includes several reusable components you can leverage:

- **`Icon.svelte`**: Consistent SVG icons throughout the site (arrow-right, search, copy, check, github, linkedin, x-twitter, rss, moon, sun, arrow-up, etc.)
- **`BlogList.svelte`**: Displays a list of blog posts with dates
- **`IndexList.svelte`**: Dotted list view used for tags and categories pages
- **`CopyDropdown.svelte`**: Action dropdown with primary action and menu items

### Adding New Icons

To add a new icon, edit `src/lib/components/Icon.svelte`:

```typescript
const icons: Record<string, string> = {
  'my-icon': 'M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z',
  // ... other icons
};
```

Then use it anywhere:

```svelte
<Icon name="my-icon" size={16} />
```

## Next Steps

Now that you have your blog set up, here's what to do next:

1. **Customize Your Configuration** - Update `src/lib/config.ts` with your information
2. **Write Your First Post** - See the [Adding New Post](./adding-new-post) guide
3. **Explore Markdown Features** - Check out the [Markdown Syntax Guide](./markdown-syntax-guide)

Happy blogging! 🚀
