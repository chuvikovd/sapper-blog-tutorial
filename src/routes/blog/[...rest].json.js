import posts from "./_posts.js";
import { POSTS_PER_PAGE, getParams } from "../../utils.js";

export function get(req, res, next) {
  const { rest } = req.params;
  const { category, page } = getParams(req.params);

  if (rest.length !== 2 && rest.length !== 4) {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );

    return;
  }

  const filtered = posts.filter(({ categories }) =>
    category ? categories.includes(category) : true
  );

  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

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
      hasMore: filtered.length > page * POSTS_PER_PAGE
    })
  );
}
