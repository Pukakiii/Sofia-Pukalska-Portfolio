export type PostSummary = {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  image?: string;
  publishedAt?: string;
  updatedAt?: string;
  tags: string[];
  readingTime: string;
  draft: boolean;
  coAuthors?: string[];
  views?: number;
};

export type PostDetail = PostSummary & {
  content: string;
};

const PLACEHOLDER_POSTS: PostSummary[] = [
  {
    id: "placeholder-1",
    slug: "welcome",
    title: "[Blog post title — to be updated]",
    summary: "[Blog post summary — to be updated]",
    publishedAt: "2026-01-01",
    tags: ["[Tag — to be updated]"],
    readingTime: "3 min read",
    draft: false,
  },
];

const PLACEHOLDER_CONTENT: Record<string, string> = {
  welcome:
    "# [Blog post title — to be updated]\n\n[Blog content — to be updated. Add posts when SP_data.md is available.]",
};

export async function getPosts(limit?: number): Promise<PostSummary[]> {
  const posts = PLACEHOLDER_POSTS;
  return limit ? posts.slice(0, limit) : posts;
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  const post = PLACEHOLDER_POSTS.find((p) => p.slug === slug);
  if (!post) return null;

  return {
    ...post,
    content: PLACEHOLDER_CONTENT[slug] ?? "",
  };
}
