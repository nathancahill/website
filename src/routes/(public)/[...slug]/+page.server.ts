import { error } from '@sveltejs/kit';
import { definePageMetaTags } from 'svelte-meta-tags';
import { getBlogPost, getBlogPosts } from '#lib/content.server.js';
import { site } from '#lib/site.js';

// Posts live at the root (`/duo-cli`, `/dainte/introducing`), where they have
// been linked from for years, so the slug is a rest parameter.
export const load = async ({ params, parent }) => {
	await parent();

	const blogPost = getBlogPost(params.slug);

	if (blogPost === null) {
		throw error(404, 'Page not found');
	}

	const pageMetaTags = definePageMetaTags({
		title: blogPost.title,
		description: blogPost.description,
		openGraph: {
			type: 'article',
			title: blogPost.title,
			description: blogPost.description,
			...(blogPost.image ? { images: [{ url: `${site.url}${blogPost.image}` }] } : {})
		},
		twitter: {
			cardType: 'summary_large_image',
			creator: '@nathancahill'
		}
	});

	return { blogPost, ...pageMetaTags };
};

export const entries = async () => {
	return getBlogPosts().map((post) => ({ slug: post.slug }));
};
