<script>
  export let segment;
</script>

<div class="border-b border-black flex flex-col pt-4 pb-2">
  <a class="inline-block font-display font-bold text-4xl self-start" href=".">Blog.</a>
  <nav class="flex justify-between mt-2">
    <ul class="flex">
      <li class="mr-4">
        <a
          class="text-gray-600 hover:text-gray-800 hover:underline"
          rel="prefetch"
          class:selected={segment === undefined}
          href=".">
          Home
        </a>
      </li>
      <li class="mr-4">
        <a
          class="text-gray-600 hover:text-gray-800 hover:underline"
          rel="prefetch"
          class:selected={segment === 'blog'}
          href="blog">
          Blog
        </a>
      </li>
      <li>
        <a
          class="text-gray-600 hover:text-gray-800 hover:underline"
          rel="prefetch"
          class:selected={segment === 'about'}
          href="about">
          About
        </a>
      </li>
    </ul>
    <ul class="flex">
      <li class="mr-4">
        <a
          class="text-gray-600 hover:text-gray-800 hover:underline"
          href="https://twitter.com">
          Twitter
        </a>
      </li>
      <li>
        <a
          class="text-gray-600 hover:text-gray-800 hover:underline"
          href="https://facebook.com">
          Facebook
        </a>
      </li>
    </ul>
  </nav>
</div>
