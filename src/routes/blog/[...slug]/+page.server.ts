import { getPost, getPosts, getLatestCommit } from '$lib/utils/posts';
import { siteConfig } from '$lib/config';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { readFileSync } from 'fs';
import { join } from 'path';

interface Heading {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractHeadingsFromMarkdown(markdown: string): Heading[] {
  const headings: Heading[] = [];
  let content = markdown.replace(/^---[\s\S]*?---\n/, '');
  content = content.replace(/```[\s\S]*?```/g, '');
  content = content.replace(/`[^`]+`/g, '');

  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();

    if (!text) continue;

    const id = slugify(text);

    headings.push({ id, text, level });
  }

  return headings;
}

export const load: PageServerLoad = async ({ params }) => {
  const slugPath = params.slug;
  const post = await getPost(slugPath);

  if (!post) {
    throw error(404, 'Post not found');
  }

  const filePath = `src/blog/${slugPath}.md`;
  const commitInfo = await getLatestCommit(
    filePath,
    siteConfig.githubUsername,
    siteConfig.githubRepo
  );

  const allPosts = await getPosts();
  const currentPost = allPosts.find((p) => p.slug === slugPath);

  if (!currentPost) {
    throw error(404, 'Post not found');
  }

  const currentCategories = currentPost.categories || [];
  const postsWithSameCategories = allPosts.filter((p) => {
    const postCategories = p.categories || [];
    return postCategories.some((cat) => currentCategories.includes(cat));
  });

  const postsToSearch = postsWithSameCategories.length > 1 ? postsWithSameCategories : allPosts;

  const currentIndex = postsToSearch.findIndex((p) => p.slug === slugPath);

  if (currentIndex < 0) {
    const fallbackPost = allPosts.find((p) => p.slug !== slugPath) || allPosts[0];
    return {
      metadata: {
        ...post.metadata,
        commitInfo
      },
      previousPost: { slug: fallbackPost.slug, title: fallbackPost.title },
      nextPost: { slug: fallbackPost.slug, title: fallbackPost.title },
      headings: [],
      siteConfig
    };
  }

  const previousIndex = currentIndex > 0 ? currentIndex - 1 : postsToSearch.length - 1;
  const nextIndex = currentIndex < postsToSearch.length - 1 ? currentIndex + 1 : 0;

  const previousPost = postsToSearch[previousIndex];
  const nextPost = postsToSearch[nextIndex];

  let headings: Heading[] = [];
  try {
    const markdownPath = join(process.cwd(), filePath);
    const markdownContent = readFileSync(markdownPath, 'utf-8');
    headings = extractHeadingsFromMarkdown(markdownContent);
  } catch (err) {
    console.warn('Failed to extract headings:', err);
  }

  return {
    metadata: {
      ...post.metadata,
      commitInfo
    },
    previousPost: { slug: previousPost.slug, title: previousPost.title },
    nextPost: { slug: nextPost.slug, title: nextPost.title },
    headings,
    siteConfig
  };
};

export const prerender = true;

export async function entries() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
