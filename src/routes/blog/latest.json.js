import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.slice(0, 3).map(post => {
    return {
      title: post.title,
      slug: post.slug,
      created: post.created,
      excerpt: post.excerpt,
      categories: post.categories
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
