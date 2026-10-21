import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () =>
	definePageMetaTags({
		title: 'Dainte',
		description: 'Painless testing for Svelte components'
	});
