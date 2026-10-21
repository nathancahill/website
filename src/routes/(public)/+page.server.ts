import { definePageMetaTags } from 'svelte-meta-tags';
import { getBlogPosts } from '#lib/content.server.js';

export const load = async ({ parent }) => {
	await parent();

	const pageMetaTags = definePageMetaTags({
		description: 'Web aesthete and open source aficionado.'
	});

	return { blogPosts: getBlogPosts(), ...pageMetaTags };
};
