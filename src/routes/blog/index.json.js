import posts from "./_posts.js";
import { POSTS_PER_PAGE } from "../../utils.js";

export function get(req, res) {
  const paginated = posts.slice(0, POSTS_PER_PAGE);

  const mapped = paginated.map(post => ({
    title: post.title,
    slug: post.slug,
    created: post.created,
    excerpt: post.excerpt,
    categories: post.categories
  }));

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(
    JSON.stringify({
      posts: mapped,
      hasMore: posts.length > POSTS_PER_PAGE
    })
  );
}
