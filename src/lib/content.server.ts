import { dev } from '$app/env';
import { CONTENT_DIR } from '#lib/content.js';

export type BlogMetadata = {
	title: string;
	description: string;
	createdDate: string;
	/** Root-relative path of the Open Graph image, e.g. `/maps-tileproxy.png`. */
	image?: string;
	/** Drafts are listed and built in dev only. */
	draft?: boolean;
};

export type BlogPost = {
	/** The post's URL path without the leading slash, e.g. `dainte/introducing`. */
	slug: string;
	title: string;
	description: string;
	createdDate: Date;
	image?: string;
};

// Importing a post's metadata bundles its whole component, so listings are
// only built in server loads: they run at prerender time and never reach the
// browser. A post's page loads its own component through `#lib/content.js`.
const metadata = import.meta.glob<BlogMetadata>('/src/lib/content/blog/**/*.svx', {
	eager: true,
	import: 'metadata'
});

function slugOf(path: string) {
	return path.slice(CONTENT_DIR.length).replace(/\.svx$/, '');
}

export function getBlogPosts(): BlogPost[] {
	const posts = Object.entries(metadata)
		.filter(([, meta]) => dev || !meta.draft)
		.map(([path, meta]) => ({
			slug: slugOf(path),
			title: meta.title,
			description: meta.description,
			createdDate: new Date(meta.createdDate),
			image: meta.image
		}));

	posts.sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());
	return posts;
}

export function getBlogPost(slug: string) {
	return getBlogPosts().find((post) => post.slug === slug) ?? null;
}
