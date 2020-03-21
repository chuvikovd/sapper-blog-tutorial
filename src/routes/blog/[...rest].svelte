<script context="module">
  import { getParams } from "../../utils.js";

  export async function preload({ params, query }) {
    const { rest } = params;
    const { category, page } = getParams(params);

    if (!rest.length) return this.error(404);

    const res = await this.fetch(`blog/${rest.join("/")}.json`);
    const { posts, hasMore } = await res.json();

    if (res.status === 200) {
      return { posts, page, hasMore };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Item from "../../components/Item.svelte";
  import Pagination from "../../components/Pagination.svelte";

  export let posts, page, hasMore;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="mb-6">
  {#each posts as post}
    <Item {post} />
  {/each}
</div>

<Pagination
  prevLink={hasMore ? `blog/page/${Number(page) + 1}` : null}
  nextLink={page > 1 ? `blog/page/${Number(page) - 1}` : null} />
