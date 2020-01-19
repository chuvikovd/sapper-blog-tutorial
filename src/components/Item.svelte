<script>
  import format from "date-fns/format";

  export let post;
</script>

<a class="block mt-6" href={`/blog/${post.slug}`} rel="prefetch">
  <h3
    class="font-medium text-2xl text-gray-700 hover:text-gray-900
    hover:underline">
    {post.title}
  </h3>
  <span class="text-gray-600">
    {format(new Date(post.created), 'MMMM d, yyyy')}
  </span>
  {@html post.excerpt}
</a>
