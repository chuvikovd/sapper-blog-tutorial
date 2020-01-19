<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1 class="mt-6 text-6xl font-bold">{status}</h1>

<p class="mb-6">{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
