import type { Component } from 'svelte';

export const CONTENT_DIR = '/src/lib/content/blog/';

const components = import.meta.glob<Component>('/src/lib/content/blog/**/*.svx', {
	import: 'default'
});

/** Loads one post's component, which builds to a chunk of its own. */
export function getBlogPostComponent(slug: string): Promise<Component> {
	return components[`${CONTENT_DIR}${slug}.svx`]();
}
