<script>
  export let prevLink =null, nextLink =null
</script>

{#if prevLink || nextLink}
  <div class="flex justify-between border-t border-black py-4">
    {#if prevLink}
      <a
        rel="prefetch"
        href={prevLink}
        class="text-gray-600 hover:text-gray-900 hover:underline">
        Older
      </a>
    {/if}
    {#if nextLink}
      <a
        rel="prefetch"
        href={nextLink}
        class="ml-auto text-gray-600 hover:text-gray-900 hover:underline">
        Newer
      </a>
    {/if}
  </div>
{/if}