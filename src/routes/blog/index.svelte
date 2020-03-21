<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(({ posts, hasMore }) => {
        return { posts, hasMore };
      });
  }
</script>

<script>
  import Item from "../../components/Item.svelte";
  import Pagination from "../../components/Pagination.svelte";

  export let posts, hasMore;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="mb-6">
  {#each posts as post}
    <Item {post} />
  {/each}
</div>

<Pagination prevLink={hasMore ? 'blog/page/2' : null} />
