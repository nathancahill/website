<script lang="ts">
	import '../app.css';

	import { site } from '#lib/site.js';

	import { page } from '$app/state';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
</script>

<svelte:head>
	<title>{site.name}</title>
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="alternate" type="application/rss+xml" title={site.name} href="/rss.xml" />
</svelte:head>

<MetaTags {...metaTags} />

{@render children?.()}
