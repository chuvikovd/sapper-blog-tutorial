export const POSTS_PER_PAGE = 5;

export const getParams = params => {
  const { rest } = params;
  const category = rest[0] === "category" ? rest[1] : null;
  const page = rest.length === 4 ? rest[3] : category ? 1 : rest[1];

  return { category, page };
};
