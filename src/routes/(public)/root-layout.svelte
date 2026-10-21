<script lang="ts">
	import type { Snippet } from 'svelte';

	// Layout data is passed through for anything a feature adds to the layout.
	let { children }: { children?: Snippet; data?: any } = $props();
</script>

<main class="mx-auto mt-16 w-full max-w-4xl px-4 md:px-8">
	{@render children?.()}
</main>
