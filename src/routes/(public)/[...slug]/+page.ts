import { getBlogPostComponent } from '#lib/content.js';

// The post's component can't be serialized, so it is imported here, on top of
// the metadata from `+page.server.ts`.
export const load = async ({ data }) => {
	const component = await getBlogPostComponent(data.blogPost.slug);

	return { ...data, component };
};
