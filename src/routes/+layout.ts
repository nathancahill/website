import { defineBaseMetaTags } from 'svelte-meta-tags';
import { site } from '#lib/site.js';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = ({ url }) => {
	// Built from `site.url`, not `url.origin`: during prerender the origin is
	// SvelteKit's placeholder host, which would end up in every canonical link.
	const canonical = new URL(url.pathname, site.url).href;

	const baseTags = defineBaseMetaTags({
		title: site.name,
		titleTemplate: '%s',
		description: '',
		canonical,
		openGraph: {
			type: 'website',
			url: canonical
		}
	});

	return {
		...baseTags
	};
};
