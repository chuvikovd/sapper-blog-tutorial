<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog/latest.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Item from "../components/Item.svelte"

  export let posts;
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="py-24">
  <h1 class="font-bold text-6xl mb-4">Hi.</h1>
  <p class="text-xl">
    I'm Blog. Today I show how to create a static Svelte blog using TailwindCSS.
    Check out my page to learn this and other interesting stuff.
  </p>
</div>

<div class="border-b border-black flex justify-between items-center pb-2">
  <strong class="text-3xl">Latest Posts</strong>
  <a class="text-gray-600 hover:text-gray-800 hover:underline" href="/blog">
    Read all posts
  </a>
</div>

<div class="mb-6">
  {#each posts as post}
    <Item {post} />
  {/each}
</div>
