<script lang="ts">
	import { page } from '$app/state';
	import RootLayout from './(public)/root-layout.svelte';

	let { data } = $props();

	let heading = $derived(page.status === 404 ? 'Page not found' : 'Something went wrong');
	let detail = $derived(
		page.status === 404
			? 'That page does not exist. The link may be wrong, or the page may have moved.'
			: (page.error?.message ?? 'The request could not be completed.')
	);
</script>

<svelte:head>
	<title>{page.status}</title>
</svelte:head>

<RootLayout {data}>
	<div class="markdown mx-auto max-w-2xl">
		<a href="/">Home</a>
		<h1>{page.status}</h1>
		<p>{heading}. {detail}</p>
	</div>
</RootLayout>
