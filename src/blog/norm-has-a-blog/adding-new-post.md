---
title: Adding New Post
description: Step-by-step guide to writing and publishing articles. Learn frontmatter, markdown features, best practices, and troubleshooting tips.
date: '2025-11-02'
tags:
  - writing
  - guide
  - tutorial
categories:
  - "Norm Has A Blog"
---

Writing a new blog post is simple and straightforward. This guide will walk you through the entire process, from creating a markdown file to publishing your post.

## Create a New Markdown File

Navigate to the `src/blog/` directory and create a new markdown file. 

```bash
cd src/blog
touch my-awesome-post.md
```

> **Note**: The filename will be used as the URL slug for your post. Keep it concise but descriptive.

### Organizing Posts with Subfolders

You can organize similar articles by placing them in subfolders. The subfolder path will be included in the URL:

```bash
mkdir src/blog/web-development
touch src/blog/web-development/intro-to-sveltekit.md
```

This will generate the URL: `/blog/web-development/intro-to-sveltekit`

**Example folder structure:**
```
src/blog/
├── getting-started.md                    → /blog/getting-started
├── web-development/
│   ├── intro-to-sveltekit.md            → /blog/web-development/intro-to-sveltekit
│   └── advanced-routing.md              → /blog/web-development/advanced-routing
└── tutorials/
    ├── authentication.md                 → /blog/tutorials/authentication
    └── deployment.md                     → /blog/tutorials/deployment
```

This helps keep related content organized while maintaining clean, hierarchical URLs. 

## Add Frontmatter

Every post requires YAML frontmatter at the top of the file. This contains metadata about your post:

```markdown
---
title: Your Post Title
description: A brief description of your post
date: '2025-11-02'
tags:
  - tag1
  - tag2
categories:
  - Some Category
---
```

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Post title (displayed everywhere) | `"Introduction to SvelteKit"` |
| `description` | Brief summary (used for SEO and previews) | `"Learn the basics of SvelteKit"` |
| `date` | Publication date in YYYY-MM-DD format | `'2025-11-02'` |
| `tags` | Array of tags (at least one recommended) | `[javascript, tutorial]` |
| `categories` | Array of categories (with optional subcategories) | `[Backend Development]` |

### Optional Fields

| Field | Description | Default |
|-------|-------------|---------|
| `math` | Enable math equation rendering | `false` |
| `pin` | Pin post to homepage as featured | `false` |

> **Note**: Posts with `pin: true` will appear in the "Featured Posts" section on the homepage.

### Categories

Categories help organize your posts hierarchically. You can use:

- **Main categories only**: `Technology`, `Tutorial`
- **Categories with subcategories**: `Technology/Web Development`, `Documentation/Installation`

Format subcategories using a forward slash (`/`). For example:
- `Technology/Web Development`
- `Documentation/Content Creation`
- `Programming/JavaScript`

Posts with categories will be accessible via:
- Main category page: `/categories/technology`
- Subcategory page: `/categories/technology/web-development`
- All categories: `/categories`

## Write Your Content

After the frontmatter, write your post content using markdown. Here's a complete example:

```markdown
---
title: Getting Started with TypeScript
description: A beginner-friendly introduction to TypeScript
date: '2025-11-02'
tags:
  - typescript
  - javascript
  - beginners
---

## Introduction

TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. In this guide, we'll explore the basics.

## Why TypeScript?

Here are the main benefits:

1. **Type Safety** - Catch errors at compile time
2. **Better IDE Support** - Autocomplete and IntelliSense
3. **Improved Refactoring** - Rename and refactor with confidence
4. **Modern JavaScript** - Use latest ECMAScript features

## Basic Types

TypeScript provides several basic types:

```typescript:types.ts
// String
let name: string = "John Doe";

// Number
let age: number = 30;

// Boolean
let isActive: boolean = true;

// Array
let tags: string[] = ["typescript", "javascript"];
```

## Preview Your Post

Start the development server if it's not already running:

```bash
npm run dev
```

Navigate to `http://localhost:5173` in your browser.

Happy writing! ✍️
