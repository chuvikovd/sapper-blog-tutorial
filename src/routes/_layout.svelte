<script>
  import Nav from "../components/Nav.svelte";
  import Copyright from "../components/Copyright.svelte";

  export let segment;
</script>

<style global>
  @import "../css/style";
</style>

<div class="container max-w-5xl mx-auto">
  <Nav {segment} />
  <main>
    <slot />
  </main>
  <Copyright />
</div>
