<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Item from "../../components/Item.svelte";

  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="mb-6">
  {#each posts as post}
    <Item {post} />
  {/each}
</div>
