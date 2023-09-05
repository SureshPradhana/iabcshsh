// blogPosts.ts
import { BlogPost } from './models.ts';

const blogPosts: BlogPost[] = [];

// export function createPost(post: BlogPost): void {
//   post.id = blogPosts.length + 1;
//   post.createdAt = new Date();
//   blogPosts.push(post);
// }

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}