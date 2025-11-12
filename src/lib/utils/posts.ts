export interface Post {
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags?: string[];
  categories?: string[];
  pin?: boolean;
  math?: boolean;
  mermaid?: boolean;
  image?: string;
  slug: string;
  content?: string;
}

export interface CommitInfo {
  hash: string;
  message: string;
  date: string;
  url: string;
}

export interface PostMetadata extends Post {
  readingTime: string;
  commitInfo?: CommitInfo;
}

// Type for Svelte component default export
interface SvelteComponent {
  render?: () => {
    html: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

// Type for markdown module imports
interface MarkdownModule {
  metadata: Post;
  default: SvelteComponent;
}

export async function getPosts(): Promise<PostMetadata[]> {
  const blogFiles = import.meta.glob('/src/blog/**/*.md');
  const posts: PostMetadata[] = [];

  for (const path in blogFiles) {
    try {
      const post = (await blogFiles[path]()) as MarkdownModule;
      const metadata = post.metadata;

      if (metadata && metadata.title && metadata.date && metadata.description) {
        // Keep the full path including subfolders for the slug
        const slug = path.replace('/src/blog/', '').replace('.md', '');

        let readingTime = '5 min read';

        try {
          const html = post.default?.render?.()?.html;
          if (html) {
            readingTime = calculateReadingTime(html);
          }
        } catch (e) {
          console.warn(`Failed to calculate reading time for ${path}:`, e);
        }

        posts.push({
          ...metadata,
          slug,
          readingTime
        });
      } else if (metadata && !metadata.description) {
        console.warn(`Post at ${path} is missing required description field`);
      }
    } catch (error) {
      console.error(`Error loading post from ${path}:`, error);
    }
  }

  return posts.sort((a, b) => {
    if (a.pin && !b.pin) return -1;
    if (!a.pin && b.pin) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPost(
  slug: string
): Promise<{ metadata: PostMetadata; content: SvelteComponent } | null> {
  try {
    // Use glob import to support nested paths
    const blogFiles = import.meta.glob('/src/blog/**/*.md');
    const postPath = `/src/blog/${slug}.md`;

    if (!blogFiles[postPath]) {
      return null;
    }

    const post = (await blogFiles[postPath]()) as MarkdownModule;

    if (!post.metadata.description) {
      console.error(`Post ${slug} is missing required description field`);
      return null;
    }

    let readingTime = '5 min read';

    try {
      const html = post.default?.render?.()?.html;
      if (html) {
        readingTime = calculateReadingTime(html);
      }
    } catch (e) {
      console.warn(`Failed to calculate reading time for ${slug}:`, e);
    }

    return {
      metadata: {
        ...post.metadata,
        slug,
        readingTime
      },
      content: post.default
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export async function getTags(): Promise<Map<string, number>> {
  const posts = await getPosts();
  const tags = new Map<string, number>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags.set(tag, (tags.get(tag) || 0) + 1);
    });
  });

  return tags;
}

export async function getPostsByTag(tag: string): Promise<PostMetadata[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.tags?.includes(tag));
}

export async function getCategories(): Promise<Map<string, Map<string, number>>> {
  const posts = await getPosts();
  const categories = new Map<string, Map<string, number>>();

  posts.forEach((post) => {
    post.categories?.forEach((category) => {
      const parts = category.split('/').map((part) => part.trim());
      const mainCategory = parts[0];
      const subCategory = parts.length > 1 ? parts[1] : null;

      if (!categories.has(mainCategory)) {
        categories.set(mainCategory, new Map());
      }

      const subCategoryMap = categories.get(mainCategory)!;
      if (subCategory) {
        subCategoryMap.set(subCategory, (subCategoryMap.get(subCategory) || 0) + 1);
      } else {
        // Count for main category without subcategory
        subCategoryMap.set('_main', (subCategoryMap.get('_main') || 0) + 1);
      }
    });
  });

  return categories;
}

export async function getPostsByCategory(category: string): Promise<PostMetadata[]> {
  const posts = await getPosts();
  return posts.filter((post) =>
    post.categories?.some((cat) => {
      const mainCategory = cat.split('/')[0].trim();
      return mainCategory.toLowerCase() === category.toLowerCase();
    })
  );
}

export async function getPostsBySubcategory(
  category: string,
  subcategory: string
): Promise<PostMetadata[]> {
  const posts = await getPosts();
  return posts.filter((post) =>
    post.categories?.some((cat) => {
      const parts = cat.split('/').map((part) => part.trim());
      if (parts.length < 2) return false;
      return (
        parts[0].toLowerCase() === category.toLowerCase() &&
        parts[1].toLowerCase() === subcategory.toLowerCase()
      );
    })
  );
}

function calculateReadingTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, '');
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export async function getArchives(): Promise<Map<string, PostMetadata[]>> {
  const posts = await getPosts();
  const archives = new Map<string, PostMetadata[]>();

  posts.forEach((post) => {
    const date = new Date(post.date);
    const year = date.getFullYear().toString();

    if (!archives.has(year)) {
      archives.set(year, []);
    }

    archives.get(year)!.push(post);
  });

  return archives;
}

export async function getLatestCommit(
  filePath: string,
  githubUsername: string,
  githubRepo: string
): Promise<CommitInfo | null> {
  try {
    if (typeof window !== 'undefined') {
      return null;
    }

    const { execSync } = await import('child_process');

    const gitLog = execSync(`git log -1 --pretty=format:"%H|%s|%aI" -- "${filePath}"`, {
      encoding: 'utf-8',
      cwd: process.cwd()
    }).trim();

    if (!gitLog) {
      return null;
    }

    const [hash, message, date] = gitLog.split('|');

    return {
      hash: hash.substring(0, 7),
      message,
      date,
      url: `https://github.com/${githubUsername}/${githubRepo}/commit/${hash}`
    };
  } catch (error) {
    console.warn(`Failed to get git commit info for ${filePath}:`, error);
    return null;
  }
}
